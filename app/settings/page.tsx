import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <>
            <div className='flex flex-col gap-2'>
                <Link
                    href={'/'}
                >
                    <div className='text-black bg-white p-5'>Go back main page.</div>
                </Link>
                <div className='text-black bg-white p-5 '>PWA Setting</div>
            </div>

        </>
    )
}

export default page