import React, { useState } from 'react';
import UrlForm from '../components/UrlForm';
import ShortenedUrl from '../components/ShortendUrl';

const Home = () => {
  const [shortenedData, setShortenedData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUrlShorten = async (longUrl) => {
    setLoading(true);
    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortenedData(data);
      } else {
        alert(data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>URL Shortener</h1>
        <p>Transform your long URLs into short, shareable links</p>
      </div>
      
      <UrlForm onSubmit={handleUrlShorten} loading={loading} />
      
      {shortenedData && <ShortenedUrl data={shortenedData} />}
    </div>
  );
};

export default Home;
