import Image from "next/image"
import Link from "next/link"
import {ArrowLeftOnRectangleIcon} from "@heroicons/react/24/outline"
import {signIn, signOut} from "next-auth/react"
import useSession from "../pages/hooks/useNextAuth"

export default function Header(){

  const {data: session} = useSession()

  return(<div className='max-w-full relative'>
    <nav className='p-5 bg-white flex justify-between border-b-2 border-grey-500 fix top-0 left-0 right-0 fix '>
      <Link href='/'>
        <Image alt='logo' layout='fixed' src='/img/logo.png' width={100} height={100} className='cursor-pointer'/>
      </Link>
      <div className='flex justify-between'>
          <a href='/'><h1 className='m-2 '>Recipify</h1></a>
          <h1 className='m-2'>Categories</h1>
          {session &&(<a href='/recipes/create'><h1 className='m-2'>Add a recipe</h1></a>)}
          {session &&(<a href='/'><h1 className='m-2'>Favourites</h1></a>)}
          {session &&(<a href='/'><h1 className='m-2'>My Recipes</h1></a>)}
      </div>
      
      <div>
          {!session && (
            <div onClick={() => signIn()} className='flex'>
              <ArrowLeftOnRectangleIcon className="h-5 w-5 mt-0.5" data-test="recipe-ingredients"/>Login
            </div>
          )}
          {session && (
            <div onClick={() => signOut()}>
              <div> Hi {session.user.name}</div>
              <div className='flex'><ArrowLeftOnRectangleIcon className="h-5 w-5 mt-0.5"/>LogOut</div>
            </div>
          )}
          
          
      </div>
    </nav>

  </div>)
}