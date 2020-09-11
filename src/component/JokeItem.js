import React from 'react'
import '../style/JokeItem.css'

const JokeItem = ({jokeData, votes}) => {


  

    const getColor = () => {
        if(jokeData.votes >= 15)
        {
            return "#4CAF50";
        }else if(jokeData.votes >= 12)
        {
                return "#8BC34A"
        }
        else if(jokeData.votes >= 9)
        {
            return "#CDDC39"
        }
        else if(jokeData.votes >= 6)
        {
                return "#FFEB3B"
        }
        else if(jokeData.votes >= 3){
                return "#FFC107"
        }
        else if(jokeData.votes >= 0 )
        {
            return "#FF9800"
        }else {
            return "#F44336"
        }
    }

    const getEmoji = () => {

        if(jokeData.votes >=  15)
        {
            return "em em-rolling_on_the_floor_laughing"
        }
        else if(jokeData.votes >= 12)
        {
            return "em em-laughing"
        }
        else if(jokeData.votes >= 9)
        {
            return "em em-smiley"
        }else if(jokeData.votes >= 6)
        {
            return   "em em-slightly_smiling_face"
        }
        else if(jokeData.votes >= 3)
        {
            return    "em em-neutral_face"
        }else if(jokeData.votes >= 0)
        {
            return   "em em-confused"
        }
        else
        {
            return  "em em-angry"
        }
    }

    const upVote = () => {
        votes(jokeData.id, 1)
    }

    const downVote = () => {
        votes(jokeData.id, -1)
    }

    return (
        <div className="JokeItem">
           <div className="JokeItem__btn">
               <i className="fas fa-arrow-up" onClick={upVote}></i>
    <span className="JokeItem__votes" style={{
        border : `3px solid ${getColor()}`
    }}>{jokeData.votes}</span>
               <i className="fas fa-arrow-down" onClick={downVote}></i>
           </div>
           <div className="JokeItem__text">
               {jokeData.joke}
           </div>
           <div className="JokeItem__smily">
           <i className={`${getEmoji()}`} aria-role="presentation" aria-label="BIRD" ></i>
           </div>
        </div>
    )
}

export default JokeItem
