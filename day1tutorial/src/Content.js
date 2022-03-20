import { useState } from "react";
import { BsTrash } from "react-icons/bs"

const Content = () => {
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
        // console.log(`${id}`)
        // const
    }
    

    
  
    return (
        <main className="main">
                <ul>
                    {items.map((item)=>(
                        <li className="item" key={item.id}>
                            <input  type="checkbox" 
                                    onChange={()=>handleCheck(item.id)}
                                    checked={item.checked}
                            />
                            <label
                            onDoubleClick={()=>handleCheck(item.id)}
                            style={(item.checked) ? { textDecoration : 'line-through'} : null}
                            
                            >{item.item}</label>
                            
                            <BsTrash role="button"
                                onClick={()=>handleDelete(item.id)}
                             tabIndex="0"
                             />

                        </li>
                    ))}
                </ul>
        </main>
    );
};

export default Content;