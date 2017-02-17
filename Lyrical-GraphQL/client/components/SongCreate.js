import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

class SongCreate extends Component {
  state = {
    title: ''
  }

  _onSubmit = e => {
    e.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title
      }
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

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);