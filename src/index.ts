import * as CryptoJS from 'crypto-js'

class Block {
    static calculateBlockHash = (
        index: number,
        previousHash: string,
        data: string,
        timeStamp: number
    ): string => CryptoJS.SHA256(index + previousHash + data + timeStamp).toString();
    
    static validateStructure = (aBlock: Block): boolean => 
        typeof aBlock.index === "number" && 
        typeof aBlock.hash === "string" &&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timeStamp === "number" &&
        typeof aBlock.data === "string";

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timeStamp: number;

    constructor ( 
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timeStamp: number,
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timeStamp = timeStamp;
    }
}

const getBlockChain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const genesisBlock = new Block(0, Block.calculateBlockHash(0, '', 'Hello', getNewTimeStamp()), '', 'Hello', getNewTimeStamp());
let blockchain: Block[] = [genesisBlock];

const createNewBlock = (data: string): Block => {
    const prevBlock = getLatestBlock();
    const newIndex = prevBlock.index + 1;
    const newTimeStamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(
        newIndex, prevBlock.hash, data, newTimeStamp
    )
    const newBlock = new Block(
        newIndex, newHash, prevBlock.hash, data, newTimeStamp
    )

    addBlock(newBlock);

    return newBlock;
}

const isBlockValid = (candidateBlock: Block, prevBlock: Block): boolean => 
    Block.validateStructure(candidateBlock) &&
    candidateBlock.index === prevBlock.index + 1 &&
    candidateBlock.previousHash === prevBlock.hash &&
    candidateBlock.hash === Block.calculateBlockHash(
        candidateBlock.index,
        candidateBlock.previousHash,
        candidateBlock.data,
        candidateBlock.timeStamp
    ) 

const addBlock = (aBlock: Block): void => {
    const prevBlock = getLatestBlock();
    if ( isBlockValid(aBlock, prevBlock) ) {
        blockchain.push(aBlock);
    }
}

createNewBlock('Second Block');
createNewBlock('Bye Bye');

console.log(blockchain);

export {}