import React, { useEffect, useState } from 'react'
import GlobalStats from '../components/HomeComponents/GlobalStats';
import '../styles/Home.css'
import '../index.css';
import axios from 'axios';
import Loader from '../components/Loader';
import TopTenCoins from '../components/HomeComponents/TopTenCoins';
import TopTenNews from '../components/HomeComponents/TopTenNews';



const CoinsOptions = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "10",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "728cac0fc2msh3fd440b5ac1fa6dp1db2bfjsn23d2877f847d",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};



const NewsOptions = {
  method: "GET",
  url: "https://bing-news-search1.p.rapidapi.com/news/search",
  params: {
    q: "cryptocurrency",
    count: "10",
    freshness: "Day",
    textFormat: "Raw",
    safeSearch: "Off",
  },
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "728cac0fc2msh3fd440b5ac1fa6dp1db2bfjsn23d2877f847d",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

// const axios = require("axios");

const Home = () => {
  const [coinsData, setcoinsData] = useState();
  const [newsData, setNewsData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(CoinsOptions);
        const newsResponse = await axios.request(NewsOptions);
        setLoading(false);
        setcoinsData(response.data.data);
        setNewsData(newsResponse.data);
        // console.log(newsResponse.data);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    
    fetchData();
  }, []);
  

  if(loading) return <Loader />;

  return (
    <div className="home-wrapper">
      <h1 style={{textAlign:'center'}}>Home</h1>
      <div className="section-wrapper">
        <GlobalStats data={coinsData} />
        <TopTenCoins coinsData={coinsData} />
        <TopTenNews news={newsData.value}/>
      </div>
    </div>
  );
}

export default Home;