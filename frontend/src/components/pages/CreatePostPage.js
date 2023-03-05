import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Button } from '@mui/material'
import { useState } from 'react'

const CreatePostPage = () => {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };
  return (
    <section id='newPostSection'>
      <form>
        <input type='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title'/>
        <input type='summary' value={summary} onChange={(e) => setSummary(e.target.value)} placeholder='Summary'/>
        <input type='file'/>
        <ReactQuill modules={modules} theme={'snow'} value={content} onChange={(e) => setContent(e)} style={{width: '92%', marginTop: '8px'}}/>
        <Button sx={{width: '92%', marginTop: '16px'}} variant='contained'>Create post</Button>
      </form>
    </section>
  )
}

export default CreatePostPage