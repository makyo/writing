CONTENT := $(shell find ~/sparkleup/zk/writing/3/unknown-things/ | grep md)

.PHONY: all
all:
	xelatex unknown-things.tex
	xelatex unknown-things.tex

.PHONY: content
content: $(CONTENT)
	echo $(CONTENT)
	for i in $(CONTENT); do \
		output=`basename $$i`; \
		pandoc $$i -o `echo content/$$output | sed -e 's/md$$/tex/'` --wrap=none; \
	done
