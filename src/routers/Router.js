import { RouterAfterAuth } from './RouterAfterAuth';
import { RouterBeforeAuth } from './RouterBeforeAuth';

const Router = (props) =>
  <UserContext.Consumer>
    {context => context.authUser
      ? <RouterAfterAuth />
      : <RouterBeforeAuth />
    }
  </UserContext.Consumer>

export default Router;