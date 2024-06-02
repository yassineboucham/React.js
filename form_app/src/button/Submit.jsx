export default function Submit(props) {
    return (
        <button type="submit" form={props.form} value="Submit" onClick={props.onClick}>Submit</button>
    )
}