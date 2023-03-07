import React, { useState, useEffect } from 'react'
import axios from 'axios'
import parse from 'html-react-parser'
import { useParams } from 'react-router-dom'

const PostPage = () => {
  const [content, setContent] = useState({})
  const {id} = useParams()
  const fetchContent = async (id) => {
    const {data} = await axios.get(`http://localhost:4000/postcontent/${id}`)
    setContent(data)
  }
  useEffect(() => {
    fetchContent(id)
  })
  return (
    <section id='postPage'>
      <h1>{content.title}</h1>
      <img src={'http://localhost:4000/'+content.img} alt='Background img'/>
      <h3>{parse(`${content.summary}`)}</h3>
      {parse(`${content.content}`)}
    </section>
  )
}

export default PostPage