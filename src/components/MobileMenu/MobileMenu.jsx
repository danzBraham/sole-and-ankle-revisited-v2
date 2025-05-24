import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onDismiss}>
      <DialogPortal>
        <Overlay />

        <Content>
          <DialogTitle asChild>
            <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
          </DialogTitle>
          <DialogDescription asChild>
            <VisuallyHidden>Main navigation links for the website</VisuallyHidden>
          </DialogDescription>
          <DialogClose asChild>
            <CloseButton>
              <Icon id="close" />
              <VisuallyHidden>Dismiss Menu</VisuallyHidden>
            </CloseButton>
          </DialogClose>

          <Filler />
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
        </Content>
      </DialogPortal>
    </Dialog>
  );
};

const Overlay = styled(DialogOverlay)`
  background-color: hsla(220, 5%, 40%, 0.8);
  position: fixed;
  inset: 0;
`;

const Content = styled(DialogContent)`
  position: fixed;
  top: 0;
  right: 0;
  width: 18.75rem;
  height: 100%;
  background-color: var(--color-white);
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 6px;
  right: 0px;
  padding: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  justify-content: flex-end;
`;

const FooterLink = styled.a`
  text-decoration: none;
  font-size: ${14 / 16}rem;
  color: var(--color-gray-700);
  width: fit-content;
`;

export default MobileMenu;
