
export default function LoginForm() {
    return(
        <div className='p-5 m-5 bg-white flex max-w-md rounded'>
            <form>
                <h1 className='m-3 font-extrabold text-2xl text-rose-500'>Log In</h1>
                <div className='m-3'>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' className='rounded-lg ml-5' id='email' name='email'></input>
                </div>
                <div className='m-3'>
                    <label htmlFor='password'>Password:</label>
                    <input type='text' className='rounded-lg ml-6' id='password' name='password'></input>
                </div>
                <label>
                    <input type="checkbox" className="rounded text-pink-500 ml-11 m-2"  /> 
                    I accept Terms & Conditions
                </label>

                

                <input className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-rose-700 rounded-lg focus:shadow-outline hover:bg-rose-800" type='submit' value='Log In' ></input> 
            </form>
        </div>
    )
}