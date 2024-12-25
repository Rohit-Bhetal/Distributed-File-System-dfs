import pyfiglet
from termcolor import colored


#Create the intro part Banner
def display_banner():
    banner = pyfiglet.figlet_format("DFS CLI")
    print(colored(banner,'light_cyan'))

def display_intro():
    text = "Welcome to the DFS CLI for secure and faster file saving"
    print(colored(text,'light_cyan',attrs=['bold']))