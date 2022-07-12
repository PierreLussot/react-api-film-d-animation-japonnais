import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {ListeFilm} from "./ListeFilm";
import PageNotFound from "./PageNotFound";
import {DetailFilm} from "./DetailFilm";

const App = () => {
  return(
      <Router>
          <header className="container text-center"><h2>Liste des films</h2></header>
          <Routes>
              <Route path="/" element={<ListeFilm/>} />
              <Route path="/detail/:id" element={<DetailFilm/>}/>
              <Route path="/*" element={<PageNotFound/>} />
          </Routes>
      </Router>
  )
}
export default App;