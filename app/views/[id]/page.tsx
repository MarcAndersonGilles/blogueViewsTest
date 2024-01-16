
import BlogLayout from '@/components/BlogLayout'
import { useParams, } from 'next/navigation'
import React, { useEffect } from 'react'
import useSWR from 'swr'

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