import React from 'react'
import CE_ContactForm from '../$elements/CE_ContactForm'

const CreateContactPage = () => {
    return (
        <main className="min-h-screen w-full bg-[#F4F6F8] space-y-5">
            <div className='px-10'>
                <div className='bg-white '>
                    <section className=' bg-gray-200 pt-5 h-40' />
                    <CE_ContactForm />
                </div>
            </div>
        </main >
    )
}

export default CreateContactPage