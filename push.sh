#!/bin/bash
git add .
echo "commit: "
read a 
git commit -m $a 
echo "branch: "
read b
git push origin $b
