import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { AnchorInline, ButtonPrimary } from "./buttons"
import { Container, GridThree, Section } from "./layoutComponents"

export default function FeaturedGallery() {
  return (
    <Section>
      <Container className="spacing">
        <h2 className="title bold italics center">
          glass installation & repair jobs
        </h2>
        <GridThree>
          <StaticImage
            className="stretch"
            src="../images/gallery/window-repair-gallery-1.jpg"
            alt="window repair job"
          />
          <StaticImage
            className="stretch"
            src="../images/gallery/window-repair-gallery-2.jpg"
            alt="window repair job"
          />
          <StaticImage
            className="stretch"
            src="../images/gallery/window-repair-gallery-3.jpg"
            alt="window repair calgary, ab"
          />
          <StaticImage
            className="stretch"
            src="../images/gallery/window-repair-gallery-4.jpg"
            alt="window repair calgary, ab"
          />
          <StaticImage
            className="stretch"
            src="../images/gallery/window-repair-gallery-5.jpg"
            alt="window repair calgary, ab"
          />
          <StaticImage
            className="stretch"
            src="../images/gallery/window-repair-gallery-6.jpg"
            alt="window repair calgary, ab"
          />
          {/* <StaticImage
            className="stretch"
            src="../images/gallery/door-installation-and-repairs-gallery-2.jpg"
            alt="door repair job calgary"
          /> */}
        </GridThree>
        <div className="center spacing">
          <h3 className="italics caps">request a service</h3>
          <p>
            Call us at{" "}
            <AnchorInline href="tel: 403-272-8932">403-272-8932</AnchorInline>{" "}
            or fill out our contact form to reuest a service or free estimate
            for us!
          </p>
          <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
        </div>
      </Container>
    </Section>
  )
}
