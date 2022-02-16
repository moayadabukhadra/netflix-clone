import {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home'
import './App.css';

import FavListitem from './Components/FavList/FavListitem';


function App() {
  const [favoriteList,SetFavList] = useState([]);


const fetchData = async () => {
  try{
    const res = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);

    const data = await res.json();
    SetFavList(data);

  }catch (error) {
    console.log("error", error);
  }

}


  useEffect(() => {
    fetchData();
  } , []);

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FavList" element={<FavListitem favoriteList={favoriteList} />} />
      </Routes>
    </>
  );
}

export default App;
