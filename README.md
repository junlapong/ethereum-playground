# Ethereum Playground

Goto https://labs.play-with-docker.com

```sh
git clone https://github.com/junlapong/ethereum-playground
cd ethereum-playground
```

```sh
docker-compose up -d bootnode
docker-compose logs -f bootnode
```

```sh
# docker exec -it bootnode sh
# docker exec -it bootnode /eth/init.sh

docker exec -it bootnode /eth/start.sh
docker exec -it bootnode /eth/console.sh
```

```
> loadScript("/eth/script/geth.js")
> checkAllBalances()
```

See `script/geth.js`

## References

- https://geth.ethereum.org/docs/interface/private-network
