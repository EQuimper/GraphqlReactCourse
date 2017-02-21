import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongsQuery from '../queries/fetchSongs';
import deleteSongQuery from '../queries/deleteSong';

class SongList extends Component {
  _onSongDelete(id) {
    this.props.mutate({
      variables: {
        id
      }
    })
    .then(() => this.props.data.refetch());
  }

  _renderSongs() {
    return this.props.data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        <Link to={`songs/${id}`}>{title}</Link>
        <i
          className="material-icons"
          onClick={() => this._onSongDelete(id)}
        >
          delete
        </i>
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

export default graphql(deleteSongQuery)(
  graphql(fetchSongsQuery)(SongList)
);
