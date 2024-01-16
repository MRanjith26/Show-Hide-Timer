import {Component} from 'react'
import './index.css'

class Clock extends Component {
  //  Mounting Phase will happen here
  constructor(props) {
    super(props)
    //  Initialising state
    this.state = {date: new Date()}
  }

  componentDidMount() {
    console.log('componentDidMount called')
    //  updating time for every second  (for 1000 milliseconds = 1 second)
    this.timerID = setInterval(this.tick, 1000)
  }

  // un mounting phase happens here (clearing activities)
  componentWillUnmount() {
    console.log('componentWillUnmount called')
    clearInterval(this.timerID)
  }

  tick = () => {
    //  updating the state object based on time interval
    this.setState({date: new Date()})
  }

  render() {
    //  Logging state
    const {date} = this.state
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
