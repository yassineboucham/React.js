export default function TextFrom(props){
    return (
        <>
            <label for={props.for}>{props.label}</label>
            <input type="text" id={props.forrm} name={props.for} pattern={props.pattern} value={props.value} onChange={props.onChange}/><br />
        </>
    )
}