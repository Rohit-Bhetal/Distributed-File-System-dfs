from alive_progress import alive_bar
import requests
import os


def downloadFile(accesskey,hashKey):
    try:
        url = 'http://localhost:3030/api/download'
        headers= {
            'authorization':accesskey,
            'Content-Type':'application/json'
        }
        payload = {
            'hashKey':hashKey
        }

        with alive_bar(1,title="Download Process Started") as bar:
            res = requests.post(url,headers=headers,json=payload,stream=True)
            bar()
            
        if res:
            filename=res.headers['Content-Disposition'].split('filename=')[1]
            root_dir = os.path.dirname(os.path.abspath(__file__))
            down_dfs = os.path.join(root_dir,'download_dfs')
            os.makedirs(down_dfs,exist_ok=True)
            file_path = os.path.join(down_dfs,filename[1:-1])
            with open(file_path,'wb') as file:
                file.write(res.content)
            print(f"File saved to: {file_path} \tsize:{res.headers['Content-Length']}")
        else:
            raise Exception(f'Error:{res}')
        
    except requests.RequestException as e:
        print(f"error:{e}")
