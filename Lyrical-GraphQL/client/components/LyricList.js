import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import likeLyricMutation from '../queries/likeLyric';

class LyricList extends Component {
  _toggleLiked(id, likes) {
    this.props.mutate({
      variables: {
        id
      },
      /**
       * That help to get speed, this is for fake the ui
       * But we get the real one after with the server
       * If something bad happen apollo by default gonna correct it
       * Here we say we add + 1 to the likes fields
       */
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
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
            onClick={() => this._toggleLiked(id, likes)}
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
