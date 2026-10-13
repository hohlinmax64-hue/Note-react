
import Input from "../UI/Input.jsx";
import {useParams} from "react-router-dom";

export default function NoteRead({readNotes, setTitle, setDescription}) {
    const param = useParams();
    const readerNote = readNotes(param.id)
    const {title, description, createdAt} = readerNote;
    return (
        <div className="my-6 mx-[25px] flex flex-col gap-10 w-full">
            <div>
                <Input className={'w-1/3.5 outline-none text-4xl mb-3'} value={title} onChange={(e) => setTitle(param.id, e)} placeholder={'Titel'}/>
                <p className='text-sl'>Created: {createdAt}</p>
            </div>
            <textarea className={'border-none w-full p-2 min-h-[500px] resize-none outline-none'} value={description} onChange={(e) => setDescription(param.id, e)} placeholder={'Description'}/>
        </div>
    )
}