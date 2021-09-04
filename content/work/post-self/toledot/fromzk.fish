for i in (fd '0.*' ~/sparkleup/zk/writing/post-self/toledot/)
     set o (echo $i | sed -e 's/.\+toledot\///')
     set d (echo $o | sed -e 's/[0-9]\+.md//')
     set t (echo $o | sed -e 's/\.md/.tex/')
     echo "$o $d"
     if not test -d src/$d
         mkdir -p src/$d
     end
     if not test -d content/$d
         mkdir -p content/$d
     end
     cp $i src/$o
    pandoc -f markdown -t latex src/$o --wrap=none --top-level-division=chapter | sed -e 's/\\chapter/\\chapter*/' | sed -e 's/---/—/g' > content/$t; \
 end
