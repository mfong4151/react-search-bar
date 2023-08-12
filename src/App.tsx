import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import SearchBar from './components/SearchBar';
import "./index.css"
import { SuffixTree, Trie } from './ds';
import { createTrieWords } from './utils/trieWords';

type mapChoices = {[type:string]: any}

const App:FC =() => {
  const [chosenTrie, setChosenTrie] = useState<string>('')

  const MAP_CHOICES: mapChoices = {
                        'trie': Trie,
                         'suffix': SuffixTree
                        }  

  const handleOnClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    const choice:string = e.target.id;
    const trieStructure: Trie | SuffixTree = MAP_CHOICES[choice];
    trie.current = trieStructure
    
  }

  //For trie demonstration
  const defaultTrie: Trie = new Trie();
  const trie = useRef<Trie | SuffixTree>(defaultTrie);
  const trieWords = useRef<string[]>(createTrieWords())

  useLayoutEffect(()=>{
    defaultTrie.build(createTrieWords())

  }, [])

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
