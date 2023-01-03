import '../styles/globals.css'
import Header from  '../components/Header'
import {QueryClient, QueryClientProvider} from "react-query"

const queryClient = new QueryClient();
import { SessionProvider } from "next-auth/react"

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (<div className='bg-rose-400 min-h-screen w-screen overflow-x-auto'>
    

    <SessionProvider session={session}>
    
  
      <Header/>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      
    </SessionProvider>
    
    
    </div>)
}

export default MyApp
