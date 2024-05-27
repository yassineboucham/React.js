export default function Form(props) {
    return (
        <>
            <label>{props.Label_Name}</label>
            <input name={props.value} value={props.value} type="text"/><br/>
            <p>{props.children}</p>
        </>
    )
}