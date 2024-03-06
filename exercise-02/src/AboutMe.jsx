/*
ex02 - This component should contain a short paragraph, stating your name, your age, and your favourite food 
- for example, "Hello World, My name's Andrew! I'm 35 years old, and I like burgers and fries 🍔🍟".
Once you're done, modify App.jsx to render your new component at the indicated location. Then, test your code by running
it using npm run dev, if you aren't already doing so.

ex03 - Continuing on from exercise two, let's modify the AboutMe component to render some text based on the values provided to it 
in some properties - or props, for short.Modify the component such that your name, age, and favourite food are supplied as props, 
rather than being hardcoded. Then, modify App.jsx to supply appropriate values for these props. Check that your component functions 
as intended before moving on.
*/
export default function AboutMe(props) {
  const favoriteFoods = props.favoriteFood.map((food, index) => {
    if (index === props.favoriteFood.length - 1) {
      return food + ".";
    }else if (index === props.favoriteFood.length - 2) {
      return food + " and ";
    }else{
      return food + ", ";
    }
  });
    return (
      <p>Hello World, My name's {props.name}! I'm {props.age} years old, and I like {favoriteFoods}</p>
    );
}