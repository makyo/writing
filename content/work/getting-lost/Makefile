.PHONY: build
build:
	pdflatex getting-lost.tex
	pdflatex getting-lost.tex
	# pdflatex first-glimpse.tex
	# pdflatex first-glimpse.tex
	$(MAKE) wordcount

.PHONY: wordcount
wordcount:
	@python ../../nanowrimo/tabulate-wc.py \
		`NANOWRIMODIR=content NANOWRIMOGOAL=50000 sh ../../nanowrimo/nanowc` \
		wordcount.csv && tail -n 1 wordcount.csv
