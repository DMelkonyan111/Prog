import React, {useState} from 'react'

function Cars() {
    let [cars, setCars] = useState([])

    let [carYear, setCarYear] = useState(new Date().getFullYear())
    let [carModel, setCarModel] = useState('')
    let [carHp, setCarHp] = useState(0)

    function addCar() {
        let newCar = {
            "model": carModel,
            "year": carYear,
            "hp": carHp
        }

        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear())
        setCarModel('')
        setCarHp(0)
    }

    function deleteCar(index) {
        setCars(c => c.filter((_, i) => i != index))
    }

    function handleModel(e) {
        setCarModel(e.target.value)
    }

    function handleYear(e) {
        setCarYear(e.target.value)
    }

    function handleHp(e) {
        setCarHp(e.target.value)
    }


    return (
        <div className="car">
            <ul className="cars">
                {cars.map((el, index) => <li key={index} onClick={() => deleteCar(index)}>{el.model} released in {el.year} with {el.hp} horsepower</li>)}
            </ul>

            <input className="car-input" type="number" value={carYear}  onChange={handleYear}/>
            <input className="car-input" type="text" value={carModel} onChange={handleModel}/>
            <input className="car-input" type="number" value={carHp} onChange={handleHp}/>
            <button className="car-add" onClick={addCar}>Add a car</button> 
        </div>
    )
}

export default Cars