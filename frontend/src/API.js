import React, { useState, useEffect } from 'react';

function API() {
  // State to store the fetched data
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:9999/api/marks';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(resultData => {
        setData(resultData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        // Render your component with the fetched data
        <p>Data: {JSON.stringify(data)}</p>
      ) : (
        // Render loading or error message
        <p>Loading...</p>
      )}
    </div>
  );
}

export default API;
