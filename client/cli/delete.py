

import requests


def deleteFile(accessKey,hashKey):
    try:
        url='https://distributed-file-system-dfs.onrender.com/api/deleteFile'
        payload = {
            'hashKey':hashKey
        }
        header={
            'Content-Type':'application/json',
            'authorization':accessKey
        }
        res = requests.delete(url=url,json=payload,headers=header)
        if res.status_code==200:
            return res.json().get('message')
        else:
            return res.json()
    except:
        return "Error in Internal Server"