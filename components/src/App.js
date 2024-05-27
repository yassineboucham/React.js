import React from "react";
import MyComponent from "./Component/MyComponent";
import Form from "./Component/props_children";

export default function App() {
  return (
    <>
      <MyComponent message="hello worlds"/>
      <Form Label_Name="First_Name" value="your First Name">
        entre your First_Name
      </Form>
      <Form Label_Name="Last_Name" value="your Last Name">
        entre your Last_Name
      </Form>
    </>
  );
}