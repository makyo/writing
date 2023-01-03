.PHONY: help
help: ## This help.
	@# This is ugly as hell and I hate awk
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.PHONY: final
final: reset toc ## full document of the book for final print

.PHONY: proof
proof: engage-letter engage-frame engage-draft toc reset ## full proof document of the book with frames and watermark

.PHONY: draft
draft: engage-draft toc reset ## draft document of thebook with watermark

.PHONY: plain
plain: ## full document of the book with no proofing marks
	xelatex book.tex

.PHONY: toc
toc: plain ## full book with ToC re-rendering in case of page changes
	xelatex book.tex

.PHONY: ebook
ebook: ## render ePub file from LaTeX
	pandoc Ebook.tex -o ../ebooks/book.epub -t epub3 --wrap=none

.PHONY: frame
engage-frame: ## turn on frame marking
	cp includes/_frame.tex includes/frame.tex

.PHONY: engage-letter
engage-letter: ## force letter paper
	echo '\input{includes/_geometry-letter.tex}' > includes/geometry.tex

.PHONY: draft
engage-draft: ## turn on draft watermark
	cp includes/_draft.tex includes/draft.tex

.PHONY: reset
reset: ## reset frame marking, draft watermark, and letter paper
	echo '%' > includes/draft.tex
	echo '%' > includes/frame.tex
	echo '\input{includes/_geometry-trade.tex}' > includes/geometry.tex

.PHONY: images
images:
	pdftk BOOK=book.pdf A=assets/7.pdf B=assets/3.pdf C=assets/8.pdf D=assets/6.pdf \
		E=assets/5.pdf F=assets/10.pdf G=assets/4.pdf H=assets/9.pdf I=assets/11.pdf cat \
		BOOK1-9 A \
		BOOK11-35 B \
		BOOK37-63 C \
		BOOK65-91 D \
		BOOK93-123 E \
		BOOK125-139 F \
		BOOK141-163 G \
		BOOK164-171 H \
		BOOK173-199 I \
		output with-illustrations.pdf

.PHONY: content
content: ## build the markdown content into LaTeX
	false
	for in in src/content/*.md; do \
		out=`echo $$in | sed -e 's/\.md/.tex/' | sed -e 's/.*\///'`; \
		echo "$$in => $$out"; \
		pandoc -f markdown -t latex -o content/$$out $$in --wrap=none --top-level-division=chapter; \
	done
