import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import {
  AnchorInline,
  ButtonInline,
  ButtonPrimary,
  ButtonUnderline,
} from "./buttons"
import CTASmall from "./CTASmall"
import { Container, GridThree, Section } from "./layoutComponents"

const Item = styled.div`
  text-align: center;

  .service-img {
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
`

const ItemOther = styled.div`
  text-align: center;
  max-width: 70ch;
  width: 100%;
  margin: 0 auto;
`

export default function FullServices() {
  return (
    <Section>
      <Container className="spacing-lg">
        <div className="spacing center">
          <h2 className="title italics caps bold">services we provide</h2>
          <p>
            We have extensive experience in{" "}
            <ButtonInline to="/services/home-window-repair-calgary">
              residential
            </ButtonInline>{" "}
            and{" "}
            <ButtonInline to="/services/commercial-window-repair-calgary">
              commercial glass replacement
            </ButtonInline>
            , repair, and installation. We are your trusted window contractor in
            Calgary!
          </p>
        </div>
        <div className="spacing-lg">
          <GridThree>
            <Item className="spacing">
              <StaticImage
                className="service-img"
                src="../images/home-window-repair-installation-calgary-service.jpeg"
                alt="home window repair & installation calgary"
              />
              <h3 className="caps bold">home window repair & installation</h3>
              <p>
                KLAAD Glass Ltd. has decades of experience doing big residential
                window repair jobs no one else wants to do! Large home windows
                are what we do every day, but don't worry, we handle your
                smaller jobs too!
              </p>
              <ButtonUnderline
                className="button"
                to="/services/home-window-repair-calgary"
              >
                home window repairs &#x2192;
              </ButtonUnderline>
            </Item>
            <Item className="spacing">
              <StaticImage
                className="service-img"
                src="../images/24-7-commercial-window-repair-calgary.jpg"
                alt="24/7 commercial window repair calgary"
              />
              <h3 className="caps bold">24/7 commercial window repair</h3>
              <p>
                KLAAD Glass Ltd. Is available to you 24 hours a day! We handle
                insurance claims, emergency situations and late night security
                risks. We are here to service your every need in windows &
                glass!{" "}
              </p>
              <ButtonUnderline
                className="button"
                to="/services/commercial-window-repair-calgary"
              >
                commercial window repairs &#x2192;
              </ButtonUnderline>
            </Item>
            <Item className="spacing">
              <StaticImage
                className="service-img"
                src="../images/storm-door-installations-calgary.jpg"
                alt="new storm doors installation calgary"
              />
              <h3 className="caps bold">new storm door installations</h3>
              <p>
                KLAAD Glass Ltd. has been installing screen doors from various
                manufacturers for years. We can install what you buy from big
                box retailers, or one you get from us. Click on our free
                estimates link to ask about this service today!
              </p>
              <ButtonUnderline
                className="button"
                to="/services/storm-doors-calgary"
              >
                new storm doors &#x2192;
              </ButtonUnderline>
            </Item>
          </GridThree>

          <CTASmall />
        </div>
      </Container>
    </Section>
  )
}
