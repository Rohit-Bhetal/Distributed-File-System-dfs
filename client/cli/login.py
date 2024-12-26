import requests


def login(email,password):
    url = 'https://distributed-file-system-dfs.onrender.com/api/login'
    payload={
        'email':email,
        'password':password
    }
    headers = {
        'Content-Type': 'application/json'
    }
    response = requests.post(url,json=payload,headers=headers)
    
    if response.status_code == 200:
        print('logged In..')
        access_token = response.json().get('token')
        if access_token:
            return access_token
        else:
            return None
    else:
        print("Login Failed:",response.status_code,response.text)
        return None
        