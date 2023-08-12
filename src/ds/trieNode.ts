type children = {[key:string]: TrieNode}

export class TrieNode{
    children: children
    end: boolean
    words: Set<number>
    constructor(){
        this.children = {};
        this.end = false;
        this.words = new Set<number>();
    }
    
}