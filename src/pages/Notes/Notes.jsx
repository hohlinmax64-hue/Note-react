import Button from "../../components/UI/Button.jsx";
import FilterBar from "../../components/Search/FilterBar.jsx";
import NotesList from "../../components/Notes/NoteList.jsx";
import {Link} from "react-router-dom";

export default function Notes({input, setInput, notesSearch, select, setSelected, selectDate, setSelectedDate, addToFavorites}) {

    return (
            <div className="w-full my-10 mx-12">
                <div className="flex flex-row justify-between border-2 border-gray-900 my-3">
                    <h2 className='text-2xl'>All Notes</h2>
                    <Button className={'text-xl cursor-pointer'}>
                        <Link to={'/noteform'}>+ New Note</Link>
                    </Button>
                </div>

                <FilterBar input={input}
                           setInput={setInput}
                           select={select}
                           seSelcet={setSelected}
                           selectDate={selectDate}
                           setSelectedDate={setSelectedDate}
                />
                <NotesList notesSearch={notesSearch} addToFavorites={addToFavorites}/>
            </div>
    )
}