import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import Menu from "@/components/menu";

// What we want our component to do:

// 1. to get the current date and time

// 2. based on what time of day it is, it will say Good Morning, Good Afternoon, or Good Evening

// 3. A text input box, where the user can type in their name, and then react

// will save that name in state, and add it to the text

// so it will say "Good Morning, <name>!"

export default function Workshop() {
  // USE EFFECT INFO

  // useEffect allows us to tap in to 'lifecycle events' within the application

  // useEffect()

  // useEffect(() => {

  // first - write the code that we would like to run

  // return () => {

  // second

  // second is for "cleanup"

  // }

  // }, [third])

  // third => (called the dependency array)

  // any react state (data that could update) which would trigger this useEffect to run again

  // a useEffect written like this, with no return and nothing inside the "dependency array"

  // will only run one time, when the component first loads or "mounts"

  // USE STATE INFO

  const [name, setName] = useState("");

  const [greeting, setGreeting] = useState("Hello World!");

  // useState returns an array, with two values:

  // a 'getter' and a 'setter'

  // name is our variable we use when we want to READ the data

  // setName is what we use when we want to WRITE new data to that variable.

  // we destructure that array and rename the variables to something memorable to US

  // and then lastly, the value inside useState() is the default value you want that

  // state to have before it gets set to something else

  // Destructuring INFO

  // const myArray = [1, 2, 3, "Any kind of data"];

  // function turnNameIntoArray(name) { // "Randy Gulak"

  // const splitName = name.split(" ")

  // console.log(splitName)

  // return splitName;

  // // ["Randy", "Gulak"];

  // }

  // The long way

  // const nameArray = turnNameIntoArray("Randy Gulak");

  // const firstName = nameArray[0];

  // const lastName = nameArray[1];

  // The short way => Destructuring

  // const [firstName, lastName] = turnNameIntoArray("Randy Gulak");

  useEffect(() => {
    const currentTime = new Date();

    const currentHours = currentTime.getHours();

    let dynamicGreeting = "";

    console.log("Current hours:", currentTime.getHours());

    if (currentHours > 0 && currentHours <= 12) {
      dynamicGreeting = "Morning";
    } else if (currentHours > 12 && currentHours <= 18) {
      dynamicGreeting = "Afternoon";
    } else {
      // it's evening

      dynamicGreeting = "Evening";
    }

    setGreeting("Good " + dynamicGreeting);
  }, []);

  const updateName = (event) => {
    setName(event.target.value);
  };

  return (
    // this is actually JSX, not just plain HTML
    <div>
        
        <Menu/>
      <h1>
        {greeting} {name}
      </h1>

      <input
        value={name}
        onChange={updateName}
        type="text"
        placeholder="What is your name?"
      />
    </div>
  );
}
