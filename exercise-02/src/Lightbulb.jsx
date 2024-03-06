/**
 * ex06 - In this exercise, we'll create a LightBulb component. 
 * This lightbulb will render an <img> which, when clicked, will toggle between two different src images: light-on.png and light-off.png.
 */
import { useState } from "react";
export default function LightBulb(){
    /**
     * ex06 - Add state to your LightBulb. We want to determine whether or not the bulb is currently on, 
     * so a single stateful boolean value, isOn, should suffice. To do this, use the useState() React hook as shown in the lecture material. 
     * This hook will give you back two values - the stateful value itself, and a mutator function which you can use later on to 
     * change the value. Let's have isOn default to false.
     * 
     * Modify your LightBulb such that its image src is different, depending on whether the lightbulb is on. It should display light-on.png 
     * if on, or light-off.png otherwise. 
     * Hint: You needn't render an entirely different <img> - you can just change the value of the image's src prop.
     * 
     * dd an onClick event handler to the image. When clicked, it should toggle the value of isOn (i.e. set it to false if it's currently true,
     * and vice versa). Once complete, you should be able to click your lightbulb in the browser to toggle it between "on" and "off" states.
     */
    const [isOn, setLight] = useState(false);
    const imageUrl = isOn ? "light-on.png" : "light-off.png";

    return (
        <img src={imageUrl} alt="lightbulb" onClick={() => setLight(!isOn)}></img>
    );
}