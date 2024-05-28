export default function Fruit({fruit}) {
    // const displyFruit = function () {
    //     return fruit.map(function (fr){
    //         return <li>{fr}</li>
    //     })
    // }
    const displyFruit = () => fruit.map(fr=><li>{fr}</li>)
    return (
        <>
            <h1>Fruit: </h1>
            <ul>
                {displyFruit()}
            </ul>
        </>
    )
}