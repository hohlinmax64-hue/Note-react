import {Link} from "react-router-dom";

export default function Sidebar() {

    return (
        <div className="w-1/4 h-screen bg-gray-500 p-4">
            <nav className=' flex flex-col items-center'>
                <Link to='/'>All Notes</Link>
                <Link to='/favorites'>favorites</Link>
                <Link to='/categories'>Categories</Link>
            </nav>
        </div>
    )
}