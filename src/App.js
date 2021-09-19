import React, { useEffect, useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
const getUser = () => Promise.resolve({id:1, name: "Yauhen"});
const Search = ({ value, onChange, children }) => (
  <div>
    <label htmlFor="search">{children}</label>
    <input placeholder="search text..." id="search" type="text" value={value} onChange={onChange} />
  </div>
);

const App = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");

  useEffect(()=>{
     const loadUser = async()=> {
     const user = await getUser();
     setUser(user);  
     }
     loadUser();
  },[]);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div>
      {user && <h2>Logget in as {user.name}</h2>}
      <img src="" alt="searchi" className="image" />
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
};

export default App;