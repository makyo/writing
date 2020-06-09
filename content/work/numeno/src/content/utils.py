def block(text, fontsize, lineheight, v, h, r):
    print('%%\n'.join((r'\begin{textblock*}{\paperwidth}[0.5,0.5](%0.4f\paperwidth,%0.4f\paperwidth)',
        r'\begin{center}',
        r'\rotatebox[origin=c]{-%0.4f}{{\fontsize{%0.4f\paperwidth}{%0.4f\paperwidth}\selectfont{}%s}}',
        r'\end{center}',
        r'\end{textblock*}')) % (h, v, r, fontsize, fontsize * lineheight, text))

def clearpage():
    print('\\mbox{}\\clearpage\n')
def newpage():
    print('\\newpage\n')

def begin():
    print(r'''
\documentclass[11pt]{memoir}
\usepackage[absolute, overlay]{textpos}
\usepackage{graphicx}
\usepackage[
    paperwidth=8.5in,
    paperheight=8.5in,
    layoutwidth=8.5in,
    layoutheight=8.5in,
    includeheadfoot,
    twoside
]{geometry}
\begin{document}
    '''.strip())

def end():
    print(r'\end{document}')
