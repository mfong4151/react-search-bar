import { TrieNode } from "./trieNode";

//Abstract classes WHHYYYYY OOP ;-;

export class StringTrees{
    root: TrieNode
    words: string[]
    constructor(){
        this.root = new TrieNode();
        this.words = [];
    }

}