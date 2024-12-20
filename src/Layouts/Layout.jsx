import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import AdminPage from "../Pages/AdminPage/AdminPage";
import UserPage from "../Pages/UserPage/UserPage";

const Layout = ({children}) => {

    const moduleRender = {
        'abcs': Sidebar,
        'admin': ()=>{return <AdminPage />},
        'user': ()=>{return <UserPage />},
        'pxdd': 'pageModule_Servicio'
    }

    return(
        <div>
            <Sidebar />
            {/* {moduleRender[props.role]} */}
            {children} 
        </div>
    )
}

export default Layout;