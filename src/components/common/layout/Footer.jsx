import Link from "next/link";
import React from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import tw from "twin.macro";

// helpers
import {
  donationsCategories,
  peopleNeedHelpCategories,
} from "../../../data/navbarData";

// images and icons
import facebookIcon from "../../../public/svg/facebook_footer_icon.svg";
import instagramIcon from "../../../public/svg/instagram_footer_icon.svg";
import twitterIcon from "../../../public/svg/twitter_footer_icon.svg";
import emailIcon from "../../../public/svg/dashboard_chat_icon_empty.svg";

// components
import { Container } from "../containers/Container";

const StyledFooter = styled.div`
  ${tw`bg-primary text-white pt-10`}
  p {
    font-size: 14px;
    text-align: center;

    margin: 20px auto 0 auto;

    a {
      color: white;
      font-weight: 600;
    }
  }

  .sections {
    ${tw`flex gap-3 text-white w-full justify-between`}

    .footerSection {
      h3 {
        font-weight: 600;
        margin-bottom: 10px;
      }

      .categories {
        ${tw`flex items-start gap-4`}
      }

      .links {
        ${tw`flex flex-col gap-1`}
        color: rgba(255, 255, 255, 0.6);

        a:hover {
          color: rgba(255, 255, 255, 0.8);
        }

        .socialLink {
          ${tw`flex gap-2 items-center my-1`}
          p {
            font-size: 15px;
            margin: 0;
          }

          svg {
            max-height: 20px;
            width: 20px;
            path {
              fill: rgba(255, 255, 255, 0.8);
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    ${tw`hidden`}
  }
`;

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <Container style={{ maxWidth: 1200, paddingBottom: 0 }}>
        <div className="sections">
          <div className="footerSection first">
            <h3>DONATIONS CATEGORIES</h3>
            <div className="categories">
              <div className="links">
                {donationsCategories.map((category, index) => {
                  if (index < 7) {
                    return (
                      <Link href={category.pageLink} key={index}>
                        {category.title}
                      </Link>
                    );
                  }
                })}
              </div>
              <div className="links">
                {donationsCategories.map((category, index) => {
                  if (index >= 7) {
                    return (
                      <Link href={category.pageLink} key={index}>
                        {category.title}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="footerSection">
            <h3>GIVE HELP TO OTHERS</h3>
            <div className="links">
              {peopleNeedHelpCategories.map((category, index) => {
                return (
                  <Link href={category.pageLink} key={index}>
                    {category.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="footerSection">
            <h3>ASSOCIATIONS</h3>
          </div>
          <div className="footerSection">
            <h3>NEED HELP</h3>
            <div className="links">
              <Link href="/faq">FAQ</Link>
              <Link href="/term-of-use">Term of use</Link>
              <Link href="/contact-us">Contact us</Link>
              <div className="socialLink">
                <ReactSVG src={emailIcon.src} />
                <p>sadaqa.contact@gmail.com</p>
              </div>
              <a
                href="facebook.com"
                target="_blank"
                className="socialLink"
                rel="noreferrer"
              >
                <ReactSVG src={facebookIcon.src} />
                <p>/sadaqa-dz</p>
              </a>
              <a
                href="instagram.com"
                target="_blank"
                className="socialLink"
                rel="noreferrer"
              >
                <ReactSVG src={instagramIcon.src} />
                <p>/sadaqa-dz</p>
              </a>
              <a
                href="twitter.com"
                target="_blank"
                className="socialLink"
                rel="noreferrer"
              >
                <ReactSVG src={twitterIcon.src} />
                <p>/sadaqa-dz</p>
              </a>
            </div>
          </div>
        </div>
        <p>
          Copyright Sadaqa ©2021 All rights reserved | made with ♥ by{" "}
          <a
            href="https://www.linkedin.com/in/yasser-belatreche-6b450620a/"
            target="_blank"
            rel="noreferrer"
          >
            Yasser
          </a>
        </p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
