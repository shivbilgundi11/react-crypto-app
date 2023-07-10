import React, { useEffect, useState } from "react";
import "../styles/News.css";
import axios from "axios";
import Loader from "../components/Loader";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";






const News = () => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  
  
  
  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        url: "https://bing-news-search1.p.rapidapi.com/news/search",
        params: {
          q: "cryptocurrency",
          textFormat: "Raw",
          safeSearch: "Off",
          count: "10",
        },
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "72e8caeb38mshaecd713659a1e0bp1663eejsnbcbb38f38eb3",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      };

      try {
        const newsResponse = await axios.request(options);
        setLoading(false);
        setNews(newsResponse.data.value);
      } catch (error) {
        setLoading(false);
        alert(error);
      }
    }

    fetchData();
  }, []);


  if(loading) return <Loader />;

  return (
    <div className="news-container">
      <h1 style={{ textAlign: "center" }} className="page-title">
        News
      </h1>

      <div className="news-post-wrapper">
        {news.map((post, id) => {
          return <NewsCard post={post} key={id} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default News;
