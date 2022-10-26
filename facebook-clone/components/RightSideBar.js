import React from 'react'
import { RiVideoAddFill } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'
import { CgMoreAlt } from 'react-icons/cg'
import Contacts from './Contacts'

const RightSideBar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className='flex space-x-1 px-2'>
                <div className='space-x-1 p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiVideoAddFill/>
                </div>
                <div className='space-x-1 p-2 hover:bg-gray-200 cursor-pointer'>
                    <BiSearch/>
                </div>
                <div className='space-x-1 p-2 hover:bg-gray-200 cursor-pointer'>
                    <CgMoreAlt/>
                </div>
            </div>
        </div>
        <Contacts name='Michael'
            src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
            status='Online'/>
        <Contacts name='Simon' 
            src='https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=600'
            status='Online'/>
        <Contacts name='Nora'
            src='https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600'
            status='Online'/>
        <Contacts name='Annora'
            src='https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600'
            status='Offline'/>
    </div>
  )
}

export default RightSideBar