import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostsCard from '../postsCard'
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { Pagination } from '@mui/material'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  const {search} = useLocation()
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page'))
  const [pageCount, setPageCount] = useState()
  console.log(page)
  const [firstPosts, setFirstPosts] = useState([])

  const fetchPosts = (page) => {
    axios.get(`http://localhost:4000/posts?page=${page || 1}`).then(response => {
      setPosts(response.data.posts)
      setFirstPosts(response.data.posts.slice(0, 9))
      setPageCount(response.data.pagesNumber)
  })}
  useEffect(() => {
    setPage(searchParams.get('page') || 1)
    fetchPosts(page)
  },[page, search])
  const postsMap = firstPosts.map((post, i) => {
    return <PostsCard key={i} index={i} info={post}/>
  })

  const handlePageChange = (event, value) => {
    
    navigate({
      pathname: '/',
      search: `?page=${value}`,
    });
  }
  return (
    <section id='homePage'>
      <h1>Latest posts</h1>
      <div id='firstPosts'>
        {postsMap}
      </div>
      <div id='morePosts'>
        {posts.slice(9, posts.length).map((post, index) => {
          return (
            <div key={index}>{post.title}</div>
          )
        })}
      </div>
      <Pagination page={parseInt(page)} sx={{width: '100%', display: 'flex', justifyContent: 'center'}} count={pageCount} onChange={handlePageChange}
      variant="outlined" shape="rounded" />
    </section>
  )
}

export default HomePage