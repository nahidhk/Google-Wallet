import requests

url = "https://script.google.com/macros/s/AKfycbzSqwwhAZdgZWJvj8dag1MRy9I5Ykbwzy01fyPz2nhrCVFbzpn3r5J_6dF8WFpePDSX/exec"

response = requests.get(url)

if response.status_code == 200:
    data = response.json() 
    print(data)  
else:
    print("Failed to fetch data. Status code:", response.status_code)
