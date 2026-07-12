import { Outlet } from "react-router-dom";


import Header from "../components/Header";
import Footer from "../components/Footer";


function AppLayout() {
    return (
        <>
            <Header/>
            <main className="flex flex-col 
            pt-16 bg-[#fafafa] text-pretty tracking-wider p-4 
            py-16 md:py-24
            flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </>

    )
}

export default AppLayout
