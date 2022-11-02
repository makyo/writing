for i in (fd '0.*' ~/sparkleup/zk/writing/post-self/mitzvot/)
     set o (echo $i | sed -e 's/.\+mitzvot\///')
     set d (echo $o | sed -e 's/[0-9x]\+.md//')
     set t (echo $o | sed -e 's/\.md/.tex/')
     echo "$o $d"
     if not test -d src/$d
         mkdir -p src/$d
     end
     if not test -d content/$d
         mkdir -p content/$d
     end
     cp $i src/$o
     #pandoc -f markdown -t latex src/$o --wrap=none --top-level-division=chapter | sed -e 's/\\chapter/\\chapter*/' | sed -e 's/---/—/g' > content/$t; \
 end
for i in (fd '0.*' ~/sparkleup/zk/writing/post-self/selected-letters/)
     set o (echo $i | sed -e 's/.\+selected-letters\///')
     set d (echo $o | sed -e 's/[0-9x]\+.md//')
     set t (echo $o | sed -e 's/\.md/.tex/')
     echo "$o $d"
     if not test -d src/letters/$d
         mkdir -p src/letters$d
     end
     if not test -d content/letters/$d
         mkdir -p content/letters/$d
     end
     cp $i src/$o
    pandoc -f markdown -t latex src/$o --wrap=none --top-level-division=section | sed -e 's/\\section/\\section*/' | sed -e 's/---/—/g' > content/letters/$t; \
 end
