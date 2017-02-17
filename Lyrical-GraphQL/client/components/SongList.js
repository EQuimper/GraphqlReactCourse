import React, { Component } from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {
  _renderSongs() {
    return this.props.data.songs.map(song => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
  }

  render() {
    if (this.props.data.loading) {
      return (
        <h3>Loading...</h3>
      );
    }
    return (
      <div>
        <ul className="collection">
          {this._renderSongs()}
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);