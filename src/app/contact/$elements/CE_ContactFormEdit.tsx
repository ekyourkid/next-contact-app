'use client'

import Image from 'next/image'
import React from 'react'

import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from 'next/navigation'
import { ACT_EditContact } from '../$actions/action.edit.contact'

type TCreateContact = {
    firstName: string
    lastName: string
    age: number
}

const CE_ContactForm = ({ id, defaultValues }: { id?: string, defaultValues: any }) => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
    } = useForm<TCreateContact>({
        defaultValues: {
            firstName: defaultValues?.data?.firstName || '',
            lastName: defaultValues?.data?.lastName || '',
            age: defaultValues?.data?.age || 0,
        }
    })

    const onSubmit: SubmitHandler<TCreateContact> = async (data) => {
        if (!id) return

        const resp = await ACT_EditContact(id, { ...data, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrQVoahVLZMoEKW9tAtR_BTPcnyj5Vdjv4huc1dR5NJMKRrJwsWZ33pKeUhQMm8JWfV4&usqp=CAU" })
        router.push(`/contact/${id}`)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full p-4 space-y-4'>
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
            <button type='submit' className='w-full bg-blue-700 text-white p-2.5'>Save Changes</button>
        </form>
    )
}

export default CE_ContactForm