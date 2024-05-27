export default function Form(props) {
    const y = 10;
    let mess;
    if (y > 18){
        mess = <h3>adult</h3>
    } else {
        mess = <h3>kids</h3>
    }
    return (
        <>
            {mess}
            <label>{props.Label_Name}</label>
            <input name={props.value} value={props.value} type="text"/><br/>
            <p>{props.children}</p>
        </>
    )
}