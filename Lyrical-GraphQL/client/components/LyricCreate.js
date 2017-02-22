import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import addLyricToSongMutation from '../queries/addLyricToSong';

class LyricCreate extends Component {
  state = {
    content: ''
  }

  _onSubmit = e => {
    e.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this._onSubmit}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          type="text"
          onChange={e => this.setState({
            content: e.target.value
          })}
        />
      </form>
    );
  }
}

export default graphql(addLyricToSongMutation)(LyricCreate);
