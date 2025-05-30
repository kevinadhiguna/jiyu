import requests
import sys
from urllib.parse import urljoin
from datetime import datetime

def scan(targets, paths):
    print(f"Starting scan at {datetime.now()}")

    for target in targets:
        print(f"\nScanning {target}...")
        for path in paths:
            url = urljoin(target, path)
            try:
                # Send GET request with timeout
                response = requests.get(url, timeout=5)

                # Analyze status code
                if response.status_code == 200:
                    print(f"[OPEN] {url} (Status: {response.status_code})")
                    # Check for sensitive files (such as admin pages)
                    if "admin" in path.lower():
                        print(f"[WARNING] Exposed admin page at {url}")
                elif response.status_code == 404:
                    print(f"[CLOSED] {url} - (Status: {response.status_code})")
                elif response.status_code == 403:
                    print(f"[FORBIDDEN] {url} - Potential sensitive endpoint")
                
                # Check headers for security issues
                headers = response.headers
                if 'Server' in headers:
                    print(f"[INFO] Server header exposed: {headers['Server']}")
                if 'X-Powered-By' in headers:
                    print(f"[INFO] Tech stack exposed: {headers['X-Powered-By']}")
            
            except requests.RequestException as e:
                print(f"[ERROR] Failed to scan {url}: {e}")

    print(f"Scan completed at {datetime.now()}")
    
if __name__ == "__main__":
    # Replace these URLs with your target URLs
    targets = ["http://localhost", "http://example.com"]

    # This can be replaced with directory lists
    common_paths = [
        "/",
        "/admin",
        "/login",
        "/admin/login",
        "/config",
        "/.git",
        "/backup",
        "phpinfo.php",
    ]

    scan(targets, common_paths)
