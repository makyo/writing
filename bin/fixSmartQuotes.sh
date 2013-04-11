#!/bin/bash

cat $1 | sed -e 's/[“”]/"/g' | sed -e "s/[‘’]/'/g" | sed -e 's/…/.../g' > $1.bak && mv $1.bak $1
