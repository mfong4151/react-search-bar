type children = {[key:string]: TrieNode}

export class TrieNode{
    children: children
    end: boolean
    words: number[]
    constructor(){
        this.children = {};
        this.end = false;
        this.words = [];
    }
    
}