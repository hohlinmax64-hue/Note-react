import Header from '../Layout/Header.jsx';
import SideBar from "../Layout/Sidebar.jsx";
import {Outlet} from "react-router-dom";

export default function Layout({tags, addTagName, deleteTagFromSideBar, selectTagByName}) {

    return (
        <div>
            <Header/>
            <div className='flex w-full h-screen overflow-hidden'>
                <SideBar tags={tags} addTagName={addTagName} selectTagByName={selectTagByName} deleteTagFromSideBar={deleteTagFromSideBar} />
                <Outlet/>
            </div>
        </div>
    )
}