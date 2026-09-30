import Button from "../../components/UI/Button.jsx";
import FilterBar from "../../components/Search/FilterBar.jsx";
import NotesList from "../../components/Notes/NoteList.jsx";
import {Link} from "react-router-dom";

export default function Notes({notes, input, setInput}) {

    return (
            <div className="w-full my-10 mx-12">
                <div className="flex flex-row justify-between border-2 border-gray-900 my-3">
                    <h2 className='text-2xl'>All Notes</h2>
                    <Button className={'text-xl cursor-pointer'}>
                        <Link to={'/noteform'}>+ New Note</Link>
                    </Button>
                </div>

                <FilterBar input={input} setInput={setInput} />
                <NotesList notes={notes}/>
            </div>
    )
}