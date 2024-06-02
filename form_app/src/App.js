import Submit from "./button/Submit";
import DateInput from "./forms/Date_input";
import TextFrom from "./forms/Text_form";
import { Component, useState} from "react";

export default function App() {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    birthday: '',
    number: ''
  });
  const [submittedData, setSubmittedData] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
        ...form,
        [name]: value
    });
  };
  const handleSubmit = () => {
    setSubmittedData(form);
    // setForm({
    //     fname: '',
    //     lname: '',
    //     birthday: '',
    //     number: ''
    // });
  };
  return (
    <>
      <form id="form">
        <TextFrom for="fname" label="First Naim: " type="text" value={form.fname} onChange={handleInputChange}/>
        <TextFrom for="lname" label="Last Naim: " value={form.lname} onChange={handleInputChange}/>
        <DateInput for="birthday" label="Birthday: " value={form.birthday} onChange={handleInputChange}/>
        <TextFrom for="number" label="Phone Number: "  type="tel" pattern="[0-9]{10}" value={form.number} onChange={handleInputChange}/>
        <Submit forrm="form" onClick={handleSubmit}/>
      </form>
        
        {submittedData && (
          <div>
              <p>First Name: {submittedData.fname}</p>
              <p>Last Name: {submittedData.lname}</p>
              <p>Birthday: {submittedData.birthday}</p>
              <p>Phone Number: {submittedData.number}</p>
          </div>
        )}
    </>
  )
}