import React, { Component } from 'react'

import base from './base'
import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
  state = {
    room: {},
    rooms: {},
  }

  componentDidMount() {
    const { roomName } = this.props.match.params

    base.syncState(
      'rooms',
      {
        context: this,
        state: 'rooms',
        then: () => this.loadRoom(roomName),
      }
    )


  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.roomName !== this.props.match.params.roomName) {
      this.loadRoom(this.props.match.params.roomName)
    }
  }

  loadRoom = (roomName) => {
    if (roomName === 'new') return null

    const room = this.state.rooms[roomName]

    if (room) {
      this.setState({ room })
    } else {
      this.loadValidRoom()
    }
  }

  loadValidRoom = () => {
    const roomName = Object.keys(this.state.rooms)[0]
    this.props.history.push(`/rooms/${roomName}`)
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar
          user={this.props.user}
          signOut={this.props.signOut}
        />
        <Chat
          user={this.props.user}
          room={this.state.room}
        />
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main
