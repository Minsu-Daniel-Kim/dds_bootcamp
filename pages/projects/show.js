
import React, {Component} from 'react';
import {Card, Grid, Button} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Project from '../../ethereum/project';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';
// import factory from '../../ethereum/factory';

class ProjectShow extends Component {

  static async getInitialProps(props) {

    const address = props.query.address;
    const project = Project(address);
    const summary = await project.methods.getSummary().call();

    console.log(summary);

    return {
        address: address,
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4]

    };


  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [

      {
          header: manager,
          meta: 'Address of Manager',
          description: 'The manager created this campaign',
          style: {overflowWrap: 'break-word'}
      },
      {
          header: minimumContribution,
          meta: 'Minimum Contribution (wei)',
          description: 'You must pay for it!',
          style: {overflowWrap: 'break-word'}
      },
      {
          header: requestsCount,
          meta: 'Minimum Contribution (wei)',
          description: 'Minimum Contribution (wei)',
          style: {overflowWrap: 'break-word'}
      },
      {
          header: approversCount,
          meta: 'The counts of approvers',
          description: 'The counts of approvers',
          style: {overflowWrap: 'break-word'}
      },
      {
          header: web3.utils.fromWei(balance, 'ether'),
          meta: 'Campaign Balance (ether)',
          description: 'You must pay for it!',
          style: {overflowWrap: 'break-word'}
      }
    ];

    return <Card.Group items={items} />;

  }

  render() {

    return (
      <Layout>
        <h3> Project Show </h3>
        <Grid>
          <Grid.Column width={10}>
            {this.renderCards()}
            <Link route={`/projects/${this.props.address}/requests`}>
                <a>
                  <Button primary> View Requests </Button>
                </a>
            </Link>
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={this.props.address}/>

          </Grid.Column>
        </Grid>


      </Layout>
    );
  }


}

export default ProjectShow;
