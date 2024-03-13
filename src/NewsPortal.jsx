// NewsPortal.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const NewsPortal = () => {
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              country: "us",
              apiKey: "ada04a18bca64f73bab55836d2b6abb0", // Ganti dengan kunci API Anda
            },
          }
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-4 searchInput"
        placeholder="Cari berita..."
        value={searchValue}
        onChange={handleSearchInputChange}
      />
      <div className="row">
        {articles.map((article) => (
          <div key={article.title} className="col-md-4">
            <div className="card mb-4">
              <img
                src={article.urlToImage || "https://via.placeholder.com/300"}
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Baca lebih lanjut
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPortal;
