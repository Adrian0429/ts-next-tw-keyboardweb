import Footer from "components/Footer";
import Hero from "components/Hero";
import Navbar from "components/Navbar";
import React from "react";

type LayoutContent = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutContent) =>{
    return(

        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    );
}


export default Layout