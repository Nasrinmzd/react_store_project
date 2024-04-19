import Footer from "../components/Footer"
import PageNav from "../components/header/PageNav"
import {Outlet} from "react-router-dom"


function Layout({searchTerm, setSearchTerm}) {

    return (
        <div>
            <PageNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
