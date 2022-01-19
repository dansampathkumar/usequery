import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';


function Getposts(){
    const [posts,setPosts] =useState([])
    const [isLoading,setisLoading] =useState(true)

    useEffect(() =>{
        const getps=async() =>{
            const res=await axios.get("http://localhost:5000/posts");
            setPosts(res.data)
            setisLoading(false)
        }
        getps();
        
    },[])
    if(isLoading){
        return<h5>loading...</h5>
    }

    return(
        <div>
            <h2>post titles </h2>
            {
                posts.map(post =>(
                    <div key={post.id}>{post.body}</div>
                ))
            }
        </div>
    )
}
export default Getposts;