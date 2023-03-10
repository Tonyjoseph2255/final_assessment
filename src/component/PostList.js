import React from 'react'
import PostDetails from './PostDetails'
function PostList({list}) {
  return (
    <>        {
            list.map(item =>                <PostDetails product={item} key={item.id} />            )
        }
    </>  )
}
export default PostList