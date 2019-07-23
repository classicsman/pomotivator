import React from 'react'

class Chuckism extends React.Component {
  constructor () {
    super()
    this.state = { chuckism: [] }
  }

  // fetch from API
  componentDidMount () {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then((value) => {
        this.setState({ chuckism: value })
      })
      .catch(console.log)
  }

  // create a card with a title and joke
  renderChuckism () {
    return (
      <div style={{ color: 'black' }} className='card'>
        <div className='card-header'>
            Chuckism:
        </div>
        <div className='card-body'>
          <blockquote className='blockquote mb-0'>
            <p>{this.state.chuckism.value}</p>
          </blockquote>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div>{this.renderChuckism()}</div>
    )
  }
}
export default Chuckism
