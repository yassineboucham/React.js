import React from "react";
import MyComponent from "./Component/MyComponent";
import Form from "./Component/props_children";
import Fruit from "./Component/Fruts";
import Counter from "./Component/State";

export default function App() {
  const arr = ['Bana', 'Limon', 'avocado']
  return (
    <>
      {/* Dynamic Component */}
      <MyComponent message="hello worlds"/>
      {/* Props and children */}
      <Form Label_Name="First_Name" value="your First Name">
        entre your First_Name
      </Form>
      <Form Label_Name="Last_Name" value="your Last Name">
        entre your Last_Name
      </Form>
      {/* JSX & .map */}
      <Fruit fruit={arr}/>
      {/* state & Events*/}
      <Counter/>
    </>
  );
}