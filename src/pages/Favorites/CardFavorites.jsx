import {Link} from "react-router-dom";

export default function CardFavorites({id, title, description, category, tags, createdAt, favorite, deleteFavorite, deleteNote}){

    return (
        <div className="group flex h-[260px] w-[300px] flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg">
            <div className="flex flex-col gap-3">
                <h2 className="line-clamp-1 text-lg font-bold text-gray-800">
                    {title}
                </h2>

                <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 3).map((tag, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                    {description}
                </p>

                <span className="w-fit rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500">
                    {category}
                </span>
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                <span className="text-xs text-gray-400">
                    {createdAt}
                </span>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="flex h-9 w-9 items-center justify-center rounded-xl text-lg transition-colors hover:bg-amber-50 hover:text-amber-500"
                        onClick={() => deleteFavorite(id)}
                    >
                        {favorite ? "⭐" : "☆"}
                    </button>

                    <button
                        type="button"
                        aria-label="Удалить заметку"
                        className="flex h-9 w-9 items-center justify-center rounded-xl text-base text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                        onClick={() => deleteNote(id)}
                    >
                        🗑️
                    </button>
                </div>
            </div>
        </div>
    )
}