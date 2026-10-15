import Button from "../../components/UI/Button.jsx";
import FilterBar from "../../components/Search/FilterBar.jsx";
import NotesList from "../../components/Notes/NoteList.jsx";
import {Link} from "react-router-dom";

export default function Notes({input, setInput, notesSearch, select, setSelected, selectDate, setSelectedDate, addToFavorites, deleteNote}) {

    return (
<div className="w-full my-10 mx-12 pr-12">
    <div className="flex flex-row items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800">
            All Notes
        </h2>

        <Button className="text-base font-semibold cursor-pointer bg-indigo-600 text-white px-5 py-3 rounded-xl shadow-sm hover:bg-indigo-700 hover:shadow-md active:scale-95 transition-all duration-200">
            <Link to={'/noteform'}>+ New Note</Link>
        </Button>
    </div>

    <FilterBar
        input={input}
        setInput={setInput}
        select={select}
        seSelcet={setSelected}
        selectDate={selectDate}
        setSelectedDate={setSelectedDate}
    />

    <NotesList
        notesSearch={notesSearch}
        addToFavorites={addToFavorites}
        deleteNote={deleteNote}
    />
</div>
    )
}