import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongQuery from '../queries/fetchSong';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;
    if (loading) {
      return <h3>Loading...</h3>;
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate />
      </div>
    );
  }
}

export default graphql(fetchSongQuery, {
  options: props => ({
    variables: {
      id: props.params.id
    }
  })
})(SongDetail);
