import { TrieNode } from "./trieNode";

export class Trie{
    root: TrieNode
    constructor(){
        this.root = new TrieNode();
    }

    insert(word: string){
        let curr: TrieNode = this.root;
        
        for(const c of word){
            if(!curr.children[c]) curr.children[c] = new TrieNode(); 
            curr = curr.children[c];
        }
        curr.end = true;
        return
    }
    search(word: string){
        let curr: TrieNode = this.root;
        
        for(const c of word){
            if(!curr.children[c]) return false; 
            curr = curr.children[c];
        }

        return curr.end;
    }

    startsWith(prefix: string){
        let curr: TrieNode = this.root;
        
        for(const c of prefix){
            if(!curr.children[c]) return false; 
            curr = curr.children[c];
        }

        return true;
    }

    build(words: string[]){

        for(const word of words){
            this.insert(word)
        }

        return
    }
}