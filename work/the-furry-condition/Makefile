.PHONY: build
build:
	pdflatex the-furry-condition.tex
	pdflatex the-furry-condition.tex

.PHONY: wordcount
wordcount:
	@python ../../nanowrimo/tabulate-wc.py \
		`NANOWRIMODIR=content NANOWRIMOGOAL=50000 sh ../../nanowrimo/nanowc` \
		wordcount.csv && tail -n 1 wordcount.csv
