/**
 * ex04 - The component should accept a single property, called items, which should be an array of strings.The component 
 * should render a <ul>, containing a <li> for each item. The <li> should show the string representation of that todo item.
 * use map function to iterate through the array of items, and return a <li> for each item.
 * 
 * ex05 - Continuing on from execise four, extend the ToDoList component so it supports the case where the items property 
 * is either not supplied, or is an empty array. In this case, a <p> should be rendered, displaying the message "There are no to-do items!".
 * If the items property exists and contains items, then its behaviour should be the same as with exercise two.
 * 
 * ex07 - Coming back to our ToDoList component in this exercise, we'll redesign our to-do app such that it maintains state. Each item in 
 * a to-do list can now be either complete or incomplete. 
 * Each to-do item in the list contains a description as well as its complete status. For example, the following is a possible to-do list:
 * const todos = [
        { description: "Finish lecture", isComplete: true },
        { description: "Do homework", isComplete: false },
        { description: "Sleep", isComplete: true },
    ];
    And then, you would render the list as follows:
    <ToDoList items={todos} />
    Steps:
    1. Modify your ToDoList component such that its items prop now accepts a list of todo items, each with a description and isComplete status
     (see above example), rather than a list of strings. Modify the ToDoList so that it renders a <li> for each todo item, with each <li> 
     displaying that item's description. Modify App.jsx to supply data to the ToDoList in the correct format.
    2. Check that the "empty to-do list" functionality works as before - i.e. if the ToDoList didn't get supplied with any to-dos, it should
     render a message to the user such as "There are no to-do items!".
    3. Modify the ToDoList so that, in each <li>, a checkbox (<input type="checkbox">) should be rendered for the corresponding to-do item.
    Its value property should match the item's description, while its checked property should match the item's isComplete status.
    4. If a to-do item is complete (i.e. isComplete == true), the text "(Done!)" should be appended to its description.
    5. Modify App.jsx to include the to-do list as state (with the useState() React hook). The given todos array can be used as the initial
    state value (you may rename it to initialTodos to avoid confusion if you like).  Make sure your ToDoList component renders the to-do 
    list that's now coming from App's state. 
   
 * @param {*} item 
 */
/**
 *  
    ex08 - now extend ToDoList so it can notify an observer if the user clicks one of the checkboxes. To do this, we can add a property 
    called onTodoStatusChanged.In a checkbox's onChange event handler, we can call that onTodoStatusChanged function, supplying the index 
    of the item that changed, and whether or not it is now complete, as arguments. We can test that this is working by adding a basic event 
    handler for onTodoStatusChanged, which simply logs the supplied values to the console. This might look similar to the following example:
    <ToDoList
        items={todos}
        onTodoStatusChanged={(index, status) => console.log(index, status)
    }/>
 */
/**
 * ex11 - In this exercise, we'll make the final modification to the to-do app. Each 
 * item in the to-do list should contain a button which, when clicked, will result in that to-do item being deleted from the app.
 */
import { useState } from "react";
export default function MyToDoList({ item, onTodoStatusChanged, deleteItemFromList}) {

    return(
        // ex12 - refactor your ToDoList component into two separate components - one to render a single to-do item, 
        // another to render the whole list.
        item.length === 0 ? (
            <p>There are no to-do items!</p>
        ) : (item.length === 1? (
            <div className={item[0].isComplete?"oneToDoComplete":"oneToDoIncomplete"}>
                    <input type="checkbox" checked={item[0].isComplete} onChange={() => {onTodoStatusChanged(0, !item[0].isComplete)}}/>
                    {item[0].isComplete ? item[0].description + " (Done!)" : item[0].description}
                    <button 
                      className="removeButton"
                      onClick={() => {deleteItemFromList(0)}}>Remove</button>
            </div>
             
        ) : (
            <ul>
                {item.map((todo, index) => (
                    <li key={index} className={todo.isComplete?"toDoComplete":"toDoIncomplete"}>
                        <input type="checkbox" checked={todo.isComplete} onChange={() => {onTodoStatusChanged(index, !todo.isComplete)}}/>
                        {todo.isComplete ? todo.description + " (Done!)" : todo.description}
                        <button 
                          className="removeButton"
                          onClick={() => {deleteItemFromList(index)}}>Remove</button>
                    </li>
                ))}
            </ul>
        )
        )
    )
}




/*
ex02, ex03
export default function MyToDoList({ item }) {
    return (

      item.length === 0 ? (
        <p>There are no to-do items!</p>
      ) : (
        <ul>
          {item.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      )
    );
  }
*/