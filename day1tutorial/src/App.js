
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from "react";





function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked:true,
        item: "beef and some grilled Cheese with Koobi nkwan"
    },
    {
        id: 2,
        checked:false,
        item: "Item 2   need to be available "
    },
    {
        id: 3,
        checked:false,
        item: "item3 need to be available"
    }
  ])

  const handleCheck = (id) => {
    // console.log(`key:${id}`)
    const listItems = items.map((item)=> item.id === id ? {...item, checked:!item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist',JSON.stringify(listItems));
  }

  const handleDelete = (id)=>{
    // console.log(`${id} was deleted`)
    const listItems1 = items.filter((item)=>item.id !==id);
    setItems(listItems1)
    //this list all items except the one that matches the id
  }
  return (
    <div className="App">
      <Header title="groceries" />
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
