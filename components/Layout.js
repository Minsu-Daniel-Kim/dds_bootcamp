import React from 'react';
import {Container, Sticky} from 'semantic-ui-react';
import Header from './Header';
import Head from 'next/head';

export default props => {

  return (
    <div>
        <Sticky>
        <Header />
        </Sticky>
        <Container style={{marginTop:'50px'}}>
          <Head>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
          </Head>

          {props.children}
        </Container>

    </div>

  )

};
