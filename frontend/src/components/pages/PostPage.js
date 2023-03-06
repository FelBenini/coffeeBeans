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
    <div>
      <h1>{content.title}</h1>
      <h3>{parse(`${content.summary}`)}</h3>
      {parse(`${content.content}`)}
    </div>
  )
}

export default PostPage