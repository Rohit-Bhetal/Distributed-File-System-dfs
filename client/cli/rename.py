

import requests


def renameFile(accessToken,newName,OldName,hashkey):
    try:
        url='http://localhost:3030/api/renameFile';
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