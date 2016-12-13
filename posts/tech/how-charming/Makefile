.PHONY: diagrams
diagrams:
	for i in `ls *.dot` ; do \
		dot -Tsvg $$i | sed -e "1,3d" > ../../../_includes/tech/how-charming/$$i.svg ; \
	done
