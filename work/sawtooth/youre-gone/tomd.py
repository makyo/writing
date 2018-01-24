import json


with open('vis.json', 'r') as f:
    vis = json.load(f)

for item in vis:
    if 'dateChange' in item:
        print('### {}'.format(item['dateChange']))
    if 'file' in item:
        print('*{}* Lee sent you a file "{}"'.format(item['time'], item['file']))
    if 'message' in item:
        print('*{} Markus>* {}'.format(item['time'], item['message']))
    print('')
