import React from 'react'
import CreatPost from './CreatPost'
import Posts from './Posts'

const Feed = () => {
  return (
    <div className='flex-grow pt-6 mr-6 overflow-y-auto h-screen no-scrollbar'>
        <div className='mx-auto max-w-md md:max-w-xl'>
            {/* Create Post Box */}
            <CreatPost/>
            {/* Post */}
            <Posts/>
        </div>
    </div>
  )
}

export default Feed