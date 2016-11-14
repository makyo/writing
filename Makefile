.PHONY: run
run: clean
	jekyll build
	$(MAKE) -j2 run-jekyll watch-wordcounts

.PHONY: run-jekyll
run-jekyll:
	jekyll serve -w -I

.PHONY: clean
clean:
	rm -rf _site
