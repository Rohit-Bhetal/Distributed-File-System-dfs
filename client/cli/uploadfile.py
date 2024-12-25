from console_explorer import browse_for_file

from .chunker import chunking

def uploadFile(args):
    selected_file = browse_for_file(existence_required=True,cancel_enabled=True)
    return chunking(selected_file,args)