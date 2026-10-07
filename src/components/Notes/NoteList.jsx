import NoteCard from "./NoteCard.jsx";


export default function NotesList({notesSearch, addToFavorites}) {
    const item = notesSearch.map((item) => {
        return (
            <NoteCard
                key={item.id}
                id={item.id}
                title={item.title}
                tags={item.tags}
                description={item.description}
                category={item.category}
                createdAt={item.createdAt}
                favorite={item.favorite}
                updatedAt={item.updatedAt}
                addToFavorites={addToFavorites}
            />
        )
    })

    return (
        <div className="h-[550px] flex gap-10 items-start flex-wrap mt-8 mx-auto overflow-y-scroll">
            {item.length === 0 ? <p className='mx-auto'>Not is empty</p> : item}
        </div>
    )
}