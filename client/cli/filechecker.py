import requests


def fileChecker(fileName,accessToken):
    fileName=str(fileName).strip()
    try:
        url = 'http://localhost:3030/api/findFile'
        payload={
            'searchFile':fileName
        }
        headers = {
            'authorization':accessToken,
            'Content-Type':'application/json'
        }
        res = requests.get(url,json=payload,headers=headers)
        if res.status_code==200:
            response = res.json().get('success')
            if response == 'True':
                return True
            else:
                return False
        return False
        
    except requests.RequestException as e:
        print(e)
        print("Error Occured in the Internal Server")