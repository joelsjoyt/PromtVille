"use client";

import React from 'react'
import { useEffect, useState } from 'react';

import PromptCard from './PromptCard';

const PromptCardList = ({data, handleTagCLick}) =>{
  return(
    <div className='mt-16 prompt_layout'>
      {data.map(prompt => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagCLick={handleTagCLick}
        />
      ))}
    </div>
  )
}

const Feed = () => {

  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) =>{

  }

  useEffect(()=>{
    const fetchPosts = async () =>{
      const response = await fetch('/api/prompt');
      const data = await response.json()

      setPosts(data)
    }

    fetchPosts()
  },[])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type='text' 
          placeholder='Search for a tag or username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      <PromptCardList
        data={posts}
        handleTagCLick={() =>{}}
      />
    </section>
  )
}

export default Feed