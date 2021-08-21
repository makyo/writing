for i in (fd '0.*' ~/sparkleup/zk/writing/post-self/qoheleth/)
     set o (echo $i | sed -e 's/.\+qoheleth\///')
     echo "$o"
     head -n 1 $i | sed -e 's/%title /# /' > src/$o
     tail -n +3 $i >> src/$o
 end
