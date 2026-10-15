import NoteCard from "./NoteCard.jsx";


export default function NotesList({notesSearch, addToFavorites, deleteNote}) {
    const item = notesSearch.map((item) => {
        return (
            <NoteCard
                key={item.id}
                id={item.id}
                title={item.title}
                tags={item.tagsNote}
                description={item.description}
                category={item.category}
                createdAt={item.createdAt}
                favorite={item.favorite}
                updatedAt={item.updatedAt}
                addToFavorites={addToFavorites}
                deleteNote={deleteNote}
            />
        )
    })

    return (
        <div className="h-[550px] flex gap-6 items-start flex-wrap mt-8 mx-auto overflow-y-auto px-5 py-4 content-start scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {item.length === 0 ? (
                <p className="mx-auto mt-20 text-gray-400 text-lg font-medium">
                    No notes yet ✨
                </p>
            ) : item}
        </div>
    )
}