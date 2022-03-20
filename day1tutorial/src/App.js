
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from "react";
import AddItem from './AddItem';
import SearchItem from './SearchItem'





function App() {
  const [items, setItems] = useState(

    JSON.parse(localStorage.getItem('shoppinglist'))
  //   [
  //   {
  //       id: 1,
  //       checked:true,
  //       item: "beef and some grilled Cheese with Koobi nkwan"
  //   },
  //   {
  //       id: 2,
  //       checked:false,
  //       item: "Item 2   need to be available "
  //   },
  //   {
  //       id: 3,
  //       checked:false,
  //       item: "item3 need to be available"
  //   }
  // ] 
  )

  const [newItem, setNewItem] = useState('')
  const [search,setSearch] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist',JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id, checked:false,item} // based on data given
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems)
  }

  const handleCheck = (id) => {
    // console.log(`key:${id}`)
    const listItems = items.map((item)=> item.id === id ? {...item, checked:!item.checked } : item);
    // setItems(listItems);
    // localStorage.setItem('shoppinglist',JSON.stringify(listItems));
    setAndSaveItems(listItems)

  }

  const handleDelete = (id)=>{
    // console.log(`${id} was deleted`)
    const listItems = items.filter((item)=>item.id !==id);
    // setItems(listItems1)
    // localStorage.setItem('shoppinglist',JSON.stringify(listItems))
    //this list all items except the one that matches the id
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!newItem)return;
    // console.log(newItem)
    //addItem
    addItem(newItem);
    setNewItem('');
  }


  return (
    <div className="App">
      <Header title="groceries" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
       items={items}
       handleCheck={handleCheck}
       handleDelete={handleDelete}
      
      />
      <Footer length ={items.length}/>
    </div>
  );
}

export default App;
