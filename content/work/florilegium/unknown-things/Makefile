@PHONY: once
once:
	xelatex unknown-things.tex

@PHONY: full
full:
	xelatex unknown-things.tex
	biber unknown-things
	xelatex unknown-things.tex
	xelatex unknown-things.tex

.PHONY: web
web:
	pandoc --citeproc --bibliography unknown-things.bib --wrap none -t markdown-citations unknown-things.tex 

.PHONY: content
content:
	pandoc ~/sparkleup/zk/writing/3/unknown-things/iyov/1-framing-devices.md -o 1-framing-devices.tex --wrap none
