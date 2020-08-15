class Block {

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

const genesisBlock = new Block(1, '202020', '', 'Hello', 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {}