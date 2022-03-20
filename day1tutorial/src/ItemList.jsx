
import { BsTrash } from "react-icons/bs"
const ItemList = ({items, handleCheck,handleDelete}) => {
    return (
        <div>
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
    </div>
    );
};

export default ItemList;