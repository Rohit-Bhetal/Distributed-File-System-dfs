import requests

def viewFiles(accessToken):
    try:
        url = 'https://distributed-file-system-dfs.onrender.com/api/getAll'
        
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