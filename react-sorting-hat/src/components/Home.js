import React from 'react'
import {useHistory} from 'react-router-dom'

const Home = (props) => {
    const history = useHistory();

    const handleClick = (e) => {
      e.preventDefault();
      history.push("/quiz")
    }

    return (
        <div>
            Home
            <button onClick={e => handleClick(e)}>Start Quiz</button>
        </div>
    )
}

export default Home