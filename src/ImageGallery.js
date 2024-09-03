// ImageGallery.js
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios if you choose to use it

const API_KEY = "mnuR6YnBnEO41MRSTFDLcuJKq3GiRYUx1t48xXIpRpA"; // Replace with your Unsplash Access Key
const API_URL = "https://api.unsplash.com/search/photos";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("wedding"); // Default query
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Client-ID ${API_KEY}`,
          },
          params: {
            query,
            per_page: 10,
          },
        });
        setImages(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchImages();
  }, [query]); // Re-run the effect when query changes

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.search.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div class="untree_co-section pb-0" id="services-section">
        <div class="container">
          <div class="row mb-4">
            <div class="col-lg-7 text-center mx-auto">
              <h2 class="section-heading gsap-reveal-hero margin-bottom-50">
                <strong>Featured Photography</strong>
              </h2>
              <p class="gsap-reveal-hero">
                Search for different genre of Photography taken by our 
                talented Phographers.
              </p>
              <div class="wave gsap-reveal-hero">
                <svg>
                  <path d="M10,10 L50,100 L90,50" stroke="#0389ff"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="container">
            <div class="row">
              <form onSubmit={handleSearch}>
                <input type="text" name="search" placeholder="Search for photography..." />
                <button type="submit">Search</button>
              </form>
            </div>
            <div class="gsap-reveal-hero">
              {images.length > 0 ? (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {images.map((image) => (
                  <div key={image.id} style={{ margin: "10px" }}>
                    <img
                      src={image.urls.small}
                      alt={image.alt_description}
                      style={{ width: "250px", height: "250px", borderRadius: "8px"}}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p>No images found</p>
            )}
          </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ImageGallery;
