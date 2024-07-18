'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const CE_Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <header className='flex justify-between w-full bg-white p-5'>
            {pathname !== '/' ? <Link onClick={() => router.back()} href="#">Back</Link> : <div className='font-bold text-blue-600'>Contact App v1.0</div>}
            <nav className="space-x-6">
                <Link href="/">Home</Link>
                <Link href="/contact/create" className="p-1.5 px-2 bg-blue-700 text-white rounded">+ New Contact</Link>
            </nav>
        </header>
    )
}

export default CE_Navbar