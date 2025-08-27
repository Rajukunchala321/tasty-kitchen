import React from 'react'
import './Index.css'

const Pagination = ({data, pagenationHandle}) => {
    let pageNumbers =[];
    for(let i=1; i < Math.ceil(data.length/9); i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
  return (
    <center>
        {
           pageNumbers.map((num, i)=>(<div key={i} onClick={()=>pagenationHandle(num)} className='pagination-num'>{num}</div>)) 
        }
    </center>
  )
}

export default Pagination