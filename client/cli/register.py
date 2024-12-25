
import requests


def register(email,password):
    url = 'http://localhost:3030/api/signup'
    payload={
        'email':email,
        'password':password
    }
    headers = {
        'Content-Type': 'application/json'
    }
    response = requests.post(url,json=payload,headers=headers)
    
    if response.status_code == 200:
        return "Registration Successfull.Please Login with your credentials"
    else:
        print("Login Failed:",response.status_code,response.text)
        return "Registration failed "+response.text
        