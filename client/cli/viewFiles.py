import requests

def viewFiles(accessToken):
    try:
        url = 'http://localhost:3030/api/getAll'
        
        header={
            'authorization':accessToken,
            'Content-Type':'application/json'
        }
        res = requests.get(url,headers=header)
        if res:
            return res
        return None

    except requests.RequestException as e:
        print(e)