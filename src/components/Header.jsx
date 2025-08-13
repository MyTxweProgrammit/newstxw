import React, { useState } from 'react'
import HamBar from '../Icon_mt/HamBar'
import Cross from '../Icon_mt/Cross'
import Profile from '../Icon_mt/Profile'
import Home from '../Icon_mt/Home'
import Inbox from '../Icon_mt/Inbox'
import People from '../Icon_mt/People'
import Setting from '../Icon_mt/Setting'

export default function Header() {
  const [clickTrue, setClickTrue] = useState(false)

  return (
    <>
      {clickTrue ? (
        <div className='animate__animated animate__fadeInLeft animate__delay-0.25s bg-slate-300 w-[200px] h-screen sticky top-0 left-0'>
            <button onClick={() => setClickTrue(!clickTrue)} className='cursor-pointer rounded-full p-2 hover:bg-slate-200 duration-[0.25s] absolute right-[10px] top-[10px]'>
              <Cross cls='mx-auto' width={25} height={25}/>
            </button>
            <div className='flex flex-col items-center translate-y-[60px]'>
              <div className='w-[90%] h-[60px] center rounded-xl cursor-pointer hover:bg-slate-200 duration-[0.5s]'>
                <div className='w-[30%] h-full center'>
                  <Profile cls="w-[70%] h-[70%]"/>
                </div>
                <div className='w-[70%] h-full font-bold flex flex-col justify-center pl-2'>
                  <h3>User-{Math.floor(Math.random() * 10000000)}</h3>
                  <p className='font-normal text-[10px]'>JohnDoe@gmail.com</p>
                </div>
              </div>
              <div className='bg-slate-400 w-[80%] h-[40px] rounded-xl flex items-center gap-[10px] pl-4 cursor-pointer mt-4 hover:bg-slate-200 duration-[0.5s]'>
                <Home width={27} height={27}/>
                <p className='font-bold text-[#3e3e3e]'>Home</p>
              </div>
              <div className='w-[80%] h-[40px] rounded-xl flex items-center gap-[10px] pl-4 cursor-pointer mt-2 hover:bg-slate-200 duration-[0.5s]'>
                <Inbox width={24} height={24}/>
                <p className='font-bold text-[#3e3e3e]'>Blog</p>
              </div>
              <div className='w-[80%] h-[40px] rounded-xl flex items-center gap-[10px] pl-4 cursor-pointer mt-2 hover:bg-slate-200 duration-[0.5s]'>
                <People width={27} height={27}/>
                <p className='font-bold text-[#3e3e3e]'>Contact Us</p>
              </div>
              <div className='w-[80%] h-[40px] rounded-xl flex items-center gap-[10px] pl-4 cursor-pointer mt-2 hover:bg-slate-200 duration-[0.5s]'>
                <Setting width={27} height={27}/>
                <p className='font-bold text-[#3e3e3e]'>Setting</p>
              </div>
            </div>
        </div>
      ) : (
        <button  onClick={() => setClickTrue(!clickTrue)} className="w-[55px] h-[50px] sticky top-[20px] left-[20px] bg-slate-400 rounded-xl shadow-xl cursor-pointer">
          <HamBar cls='mx-auto' width={35} height={35}/>
        </button>
      )}
    </>
  )
}
