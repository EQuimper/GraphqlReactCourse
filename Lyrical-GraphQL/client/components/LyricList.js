import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import likeLyricMutation from '../queries/likeLyric';

class LyricList extends Component {
  _toggleLiked(id) {
    this.props.mutate({
      variables: {
        id
      }
    });
  }

  _renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <div className="vote-box">
          <i
            className="material-icons"
            onClick={() => this._toggleLiked(id)}
          >
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ));
  }
  render() {
    return (
      <ul className="collection">
        {this._renderLyrics()}
      </ul>
    );
  }
}

export default graphql(likeLyricMutation)(LyricList);
