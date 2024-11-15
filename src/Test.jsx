import React from 'react'
import Background from './component/background'
import Navbar from './component/navbar'
import Sidebar from './component/Sidebar'
import Chat from './component/Chat'
import VideoCall from './component/VideoCall'

export default function Test() {
  return (
    <>
        <div className=' -z-50 bg-[#121112] w-full h-screen relative'>
            <div className="">
                <Background />
            </div>

            <div className=" w-full h-screen">

                <Navbar />

                <div className=" flex justify-start items-center w-full h-full">
                    <Sidebar />


                    <div className=" w-2/3 h-full">
                        <VideoCall />
                    </div>

                    <Chat />
                </div>
            </div>
        </div>

    </>
  ) 
}
