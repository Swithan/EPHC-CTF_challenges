#!/usr/bin/python3
import sys

sys.stdout.flush()
user = 'user'
askPassword = False

while True:
    data= sys.stdin.readline().strip()
    sys.stdout.flush()
    if data == 'help':
        print('''
This is not a real bash. Here is a list of the commands you are allowed to do.

help -- Display this menu
ls [-l] -- List files in directory
cat [file] -- Display file content
su [user] -- Change user
quit -- Leave challenge
''')
    elif askPassword:
        askPassword = False
        if '+-isTraitor' == data:
            print('You are now admin')
            user = 'admin'
        else:
            print('su: Authentication failure')
    elif 'ls' == data:
        print('flag.txt creditentials.txt')
    elif 'ls -l' == data:
        print('r--r----- 1 admin admin flag.txt')
        print('rwxrw-r-- 1 admin admin creditentials.txt')
    elif 'cat flag.txt' == data:
        if user == 'admin':
            print('EPHC{Y0u_R3_pr1VilEdg3D}')
        else:
            print('cat flag.txt : Permission denied')
    elif 'cat creditentials.txt' == data:
        print('admin:+-isTraitor')    
    elif 'su' in data and ' admin' in data:
        askPassword = True
        print('Password :')
    elif 'quit' in data:
        break
    else:
        if '' != data:
            if 'su ' in data:
                print('su : User not found')
            elif 'ls ' in data:
                print('ls : You are not authorized to do that here')
            elif 'cat ' in data:
                print('cat : File not found')
            else:
                print('{} : Command not found'.format(data))
    sys.stdout.flush()