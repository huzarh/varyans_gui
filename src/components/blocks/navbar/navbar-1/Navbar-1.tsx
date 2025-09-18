"use client";

import { Fragment, ReactElement, useRef } from "react";
import clsx from "clsx";
// -------- CUSTOM HOOKS -------- //
import useSticky from "hooks/useSticky";
import useNestedDropdown from "hooks/useNestedDropdown";
// -------- CUSTOM COMPONENTS -------- //
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
// LOCAL CUSTOM COMPONENTS
import Info from "../components/Info";
import Search from "../components/search";
import Signin from "../components/signin";
import Signup from "../components/signup";
import MiniCart from "../components/mini-cart";
import HeaderRight from "../components/header-right";
import FancyHeader from "../components/fancy-header";
import BlogNavItem from "../components/blog-nav-item";
import TeamNavItem from "../components/team-nav-item";

// ===================================================================
interface NavbarProps {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
}
// ===================================================================

export default function NavbarOne({
  fancy,
  button,
  logoAlt,
  cart = false,
  info = false,
  social = false,
  search = false,
  language = false,
  stickyBox = true,
  navOtherClass = "navbar-other w-100 d-flex ms-auto",
  navClassName = "navbar navbar-expand-lg center-nav transparent"
}: NavbarProps) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? "logo-dark" : logoAlt ?? "logo-light";

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
         {/* <NextLink href="/" title={<img alt="logo" src={`/img/${logo}.png`} srcSet={`/img/${logo}@2x.png 2x`} />} /> */}
         <NextLink href="/" title={<span
        style={{
          fontWeight: "bold",
          fontSize: 28,
          color: sticky ? "#222" : "#fff",
          letterSpacing: 1,
          transition: "color 0.3s"
        }}
      >
        Varyans
      </span>} />
       </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">Varyans</h3>
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-auto"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            <BlogNavItem />
            <TeamNavItem />
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="info@email.com" className="link-inverse" href="mailto:first.last@email.com" />
              <br />
              <NextLink href="tel:0123456789" title="00 (123) 456 78 90" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <HeaderRight
        cart={cart}
        info={info}
        button={button}
        search={search}
        social={social}
        language={language}
        navOtherClass={navOtherClass}
      />
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox ? <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} /> : null}

      <nav
        ref={navbarRef}
        className={clsx(
          navClassName,
          sticky ? "navbar-light" : "navbar-dark",
          { "navbar-clone fixed navbar-stick": sticky }
        )}
      >
        {fancy ? (
          <FancyHeader>{headerContent}</FancyHeader>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>

      {/* ============= info sidebar ============= */}
      {info ? <Info /> : null}

      {/* ============= show search box ============= */}
      {search ? <Search /> : null}

      {/* ============= cart sidebar ============= */}
      {cart ? <MiniCart /> : null}
    </Fragment>
  );
}
