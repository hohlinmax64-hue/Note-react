import NoteCard from "./NoteCard.jsx";


export default function NotesList({notes}) {
    const item = notes.map((item) => {
        return (
            <NoteCard
                key={item.id}
                title={item.title}
                tags={item.tags}
                description={item.description}
                category={item.category}
                createdAt={item.createdAt}
                favorite={item.favorite}
                updatedAt={item.updatedAt}
            />
        )
    })

    return (
        <div className="flex justify-between items-start flex-wrap mt-8">
            {item.length === 0 ? <p className='mx-auto'>Not is empty</p> : item}
        </div>
    )
}