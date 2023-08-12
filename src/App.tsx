import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import SearchBar from './components/SearchBar';
import "./index.css"
import { SuffixTree, Trie } from './ds';
import { createTrieWords } from './utils/trieWords';

type mapChoices = {[type:string]: any}

const App:FC =() => {
  const [chosenTrie, setChosenTrie] = useState<string>('')

//For trie demonstration
  const defaultTrie: Trie = new Trie();
  const trie = useRef<Trie | SuffixTree>(defaultTrie);
  const trieWords: string[] = createTrieWords();

  useLayoutEffect(()=>{
    defaultTrie.build(createTrieWords())

  }, [])

  const handleOnClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    const choice:string = e.target.id;
    if (choice === 'trie') trie.current = new Trie();
    else trie.current = new SuffixTree();
    
    trie.current.build(trieWords)
  }

  
  return (
    <div id="App" className="udc">
        <div>
          <button id="trie" onClick={handleOnClick}>Trie</button>
          <button id="suffix" onClick={handleOnClick}>Suffix Tree</button>
        </div>
        <SearchBar/>
    </div>
  );
}

export default App;
