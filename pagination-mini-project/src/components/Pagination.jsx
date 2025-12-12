import React from 'react'
import "./Pagination.css";
const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage
}) => 
    {
        let pages=[];
        for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
            pages.push(i);
    }
    console.log(totalPosts,postsPerPage,setCurrentPage,currentPage)
  return (
    <div className='pagination'>
        {
            pages.map((page,index)=>{
                return (
                <button className={page === currentPage ? "active" : ""} onClick={()=>setCurrentPage(page)} key={index}>
                    {page}
                </button>
                )
            })
        }
    </div>
  )
   }

export default Pagination