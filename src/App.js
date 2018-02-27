import React, { Component } from 'react'
import './App.css'
import pins from './Components/pins'
import scoreboard from './Components/scoreboard'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pins: [[0], [0, 0][(0, 0, 0)][(0, 0, 0, 0)]],
      frame: [1, 1],
      gamescore: 0,
      strikebonus: [null, null, 0]
    }
  }

  resetPins = () => {
    const newPins = [[0], [0, 0][(0, 0, 0)][(0, 0, 0, 0)]]
    const frame = this.state.frame.slice(0)
    frame[0] = 1
    frame[1] += 1
    this.setState({ pins: newPins, frame: frame })
  }
  displayFrame = () => {
    const frame = this.state.frame.slice(0)
    return frame[1]
  }
  displayRound = () => {
    const frame = this.state.frame.slice(0)
    return frame[0]
  }
  displayScore = () => {
    const score = this.state.gamescore
    return score
  }
  frameScoring = () => {
    const oldPins = this.state.pins.slice(0)
    const frame = this.state.frame.slice(0)
    const strikebonus = this.state.strikebonus.slice(0)
    let pinsScore =
      oldPins[0] +
      oldPins[1][0] +
      oldPins[1][1] +
      oldPins[2][0] +
      oldPins[2][1] +
      oldPins[2][2] +
      oldPins[3][0] +
      oldPins[3][1] +
      oldPins[3][2] +
      oldPins[3][3]
    const gamescore = this.state.gamescore
    if (
      pinsScore === 10 &&
      frame[0] === 1 &&
      strikebonus[0] === 'Active' &&
      strikebonus[1] === frame[1]
    ) {
      strikebonus[1] = frame[1] + 1
      strikebonus[2] += 19
      this.setState({ gamescore: gamescore, strikebonus: strikebonus })
    }
    if (pinsScore === 10 && frame[0] === 1 && strikebonus[0] === null) {
      strikebonus[0] = 'Active'
      strikebonus[1] = frame[1] + 1
      strikebonus[2] = 19
      this.setState({ gamescore: gamescore, strikebonus: strikebonus })
      resetPins()
    }
    if (pinsScore < 10 && frame[0] === 1) {
      frame[0] += 1
      this.setState({ frame: frame })
    }
    if (pinsScore === 10 && frame[0] === 2 && strikebonus[0] === null) {
      this.setState({ gamescore: gamescore + pinsScore })
      resetPins()
    }
    if (pinsScore < 10 && strikebonus[0] === null && frame[0] === 2) {
      this.setState({ gamescore: pinsScore + gamescore })
      resetPins()
    } else if (
      this.state.strikebonus[0] === 'Active' &&
      strikebonus[1] === frame[1] &&
      frame[0] === 2
    ) {
      pinsScore += strikebonus[2]
      strikebonus[0] = null
      strikebonus[1] = null
      strikebonus[2] = 0
      this.state({ gamescore: pinsScore + gamescore, strikebonus: strikebonus })
      resetPins()
    }
  }
  knockDownPin1 = () => {
    const oldPins = this.state.pins.slice(0)
    oldPins[0] = 1
    this.setState({ pins: oldPins })
  }
  knockDownPin2 = () => {
    const oldPins = this.state.pins.slice(0)
    oldPins[1][0] = 1
    this.setState({ pins: oldPins })
  }
  knockDownPin3 = () => {
    const oldPins = this.state.pins.slice(0)
    oldPins[1][1] = 1
    this.setState({ pins: oldPins })
  }
  knockDownPin4 = () => {
    const oldPins = this.state.pins.slice(0)
    oldPins[2][0] = 1
    this.setState({ pins: oldPins })
  }
  knockDownPin5 = () => {
    const oldPins = this.state.pins.slice(0)
    oldPins[2][1] = 1
    this.setState({ pins: oldPins })
  }
  knockDownPin6 = () => {
    const oldPins = this.state.pins.slice(0)
    oldPins[2][2] = 1
    this.setState({ pins: oldPins })
  }
  knockDownPin7 = () => {
    const oldPins = this.state.pins.slice(0)
    oldPins[3][0] = 1
    this.setState({ pins: oldPins })
  }
  knockDownPin8 = () => {
    const oldPins = this.state.pins.slice(0)
    oldPins[3][1] = 1
    this.setState({ pins: oldPins })
  }
  knockDownPin9 = () => {
    const oldPins = this.state.pins.slice(0)
    oldPins[3][2] = 1
    this.setState({ pins: oldPins })
  }
  knockDownPin10 = () => {
    const oldPins = this.state.pins.slice(0)
    oldPins[3][3] = 1
    this.setState({ pins: oldPins })
  }

  async pStar() {}
  render() {
    return (
      <div className="App">
        <scoreboard
          displayFrame={this.displayFrame}
          displayRound={this.displayRound}
          displayScore={this.displayScore}
        />
        <div className="container">
          <pins
            resetPins={this.resetPins}
            frameScoring={this.frameScoring}
            knockDownPin1={this.knockDownPin1}
            knockDownPin2={this.knockDownPin2}
            knockDownPin3={this.knockDownPin3}
            knockDownPin4={this.knockDownPin4}
            knockDownPin5={this.knockDownPin5}
            knockDownPin6={this.knockDownPin6}
            knockDownPin7={this.knockDownPin7}
            knockDownPin8={this.knockDownPin8}
            knockDownPin9={this.knockDownPin9}
            knockDownPin10={this.knockDownPin10}
          />
        </div>
      </div>
    )
  }
}

export default App
