import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    return <p key={i}>{post.title}</p>
  })
  return (
    <section id='homePage'>
      {postsMap}
    </section>
  )
}

export default HomePage