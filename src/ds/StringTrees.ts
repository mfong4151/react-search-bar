import { TrieNode } from "./trieNode";

//Abstract classes WHHYYYYY OOP ;-;

export class StringTrees{
    root: TrieNode
    words: string[]
    constructor(words:string[] = []){
        this.root = new TrieNode();
        this.words = words;
    }

}