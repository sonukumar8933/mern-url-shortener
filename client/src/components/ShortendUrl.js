import React, { useState } from 'react';

const ShortenedUrl = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(data.shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = data.shortUrl;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy failed: ', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="shortened-url-container">
      <div className="result-card">
        <h3>Your shortened URL is ready!</h3>
        
        <div className="url-display">
          <div className="original-url">
            <label>Original URL:</label>
            <span>{data.longUrl}</span>
          </div>
          
          <div className="short-url">
            <label>Shortened URL:</label>
            <div className="short-url-box">
              <span>{data.shortUrl}</span>
              <button 
                onClick={copyToClipboard}
                className={`copy-btn ${copied ? 'copied' : ''}`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortenedUrl;
