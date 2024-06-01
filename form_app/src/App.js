import Submit from "./button/Submit";
import DateInput from "./forms/Date_input";
import TextFrom from "./forms/Text_form";

export default function App() {
  return (
    <>
      <form id="form">
        <TextFrom for="fname" label="First Naim: " type="text"/>
        <TextFrom for="lname" label="Last Naim: " type="text"/>
        <DateInput for="birthday" label="Birthday: "/>
        <TextFrom for="number" label="Phone Number: "  type="tel" pattern="[0-9]{10}"/>
        <Submit forrm="form"/>
      </form>
    </>
  )
}