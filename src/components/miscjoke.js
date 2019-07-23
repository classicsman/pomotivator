import React from 'react'

class MiscJoke extends React.Component {
  constructor () {
    super()
    this.state = { joke: '' }
  }

  // fetch from API
  componentDidMount () {
    fetch('https://sv443.net/jokeapi/category/Miscellaneous?blacklistFlags=religious,nsfw')
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
  renderMiscJoke () {
    return (
      <div style={{ color: 'green' }} className='card'>
        <div className='card-header'>
            A Miscellaneous Joke:
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
      <div>{this.renderMiscJoke()}</div>
    )
  }
}
export default MiscJoke
