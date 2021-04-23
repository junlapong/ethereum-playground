#!/bin/sh

geth --datadir "/eth/data/bootnode" init "/eth/config/genesis.json"
echo echo "✅ Done"
