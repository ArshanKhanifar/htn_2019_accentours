import requests

response = requests.get("http://accentour-final-silver.uedpnpkwfs.us-east-2.elasticbeanstalk.com/get_all_tours")

universities = {}


for d in response.json():
    universities[d["UniversityName"]] = True

for u in universities: 
    print(u)
