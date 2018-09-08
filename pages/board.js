import React, {Component} from 'react';
// import {Card, Grid, Button} from 'semantic-ui-react';
import {Container,Grid, Segment, Button, Card, Image } from 'semantic-ui-react';
import Layout from '../components/Layout';
import TicketList from '../components/TicketList';
import axios from 'axios';


class Board extends Component {
  constructor(props) {
		super(props);
		this.state = {
				backlogTickets: null

		};

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {


      // const posts = response.data.map(post => {
      //   // console.log(post);
      //   return <div> {post.title} </div>;
      // })

      this.setState({backlogTickets: response.data});
    })


	}
  // state = {
  //   posts: []
  // };
  //
  // static async getInitialProps(props) {
  //   console.log('hi1');
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => {
  //     console.log('here');
  //     console.log(response);
  //     this.setState({reponse});
  //   })
  //
  //   return {hi:2};
  //
  // }

  render() {
    return (
      <Layout>
      
        <div> {this.state.posts} </div>
        <Grid columns={5} padded>
          <Grid.Column>
            <TicketList listName='Backlog' tickets={this.state.backlogTickets} />
          </Grid.Column>
          <Grid.Column>
            <TicketList listName='Get Started'/>
          </Grid.Column>
          <Grid.Column>
            <TicketList listName='In Progress'/>
          </Grid.Column>
          <Grid.Column>
            <TicketList listName='In Review'/>
          </Grid.Column>
          <Grid.Column>
            <TicketList listName='Completed'/>
          </Grid.Column>
        </Grid>
      </Layout>
    )
  };

}

export default Board;
