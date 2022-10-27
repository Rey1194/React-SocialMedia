import React from 'react'
import { PostData } from '../../Data/PostData'
import Post from '../Post/Post'
import './Posts.css'

const Posts = () => {
  return (
    <div>
      <div className="Posts">
        {PostData.map((post, id)=>{
          return <Post data={post} id={id} />
        })}
      </div>
    </div>
  )
}

export default Posts
