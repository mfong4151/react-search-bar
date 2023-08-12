import React, { FC, useLayoutEffect, useRef } from 'react';
import SearchBar from './components/SearchBar';
import "./index.css"
import { SuffixTree, Trie } from './ds';
import { createTrieWords } from './utils/trieWords';

const App:FC =() => {

  //For trie demonstration
  const trieWords: string[] = createTrieWords();
  const defaultTrie: Trie = new Trie();
  const trie = useRef<Trie | SuffixTree>(defaultTrie);

  useLayoutEffect(()=>{
    defaultTrie.build(trieWords)

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
        <SearchBar trie={trie.current}/>
    </div>
  );
}

export default App;
