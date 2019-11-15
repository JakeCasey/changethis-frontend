import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import User from "./wrappers/User";
import SignoutButton from "./SignoutButton";
import styled from "styled-components";

const Nav = () => (
  <User>
    {({ data, error, loading }) => {
      if (loading) return <p> loading ... </p>;
      let me = data.me;

      return (
        <NavStyles data-test="nav">
          <Link href="/reporting">
            <a>Reporting</a>
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
            <>
              <Link href="/pricing">
                <a>Sign Up</a>
              </Link>
              <Link href="/signin">
                <a className="menu_button">Sign In</a>
              </Link>
            </>
          )}
        </NavStyles>
      );
    }}
  </User>
);

export default Nav;
