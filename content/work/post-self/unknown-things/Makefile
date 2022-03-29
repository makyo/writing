CONTENT := $(shell find ~/sparkleup/zk/writing/3/unknown-things/ | grep -v mfa | grep md)
MFA := $(shell find ~/sparkleup/zk/writing/3/unknown-things/mfa | grep md)

.PHONY: all
all:
	xelatex unknown-things.tex
	xelatex unknown-things.tex
	xelatex mfa.tex
	xelatex mfa.tex

.PHONY: content
content: $(CONTENT) $(MFA)
	for i in $(CONTENT); do \
		output=`basename $$i`; \
		pandoc $$i -o `echo content/$$output | sed -e 's/md$$/tex/'` --wrap=none; \
	done
	for i in $(MFA); do \
		output=`basename $$i`; \
		pandoc $$i -o `echo content/mfa/$$output | sed -e 's/md$$/tex/'` --wrap=none; \
	done
