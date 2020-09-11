import React from 'react'
import '../style/JokeSidebar.css'

const JokeSidebar = ({getMoreJokes}) => {

    const onClick = () => {
        getMoreJokes();
    }

    return (
        <div className="Jokesidebar">
                    <h1 className="Jokesidebar__title"> <span>Dad</span>Jokes</h1>
                    <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="smily" />
            <button className="Jokesidebar__btn" onClick={onClick}>Fetch Jokes</button>
        </div>
    )
}

export default JokeSidebar
