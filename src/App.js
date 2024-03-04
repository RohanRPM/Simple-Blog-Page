/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Header from './components/Header';
import Blog from './components/Blog';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';
import {useContext, useEffect} from 'react';

export default function App() {
  const {fetchBlogPosts}  = useContext(AppContext);


  useEffect(() => {
    fetchBlogPosts();
  },[]);

  return (
    <div className='app-container'>
      <Header/>
      <Blog/>
      <Pagination/>
    </div>
  );
}
