@PHONY: once
once: once-florilegium once-seasons once-unknown-things

@PHONY: full
full: full-florilegium full-seasons full-unknown-things

@PHONY: once-seasons
once-seasons:
	xelatex seasons.tex

@PHONY: full-seasons
full-seasons:
	xelatex seasons.tex
	biber seasons
	xelatex seasons.tex
	xelatex seasons.tex
	pandoc --citeproc --bibliography florilegium.bib --wrap none --reference-doc ../mfa/content.ott -o seasons.odt seasons.tex

@PHONY: once-unknown-things
once-unknown-things:
	xelatex unknown-things.tex

@PHONY: full-unknown-things
full-unknown-things:
	xelatex unknown-things.tex
	biber unknown-things
	xelatex unknown-things.tex
	xelatex unknown-things.tex
	pandoc --citeproc --bibliography florilegium.bib --wrap none --reference-doc ../mfa/content.ott -o unknown-things.odt unknown-things.tex

@PHONY: once-florilegium
once-florilegium:
	xelatex florilegium.tex
	
@PHONY: content
content:
	cp ~/sparkleup/zk/writing/3/unknown-things/iyov/*.tex unknown-things/

@PHONY: full-florilegium
full-florilegium: content
	xelatex florilegium.tex
	biber florilegium
	xelatex florilegium.tex
	xelatex florilegium.tex
	pandoc --citeproc --bibliography florilegium.bib --wrap none --reference-doc ../mfa/content.ott -o florilegium.odt florilegium.tex

@PHONY: clean
clean:
	-rm *.bbl *.bcf *.blg *.log *.out *.run.xml *.aux
	-rm */*.bbl */*.bcf */*.blg */*.log */*.out */*.run.xml */*.aux
