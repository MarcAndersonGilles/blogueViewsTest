import BlogLayout from '@/components/BlogLayout'
import React from 'react'



export default function Home() {

  return (
    <main className="flex  min-h-screen flex-col  p-24 bg-gray-400">
     
     
        <div className='max-w-[260px]'>

        
        </div>

       <div>
        <BlogLayout slug={'chocolat'} />
       </div>
        
    </main>
  )
}
