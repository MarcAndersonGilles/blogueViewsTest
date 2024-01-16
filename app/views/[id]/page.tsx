
import BlogLayout from '@/components/BlogLayout'
import React from 'react'


function Page({params}:{params : {id:string}}) {

  console.log(params)
  
  return (
    <div>
      <>
        <div>{params.id}</div>
        <BlogLayout slug={`${params.id}`} />
      </>
    </div>
  )
}

export default Page