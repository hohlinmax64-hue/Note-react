import {Link} from "react-router-dom";

export default function Sidebar({tags, addTagName, deleteTagFromSideBar, selectTagByName}) {

    return (
        <div className="w-72 min-w-72 max-w-72 h-screen shrink-0 px-5 pt-20 bg-gray-50 border-r border-gray-200 overflow-y-auto overflow-x-hidden">
            <nav className="flex flex-col text-base text-gray-700 font-medium">

                <div className="flex flex-col gap-2 mb-8">
                    <Link
                        to='/'
                        className="flex items-center gap-3 rounded-xl px-4 py-3 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-all duration-200"
                    >
                        📋 All Notes
                    </Link>
                    <Link
                        to='/favorites'
                        className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-200/70 hover:text-indigo-700 transition-all duration-200"
                    >
                        ⭐ Favorites
                    </Link>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 px-4">
                        Categories
                    </h2>
                    <Link
                        to='/categories/ideas'
                        className="rounded-xl px-4 py-3 hover:bg-gray-200/70 hover:text-indigo-700 transition-all duration-200"
                    >
                        💡 Ideas
                    </Link>
                    <Link
                        to='/categories/personal'
                        className="rounded-xl px-4 py-3 hover:bg-gray-200/70 hover:text-indigo-700 transition-all duration-200"
                    >
                        🏡 Personal
                    </Link>
                    <Link
                        to='/categories/work'
                        className="rounded-xl px-4 py-3 hover:bg-gray-200/70 hover:text-indigo-700 transition-all duration-200"
                    >
                        💻 Work
                    </Link>
                    <Link
                        to='/categories/study'
                        className="rounded-xl px-4 py-3 hover:bg-gray-200/70 hover:text-indigo-700 transition-all duration-200"
                    >
                        📚 Study
                    </Link>
                </div>

                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 px-4">
                    Tags
                </h2>

                <div className="flex flex-wrap gap-2 px-1">
                    {tags.map((tag) => (
                        <span
                            onClick={() => addTagName(tag.name)}
                            className={`inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full px-3 py-2 shadow-sm hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200
                            ${selectTagByName.includes(tag.name) 
                                ? "bg-indigo-100 border-indigo-400 text-indigo-700"
                                : "bg-white border-gray-200 text-gray-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"}`}
                            key={tag.id}
                        >
                        {tag.name}
                            <button
                                onClick={() => deleteTagFromSideBar(tag.id)}
                                className="ml-1 flex items-center justify-center w-5 h-5 rounded-full text-gray-400 hover:bg-red-100 hover:text-red-500 transition-colors duration-200"
                            >
                            ✕
                            </button>
                        </span>
                    ))}
                </div>

            </nav>
        </div>
    )
}