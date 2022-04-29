@PHONY: once
once:
	xelatex seasons.tex

@PHONY: full
full:
	xelatex seasons.tex
	biber seasons
	xelatex seasons.tex
	xelatex seasons.tex

.PHONY: web
web:
	pandoc --citeproc --bibliography seasons.bib --wrap none -t markdown-citations seasons.tex 
