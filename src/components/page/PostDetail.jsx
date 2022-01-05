import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PostDetail(props) {
  const { postId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [postId]);

  return (
    <>
      <h1>PostDetail</h1>
      <div>
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">{data.id}</h5>
            <h5 className="card-title">{data.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              User : {data.userId}
            </h6>
            <p className="card-text">{data.body}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetail;
