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
    const realRoomName = Object.keys(this.state.rooms).find(
      roomName => this.state.rooms[roomName]
    )

    this.props.history.push(`/rooms/${realRoomName}`)
  }

  removeRoom = (room) => {
    const rooms = {...this.state.rooms}
    rooms[room.name] = null

    this.setState(
      { rooms },
      this.loadValidRoom
    )
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar
          user={this.props.user}
          users={this.props.users}
          signOut={this.props.signOut}
        />
        <Chat
          user={this.props.user}
          room={this.state.room}
          removeRoom={this.removeRoom}
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
