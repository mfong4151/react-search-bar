import { StringTrees } from "./StringTrees";
import { TrieNode } from "./trieNode";

export class Trie extends StringTrees{
    constructor(words:string[] = []){
        super(words)
    }

    insert(word: string, i:number){
        let curr: TrieNode = this.root;
        
        for(const c of word){
            if(!curr.children[c]) curr.children[c] = new TrieNode(); 
            curr = curr.children[c];
            curr.words.push(i)
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

        for(const[idx, word] of words.entries()) this.insert(word, idx)
        return
    }
    //Used to return the associated words, given that we have a word list alreaady
    complete(word: string){

    }
}