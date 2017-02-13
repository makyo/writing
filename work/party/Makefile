.PHONY: all
all: concat
	pdflatex party.tex
	pdflatex party.tex

.PHONY: concat
concat:
	for in in ??-*.md; do \
		out=`echo $$in | sed -e 's/\.md/.tex/'`; \
		echo "$$in => $$out"; \
		pandoc -f markdown -t latex -o content/$$out $$in; \
	done
