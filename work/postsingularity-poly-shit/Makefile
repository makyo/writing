.PHONY: build
build:
	pdflatex file.tex
	pdflatex file.tex

.PHONY: wordcount
wordcount:
	@python ../../nanowrimo/tabulate-wc.py \
		`NANOWRIMODIR=content NANOWRIMOGOAL=50000 sh ../../nanowrimo/nanowc` \
		wordcount.csv && tail -n 1 wordcount.csv
