import Image from 'next/image'
import Link from 'next/link'
import {ArrowLeftOnRectangleIcon} from '@heroicons/react/24/outline'

export default function Header(){

     return(<div className='max-w-full relative'>
     <nav className='p-5 bg-white flex justify-between border-b-2 border-grey-500 fix top-0 left-0 right-0 fix '>
        <Link href='/'>
          <Image alt='logo' layout='fixed' src='/img/logo.png' width={100} height={100} className='cursor-pointer'/>
        </Link>
        <div className='flex justify-between'>
            <h1 className='m-2 '>Recipify</h1>
            <h1 className='m-2'>Recipes</h1>
            <h1 className='m-2'>Favourites</h1>
            <h1 className='m-2'>Categories</h1>
            <h1 className='m-2'>My Recipes</h1>
        </div>
       
        <div>
            <a href='/login' className='flex'>
                <ArrowLeftOnRectangleIcon className="h-5 w-5 mt-0.5"/>Login
            </a>
        </div>
      </nav>

    </div>)
}