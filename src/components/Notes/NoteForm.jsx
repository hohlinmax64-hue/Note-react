import Input from "../UI/Input.jsx";
import {Link} from "react-router-dom";

export default function NoteForm({inputTitle, setInputTitle, inputContent, setInputContent, addNote, selectCategory, setSelectedCategory}) {

    return (
        <div className="w-full max-w-5xl border-2 border-gray-600 p-[12px] m-3">
            <button className='mb-4'>
                <Link to={'/notes'}>← Back to notes</Link>
            </button>
            <div className="my-2">
                <p className='text-xl mb-4'>New Note</p>
                <div className='w-full'>
                    <div className='my-3 w-full'>
                        <p className='text-xl mb-2'>Title</p>
                        <Input value={inputTitle.value} onChange={setInputTitle} placeholder="Title" className={'border rounded-sm  border-gray-900 w-full p-2'} />
                    </div>

                    <div className="my-3 w-full">
                        <p className='text-xl mb-2'>Category</p>
                        <select value={selectCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className='border rounded-sm  border-gray-900 w-full p-2'>
                            <option value='Personal'>Personal</option>
                            <option value='Work'>Work</option>
                            <option value='Study'>Study</option>
                            <option value='Ideas'>Ideas</option>
                        </select>
                    </div>
                    <div className='my-3 w-full'>
                        <p className='text-xl mb-2'>Tags</p>
                        <div className="border rounded-sm border-gray-900 w-full p-2 flex justify-between items-center">
                            <span>React Hooks</span>
                            <button className="cursor-pointer"> + Add tag </button>
                        </div>
                    </div>
                    <div className='my-3 w-full'>
                        <p className='text-xl mb-2'>Content</p>
                        <textarea value={inputContent.value} onChange={setInputContent} className="border rounded-sm border-gray-900 w-full p-2 min-h-[200px] resize-none" placeholder="Content" />
                    </div>
                </div>
                <button className='text-xl my-3'>Add to favorites</button>
                <div className='my-3 flex gap-2 justify-end'>
                    <button className='text-xl cursor-pointer'>
                        <Link to={'/notes'}>Cancel</Link>
                    </button>
                    <button className='text-xl cursor-pointer' onClick={() => addNote()}>Save Note</button>
                </div>
            </div>
        </div>
    )
}