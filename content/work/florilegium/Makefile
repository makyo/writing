@PHONY: once
once: once-book once-seasons once-unknown-things

@PHONY: full
full: full-book full-seasons full-unknown-things

@PHONY: once-seasons
once-seasons:
	xelatex seasons.tex

@PHONY: full-seasons
full-seasons:
	xelatex seasons.tex
	biber seasons
	xelatex seasons.tex
	xelatex seasons.tex

@PHONY: once-unknown-things
once-unknown-things:
	xelatex unknown-things.tex

@PHONY: full-unknown-things
full-unknown-things:
	xelatex unknown-things.tex
	biber unknown-things
	xelatex unknown-things.tex
	xelatex unknown-things.tex

@PHONY: once-book
once-book:
	xelatex book.tex

@PHONY: full-book
full-book:
	xelatex book.tex
	biber book
	xelatex book.tex
	xelatex book.tex
