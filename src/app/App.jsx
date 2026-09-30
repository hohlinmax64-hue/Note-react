import {useState, useEffect, useMemo, useCallback, memo} from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout.jsx";
import Notes from "../pages/Notes/Notes.jsx";
import NoteForm from "../components/Notes/NoteForm.jsx";
import Favorites from "../pages/Favorites/Favorites.jsx";
import Ideas from "../pages/Categories/Ideas.jsx";
import Personal from "../pages/Categories/Personal.jsx";
import Work from "../pages/Categories/Work.jsx";
import Study from "../pages/Categories/Study.jsx";

export default function App() {
    const [notes, setNotes] = useState([]);

    const [input, setInput] = useState({
        search: "",
        searchFilter: "",
        notesTitle: "",
        notesContent: ""
    });
    const [selectCategory, setSelectCategory] = useState('Personal')

    function handleSearchChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            search: e.target.value,
        })
    }

    function handleSearchFilterChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            searchFilter: e.target.value
        })
    }

    function handleTitle(e) {
        e.preventDefault();
        setInput({
            ...input,
            notesTitle: e.target.value
        })
    }

    function handleContent(e) {
        e.preventDefault();
        setInput({
            ...input,
            notesContent: e.target.value
        })
    }


    function handleAddNote() {
        if(!input.notesTitle && !input.notesContent) {
            alert("Please enter a title and content");
            return;
        }
        let newNote = {
            id: Date.now(),
            title: input.notesTitle,
            content: '',
            description: input.notesContent,
            category: selectCategory,
            favorite: false,
            tags: ['React, Javascript'],
            createdAt: new Date().toDateString(),
        }

        setNotes(prev => [...prev, newNote]);
        setInput({
            search: "",
            searchFilter: "",
            notesTitle: "",
            notesContent: ""
        })
    }


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
                  <Route path="/notes" element={
                      <Notes
                      input={input}
                      setInput={handleSearchFilterChange}
                      notes={notes}
                  />} />
                  <Route path="/noteform" element={
                      <NoteForm
                          inputTitle={input}
                          setInputTitle={handleTitle}
                          inputContent={input}
                          setInputContent={handleContent}
                          addNote={handleAddNote}
                          selectCategory={selectCategory}
                          setSelectedCategory={setSelectCategory}
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