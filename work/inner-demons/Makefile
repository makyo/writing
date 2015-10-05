.PHONY: build
build:
	pdflatex inner-demons.tex
	pdflatex inner-demons.tex
	$(MAKE) wordcount

.PHONY: wordcount
wordcount:
	@python ../../nanowrimo/tabulate-wc.py \
		`NANOWRIMODIR=content NANOWRIMOGOAL=50000 sh ../../nanowrimo/nanowc` \
		wordcount.csv && tail -n 1 wordcount.csv
