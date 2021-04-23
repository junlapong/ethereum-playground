// > loadScript("/eth/script/geth.js")
// > checkAllBalances()

function checkAllBalances() {
    var totalBal = 0;
    for (var acctNum in eth.accounts) {
        var acct = eth.accounts[acctNum];
        var acctBal = web3.fromWei(eth.getBalance(acct), "ether");
        totalBal += parseFloat(acctBal);
        console.log("  eth.accounts[" + acctNum + "]: \t" + acct + " \tbalance: " + acctBal + " ether");
    }
    console.log("  Total balance: " + totalBal + " ether");
};

// personal.unlockAccount(eth.coinbase, "P@ssw0rd")
// personal.unlockAccount(eth.accounts[1], "P@ssw0rd")

// eth.sendTransaction({from:eth.coinbase, to:eth.accounts[1], value: web3.toWei(0.05, "ether")})
// eth.sendTransaction({from:eth.accounts[1], to:eth.accounts[0], value: web3.toWei(0.05, "ether")})

// eth.getBalance(eth.coinbase)
// eth.getBalance(eth.accounts[1])
// web3.fromWei(eth.getBalance(eth.coinbase), "ether")

/** คำสั่งตรวจสอบ peer **/
// admin.peers

/** คำสั่งตรวจสอบจำนวน block **/
// eth.blockNumber

/** คำสั่ง miner **/
// miner.start(1)
// miner.start()
// miner.stop()

/** คำสั่งแสดงกระเป๋าทั้งหมดใน node นั้นๆ **/
// eth.accounts

/** คำสั่งสำหรับเช็คตังค์ในกระเป๋าแบบระบุตำแหน่ง array **/
// web3.fromWei(eth.getBalance(eth.accounts[0]), "ether")

// miner.setEtherbase(web3.eth.accounts[0])
// miner.setEtherbase("0x0cefe9098d6cdcdf5e74c3b29c3c8e33339c5e2e")

// at console of bootnode
// admin.nodeInfo.enode

// at console of node1 add peer of bootnode
// admin.addPeer("enode://xxx@<BOOTNODE_IP>:30303")
