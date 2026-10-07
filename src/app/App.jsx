import {useState} from "react";
import {Routes, Route} from "react-router-dom";

import Layout from "../components/Layout/Layout.jsx";
import Notes from "../pages/Notes/Notes.jsx";
import NoteForm from "../components/Notes/NoteForm.jsx";
import NoteRead from "../components/Notes/NoteRead.jsx";
import Favorites from "../pages/Favorites/Favorites.jsx";
import Ideas from "../pages/Categories/Ideas.jsx";
import Personal from "../pages/Categories/Personal.jsx";
import Work from "../pages/Categories/Work.jsx";
import Study from "../pages/Categories/Study.jsx";

export default function App() {
    const [notes, setNotes] = useState([]);
    const [favorite, setFavorite] = useState(false);
    const [input, setInput] = useState({
        search: "",
        searchFilter: "",
        notesTitle: "",
        notesContent: ""
    });
    const [selectCategory, setSelectCategory] = useState('All')
    const [categoryForNote, setCategoryForNote] = useState("Personal")
    const [selectedDate, setSelectedDate] = useState("Newest")

    function handleSearchChange(e) {
        setInput({
            ...input,
            search: e.target.value
        })
        console.log(e.target.value)
    }

    function handleSearchFilterChange(e) {
        setInput({
            ...input,
            searchFilter: e.target.value
        })
    }

    function handleTitle(e) {
        setInput({
            ...input,
            notesTitle: e.target.value
        })
    }

    function handleChangeTitle(id, e) {
        let editValueTitle = notes.map((note) => {
            if(String(note.id) === id) {
                return {...note, title: e.target.value};
            }
            return note
        })
        setNotes(editValueTitle);
    }

    function handleContent(e) {
        e.preventDefault();
        setInput({
            ...input,
            notesContent: e.target.value
        })
    }

    function handleChangeContent(id, e) {
        let editValueContent = notes.map((note) => {
            if(String(note.id) === id) {
                return {...note,  description: e.target.value};
            }
            return note
        })
        setNotes(editValueContent);
    }

    function handleAddNote() {
        if(!input.notesTitle && !input.notesContent) {
            alert("Please enter a title and content");
            return;
        }
        let newNote = {
            id: Date.now(),
            title: input.notesTitle,
            description: input.notesContent,
            category: categoryForNote,
            favorite: favorite,
            tags: ['React, Javascript'],
            createdAt: new Date().toLocaleString(),
        }

        setNotes(prev => [...prev, newNote]);
        setInput({
            search: "",
            searchFilter: "",
            notesTitle: "",
            notesContent: ""
        })
    }

    function handleNoteRead(id) {
        let readerNote = notes.find((note) => String(note.id) === id);
        return readerNote
    }

    function searchNotes(notes, input) {
        console.log(notes)
        console.log(input)
        if(!input) {
            return notes
        }
        let noteTheSearch = notes.filter(({title}) => {
            return title.toLowerCase().includes(input.toLowerCase());
        })
        console.log(noteTheSearch);
        return noteTheSearch
    }

    function filterByCategory(notes) {
        let filteredNoteByCategory = notes.filter((note) => {
            if(selectCategory === note.category) return true
            if(selectCategory === 'All') return true

            return false
        })
        return filteredNoteByCategory
    }

    function filterByData(notes) {
            if(selectedDate === 'Newest'){
                return [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
            }
            if(selectedDate === 'Old'){
                return [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            }
            return notes
    }

    function addNoteToFavorite(id) {
        console.log('add to favorite')

        setNotes(prev => prev.map((note) => {
            if(note.id === id) {
                return {...note, favorite: !note.favorite}
            }
            return note
        }))
    }

    function addNoteToFavoriteByBoolen() {
        setFavorite(prev => !prev)
    }

    let filteredNotesByDate = filterByData(notes)
    let filteredNotes = filterByCategory(filteredNotesByDate);
    let searchedNotesByTitle = searchNotes(filteredNotes, input.searchFilter);
  return (
      <>
          <Routes>
              <Route
                  element={
                      <Layout
                          input={input}
                          setInput={handleSearchChange}
                      />
                  }
              >
                  <Route path="/" element={
                      <Notes
                      input={input}
                      setInput={handleSearchFilterChange}
                      notes={notes}
                      notesSearch={searchedNotesByTitle}
                      NoteRead={handleNoteRead}
                      select={selectCategory}
                      setSelected={setSelectCategory}
                      selectDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                      addToFavorites={addNoteToFavorite}
                  />} />
                  <Route path='/noteread/:id' element={
                      <NoteRead note={notes} readNotes={handleNoteRead} setTitle={handleChangeTitle} setDescription={handleChangeContent}/>
                  }/>
                  <Route path="/noteform" element={
                      <NoteForm
                          inputTitle={input}
                          setInputTitle={handleTitle}
                          inputContent={input}
                          setInputContent={handleContent}
                          addNote={handleAddNote}
                          selectCategory={categoryForNote}
                          setSelectedCategory={setCategoryForNote}
                          btnFavorite={addNoteToFavoriteByBoolen}
                          favorite={favorite}
                      />} />

                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/categories/ideas" element={<Ideas />} />
                  <Route path="/categories/personal" element={<Personal />} />
                  <Route path="/categories/work" element={<Work />} />
                  <Route path="/categories/study" element={<Study />} />
              </Route>
          </Routes>
      </>
  )
}