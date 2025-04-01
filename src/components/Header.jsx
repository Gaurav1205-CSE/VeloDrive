import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import Search from './Search'; 
import Logo from './Logo';

function Header() {
    const {user,isSignedIn}=useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
        <Link to={'/'}>
            <Logo />
        </Link>
        <ul className='hidden md:flex gap-16'>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>
                <Link to='/'>Home</Link>
            </li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>
                <Link to='/search'>Search</Link>
            </li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>
                <Link to='/new'>Location</Link>
            </li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>
                <Link to='/preowned'>Preowned</Link>
            </li>
        </ul>

        {isSignedIn?
            <div className='flex items-center gap-5'>
                <UserButton/>
                <Link to={'/profile'}>
                    <Button>Submit Listing</Button>
                </Link>
            </div>
            :
            <SignInButton mode="modal" fallbackRedirectUrl='/profile'>
            <Button>Submit Listing</Button>
            </SignInButton>
        }
    </div>
  )
}

export default Header