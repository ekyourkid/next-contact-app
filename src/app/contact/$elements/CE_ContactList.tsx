'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const CE_ContactList = ({ data }: { data: any }) => {
    const router = useRouter()
    return (
        <div className="px-10 divide-y">
            {data.map((contact: any) =>
                <article onClick={() => router.push(`/contact/${contact.id}`)} key={contact.id} className="flex justify-start items-start space-x-4 p-2 bg-white cursor-pointer">
                    <Image className='rounded-full size-16 object-cover' src="https://media.istockphoto.com/id/506977173/photo/entrepreneur-speaking.webp?b=1&s=170667a&w=0&k=20&c=kMfm_ffl34BHSonOEzFS2kHp8_TOZ83wkbcbFrdfsx8=" alt='Profile' width={60} height={60} />
                    <section className="py-2">
                        <h1 className="font-semibold">{contact.firstName} {contact.lastName}</h1>
                        <h2 className="font-light">Age {contact.age}</h2>
                    </section>
                </article>
            )}
        </div>
    )
}

export default CE_ContactList