import {useState, useEffect, useMemo, useCallback, memo} from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout.jsx";
import Notes from "../pages/Notes/Notes.jsx";
import Favorites from "../pages/Favorites/Favorites.jsx";
import Categories from "../pages/Categories/Categories.jsx";

export default function App() {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState({
        search: "",
        notesTitle: "",
        notesContent: ""
    });

    function handleSearchChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            search: e.target.value
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
                  <Route path="/" element={<Notes />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/categories" element={<Categories />} />
              </Route>
          </Routes>
      </>
  )
}