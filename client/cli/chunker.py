
import requests

import os
import time
from alive_progress import alive_bar
from termcolor import colored


def chunking(selected_file,args):
    nums_chunk=2
    filesColl=[]
    file_size = os.path.getsize(selected_file)
    file_name = os.path.basename(selected_file).split('/')[-1]
    print(colored('Chunking of Files starts...','light_cyan',attrs=['bold']))
    with alive_bar(nums_chunk,title='ChunKing') as bar:
        with open(selected_file,'rb') as f:
            for _  in range(nums_chunk):
                chunk = f.read(file_size//nums_chunk)
                time.sleep(0.1)
                bar()
                filesColl.append(chunk)
    return uploadApi(filesColl,args,file_name)

def uploadApi(files,token,file_name):
    try:
        url = 'https://distributed-file-system-dfs.onrender.com/api/upload'
        payload = {
                'filename': file_name
                }
        files_payload = {
            'file1': ('chunk1', files[0], 'application/octet-stream'),
            'file2': ('chunk2', files[1], 'application/octet-stream')
        }
        headers = {
        'authorization':token
        }
        print(colored('Uploading files starts...','light_cyan',attrs=['bold']))
        with alive_bar(1,title='Uploading') as bar:
            resp=requests.post(url=url,data=payload,files=files_payload,headers=headers)
            bar()
        
        return f"Files Uploaded Successfully \nSave the key properly to access the file: {str(resp.json().get('accessKey'))}" if resp.status_code ==200 else resp.json()
    
    except requests.RequestException as e:
        return f"An error occurred during upload: {str(e)}"