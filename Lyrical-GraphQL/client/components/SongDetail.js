import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSongQuery from '../queries/fetchSong';

class SongDetail extends Component {
  componentDidMount() {
    this.props.
  }

  render() {
    return (
      <div>
        <h3>Song Detail</h3>
      </div>
    );
  }
}

export default graphql(fetchSongQuery)(SongDetail);
