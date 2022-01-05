import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Posts(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const URL = 'https://jsonplaceholder.typicode.com/posts';
      fetch(URL)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setLoading(false);
        });
    }, 1000);
  }, []);

  const loadingReturnInfo = <h1>Loading...</h1>;

  if (loading) {
    return loadingReturnInfo;
  }

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
