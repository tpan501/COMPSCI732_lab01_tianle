import AboutMe from "./AboutMe";
import MyToDoList from "./MyToDoList";
import LightBulb from "./Lightbulb";
import AddToDoItem from "./AddToDoItem";
import { useState } from "react";


const initialTodos = [
  { description: "Finish lecture", isComplete: true },
  { description: "Do homework", isComplete: false },
  { description: "Sleep", isComplete: true },
];

function App() {
  const [todos,setTodos] = useState(initialTodos);
  const onTodoStatusChanged = (index, isComplete) => {
    // 创建一个新的数组副本并更新指定待办事项的状态
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, isComplete: isComplete } : todo
    );
  
    // 使用更新后的数组来设置新的状态
    setTodos(updatedTodos);
  };
 
  const addItemToList = (content) => {
    const newTodo = {description: content, isComplete: false};
    setTodos([...todos, newTodo]);
  }

  const deleteItemFromList = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  }
  /**
   * JavaScript中使用filter方法从数组中移除特定元素的一种方式。
   * 这个表达式是基于数组todos创建一个新数组，新数组包含所有不满足条件i !== index的元素。
   * 这里的条件是“索引i不等于给定的index”。
   */

  {/* 
{ ...todo, isComplete: isComplete }这行代码使用了JavaScript的对象扩展运算符（...）和对象字面量语法来更新待办事项的isComplete属性。这里是它做了什么：
{ ...todo }：这部分代码创建了一个待办事项对象的浅拷贝，意味着它复制了所有的待办事项属性到一个新对象中。这个操作不会改变原始的todo对象。
isComplete: isComplete：这部分代码在新对象中设置（或覆盖）isComplete属性。左边的isComplete是对象的属性名，右边的isComplete是传递给函数的参数，
表示待办事项的新完成状态。
将这两部分结合起来，{ ...todo, isComplete: isComplete }就创建了一个新的待办事项对象，这个对象拥有与原始todo对象相同的属性，但isComplete属性被更新
为函数参数中给定的新值。这种方法允许我们在不直接修改原始对象的情况下更新对象的属性，符合React的不可变性原则。
*/}
  return (
    <div>
      <div className="sectionDiv">
        <h1>About me</h1>
        {/* TODO: Add your AboutMe component here */}
        <AboutMe name = "Tianle" age = "27" favoriteFood = {["fried chicken🍗", "salmon🍣"]}/>
      </div>
      <div className="sectionDiv">
        <h1>My light bulb</h1>
        {/* TODO: Add your LightBulb component here */}
        <LightBulb />
      </div>
      <div className="sectionDiv">
        <h1>My todos</h1>
        {/* TODO: Add your todo list here */}
        {/* <MyToDoList item = {[ "Learn React", "Learn database technology", "Seek"]}/> */}
        <MyToDoList item = {todos}  onTodoStatusChanged={onTodoStatusChanged} deleteItemFromList={deleteItemFromList}/>
      
        <h1>Add item</h1>
        <AddToDoItem addItemToList={addItemToList} />
      </div>
      
      
    </div>
  );
}

export default App;
