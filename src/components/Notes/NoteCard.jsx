import Button from "../UI/Button.jsx";

export default function NoteCard({title, description, category, tags,createdAt, updatedAt, favorite, content}) {
    return (
            <div  className="border-2 rounded-[10px] border-gray-200 w-[300px] h-[250px] p-[12px] ">
                <h2>{title}</h2>
                <h2>{favorite ? "⭐️" : "☆"}</h2>
                <div className="flex flex-row gap-2">
                    <p>{tags[0]}</p>
                    <p>{tags[1]}</p>
                    <p>{tags[2]}</p>
                </div>
                <p className='line-clamp-2'>{description}</p>
                <span className='text-[12px]'>{category}</span>
                <h3>{createdAt}</h3>
            </div>
    )
}

