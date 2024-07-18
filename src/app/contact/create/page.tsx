import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CreateContactPage = () => {
    return (
        <main className="min-h-screen w-full bg-[#F4F6F8] space-y-5">
            <div className='px-10'>
                <div className='bg-white '>
                    <section className=' bg-gray-200 pt-5 h-40' />
                    <section className='flex flex-col justify-center items-center -mt-20'>
                        <Image className='rounded-full size-28 object-cover mt-10' src="https://media.istockphoto.com/id/506977173/photo/entrepreneur-speaking.webp?b=1&s=170667a&w=0&k=20&c=kMfm_ffl34BHSonOEzFS2kHp8_TOZ83wkbcbFrdfsx8=" alt='Profile' width={60} height={60} />
                        <form className='w-full p-4 space-y-4'>
                            <section>
                                <label>Firstname</label>
                                <input type="text" className='w-full bg-gray-100 h-10 px-2' placeholder='Enter firstname' />
                            </section>
                            <section>
                                <label>Lastname</label>
                                <input type="text" className='w-full bg-gray-100 h-10 px-2' placeholder='Enter firstname' />
                            </section>
                            <section>
                                <label>Age</label>
                                <input type="number" className='w-full bg-gray-100 h-10 px-2' placeholder='Enter firstname' />
                            </section>
                            <button className='w-full bg-blue-700 text-white p-2.5'>Save Contact</button>
                        </form>
                    </section>
                </div>
            </div>
        </main >
    )
}

export default CreateContactPage