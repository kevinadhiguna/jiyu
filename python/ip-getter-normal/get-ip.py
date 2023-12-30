# Without 'python-dotenv'
import requests

url = 'https://httpbin.org/ip'
response = requests.get(url)

print('Your IP address is {0}'.format(response.json()['origin']))
# Your IP address is 171.67.133.77
