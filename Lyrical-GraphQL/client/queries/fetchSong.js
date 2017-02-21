import gql from 'graphql-tag';

export default gql`
  query FetchSongQuery($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;
