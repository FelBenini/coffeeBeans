import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Button } from '@mui/material'
import { useState } from 'react'

const CreatePostPage = () => {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState()
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
  async function submitForm(e) {
    e.preventDefault()
    const data = new FormData();
    data.set('title', title)
    data.set('summary', summary)
    data.set('content', content)
    data.set('file', file[0])
    await fetch('http://localhost:4000/createpost', {
      method: 'POST',
      body: data
    })
  }
  return (
    <section id='newPostSection'>
      <form onSubmit={submitForm}>
        <input type='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' required/>
        <input type='summary' value={summary} onChange={(e) => setSummary(e.target.value)} placeholder='Summary' required/>
        <input type='file' onChange={e => {setFile(e.target.files)}} required/>
        <ReactQuill modules={modules} theme={'snow'} value={content} onChange={(e) => setContent(e)} style={{width: '92%', marginTop: '8px'}} required/>
        <Button type='submit' sx={{width: '92%', marginTop: '16px'}} variant='contained'>Create post</Button>
      </form>
    </section>
  )
}

export default CreatePostPage