import {Link} from "react-router-dom";

export default function Sidebar({tags, deleteTagFromSideBar}) {

    return (
        <div className="w-1/4 h-screen px-4 pt-20">
            <nav className='flex flex-col text-xl text-gray-800 '>
                <div className='flex flex-col gap-2 mb-4'>
                    <Link to='/'>📋All Notes</Link>
                    <Link to='/favorites'>⭐Favorites</Link>
                </div>
                <div className='flex flex-col gap-2 mb-5'>
                    <h2 className='text-2xl'>Categories:</h2>
                    <Link to='/categories/ideas'>💡Ideas</Link>
                    <Link to='/categories/personal'>🏡Personal</Link>
                    <Link to='/categories/work'>💻 Work</Link>
                    <Link to='/categories/study'>📚Study</Link>
                </div>
                <h2 className='text-2xl mb-3.5'>Tags:</h2>
                <div className='flex flex-wrap gap-3'>
                    {tags.map((tag) => (
                        <span className='text-sm border rounded-[26px] p-2' key={tag.id}>
                            {tag.name}
                            <button onClick={() => deleteTagFromSideBar(tag.id)} className='ml-2'>✕</button>
                        </span>
                    ))}
                </div>
            </nav>
        </div>
    )
}