export default function DateInput(props) {
    return(
        <>
            <label for={props.for}>{props.label}</label>
            <input type="date" id={props.for} name={props.for} min="1980-01-01" max="2020-01-01" /><br />
        </>
    )
}