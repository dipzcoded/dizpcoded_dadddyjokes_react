import React, {Fragment} from 'react'
import "../style/Joke.css"

const Spinner = () => {
    return (
        <Fragment>
             <div className="Joke__spinner">
                <i className="far fa-8x fa-laugh fa-spin" />
                <h1 className="Joke__title">loading.....</h1>
            </div>
        </Fragment>
    )
}

export default Spinner
