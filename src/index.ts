import {SHA256} from 'crypto-js';
import {lintCode, paint, paintStatusOfValidBlockchain} from "./utils";

interface IBlockArguments {
    index: number;
    timestamp: string;
    data: {
        amount: number;
    };
    previousHash: string;
}

export interface IBlock extends IBlockArguments {
    hash: string;
    calculateHash: () => string
}

class Block {
    index: IBlock["index"];
    timestamp: IBlock["timestamp"];
    data: IBlock["data"];
    previousHash: IBlock["previousHash"];
    hash: IBlock["hash"];

    constructor(index: IBlock["index"], timestamp: IBlock["timestamp"], data: IBlock["data"], previousHash: IBlock["previousHash"]) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(): string {
        return SHA256(`${this.index}${this.previousHash}${this.timestamp}${JSON.stringify(this.data)}`).toString();
    }

    mineBlock() {

    }
}

class Blockchain {
    chain: IBlock[]

    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(): IBlock {
        return new Block(0, "01/01/2017", {amount: 0}, 'null');
    }

    getLatestBlock(): IBlock {
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock: IBlock) {
        this.chain.push(newBlock)
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false
            }
        }
        return true
    }
}

let blockchain = new Blockchain();
blockchain.addBlock(new Block(blockchain.chain.length, "02/01/2017", {amount: 4}, blockchain.getLatestBlock().hash));
blockchain.addBlock(new Block(blockchain.chain.length, "03/02/2017", {amount: 10}, blockchain.getLatestBlock().hash));
blockchain.addBlock(new Block(blockchain.chain.length, "04/03/2017", {amount: 100}, blockchain.getLatestBlock().hash));

const changedBlock = blockchain.chain[1];

changedBlock.data.amount = 33;
changedBlock.hash = changedBlock.calculateHash();
paint(lintCode(blockchain.chain));
paintStatusOfValidBlockchain(blockchain.isChainValid());
