"use client"
import BlogLayout from '@/components/BlogLayout'
import { useParams, } from 'next/navigation'
import React, { useEffect } from 'react'
import useSWR from 'swr'

function Page() {

  const param = useParams()
  // console.log(param.id)
const slug = param.id
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const {
    data,
    error,
    isLoading,
  } = useSWR<any>(`/api/views/${slug}`, fetcher);

  if (error) {
    console.log(error.message)
  }
 console.log(data)
  return (
    <div>

      <>
      
          <div>{data}</div>

      </>
    </div>
  )
}

export default Page