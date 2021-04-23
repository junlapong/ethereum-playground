#!/bin/sh

geth --datadir "/eth/data/bootnode" --networkid 10 --port 30303 \
     --http --http.addr "0.0.0.0" --http.port 8545 \
	 --http.corsdomain "*" --http.api="db,eth,net,web3,personal" \
	 --allow-insecure-unlock \
	 --nodiscover
