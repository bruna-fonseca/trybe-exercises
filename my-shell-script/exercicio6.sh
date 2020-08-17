#!/bin/bash

DIR=$1

if [ -d $DIR ]
then 
   FILE=`ls -l $DIR | wc -l`
    echo "O argumento $DIR é um diretório e tem $FILE arquivos"
else
    echo "O argumento $DIR não é um diretório"
fi