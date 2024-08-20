import React from 'react';
import './JsonBox.css';

const JsonBox = ({ data }) => {
  return (
    <div className="json-box">
      {Object.keys(data).map((key) => (
        <div className="json-item" key={key}>
          <strong>{key}:</strong> {data[key]}
        </div>
      ))}
    </div>
  );
};

export default JsonBox;