import React, { FC, useRef, useState } from 'react'
import '../index.css'

const SearchBar: FC = () => {
  const [searchVal, setSearchVal] = useState<string>('')
  const searchBarRef = useRef<any>(null)
  const handleOnClick = (e:any) => {
      e.preventDefault();
      e.stopPropagation();

  }
  
  return (
    <form id='search-form' ref={searchBarRef}>
      <input type="text" value={searchVal} onChange={e => setSearchVal( e.target.value)}/>
      <button onClick={handleOnClick}>Search</button>
    </form>
  )
}

export default SearchBar
