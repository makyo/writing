#!/usr/bin/python

import sys
import re


# Usage
if len(sys.argv) != 2:
    print('Jekyll-aware prose wordcount.\n')
    print('Usage:\n')
    print('  {} <filename>\n'.format(sys.argv[0]))
    print('If <filename> is -, input will be read from STDIN.')
    print('Supported formats: md, md (jekyll), txt')
    sys.exit(0)

# Retrieve the contents of the file
if sys.argv[1] == '-':
    contents = sys.stdin.read()
    sys.argv[1] = '_stdin_'
else:
    with open(sys.argv[1], 'r') as f:
        contents = f.read()

# If it's Jekyll, strip frontmatter
if contents[:3] == '---':
    fmt = '(jekyll)'
    body = contents.split('---', 2)[2].strip()
else:
    fmt = '(md/txt)'
    body = contents.strip()

# Strip the body down to just words
words = re.sub('\n', ' ', body)
words = re.sub('\s+', ' ', words)
words = re.sub('[^\w\s]', '', words)

# Retrieve only non-space characters
real_characters = re.sub('\s', '', words)

# Print results as YAML
print('prose_wc:\n  file: "{}"\n  type: {}\n  paragraphs: {}\n  words: {}\n'
      '  characters_real: {}\n  characters_total: {}'.format(
          sys.argv[1], fmt,
          len(body.split('\n\n')),
          len(words.split(' ')),
          len(real_characters),
          len(words),
      ))

# TODO:
# * Use argparse
# * Add -u flag to update jekyll files in place, putting results in frontmatter
# * Remove extra markdown such as images, link urls, etc.
# * Test
# * Package
