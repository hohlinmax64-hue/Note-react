import WorkNote from "./WorkNote.jsx";

export default function Work({workNotes, deleteNote, deleteFavorite}) {
    let itemWork = workNotes()
    let item = itemWork.map(work => {
        return (
            <WorkNote
                key={work.id}
                id={work.id}
                title={work.title}
                tags={work.tags}
                description={work.description}
                category={work.category}
                createdAt={work.createdAt}
                favorite={work.favorite}
                updatedAt={work.updatedAt}
                deleteFavorite={deleteFavorite}
                deleteNote={deleteNote}
            />
        )
    })
    return (
        <div className="h-[550px] flex gap-6 items-start flex-wrap mt-8 mx-auto overflow-y-auto px-5 py-4 content-start scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {item.length === 0 ? (
                <div className="flex min-h-[200px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-6 py-10 text-center">
                    <span className="mb-3 text-4xl">📝</span>
                    <h3 className="text-base font-semibold text-gray-700">
                        Заметок пока нет
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                        Создай первую заметку — она появится здесь
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {item}
                </div>
            )}
        </div>
    )
}