function Food() {
    let food1 = 'Orange'
    let food2 = 'Banana'

    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}

export default Food