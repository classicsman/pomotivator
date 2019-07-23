import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

// App components
import Pomo from './components/pomo'
import Chuckisms from './components/chuckisms'
import ProgJoke from './components/progjoke'
import MiscJoke from './components/miscjoke'

// App page content
const Home = () => (
  <div>
    <div className='container'>
      <Pomo />
    </div>
    <div className='container'>
      <Chuckisms className='row' />
      <ProgJoke className='row' />
      <MiscJoke className='row' />
    </div>
  </div>
)

// 'How To' page content
const HowTo = () => (
  <div className='container'>
    <h2>How to Use the Pomotivator</h2>
    <p>To begin, set the length of time you want to focus on your creative tasks, and how much of a break you want to reward yourself with in the boxes labeled for those purposes and press the Start button.</p>
    <p>If you need to stop for any reason, simply click on the Stop button.</p>
  </div>
)

// 'About' page content
const About = () => (
  <div className='container'>
    <h2>About the App and Its Theory</h2>
    <p>I created the name Pomotivator by conflating the terms 'pomodoro timer' and 'motivator'. The timer is a popular productivity tool generally having the user work for 25 minutes at a time punctuated by five minute break periods. Users endeavor to stay laser-focused for the 25 minutes then can 'take five' without stressing rather than just going haphazardly through their day succumbing to multiple distractions.</p>
    <p>The app is comprised of a pomodoro timer, which has adjustable times for both the work and break portions of the timer. The 'classic' times to set it for are 25/5, but being an 80/20 proponent, I prefer 24/6 myself. I let them default to the classic times.</p>
    <p>When the break timer commences, three jokes will appear. **This is not yet working, that is, the jokes are fetched when the app starts and after returning from either the How To or About pages, and they remain present all the time, not only when the break period begins and disappearing when it ends, as I want them to (I will get this working later). These jokes are the 'motivator' part of the app, kind of a reward for user's 25 minutes of focus.</p>
    <p>BEWARE - some of these jokes are quite raunchy.</p>
    <p>After the break, the timer is reset, and the new work period starts (I don't like the idea of 'work' so I call it 'create').</p>
    <p>The timer also has a couple of buttons to 1) start/stop, and 2) pause/resume the timer. **Currently, they both start and stop only, the pause/resume is not yet working.</p>
    <p>The navbar routes go to a 'How To' page and this 'About' page as well as to 'The App'.</p>
  </div>
)

// Nav/Routes
class App extends Component {
  render () {
    return (
      <div>
        <div>
          <nav className='navbar navbar-nav'>
            <ul className='nav navbar-nav'>
              <li><Link to='/'>The App</Link></li>
              <li><Link to='/how-to'>How To</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/how-to' component={HowTo} />
          <Route path='/about' component={About} />
        </div>
      </div>
    )
  }
}

export default App
