import { Outlet } from "react-router-dom";


import Header from "../components/Header";
import Footer from "../components/Footer";


function AppLayout() {
    return (
        <>
            <Header/>
            <main className="flex flex-col gap-8
            p-4 pt-16 bg-[#fafafa] ">
                <Outlet/>
            </main>
            <Footer/>
        </>

    )
}

export default AppLayout
