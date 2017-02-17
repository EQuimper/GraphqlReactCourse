import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Lyrical</div>
    </ApolloProvider>
  )
};

render(
  <Root />,
  document.querySelector('#root')
);
