'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const CE_NewContact = ({ data }: { data: any }) => {
    const router = useRouter()
    return (
        <div className="px-10 py-8 space-y-3">
            <h1>Today Connections</h1>
            <section className="w-full flex justify-start space-x-10">
                {data.slice(0, 5).map((contact: any, index: number) =>
                    <article onClick={() => router.push(`/contact/${contact.id}`)} key={index} className="cursor-pointer flex flex-col justify-center items-center space-y-2">
                        <Image className='rounded-full size-16 object-cover' src="https://media.istockphoto.com/id/506977173/photo/entrepreneur-speaking.webp?b=1&s=170667a&w=0&k=20&c=kMfm_ffl34BHSonOEzFS2kHp8_TOZ83wkbcbFrdfsx8=" alt='Profile' width={60} height={60} />
                        <p>{contact.firstName} {contact.lastName}</p>
                    </article>
                )}
            </section>
        </div>

    )
}

export default CE_NewContact