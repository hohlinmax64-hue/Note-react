import Input from "../UI/Input.jsx";
import {Link} from "react-router-dom";

export default function NoteForm({inputTitle, setInputTitle, inputContent, setInputContent, addNote, select, setSelectedCategory, btnFavorite, selectedTag, choicTag, favorite, tags, deleteChoiceTag,addTag, openModal, openModalWindow, inputNameTag, setInputNameTag}) {
    return (
        <div className="w-full max-w-5xl border-2 border-gray-600 p-[12px] m-3">
            <button className='mb-4'>
                <Link to={'/'}>← Back to notes</Link>
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
                        <select value={select} onChange={(e) => setSelectedCategory(e.target.value)} className='border rounded-sm border-gray-900 w-full p-2'>
                            <option value='Personal'>Personal</option>
                            <option value='Work'>Work</option>
                            <option value='Study'>Study</option>
                            <option value='Ideas'>Ideas</option>
                        </select>
                    </div>
                    <div className='my-3 w-full'>

                        <p className='text-xl mb-2'>Tags</p>
                        <div className="relative border rounded-sm border-gray-900 w-full p-2 flex flex-col gap-10 justify-between">
                            <div className='flex flex-col gap-5'>
                                <div>
                                    <h2 className='mb-4'>Выбранные теги</h2>
                                    <div className='text-xl'>
                                        {selectedTag.map((tag) => (
                                            <span key={tag.id} className='text-sm border rounded-[26px] p-2 mr-2'>
                                                {tag.name}
                                                <button onClick={() => deleteChoiceTag(tag.id)} className='ml-2'>X</button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <h2>Доступные теги</h2>
                                    <div>
                                        {tags.map((tag) => (
                                            <span onClick={() => choicTag(tag.id)} key={tag.id} className='text-sm border rounded-[26px] p-2 mr-1'>{tag.name}</span>
                                        ))}
                                    </div>
                                </div>
                            <button className="cursor-pointer" onClick={() => openModalWindow()}> + Add tag </button>
                        </div>
                    </div>
                    <div className='my-3 w-full'>
                        <p className='text-xl mb-2'>Content</p>
                        <textarea value={inputContent.value} onChange={setInputContent} className="border rounded-sm border-gray-900 w-full p-2 min-h-[200px] resize-none" placeholder="Content" />
                    </div>
                </div>
                <button className='text-xl my-3' onClick={() => btnFavorite(btnFavorite)}>{favorite ? 'Remove from favorite' : 'Add to favorites'}</button>
                <div className='my-3 flex gap-2 justify-end'>
                    <button className='text-xl cursor-pointer'>
                        <Link to={'/'}>Cancel</Link>
                    </button>
                    <button className='text-xl cursor-pointer' onClick={() => addNote()}>Save Note</button>
                </div>
            </div>
            {openModal && <div className='absolute top-1/3 left-1/2 w-1/4.5 h-1/5 flex justify-center items-center gap-3 border-2 border-gray-600 rounded-xl bg-white p-8'>
                <input className=' border border-gray-700 rounded-xl p-[6px]' value={inputNameTag} onChange={setInputNameTag}/>
                <button className='border border-gray-900 rounded-2xl p-1' onClick={() => addTag()}>Add Tag</button>
            </div>}
        </div>

    )
}