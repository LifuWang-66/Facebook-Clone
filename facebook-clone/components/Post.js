import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import { FaRegCommentAlt } from 'react-icons/fa'
import { RiShareForwardLine } from 'react-icons/ri';
import FormattedDate from './FormattedDate';

const Post = ({ post }) => {
    const { data: session } = useSession();
  return (
    <div className='flex flex-col' key={post.div}>
        <div className='bg-white mt-6 rounded-md p-4'>
            <div className='flex items-center'>
                <img src={post.profilePic} className='rounded-full w-10 h-10' />
                <div>
                    <p className='font-medium'>{post.name}</p>
                    <p className='text-xs text-gray-500'>{post.timeStamp}</p>
                </div> 
            </div>
            <p className='py-4'>{post.post}</p>
        </div>
        {/* If any image */}
        {post.image != null && (
            <div className='relative h-60 md:h-96 bg-white'>
                <Image src={post.image}
                layout='fill' objectFit='cover'/>
            </div>
        )}

        {/* Footer */}
        <div className='flex items-center justify-center bg-white'>
            <div className='flex items-center justify-center space-x-1 hover:bg-gray-100 flex-grow p-2 rounded-xl cursor-pointer'>
                <FiThumbsUp className='h-4'/>
                <p className='text-us sm:text-base'>Like</p>
            </div>
            <div className='flex items-center justify-center space-x-1 hover:bg-gray-100 flex-grow p-2 rounded-xl cursor-pointer'>
                <FaRegCommentAlt className='h-4'/>
                <p className='text-us sm:text-base'>Comment</p>
            </div>
            <div className='flex items-center justify-center space-x-1 hover:bg-gray-100 flex-grow p-2 rounded-xl cursor-pointer'>
                <RiShareForwardLine className='h-4'/>
                <p className='text-us sm:text-base'>Share</p>
            </div>
        </div>
    </div>              
  )
}

export default Post