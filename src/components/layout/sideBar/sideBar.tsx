import './sideBar.scss';
import openIcon from '../../../assets/next.png';
import closeIcon from '../../../assets/left-chevron.png'
import { NavLink } from 'react-router-dom';
import allRouterIcon from '../../../assets/portal.png'

interface sideBarProps {
    open: boolean;
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void;
}
function Sidebar({ open, handleDrawerOpen, handleDrawerClose }: sideBarProps): JSX.Element {

    return (
        <section className={`app-sidebar ${open ? 'app-sidebar-open' : 'app-sidebar-closed'}`}>
            {open ? <button className="close-button" onClick={handleDrawerClose}><img src={closeIcon} /></button> :
                <button className="menu-button" onClick={handleDrawerOpen}><img src={openIcon} /></button>}
            <nav className={`${open ? 'nav-open' : 'nav-closed'}`}>
                {open ? <><NavLink to={'/'}>All</NavLink>
                    <NavLink to={'/Infinity'}>Infinity</NavLink>
                    <NavLink to={'/Spider'}>Spider</NavLink>
                    <NavLink to={'/Basis'}>Basis</NavLink>
                    <NavLink to={'/Tar'}>Tar</NavLink>
                </> : <>
                    <NavLink to={'/'}><img width={'50px'} src={allRouterIcon} /></NavLink>
                    <NavLink to={'/Infinity'}><img width={'50px'} src={allRouterIcon} /></NavLink>
                    <NavLink to={'/Spider'}><img width={'50px'} src={allRouterIcon} /></NavLink>
                    <NavLink to={'/Basis'}><img width={'50px'} src={allRouterIcon} /></NavLink>
                    <NavLink to={'/Tar'}><img width={'50px'} src={allRouterIcon} /></NavLink>

                </>}

            </nav>
        </section>
    );
}

export default Sidebar;