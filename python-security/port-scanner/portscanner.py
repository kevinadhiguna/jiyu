import socket

def scan_port(target, port):
    """
    Scan a single port on the target host
    """
    try:
        # Create a TCP socket
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1) # 1 second timeout for faster scanning
        result = sock.connect_ex((target, port))

        if result == 0:
            print(f"[+] Port {port} is OPEN")
            open_ports.append(port)
        # Uncomment for verbose output of closed ports
        # else:
        #     print(f"[-] Port {port} is CLOSED")
        sock.close()
    except socket.gaierror:
        print(f"Error: Could not resolve hostname {target}")
        sys.exit(1)
    except socket.error as e:
        print(f"Error scanning port {port}: {e}")
