import BlogLayout from '@/components/BlogLayout'
import React from 'react'
import Link from 'next/link'


export default function Home() {

  return (
    <main className="flex  min-h-screen flex-col  p-24 bg-gray-400">


      <div className='max-w-[260px]'>


      </div>

      <div>
        {/* <BlogLayout slug={'chocolat'} /> */}
      </div>

      <div className='text-black bg-white p-5 '>PWA TESTING</div>

      <div className='flex fle-col pt-10 gap-2'>
        <Link
        href={'/dashboard'}
        >
        <div className='text-black bg-white p-5'>PWA Dashboard</div>
        </Link>
        <Link href={'/settings'}>
        <div className='text-black bg-white p-5'>PWA Setting</div>
        </Link>
      </div>

    </main>
  )
}
