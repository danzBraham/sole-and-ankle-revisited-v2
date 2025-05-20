import styled from "styled-components";

import { QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  // For our mobile hamburger menu, we'll want to use a <button></button>
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <IconWrapper>
            <Icon id="shopping-bag" strokeWidth={2} />
            <Icon id="search" strokeWidth={2} />
            <Dialog>
              <DialogTrigger asChild>
                <UnstyledButton>
                  <Icon id="menu" strokeWidth={2} />
                </UnstyledButton>
              </DialogTrigger>
              <DialogPortal>
                <StyledOverlay />
                <DialogContent>
                  <MobileMenu />
                </DialogContent>
              </DialogPortal>
            </Dialog>
          </IconWrapper>
        </Side>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-y: hidden;
  overflow-x: auto;

  @media ${QUERIES.tabletAndSmaller} {
    align-items: center;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 6.8vw - 3rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const IconWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const StyledOverlay = styled(DialogOverlay)`
  background-color: hsla(220, 5%, 40%, 0.8);
  position: fixed;
  inset: 0;
`;

export default Header;
