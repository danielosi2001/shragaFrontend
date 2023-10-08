import { useState } from "react";
import Sidebar from "./sideBar/sideBar";
import './layout.scss'
import Header from "./header/header";
import Content from "./content/content";

function Layout() {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={`layout ${open ? 'layout-open' : 'layout-closed'}`}>
            <Sidebar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
            <div className="headerContent">
                <Header />
                <Content/>
            </div>
        </div>
    );
}

export default Layout;