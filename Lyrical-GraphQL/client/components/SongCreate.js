import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import fetchSongsQuery from '../queries/fetchSongs';
import addSongMutation from '../queries/addSong';

class SongCreate extends Component {
  state = {
    title: ''
  }

  _onSubmit = e => {
    e.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{
        query: fetchSongsQuery
      }]
    })
    .then(() => hashHistory.push('/'));
  }

  _titleChange = e => this.setState({ title: e.target.value })

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this._onSubmit}>
          <label>Song Title</label>
          <input
            type="text"
            onChange={this._titleChange}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

export default graphql(addSongMutation)(SongCreate);
