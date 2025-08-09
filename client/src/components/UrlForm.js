import React, { useState } from 'react';

const UrlForm = ({ onSubmit, loading }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) {
      alert('Please enter a URL');
      return;
    }

    // Add protocol if missing
    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = 'https://' + formattedUrl;
    }

    onSubmit(formattedUrl);
  };

  return (
    <div className="url-form-container">
      <form onSubmit={handleSubmit} className="url-form">
        <div className="input-group">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your long URL here..."
            className="url-input"
            disabled={loading}
          />
          <button 
            type="submit" 
            className="shorten-btn"
            disabled={loading || !url.trim()}
          >
            {loading ? 'Shortening...' : 'Shorten URL'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UrlForm;
