// src/components/AlertBanner.jsx
import React from 'react';

const AlertBanner = ({ alerts = [] }) => {
  if (!alerts.length) return null;

  return (
    <div className="alert-container" role="alert">
      {alerts.map((alert, index) => (
        <div 
          key={index} 
          className={`alert-banner ${alert.severity?.toLowerCase() || 'info'}`}
        >
          <div className="alert-header">
            <strong>{alert.event || 'Weather Alert'}</strong>
            <span className="alert-sender"> - {alert.sender_name}</span>
          </div>
          <p>{alert.description}</p>
          {alert.tags && alert.tags.length > 0 && (
            <div className="alert-tags">
              {alert.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          )}
          {alert.start && alert.end && (
            <small>
              From: {new Date(alert.start * 1000).toLocaleString()} 
              → To: {new Date(alert.end * 1000).toLocaleString()}
            </small>
          )}
        </div>
      ))}
    </div>
  );
};

export default AlertBanner;