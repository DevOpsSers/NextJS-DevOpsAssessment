import '../styles/globals.css'
import Header from  '../components/Header'
import {QueryClient, QueryClientProvider} from "react-query"


const queryClient = new QueryClient();


function MyApp({ Component, pageProps }) {
  return (<div className='bg-rose-400 min-h-screen w-screen overflow-x-auto'>
    
    <Header/>

    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />

    </QueryClientProvider>
    
    
    </div>)
}

export default MyApp
