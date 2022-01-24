#!/usr/bin/python3
import sys

user = 'user'
askPassword = False

while True:
    data= sys.stdin.readline().strip()
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
        print('-r--r---- 1 admin admin flag.txt')
        print('--------- 1 admin admin creditentials.txt')
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
        sys.stdout.flush()
        break
    else:
        if '' != data:
            print('{} : Permission denied'.format(data))