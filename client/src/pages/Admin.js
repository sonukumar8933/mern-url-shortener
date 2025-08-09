import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {
      const response = await fetch('/api/admin/urls');
      const data = await response.json();
      setUrls(data);
    } catch (error) {
      console.error('Error fetching URLs:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUrl = async (id) => {
    if (window.confirm('Are you sure you want to delete this URL?')) {
      try {
        await fetch(`/api/admin/urls/${id}`, {
          method: 'DELETE',
        });
        setUrls(urls.filter(url => url._id !== id));
      } catch (error) {
        console.error('Error deleting URL:', error);
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div className="stats-summary">
        <div className="stat-card">
          <h3>{urls.length}</h3>
          <p>Total URLs</p>
        </div>
        <div className="stat-card">
          <h3>{urls.reduce((sum, url) => sum + url.clicks, 0)}</h3>
          <p>Total Clicks</p>
        </div>
      </div>

      <div className="urls-table-container">
        <h2>All Shortened URLs</h2>
        <table className="urls-table">
          <thead>
            <tr>
              <th>Short Code</th>
              <th>Original URL</th>
              <th>Clicks</th>
              <th>Created</th>
              <th>Last Accessed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => (
              <tr key={url._id}>
                <td>
                  <a 
                    href={`/${url.shortCode}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="short-link"
                  >
                    {url.shortCode}
                  </a>
                </td>
                <td className="long-url" title={url.longUrl}>
                  {url.longUrl.length > 50 
                    ? url.longUrl.substring(0, 50) + '...' 
                    : url.longUrl}
                </td>
                <td>
                  <span className="click-count">{url.clicks}</span>
                </td>
                <td>{formatDate(url.createdAt)}</td>
                <td>
                  {url.lastAccessed ? formatDate(url.lastAccessed) : 'Never'}
                </td>
                <td>
                  <button 
                    onClick={() => deleteUrl(url._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
