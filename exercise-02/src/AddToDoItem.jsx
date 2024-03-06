/**
 *    
* ex10 - continue extending your to-do app by adding a new component - NewTodoItem. This component should contain a single textbox 
* (<input type="text">) allowing users to enter a description, along with a <button>. 
* When the button is clicked, a to-do item with the given description should be added to the list, with a default completed status 
* of false.
        
 */
import { useState } from "react";
export default function AddToDoItem ({addItemToList}) {
   const [content, setContent] = useState("");
    return(
        <>
            <label htmlFor="newTodoItem">Description:</label>
            <input type="text" 
                id="newTodoItem" 
                value={content}
                style={{width: "500px", height: "30px",fontSize: "20px",margin: "10px"}}
                onChange={(e) => setContent(e.target.value)}
                />
            <button 
                style={{width: "100px", height: "40px",fontSize: "20px",margin: "10px"}}
                onClick = {()=>{
                    addItemToList(content)
                    setContent("");
                    }}>Add</button> 
        </>
            
    )

}