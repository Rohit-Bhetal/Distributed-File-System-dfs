import cmd
import os
from cli import display_banner,display_intro,login,register,uploadFile,viewFiles,fileChecker,downloadFile,renameFile,deleteFile
from termcolor import colored
from datetime import datetime


class DFSCLI(cmd.Cmd):
    intro = "Type 'help' or '?' to list commands. \n"
    prompt = 'DFS🥸>>>'
    
    def __init__(self):
        super().__init__() 
        #Banners for different designs
        display_banner()
        display_intro()
        #Access Token Provide by the Express Server
        self.access_token = None

    
    def do_upload(self,arg):
        'Upload File from DFS Database'
        if self.access_token:
            res=uploadFile(self.access_token)
            print(res)
        else:
            print(colored('Please Login..','light_cyan',attrs=['bold']))
        print('\n\n')
            
    def do_delete(self,arg):
        'Delte File from DFS Database'
        if self.access_token:
            self.do_view('')
            hashKey =  input(colored('Please input the hashkey for the file You want to delete: ','light_cyan',attrs=['bold'])).strip()
            res=deleteFile(accessKey=self.access_token,hashKey=hashKey)
            print(colored(res,attrs=['bold']))
            
    def do_rename(self,arg):
        'Rename File from DFS Database'
        if self.access_token:
            self.do_view('')
            fileName = str(input(colored('Please Select the File You want to rename(type name with ext): ','light_cyan',attrs=['bold']))).strip()
            newfileName = str(input(colored('Select the New Name You want to rename(type name with ext): ','light_cyan',attrs=['bold']))).strip()
            hashKey =  input(colored('Please input the hashkey for the file: ','light_cyan',attrs=['bold'])).strip()
            res = renameFile(accessToken=self.access_token,newName=newfileName,OldName=fileName,hashkey=hashKey)
            print(colored(res,'light_cyan',attrs=['bold']))
            
            
    def do_download(self,arg):
        'Download File from DFS'
        if self.access_token:
            self.do_view('')
            input_file=input(colored('Please Select the File You want to Download: ','light_cyan',attrs=['bold']))
            #Its a express function for checking whether file exist if it dont we will stop show the error
            ifExist = fileChecker(input_file,accessToken=self.access_token)
            if ifExist:
                hashKey = input(colored('Please Input the hashkey for the File: ','green')).strip()
                print(hashKey)
                downloadFile(accesskey=self.access_token,hashKey=hashKey)
            else:
                print(colored('File Doesn\'t exist','red',attrs=['bold']))
        else:
            print(colored('Please Login..','light_cyan',attrs=['bold']))
        print('\n\n')
            
            
    def do_view(self,arg):
        'View the Files in DFS Database'
        if self.access_token:
            res = viewFiles(self.access_token)
            if res and res.status_code==200:
                data = res.json()
                if data:
                    print(colored('Filename','green',attrs=['bold'])+'\t\t'+colored('CreatedAt','green',attrs=['bold']))
                    for items in data['allUserFiles']:
                        dat=items['createdAt'].split('T')
                        dat[1]=dat[1].split('.')[0]
                        print(colored(f"{items['filename']}",'white',attrs=['bold'])+'\t\t'+colored(f"{' '.join(dat)}",'white',attrs=['bold'])+'\n')
                    print('\n\n')
                    print(colored(f"User :{data['user']}",'green',attrs=['bold'])+'\n')
                    print('\n\n')
                    return 
                
            elif res.status_code==204:
                print(colored('No File Has Been Uploaded, Upload Your First File at Upload Section😁','red',attrs=['bold']))
                print('\n\n')
                return
            elif res.status_code==500:
                print(colored(f"Error In the Server: {data['error']}",'red',attrs=['bold']))
                print('\n\n')
                return
            else:
                print(colored(f"No Response from Server",'red',attrs=['bold']))
                print('\n\n')
                return
        else:
            print(colored('Please Login..','light_cyan',attrs=['bold']))
            print('\n\n')
            return
    def do_login(self,args):
        'Sign in DFS'
        if self.access_token:
            print(colored('You are already logged In!!','light_cyan',attrs=['bold']))
            return
        
        print(colored('Enter the Email and Password for Login:','light_cyan',attrs=['bold']))
        email = input(colored('Enter your Email:','light_cyan',attrs=['bold']))
        password = input(colored('Enter your Password:','light_cyan',attrs=['bold']))
        self.access_token = login(email=email,password=password)
        print('\n\n')
        
        
        
    def do_signup(self,arg):
        'Sign up in DFS'
        
        print(colored('Enter the Email and Password for signup:','light_cyan',attrs=['bold']))
        email = input("Enter your Email:")
        password = input("Enter your Password:")
        repassword = input("Confirm your Password:")
        if password!=repassword:
            return KeyError('Not Correct Password')
        response = register(email,password)
        print(response)
        print('\n\n')
        
        
    def do_exit(self,arg):
        'Exit the DFS'
        self.access_token=None
        print(colored('Thank You for Using DFS system😘😘','light_cyan',attrs=['bold']))
        print('\n\n')
        os._exit(status=0)
        
        

if __name__=="__main__":
    DFSCLI().cmdloop()   