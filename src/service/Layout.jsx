import Footer from "../components/Footer"
import PageNav from "../components/header/PageNav"
import {Outlet} from "react-router-dom"


function Layout() {
    return (
        <div>
            <PageNav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
