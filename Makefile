.PHONY: run
run: clean
	jekyll build
	$(MAKE) -j2 run-jekyll watch-wordcounts

.PHONY: run-jekyll
run-jekyll:
	jekyll serve -w -I

.PHONY: watch-wordcounts
watch-wordcounts:
	watch -n 30 "for i in `git status --porcelain | perl -ple 's/^\s?\S+ //g'`; do prose-wc -u \$i; done"

.PHONY: clean
clean:
	rm -rf _site
