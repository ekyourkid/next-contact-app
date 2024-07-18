import SE_ProfileHeader from '@/components/contact/SE_ProfileHeader'
import Link from 'next/link'
import React from 'react'

type Props = {
    params: { id: string }
};

const ContactDetailPage = (props: Props) => {
    const { id } = props.params
    return (
        <main className="min-h-screen w-full bg-[#F4F6F8] space-y-5">
            <SE_ProfileHeader />
            <div className="divide-y px-10">
                <section className='bg-white p-5'>
                    <article className="py-2 flex flex-col space-y-3">
                        <h1 className="font-semibold">Profile</h1>
                        <Link href={`/contact/edit/${id}`} className="font-light">Manage profile</Link>
                        <Link href={"#"} className="font-light text-red-500">Delete this contact</Link>
                    </article>
                </section>
            </div>
            <div className="divide-y px-10">
                <section className='bg-white p-5'>
                    <article className="py-2 flex flex-col space-y-3">
                        <h1 className="font-semibold">Help & articles</h1>
                        <Link href={"#"} className="font-light">Send feedback</Link>
                        <Link href={"#"} className="font-light">Chat with us</Link>
                        <Link href={"#"} className="font-light">About the apps</Link>
                    </article>
                </section>
            </div>
        </main>
    )
}

export default ContactDetailPage