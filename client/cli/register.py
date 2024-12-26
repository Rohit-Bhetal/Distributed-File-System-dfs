
import requests


def register(email,password):
    url = 'https://distributed-file-system-dfs.onrender.com/api/signup'
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
        