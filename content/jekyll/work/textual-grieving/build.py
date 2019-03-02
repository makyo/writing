import datetime


# Constants
names = {
    'mk': 'Michael K.',
    'jm': 'Jace Macallan',
}
start_date = datetime.date(2015, 11, 10)


# Given an integer, get the date that many days from the start
def day_from_message(day):
    delta = datetime.timedelta(days=int(day))
    message_date = start_date + delta
    return '{}/{}/{}'.format(
        message_date.month,
        message_date.day,
        message_date.strftime('%y'))


# Read the log from the source file
source = []
with open('source.md', 'r') as f:
    reading = False
    for line in f:
        if line == '---|---|---\n':
            reading = not reading
            continue
        if reading:
            source.append(line)

# Split the lines of the log into parts and build HTML for each line
# TODO figure out a way to get rowspans for names/dates
prev_name = ''
prev_day = ''
code = ''
for line in source:
    name, text, day = line.split(' | ')
    code += '<tr class="message-{}"><td>{}</td><td>{}</td><td>{}</td></tr>\n'.format(
        name,
        '' if name == prev_name else names[name],
        text,
        day_from_message(day))
    prev_name = name

# Read the destination file minus any existing chat log contents
dest = []
with open('index.md', 'r') as f:
    reading = True
    for line in f:
        if line == '</table>\n':
            dest.append(code)
            reading = True
        if reading:
            dest.append(line)
        if line == '<table class="chat">\n':
            reading = False

# Write the destination file back to where it came from with the chat log
with open('index.md', 'w') as f:
    f.write(''.join(dest))
