'use server'
import Image from 'next/image'
import React from 'react'

const SE_ProfileHeader = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-5 bg-white h-max w-full p-10 py-8'>
            <Image className='rounded-full size-28 object-cover' src="https://media.istockphoto.com/id/506977173/photo/entrepreneur-speaking.webp?b=1&s=170667a&w=0&k=20&c=kMfm_ffl34BHSonOEzFS2kHp8_TOZ83wkbcbFrdfsx8=" alt='Profile' width={60} height={60} />
            <section className='text-center'>
                <h1 className='text-lg font-semibold'>Albar Moerhamsa</h1>
                <p className='text-gray-500'>Bort at 1998 age 26 Years</p>
            </section>
        </div>
    )
}

export default SE_ProfileHeader