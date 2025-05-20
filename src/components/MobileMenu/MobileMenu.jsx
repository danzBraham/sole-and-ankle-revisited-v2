import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import {
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";

const MobileMenu = () => {
  return (
    <Wrapper>
      <DialogTitle asChild>
        <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
      </DialogTitle>
      <DialogDescription asChild>
        <VisuallyHidden>Main navigation links for the website</VisuallyHidden>
      </DialogDescription>
      <StyledClose asChild>
        <UnstyledButton>
          <Icon id="close" />
          <VisuallyHidden>Dismiss Menu</VisuallyHidden>
        </UnstyledButton>
      </StyledClose>
      <Side />
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  background-color: var(--color-white);
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const Side = styled.div`
  flex: 1;
`;

const StyledClose = styled(DialogClose)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  flex: 1;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: var(--font-medium);
  font-size: ${18 / 16}rem;
  color: var(--color-gray-900);
  width: fit-content;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  justify-content: end;
`;

const FooterLink = styled.a`
  text-decoration: none;
  font-size: ${14 / 16}rem;
  color: var(--color-gray-700);
  width: fit-content;
`;

export default MobileMenu;
