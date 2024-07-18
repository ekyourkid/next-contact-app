'use server'

import Image from 'next/image'
import React from 'react'

const CE_ContactHeader = () => {
    return (
        <div className='flex flex-col justify-start items-start space-y-8 bg-white h-max w-full p-10 py-6'>
            <article className='flex items-center space-x-4'>
                <Image className='rounded-full size-14 object-cover' src="https://media.istockphoto.com/id/506977173/photo/entrepreneur-speaking.webp?b=1&s=170667a&w=0&k=20&c=kMfm_ffl34BHSonOEzFS2kHp8_TOZ83wkbcbFrdfsx8=" alt='Profile' width={60} height={60} />
                <section>
                    <h1 className='font-semibold'>My Contacts</h1>
                    <h2>280 People</h2>
                </section>
            </article>
            <input type='text' placeholder='Search contact' className='bg-gray-100 w-full h-12 px-4' />
        </div>
    )
}

export default CE_ContactHeader