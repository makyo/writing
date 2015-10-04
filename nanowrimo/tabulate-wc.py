import csv
import datetime
import sys

if len(sys.argv) != 3:
    print '''
        Usage:

        python {} <wordcount> <data file>
        '''
    sys.exit(1)

wordcount = sys.argv[1]
if '/' in wordcount:
    wordcount = wordcount.split('/')[0]

day = datetime.date.today().isoformat()

records = []

with open(sys.argv[2], 'rb') as f:
    reader = csv.reader(f)
    found = False
    for row in reader:
        if row[0] == day:
            row[1] = wordcount
            found = True
        records.append(row)
    if not found:
        records.append([day, wordcount])

with open(sys.argv[2], 'wb') as f:
    writer = csv.writer(f)
    for record in records:
        writer.writerow(record)
