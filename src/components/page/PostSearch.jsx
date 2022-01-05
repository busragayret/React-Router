import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import posts from '../../data/posts';

function PostSearch() {
  const location = useLocation();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(location.search);
  const [q, setQ] = useState(urlParams.get('q'));

  function formSubmit(event) {
    event.preventDefault();
    setQ(event.target.q.value);
    navigate(`/search?q=${event.target.q.value}`);
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="search" className="form-label">
            Search
          </label>
          <input
            name="q"
            type="text"
            className="form-control"
            id="search"
            defaultValue={q}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      {location.pathname === '/search' && (
        <h1>
          Search Results:{' '}
          {posts
            .filter((post) => post.title.includes(q))
            .map((item) => (
              <div>
                <img
                  src={`https://picsum.photos/id/${
                    item.id.split('-')[1]
                  }/300/200`}
                  alt="fggg"
                />
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </div>
            ))}
        </h1>
      )}
    </>
  );
}

export default PostSearch;
