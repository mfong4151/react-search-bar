import React, { FC, SetStateAction } from 'react'
import '../index.css'

interface Props{
    query: string,
    setSearchVal: React.Dispatch<SetStateAction<string>>
}


const DropDownItem: FC<Props> = ({query, setSearchVal}) => (
     <li 
        className='drop-down-itm'
        onClick={() => setSearchVal(query)}
        >
        {query}
    </li>
)


export default DropDownItem
