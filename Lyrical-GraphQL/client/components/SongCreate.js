import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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
  }

  _titleChange = e => this.setState({ title: e.target.value })

  render() {
    return (
      <div>
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