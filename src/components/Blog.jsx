/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import AppContextProvider, { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blog = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="mt-8">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="text-center">
          <p className="text-xl font-bold text-gray-700">No Posts Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
            <h5 className="text-gray-700">
              By <span className="text-blue-500">{post.author}</span> on{' '}
              <span className="text-green-500">{post.category}</span>
            </h5>
            <h6 className="text-gray-500">Posted on {post.date}</h6>
            <p className="text-gray-800 mt-4">{post.body}</p>

            <div className="mt-4">
              {post.tags.map((tag, index) => (
                <span key={index} className="mr-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
