const Transaction = require('../wallet/transaction');
class TransactionMiner {
    constructor({ blockchain, transactionPool, wallet, pubsub }){
        this.blockchain = blockchain; 
        this.transactionPool = transactionPool;
        this.wallet = wallet; 
        this.pubsub = pubsub; 
    }
    mineTransactions() {
        const validTransactions = this.transactionPool.validTransactions(); 
        //get the transaction pool's valid transactions

        //generate the miner's reward
        validTransactions.push(
            Transaction.rewardTransaction({minerWallet:this.wallet})
        );

        this.blockchain.addBlock({ data: validTransactions});

        //broadcast the updated blockchain

        this.pubsub.broadcastChain(); 


        //add a block consisting of these transactions to the blockchain

        this.transactionPool.clear();

        //clear the pool

    }
}

module.exports = TransactionMiner;