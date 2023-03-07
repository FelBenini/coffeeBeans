import React from 'react'
import { Link } from 'react-router-dom'

const PostsCard = ({info, index}) => {
  return (
    <Link to={`/post/${info.title}/${info._id}`} style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.541), rgba(0, 0, 0, 0.141), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(http://localhost:4000/${info.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}} key={index} className='postCard'>
        <h2>{info.title}</h2>
        <p>{info.summary}</p>
    </Link>
  )
}

export default PostsCard