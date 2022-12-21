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

.PHONY: fate
fate: engage-draft
	xelatex fate.tex
	xelatex fate.tex

.PHONY: bleed-images
bleed-images: ## Swap in the full-bleed images for the printers
	pdftk BOOK=book.pdf SMUG=assets/johnny--smug-1--dear--G.pdf \
		TEA=assets/cadmiumtea--tea--awdae--G.pdf \
		PRISCA=assets/cadmiumtea--prisca--awdae--G.pdf \
		cat BOOK1-52 SMUG BOOK54-246 PRISCA BOOK248-274 TEA BOOK276-end \
		output with-illustrations.pdf

.PHONY: plain
plain: ## full document of the book with no proofing marks
	xelatex book.tex

.PHONY: toc
toc: plain ## full book with ToC re-rendering in case of page changes
	xelatex book.tex

.PHONY: ebook
ebook: ## render ePub file from LaTeX
	pandoc book.tex -o ebooks/book.epub -t epub3 --wrap=none

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

.PHONY: content
content: ## build the markdown content into LaTeX
	@echo "Are you sure you want to do this now?"
	@echo "Remove the 'false' below to procede"
	#false
	fish fromzk.fish
	for in in src/*/*.md; do \
		out=`echo $$in | sed -e 's/\.md/.tex/' | sed -e 's/src\//content\//'`; \
		echo "$$in => $$out"; \
		pandoc -f markdown -t latex $$in --wrap=none --top-level-division=chapter | sed -e 's/\\chapter/\\chapter*/' | sed -e 's/---/—/g' > $$out; \
	done
