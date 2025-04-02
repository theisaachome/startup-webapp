"use client";
import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";
const { DUMMY_NEWS } = require("@/dummy-news");

export default  function NewsPage() {
  const[isLoading,setIsLoading]=useState(false);
  const [error, setError] = useState();
  const[news,setNews]= useState();
    useEffect(()=>{
      setIsLoading(true);
        async function fetchNews(){
            console.log("Fetching news...");
          const response = await fetch("http://localhost:8080/news");
          if (!response.ok) {
            setIsLoading(false);
            throw new Error("Failed to fetch news");
          } 

          const data = await response.json();
          setIsLoading(false);
          setNews(data);
        }
         fetchNews();
    },[])
    if(isLoading){
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        );
    }
    if(error){
        return (
            <div className="error">
                <h1>Something went wrong!</h1>
                <p>{error}</p>
            </div>
        );
    }
    let newsContent=null;
    if(news){
      newsContent = <NewsList news={news}/>;
    }    
    return (
      <>
        <h1>News Page</h1>
       {newsContent}
      </>
    );
}