import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostsCard from '../postsCard'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const fetchPosts = () => {
    axios.get('http://localhost:4000/posts').then(response => {
      setPosts(response.data)
      console.log(response)
  })}
  useEffect(() => {
    fetchPosts() // eslint-disable-next-line
  },[])
  const postsMap = posts.map((post, i) => {
    return <PostsCard key={i} index={i} info={post}/>
  })
  return (
    <section id='homePage'>
      {postsMap}
    </section>
  )
}

export default HomePage