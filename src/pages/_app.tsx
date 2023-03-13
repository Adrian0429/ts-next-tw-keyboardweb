import "@/styles/globals.css";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import type { AppProps } from "next/app";


import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </QueryClientProvider>
  );
   
}
