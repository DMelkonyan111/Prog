import PropTypes from 'prop-types'

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} className="card-image"/>
            <h4 className="card-name">{props.name}</h4>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string
}

export default Card