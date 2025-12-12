import { useEffect, useState } from "react";
import './App.css'
import CryptoList from './components/CryptoList.jsx'
import Pagination from "./components/Pagination.jsx";

function App() {
  const [data,setData]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [postPerPage,setPostPerPage]=useState(8)
  const api='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  const handleApi=async()=>{
    try {
      let response=await fetch(api);
      response=await response.json();
      setData(response)
    } catch (error) {
      console.log("Error found:",error)
    }
  }

  useEffect(()=>{
    handleApi()
  },[])

  useEffect(()=>{
    console.log(data)
  },[data])

  const lastPostIndex=currentPage*postPerPage;
  const firstPostIndex=lastPostIndex-postPerPage
  const currentPost=data.slice(firstPostIndex,lastPostIndex)
  console.log(currentPost)
  return (
    <>
      <div className='app bg-black'>
            <h1>Crypto Gallery</h1>
            <CryptoList coinsData={currentPost} />
            <Pagination
                totalPosts={data.length}
                postsPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    </>
  )
}

export default App
