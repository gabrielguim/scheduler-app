import React from 'react'
import RouterAfterAuth from './RouterAfterAuth';
import RouterBeforeAuth from './RouterBeforeAuth';
import UserContext from '../store/UserContext';

const Router = () =>
  <UserContext.Consumer>
    {context => context.authUser
      ? <RouterAfterAuth />
      : <RouterBeforeAuth />
    }
  </UserContext.Consumer>

export default Router;