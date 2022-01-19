import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useState } from 'react/cjs/react.development';


function Getpostname(){

const {isLoading,data,isError,error}=useQuery("post-id",async() =>{
        return await axios.get("http://localhost:5000/posts")

    })
    if(isLoading){
        return <h2>loading...</h2>
    }
if(isError){
    return(error.message)
}
    // const [list,setList] =useState([])

    // useEffect(() =>{
    //     const getps=async() =>{
    //         const res=await axios.get("http://localhost:5000/posts");
    //         setList(res.data)
    //     }
    //     getps();
    // },[])

    return(
        <div>
            <h2>post names </h2>
            {
                data?.data.map((post) =>{
                  return  <div key={post.id}>{post.body}</div>
                })
            }
            {/* {
                list.map(post =>(
                    <div key={post.id}>{post.body}</div>
                ))
            } */}
        </div>
    )
}
export default Getpostname;