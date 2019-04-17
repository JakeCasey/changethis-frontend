import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './wrappers/User';
import SignoutButton from './SignoutButton';

const Nav = () => (
  <User>
    {({ data: { me }, error }) => (
      <NavStyles data-test="nav">
        <Link href="/">
          <a>Home</a>
        </Link>
        {me && (
          <>
            <Link href="/permissions">
              <a>Permissions</a>
            </Link>
            <Link href="/plans">
              <a>Plans</a>
            </Link>
            <SignoutButton />
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
