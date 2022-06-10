import React, { useState } from 'react'

const Pagination = ({ postsPerPage, totalpages, currentPage, setCurrentPage }) => {
    const [currentList, setCurrentList] = useState(1)

    let pageNumbers=[]
    for (let i = currentList;i < currentList+5 && i<=totalpages; i++) {
        pageNumbers.push(i)
    }
    const handleCurrentPage = (num)=>{
        setCurrentPage(num)
    }
    const handlePrev = ()=>{
        if(currentList!==1){
           setCurrentList(currentList-5)
        }
    }
    const handleNext = ()=>{
        if(!((currentList+5)>=totalpages)){ 
            setCurrentList(currentList+5)
        }
    }
    return (
        <div className='pagination'>
            <span onClick={handlePrev} style={currentList===1?{color:"#cccccc",cursor:"not-allowed"}:{}} className='material-icons'>navigate_before</span>
            {pageNumbers.map((num)=>{
                return <span onClick={()=>handleCurrentPage(num)} className='page-num' key={num} style={currentPage===num?{color:"#00aaff",borderColor:"#00aaff"}:{}}>{num}</span>
            })}
            <span onClick={handleNext} style={currentList+5>=totalpages?{color:"#cccccc",cursor:'not-allowed'}:{}} className='material-icons'>navigate_next</span>
        </div>
    )
}

export default Pagination