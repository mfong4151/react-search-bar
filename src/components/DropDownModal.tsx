import React, { FC, SetStateAction } from 'react'
import { stringTrees } from '../types'
import DropDownItem from './DropDownItem'
import '../index.css'


interface Props{
  trie: stringTrees
  searchVal: string
  setSearchVal: React.Dispatch<SetStateAction<string>>
  barRef: any
}

interface Pos{
  position:string
  top: string
}

const DropDownModal: FC<Props> = ({trie, searchVal, setSearchVal,barRef}) => {

  const barRefCurr= barRef!.current
  const position: React.CSSProperties = {
      position: 'relative', 
      top: `${barRefCurr!.offSetHeight}px`
  }
  return (
      <div className='modal-overlay'>
        <dialog open
          id='search-res'  
          style={position}
          >
          <ul>
            {trie.complete(searchVal)!.map((query, idx) => 
              <DropDownItem key={idx} query={query} setSearchVal={setSearchVal}/>
            )}
          </ul>

        </dialog>
      </div>

  )
}

export default DropDownModal
