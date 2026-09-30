import {Link} from "react-router-dom";

export default function Sidebar() {

    return (
        <div className="w-1/4 h-screen bg-gray-500 px-4 pt-20">
            <nav className='flex flex-col text-xl text-white '>
                <div className='flex flex-col gap-2 mb-4'>
                    <Link to='/notes'>📋All Notes</Link>
                    <Link to='/favorites'>⭐Favorites</Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl'>Categories:</h2>
                    <Link to='/categories/ideas'>💡Ideas</Link>
                    <Link to='/categories/personal'>🏡Personal</Link>
                    <Link to='/categories/work'>💻 Work</Link>
                    <Link to='/categories/study'>📚Study</Link>
                </div>
            </nav>
        </div>
    )
}