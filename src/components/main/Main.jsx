import React from 'react'
import N1 from './pages/N1'
import './pages/pages.scss'
export default function Main(props) {
  return (
    <div>
     <N1 posts={props.posts}/>
    </div>
  )
}
