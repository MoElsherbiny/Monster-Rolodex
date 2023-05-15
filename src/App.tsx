// import React, { Component } from "react";
import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";
import "./App.css";
import { getData } from "./utils/fetch.data";

export type Monster = {
  id: string,
  name: string,
  email: string
}
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [title, setTitle] = useState("");
  const [filleterMonsters, setFilterMonsters] = useState(monsters);


  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((Response) => Response.json())
    //   .then((users) => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users)
    }
    fetchUsers()
  }, []);
  useEffect(() => {
    const NewFilleterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(NewFilleterMonsters);
  }, [monsters, searchField]);
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };
  const handleTitle = title.length <= 0 ? "Monster Rolodex " : title;
  return (
    <div className='App'>
      <h1 className='app-title'> {handleTitle} </h1>
      <SearchBox
        className='monster-search-box'
        onChangeHandler={onSearchChange}
        placeHolder='search monsters'
      />
      <br />
      <SearchBox
        className='title-search-box'
        onChangeHandler={onTitleChange}
        placeHolder='Add Title'
      />
      <CardList monster={filleterMonsters} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//       response.json().then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//     });
//   }
//   render() {
//     const { searchField, monsters } = this.state;
//     const { onSearchChange } = this;
//     const filleterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className='App'>
//         <h1 className='app-title'> Monster Rolodex </h1>
//         <SearchBox
//           className='monster-search-box'
//           onChangeHandler={onSearchChange}
//           placeHolder='search monsters'
//         />

//         <CardList monster={filleterMonsters} />
//       </div>
//     );
//   }
// }

export default App;
