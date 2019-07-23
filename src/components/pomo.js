import React from 'react'

class Pomo extends React.Component {
  constructor (props) {
    super(props)

    // Sets initial times and default
    this.state = {
      breakTime: 300,
      createTime: 1500,
      seconds: 1500,
      timerId: false,
      active: 'createTime'
    }

    this.playStop = this.playStop.bind(this)
    this.updateTime = this.updateTime.bind(this)

    // Need to work on pauseResume:

    this.pauseResume = this.pauseResume.bind(this)
    this.updateTime = this.updateTime.bind(this)
  }

  // Need to understand this better
  updateTime () {
    this.setState(function (prevState, props) {
      const currentState = Object.assign(prevState)
      const stillActive = (prevState.seconds - 1) > 0
      const nextTimer = prevState.active === 'createTime' ? 'breakTime' : 'createTime'

      currentState.seconds = stillActive ? currentState.seconds - 1 : currentState[nextTimer]
      currentState.active = stillActive ? currentState.active : nextTimer
      if (this.timerId) {
        currentState.timerId = this.timerId
      }
      return currentState
    })
  }

  // makes the timer run
  playStop () {
    if (this.state.timerId) {
      clearInterval(this.state.timerId)
      return this.setState({
        seconds: this.state.createTime,
        timerId: false,
        active: 'createTime'
      })
    }

    this.timerId = setInterval(() => this.updateTime(), 1000)
  }

  // Need to work on pauseResume:

  pauseResume () {
    if (this.state.timerId) {
      clearInterval(this.state.timerId)
      return this.setState({
        seconds: this.state.createTime,
        timerId: false,
        active: 'createTime'
      })
    }

    this.timerId = setInterval(() => this.updateTime(), 1000)
  }

  // Need to understand this better
  updateLength (timer, e) {
    if (this.state.timerId) {
      return false
    }

    const state = Object.assign({}, this.state)
    state[timer] = e.target.value * 60
    state.seconds = timer === 'createTime' ? e.target.value * 60 : state.seconds
    this.setState(state)
  }

  render () {
    const buttonStopStartString = this.state.timerId ? 'Stop' : 'Start'
    const buttonPauseResumeString = this.state.timerId ? 'Pause' : 'Resume'
    return (
      <div className='app'>
        <Time active={this.state.active} seconds={this.state.seconds} />
        <Button action={this.playStop}>{buttonStopStartString}</Button>
        <Button action={this.pauseResume}>{buttonPauseResumeString}</Button>
        <Option value={this.state.createTime} timer='createTime' updateLength={this.updateLength.bind(this)}>Creative minutes</Option>
        <Option value={this.state.breakTime} timer='breakTime' updateLength={this.updateLength.bind(this)}>Minutes in break</Option>
      </div>
    )
  }
}

class Option extends React.Component {
  onChange (e) {
    e.preventDefault()
    this.props.updateLength(this.props.timer, e)
  }

  convertToMinutes (seconds) {
    return Math.floor(seconds / 60)
  }

  render () {
    return (
      <label className='input-group' >
        {this.props.children}
        <input className='input-group__input' type='number' min='1' step='1' placeholder='Insert minutes' onChange={this.onChange.bind(this)} value={this.convertToMinutes(this.props.value)} />
      </label>
    )
  }
}

const Button = (props) => <button className='btn-sm' onClick={props.action}>{props.children}</button>

// clock works
class Time extends React.Component {
  twoDigits (num) {
    return num > 9 ? '' + num : '0' + num
  }

  convertToMmSs (seconds) {
    const m = this.twoDigits(Math.floor((seconds % 3600) / 60))
    const s = this.twoDigits(Math.floor(seconds % 3600 % 60))
    return `${m}:${s}`
  };

  render () {
    var remainingTime = this.convertToMmSs(this.props.seconds)
    var activeTimer = this.props.active === 'createTime' ? <p>It's time to create awesomeness!</p> : 'Take a break and laugh a little.'

    // show the proper statement and the actual timer
    return (
      <div className='container'>
        <div>
          <div>
            <h3 style={{ color: 'blue' }} className='timer__description'>{activeTimer}</h3>
            <h1 style={{ color: 'orange' }} className='timer__time'>{remainingTime}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Pomo
