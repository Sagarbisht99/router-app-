import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    let data = useLoaderData()


  return (
    <>
    <div className='flex flex-col items-center gap-4'>
    <h1 className='p-5 bg-black text-white text-2xl font-semibold text-center'>My Github followers is {data.followers}</h1>
    <img src={data.avatar_url} alt="" width={300} />
    </div>
    
    </>
  )
}

export default Github;

export const  githubinfo  = async () => {
    let res = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return   res.json()
}

