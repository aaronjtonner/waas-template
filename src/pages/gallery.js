import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import { Container, GridTwo, Section } from "../components/layoutComponents"
import FormContact from "../components/forms/formContact"
import Bio from "../components/bio"
import Guarantee from "../components/guarantee"
import AllReviews from "../components/reviews"
import CTA from "../components/CTA"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorInline, ButtonPrimary } from "../components/buttons"
import SEO from "../components/seo"

const ImageStyle = {
  height: "600px",
  width: "100%",
  objectFit: "cover",
}

export default function Gallery() {
  return (
    <Layout>
      <SEO
        title="Project Gallery - KLAAD Glass Ltd."
        description="Have a look at our most recent residential and commercial window and door installations, repairs, and more!"
      />
      <Banner
        to1="/"
        link1="Home"
        to2="/gallery"
        link2="Gallery"
        title="the KLAAD Glass project gallery"
      />
      <Section>
        <Container className="spacing">
          <h2 className="title bold caps">
            residential & commercial window installations, repairs, storm doors
          </h2>
          <GridTwo>
            <StaticImage
            style={ImageStyle}
              src="../images/gallery/residential-window-gallery-1.jpeg"
              alt="calgary glass contractor project gallery"
            />
            <StaticImage
            style={ImageStyle}
              src="../images/gallery/residential-window-gallery-2.jpg"
              alt="calgary glass contractor project gallery"
            />
            <StaticImage
            style={ImageStyle}
              src="../images/gallery/onsite-gallery-1.jpeg"
              alt="calgary glass contractor project gallery"
            />
            {/* <StaticImage
            height={50}
              src="../images/gallery/laughing-gallery-1.jpg"
              alt="calgary glass contractor project gallery"
            /> */}
            <StaticImage
            style={ImageStyle}
              src="../images/gallery/door-installations-and-repairs-gallery-1.jpeg"
              alt="calgary glass contractor project gallery"
            />
            <StaticImage
            style={ImageStyle}
              src="../images/gallery/residential-window-gallery-3.jpg"
              alt="calgary glass contractor project gallery"
            />
            <StaticImage
            style={ImageStyle}
              className="stretch"
              src="../images/gallery/window-repair-gallery-1.jpg"
              alt="calgary glass contractor"
            />
            <StaticImage
            style={ImageStyle}
              className="stretch"
              src="../images/gallery/window-repair-gallery-2.jpg"
              alt="calgary glass contractor"
            />
            <StaticImage
            style={ImageStyle}
              className="stretch"
              src="../images/gallery/window-repair-3.jpg"
              alt="calgary glass contractor"
            />
            <StaticImage
            style={ImageStyle}
              className="stretch"
              src="../images/gallery/window-repair-gallery-4.jpg"
              alt="calgary glass contractor"
            />
            <StaticImage
            style={ImageStyle}
              className="stretch"
              src="../images/gallery/window-repair-gallery-5.jpg"
              alt="calgary glass contractor"
            />
            <StaticImage
            style={ImageStyle}
              className="stretch"
              src="../images/gallery/window-repair-gallery-6.jpg"
              alt="calgary glass contractor"
            />
          </GridTwo>
          <div className="center spacing">
            <h3 className="italics caps">request a service</h3>
            <p>
              Call us at{" "}
              <AnchorInline href="tel: 403-891-3172">403-891-3172</AnchorInline>{" "}
              or fill out our contact form to reuest a service or free estimate
              for us!
            </p>
            <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
          </div>
        </Container>
      </Section>
      <AllReviews />
      <CTA
        subtitle="need to request a service"
        description="KLAAD Glass can help you with all your residential or commercial glass and window service needs"
      />
      <FormContact title="get a free estimate for your glass installation or repair!" />
    </Layout>
  )
}
