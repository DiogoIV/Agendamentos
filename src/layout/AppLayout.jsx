import { Outlet } from "react-router-dom";


import Header from "../components/Header";
import Footer from "../components/Footer";


function AppLayout() {
    return (
        <>
            <Header/>
            <main className="flex flex-col 
            bg-[#fafafa] text-pretty tracking-wider
            min-h-dvh
            flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </>

    )
}

export default AppLayout
