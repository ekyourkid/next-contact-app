'use client'

import Image from 'next/image'
import React from 'react'

import { useForm, SubmitHandler } from "react-hook-form"
import { ACT_PostCreateContact } from '../$actions/action.create.contact'
import { useRouter } from 'next/navigation'

type TCreateContact = {
    firstName: string
    lastName: string
    age: number
}

const CE_ContactForm = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
    } = useForm<TCreateContact>()

    const onSubmit: SubmitHandler<TCreateContact> = async (data) => {
        const resp = await ACT_PostCreateContact({ ...data, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrQVoahVLZMoEKW9tAtR_BTPcnyj5Vdjv4huc1dR5NJMKRrJwsWZ33pKeUhQMm8JWfV4&usqp=CAU" })
        router.push('/')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center -mt-20'>
            <Image className='rounded-full size-28 object-cover mt-10' src="https://media.istockphoto.com/id/506977173/photo/entrepreneur-speaking.webp?b=1&s=170667a&w=0&k=20&c=kMfm_ffl34BHSonOEzFS2kHp8_TOZ83wkbcbFrdfsx8=" alt='Profile' width={60} height={60} />
            <div className='w-full p-4 space-y-4'>
                <section>
                    <label>Firstname</label>
                    <input {...register("firstName")} type="text" className='w-full bg-gray-100 h-10 px-2' placeholder='Enter firstname' />
                </section>
                <section>
                    <label>Lastname</label>
                    <input {...register("lastName")} type="text" className='w-full bg-gray-100 h-10 px-2' placeholder='Enter firstname' />
                </section>
                <section>
                    <label>Age</label>
                    <input {...register("age")} type="number" className='w-full bg-gray-100 h-10 px-2' placeholder='Enter firstname' />
                </section>
                <button type='submit' className='w-full bg-blue-700 text-white p-2.5'>Save Contact</button>
            </div>
        </form>
    )
}

export default CE_ContactForm