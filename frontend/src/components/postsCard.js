import React from 'react'

const PostsCard = ({info, index}) => {
  return (
    <div style={{background: `url(http://localhost:4000/${info.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}} key={index} className='postCard'>
        <h3>{info.title}</h3>
        <p>{info.summary}</p>
    </div>
  )
}

export default PostsCard