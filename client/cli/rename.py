

import requests


def renameFile(accessToken,newName,OldName,hashkey):
    try:
        url='https://distributed-file-system-dfs.onrender.com/api/renameFile';
        header={
            'authorization':accessToken,
            'Content-Type':'application/json'
        }
        payload = {
            'newName':newName,
            'oldName':OldName,
            'hashkey':hashkey
        }
        res = requests.post(url=url,json=payload,headers=header)
        return res.json().get('message')
    except requests.RequestException as e:
        return f'Error: {e}'