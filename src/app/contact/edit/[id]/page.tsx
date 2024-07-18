import Image from 'next/image'
import React from 'react'
import CE_ContactForm from '../../$elements/CE_ContactFormEdit'
import { ACT_GetContactDetail } from '../../$actions/action.get.contact.detail'
import { IRs_GetContactDetail } from '@/api/contact/api.get.contact.detail'

type Props = {
    params: { id: string }
}
const EditContactPage = async (props: Props) => {
    const { id } = props.params
    const data = await ACT_GetContactDetail({ id })


    return (
        <main className="min-h-screen w-full bg-[#F4F6F8] space-y-5">
            <div className='px-10'>
                <div className='bg-white'>
                    <section className='bg-gray-200 pt-5 h-40' />
                    <section className='flex flex-col justify-center items-center -mt-20'>
                        <Image className='rounded-full size-28 object-cover mt-10' src="https://media.istockphoto.com/id/506977173/photo/entrepreneur-speaking.webp?b=1&s=170667a&w=0&k=20&c=kMfm_ffl34BHSonOEzFS2kHp8_TOZ83wkbcbFrdfsx8=" alt='Profile' width={60} height={60} />
                        <CE_ContactForm id={id} defaultValues={data as IRs_GetContactDetail} />
                    </section>
                </div>
            </div>
        </main >
    )
}

export default EditContactPage