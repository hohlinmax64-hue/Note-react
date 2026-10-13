import Header from '../Layout/Header.jsx';
import SideBar from "../Layout/Sidebar.jsx";
import {Outlet} from "react-router-dom";

export default function Layout({tags, deleteTagFromSideBar}) {

    return (
        <div>
            <Header/>
            <div className='flex'>
                <SideBar tags={tags} deleteTagFromSideBar={deleteTagFromSideBar} />
                <Outlet/>
            </div>
        </div>
    )
}