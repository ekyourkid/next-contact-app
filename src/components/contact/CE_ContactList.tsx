'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const CE_ContactList = ({ data }: { data: any }) => {
    const router = useRouter()
    return (
        <div className="px-10 divide-y space-y-2">
            {data?.data?.map((contact: any) =>
                <article onClick={() => router.push(`/contact/${contact.id}`)} key={contact.id} className="flex justify-start items-start space-x-4 p-2 px-5 bg-white cursor-pointer">
                    <Image className='rounded-full size-16 object-cover' src="https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg" alt='Profile' width={60} height={60} />
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