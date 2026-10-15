import Input from "../UI/Input.jsx";
import {Link} from "react-router-dom";

export default function NoteForm({inputTitle, setInputTitle, inputContent, setInputContent, addNote, select, setSelectedCategory, btnFavorite, selectedTag, choicTag, favorite, tags, deleteChoiceTag,addTag, openModal, openModalWindow, inputNameTag, setInputNameTag}) {
    return (

    <div className="w-full max-w-5xl min-w-0 flex-1 h-full overflow-y-auto overflow-x-hidden bg-white border border-gray-200 rounded-2xl p-8 m-3 shadow-sm">
    <button className="mb-6 text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors duration-200">
        <Link to={'/'}>← Back to notes</Link>
    </button>

    <div className="my-2">
        <p className="text-3xl font-bold text-gray-900 mb-8">New Note</p>

        <div className="w-full">
            <div className="my-6 w-full">
                <p className="text-sm font-semibold text-gray-700 mb-2">Title</p>
                <Input
                    value={inputTitle.value}
                    onChange={setInputTitle}
                    placeholder="Give your note a title..."
                    className="border border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none rounded-xl w-full p-3 transition-all duration-200"
                />
            </div>

            <div className="my-6 w-full">
                <p className="text-sm font-semibold text-gray-700 mb-2">Category</p>
                <select
                    value={select}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none rounded-xl w-full p-3 text-gray-700 transition-all duration-200"
                >
                    <option value='-'>-</option>
                    <option value='Personal'>Personal</option>
                    <option value='Work'>Work</option>
                    <option value='Study'>Study</option>
                    <option value='Ideas'>Ideas</option>
                </select>
            </div>

            <div className="my-6 w-full">
                <p className="text-sm font-semibold text-gray-700 mb-2">Tags</p>

                <div className="relative border border-gray-200 bg-gray-50/70 rounded-xl w-full p-5 flex flex-col gap-8 justify-between">
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className="text-sm font-semibold text-gray-700 mb-4">
                                Выбранные теги
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                {selectedTag.map((tag) => (
                                    <span
                                        key={tag.id}
                                        className="inline-flex items-center text-sm font-medium text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-2"
                                    >
                                        {tag.name}
                                        <button
                                            onClick={() => deleteChoiceTag(tag.id)}
                                            className="ml-2 text-indigo-400 hover:text-red-500 transition-colors duration-200"
                                        >
                                            ✕
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-gray-700 mb-4">
                                Доступные теги
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span
                                        onClick={() => choicTag(tag.id)}
                                        key={tag.id}
                                        className="inline-flex text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full px-3 py-2 cursor-pointer hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200"
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        className="self-start text-sm font-semibold text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg px-3 py-2 transition-all duration-200"
                        onClick={() => openModalWindow()}
                    >
                        + Add tag
                    </button>
                </div>
            </div>

            <div className="my-6 w-full">
                <p className="text-sm font-semibold text-gray-700 mb-2">Content</p>
                <textarea
                    value={inputContent.value}
                    onChange={setInputContent}
                    className="border border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none rounded-xl w-full p-4 min-h-[220px] resize-y text-gray-700 placeholder:text-gray-400 transition-all duration-200"
                    placeholder="Start writing your thoughts..."
                />
            </div>
        </div>

        <button
            className="text-sm font-semibold my-3 px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors duration-200"
            onClick={() => btnFavorite(btnFavorite)}
        >
            {favorite ? '⭐ Remove from favorite' : '☆ Add to favorites'}
        </button>

        <div className="my-5 flex gap-3 justify-end border-t border-gray-100 pt-5">
            <button className="text-sm font-semibold cursor-pointer px-5 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors duration-200">
                <Link to={'/'}>Cancel</Link>
            </button>

            <button
                className="text-sm font-semibold cursor-pointer px-6 py-3 rounded-xl bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 hover:shadow-md active:scale-[0.98] transition-all duration-200"
                onClick={() => addNote()}
            >
                Save Note
            </button>
        </div>
    </div>

    {openModal && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90%] max-w-md flex flex-col sm:flex-row justify-center items-center gap-3 border border-gray-200 rounded-2xl bg-white p-6 shadow-2xl z-50">
            <input
                className="border border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none rounded-xl p-3 w-full min-w-0 transition-all duration-200"
                value={inputNameTag}
                onChange={setInputNameTag}
                placeholder="Enter tag name..."
            />
            <button
                className="border border-indigo-600 bg-indigo-600 text-white rounded-xl px-4 py-3 font-semibold hover:bg-indigo-700 transition-colors duration-200 whitespace-nowrap"
                onClick={() => addTag()}
            >
                Add Tag
            </button>
        </div>
    )}
    </div>

    )
}