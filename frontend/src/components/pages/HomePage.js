import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostsCard from '../postsCard'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Pagination } from '@mui/material'
import PostItem from '../postItem'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page'))
  const [pageCount, setPageCount] = useState()
  const [firstPosts, setFirstPosts] = useState([])

  const fetchPosts = (page) => {
    axios.get(`http://localhost:4000/posts?page=${page || 1}`, {
      headers: {'authorization' : process.env.REACT_APP_API_KEY}
    }).then(response => {
      setPosts(response.data.posts)
      setFirstPosts(response.data.posts.slice(0, 9))
      setPageCount(response.data.pagesNumber)
  })}
  useEffect(() => {
    setPage(searchParams.get('page') || 1)
    fetchPosts(page)
  },[page, searchParams])
  const postsMap = firstPosts.map((post, i) => {
    return <PostsCard key={i} index={i} info={post}/>
  })

  const handlePageChange = (event, value) => {
    window.scrollTo({ top: 0 })
    navigate({
      pathname: '/',
      search: `?page=${value}`,
    });
  }
  return (
    <section id='homePage'>
      {/* eslint-disable-next-line*/}
      <h1>Latest posts {page == '1' ? '' : <p>Page {page}</p>}</h1>
      <div id='firstPosts'>
        {postsMap}
      </div>
      <div id='morePosts'>
        {posts.slice(9, posts.length).map((post, index) => {
          return (
            <PostItem info={post}/>
          )
        })}
      </div>
      <Pagination page={parseInt(page)} sx={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '32px'}} count={pageCount} onChange={handlePageChange} shape="rounded" />
    </section>
  )
}

export default HomePage