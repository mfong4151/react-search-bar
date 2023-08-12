type children = {[key:string]: TrieNode}

export class TrieNode{
    children: children
    end: boolean
    
    constructor(){
        this.children = {};
        this.end = false;
    }
}