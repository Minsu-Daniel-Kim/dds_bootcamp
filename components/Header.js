
import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';

export default () => {

  return (

    <Menu>

      <Link route='/'>
        <a className='item'>
          Data Science Bootcamp
        </a>
      </Link>

      <Menu.Menu position='right'>
        <Link route='/'>
          <a className='item'> My Projects </a>
        </Link>
        <Link route='/projects/new'>
          <a className='item'> My Wallet </a>
        </Link>
        {/*<Link route='/projects/new'>
          <a className='item'> + </a>
        </Link>*/}
      </Menu.Menu>
    </Menu>

  );

};
