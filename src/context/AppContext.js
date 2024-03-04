/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import React from "react";
// import type { Context, DispatchWithoutAction } from "react";
import { baseUrl } from "../baseUrl";
import { useEffect } from "react";


export const AppContext = createContext();
export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    
    
    async function fetchBlogPosts(page = 1)
    {
        setLoading(true);
        const url = `${baseUrl}?page=${page}`;
        
        try{
            const result = await fetch(url);
            const data = await result.json();
            
            console.log(data);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            setPage(data.page);
            
        }
        catch(error)
        {
            console.log(error);
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

    function handlePageChange(page)
    {
        setPage(page);
        fetchBlogPosts(page);
    }
    
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    } ;
    
    return <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>;
}
