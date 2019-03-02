.PHONY: build
build:
	pdflatex trans-furry.tex
	pdflatex trans-furry.tex
	pandoc trans-furry.tex -o trans-furry.odt

.PHONY: wordcount
wordcount:
	@python ../../nanowrimo/tabulate-wc.py \
		`NANOWRIMODIR=content NANOWRIMOGOAL=50000 sh ../../nanowrimo/nanowc` \
		wordcount.csv && tail -n 1 wordcount.csv
