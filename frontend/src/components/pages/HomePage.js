import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostsCard from '../postsCard'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const [firstPosts, setFirstPosts] = useState([])
  const fetchPosts = () => {
    axios.get('http://localhost:4000/posts').then(response => {
      setPosts(response.data)
      setFirstPosts(response.data.slice(0, 9))
  })}
  useEffect(() => {
    fetchPosts() // eslint-disable-next-line
  },[])
  const postsMap = firstPosts.map((post, i) => {
    return <PostsCard key={i} index={i} info={post}/>
  })
  return (
    <section id='homePage'>
      <h1>Latest posts</h1>
      <div id='firstPosts'>
        {postsMap}
      </div>
      
    </section>
  )
}

export default HomePage