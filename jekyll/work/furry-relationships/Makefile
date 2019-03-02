.PHONY: build
build:
	pdflatex in-love-with-furry.tex
	pdflatex in-love-with-furry.tex

.PHONY: wordcount
wordcount:
	@python ../../nanowrimo/tabulate-wc.py \
		`NANOWRIMODIR=content NANOWRIMOGOAL=50000 sh ../../nanowrimo/nanowc` \
		wordcount.csv && tail -n 1 wordcount.csv
