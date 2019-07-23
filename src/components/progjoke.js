import React from 'react'

class ProgJoke extends React.Component {
  constructor () {
    super()
    this.state = { joke: '' }
  }

  // fetch from API
  componentDidMount () {
    fetch('https://sv443.net/jokeapi/category/Programming?blacklistFlags=religious,nsfw')
      .then(res => res.json())
      .then((joke) => {
        if (joke.type === 'single') {
          this.setState({ joke: joke.joke })
        } else {
          this.setState({ joke: `${joke.setup} ${joke.delivery}` })
        }
      })
      .catch(console.log)
  }

  // create a card with a title and joke
  renderProgJoke () {
    return (
      <div style={{ color: 'red' }} className='card'>
        <div className='card-header'>
            A Programming Joke:
        </div>
        <div className='card-body'>
          <blockquote className='blockquote mb-0'>
            <p>{this.state.joke}</p>
          </blockquote>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div>{this.renderProgJoke()}</div>
    )
  }
}
export default ProgJoke
