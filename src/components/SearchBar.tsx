import React, { FC, useRef, useState } from 'react'
import '../index.css'
import { stringTrees } from '../types'
import DropDownModal from './DropDownModal'


interface Props{
  trie: stringTrees
}

const SearchBar: FC<Props> = ({trie}) => {
  const [searchVal, setSearchVal] = useState<string>('')
  const searchBarRef = useRef<any>(null)
  const handleOnClick = (e:any) => {
      e.preventDefault();
      e.stopPropagation();

  }
  
  return (
    <div>
      <form id='search-form' ref={searchBarRef}>
        <input type="text" value={searchVal} onChange={e => setSearchVal( e.target.value)}/>
        <button onClick={handleOnClick}>Search</button>
      </form>
      {searchVal && <DropDownModal />}
  </div>
  )
}

export default SearchBar
