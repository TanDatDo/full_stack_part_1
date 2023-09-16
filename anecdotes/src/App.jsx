import { useState } from 'react'

const Anecdote = (props) => {
  if (props.voteOfSelected == props.mostVote) {
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <Line value ={props.selectedAnecdote}/>
        <Vote value={props.voteOfSelected} />
        <Button handleClick={props.handleNextClick} text={props.nextButtonText} />
        <Button handleClick={props.handleVoteClick} text={props.voteButtonText} />
      </div>
    )
  } else {
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <Line value ={props.selectedAnecdote}/>
        <Vote value={props.voteOfSelected} />
        <Button handleClick={props.handleNextClick} text={props.nextButtonText} />
        <Button handleClick={props.handleVoteClick} text={props.voteButtonText} />
        <h1>Anecdote with most votes</h1>
        <Line value ={props.mostVotedAnecdote}/>
        <Vote value={props.mostVote} />
      </div>
    )
  }
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const Line = ({value}) => (
 <p>{value}</p>
)
const Vote = ({value}) => (
  <p>has {value} votes</p>
 )

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(getRandomInt(0, 7))
  const [votes, setVote] = useState(new Uint8Array(8))
  const [mostVoted, setMostVoted] = useState(0)  


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  const handleNextClick = () => {
    const newRandom = getRandomInt(0, 7)
    setSelected(newRandom)
  }

  const handleVoteClick = () => {
    const newVotes = { ...votes }
    newVotes[selected] += 1
    setVote(newVotes)
    const index = getMostVote(newVotes)
    setMostVoted(index)
  }

  function getMostVote (votes) {
    const index = indexOfMax(votes)
    return index
  }

  function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < 8; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

  return (
    <div>
      <Anecdote selectedAnecdote={anecdotes[selected]} 
        voteOfSelected={votes[selected]} 
        mostVotedAnecdote={anecdotes[mostVoted]} 
        mostVote={votes[mostVoted]} 
        handleNextClick={handleNextClick}
        nextButtonText="next anecdote"
        handleVoteClick={handleVoteClick}
        voteButtonText="vote" />
    </div>
  )
}

export default App