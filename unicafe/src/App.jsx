import { useState } from 'react'

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.all} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.positive} text2="%" />
      </table>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value, text2}) => (
  <tbody>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
    <td>{text2}</td>
  </tr>
  </tbody>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedAll = updatedGood + bad + neutral
    setAll(updatedAll)
    const updatedAverage = (updatedGood-bad)/updatedAll
    setAverage(updatedAverage)
    const updatedPositive = updatedGood / updatedAll * 100
    setPositive(updatedPositive)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const updatedAll = good + updatedNeutral + bad
    setAll(updatedAll)
    const updatedAverage = (good-bad)/updatedAll
    setAverage(updatedAverage)
    const updatedPositive = good / updatedAll * 100
    setPositive(updatedPositive)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedAll = good + neutral + updatedBad
    setAll(updatedAll)
    const updatedAverage = (good-updatedBad)/updatedAll
    setAverage(updatedAverage)
    const updatedPositive = (good / updatedAll) * 100
    setPositive(updatedPositive)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App