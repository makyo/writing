.PHONY: all
all:
	pdflatex party.tex
	pdflatex party.tex
	cd individual; \
	for i in `ls *.tex`; do \
		pdflatex $$i; \
	done
