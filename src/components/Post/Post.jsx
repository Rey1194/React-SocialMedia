import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import Notlike from '../../img/notlike.png'

const Post = ({data}) => {
  return (
    <div className='Post'>
      <img src={data.img} alt="data img" />
      <div className="PostReact">
        <img src={data.likes ? Heart:Notlike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span>{data.likes}</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post
