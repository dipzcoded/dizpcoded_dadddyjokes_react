import React, {Fragment} from 'react'
import '../style/JokeList.css'
import JokeItem from './JokeItem';

const JokeList = ({jokes, votes}) => {
    return (
        <Fragment>
            <div className="Joke__list">
             {jokes.map((j) => (
                 <JokeItem  key={j.id} jokeData={j} votes={votes}  />
             ))}
         </div>
        </Fragment>
    )
}

export default JokeList
