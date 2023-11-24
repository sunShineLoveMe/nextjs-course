import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image src='/assets/images/logo.svg' alt="Promptopia Logo" 
                    className="object-contain" width={30} height={30}/>
            </Link>
        </nav>
    )
}

export default Nav