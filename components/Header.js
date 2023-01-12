import Image from "next/image"
import Link from "next/link"
import {ArrowLeftOnRectangleIcon} from "@heroicons/react/24/outline"
import {signIn, signOut} from "next-auth/react"
import useSession from "../hooks/useNextAuth"

export default function Header(){

  const {data: session} = useSession()

  return(<div className='max-w-full relative'>
    <nav className='p-5 bg-white flex justify-between border-b-2 border-grey-500 fix top-0 left-0 right-0 fix '>
      <Link href='/'>
        <Image alt='logo' layout='fixed' src='/img/logo.png' width={100} height={100} className='cursor-pointer'/>
      </Link>
      <div className='flex justify-between mt-10'>
        <a href='/'><h1 className='m-2  font-bold transition duration-150 border-b-8 border-transparent hover:border-red-400'>Recipify</h1></a>
        <a href='/'><h1 className='m-2  font-bold transition duration-150 border-b-8 border-transparent hover:border-red-400'>Categories</h1></a>
        {session &&(<a href='/recipes/create'><h1 className='m-2 font-bold transition duration-150 border-b-8 border-transparent hover:border-red-400'>Add a recipe</h1></a>)}
        {session &&(<a href='/'><h1 className='m-2  font-bold transition duration-150 border-b-8 border-transparent hover:border-red-400'>Favourites</h1></a>)}
        {session &&(<a href='/'><h1 className='m-2  font-bold transition duration-150 border-b-8 border-transparent hover:border-red-400'>My Recipes</h1></a>)}
      </div>
      
      <div>
          {!session && (
            <div onClick={() => signIn()} className='flex m-10'>
              <ArrowLeftOnRectangleIcon className="h-5 w-5 mt-0.5" data-test="recipe-ingredients"/>Login
            </div>
          )}
          {session && (
            <div className="p-3">
              <div className="flex p-1 border-2 border-black rounded-2xl">
                <div className=""><img src={session.user.image} className="w-12 rounded-3xl"/></div>
                <div className="m-2.5"> Hi {session.user.name}</div>
              </div>
              <div  onClick={() => signOut()} className='flex ml-20 mt-2'><ArrowLeftOnRectangleIcon className="h-5 w-5 mt-0.5"/>LogOut</div>
            </div>
          )}
          
          
      </div>
    </nav>

  </div>)
}