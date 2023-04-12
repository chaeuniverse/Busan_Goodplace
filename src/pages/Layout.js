import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ gugun }) => {
    return (
        <>
            <Header gugun={gugun} />

            <Outlet />
        </>
    )
}

export default Layout;