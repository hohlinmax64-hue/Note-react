import Header from '../Layout/Header.jsx';
import SideBar from "../Layout/Sidebar.jsx";
import {Outlet} from "react-router-dom";

export default function Layout({input, setInput}) {

    return (
        <div>
            <Header input={input} setInput={setInput} />
            <div className='flex'>
                <SideBar />
                <Outlet/>
            </div>
        </div>
    )
}