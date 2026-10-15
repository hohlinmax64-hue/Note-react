
import Input from "../UI/Input.jsx";
import {useParams} from "react-router-dom";

export default function NoteRead({readNotes, setTitle, setDescription}) {
    const param = useParams();
    const readerNote = readNotes(param.id)
    const {title, description, createdAt} = readerNote;
    return (

<div className="my-8 mx-[25px] flex flex-col gap-8 w-full max-w-5xl">

    <div className="flex flex-col gap-3">
        <Input
            className="w-2/3 max-w-3xl outline-none border-none bg-transparent text-4xl font-bold tracking-tight text-gray-800 placeholder:text-gray-300 focus:ring-0 mb-3"
            value={title}
            onChange={(e) => setTitle(param.id, e)}
            placeholder="Titel"
        />

        <p className="text-sm text-gray-400 font-medium">
            Created: {createdAt}
        </p>
    </div>

    <textarea
        className="border-none w-full min-h-[500px] resize-none outline-none bg-transparent p-2 text-base leading-8 text-gray-700 placeholder:text-gray-300 focus:ring-0"
        value={description}
        onChange={(e) => setDescription(param.id, e)}
        placeholder="Start writing your thoughts..."
    />

</div>
    )
}