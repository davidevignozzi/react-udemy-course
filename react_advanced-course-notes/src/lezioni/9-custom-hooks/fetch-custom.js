import React from 'react';
import useCustomFetch from './useCustomFetch';

const url = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts';

const FetchComponents = () => {
  const { data, isLoading } = useCustomFetch(url);

  return (
    <div>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <div>
          {data.map((el) => {
            const { id, name, phone } = el;
            return (
              <div
                key={id}
                className="users bg-white p-4 shadow rounded"
              >
                <h3>{name}</h3>
                <h5>{phone}</h5>
              </div>
            );
          })}
        </div>
      )}
      <Post />
    </div>
  );
};

const Post = () => {
  const { data, isLoading } = useCustomFetch(postUrl);
  return (
    <div>
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        <div>
          {data.map((el) => {
            const { id, title, body } = el;
            return (
              <div
                key={id}
                className="users bg-white p-4 shadow rounded"
              >
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FetchComponents;
