import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import {
  AnchorInline,
  ButtonInline,
  ButtonUnderline,
  ButtonPrimary,
} from "../../components/buttons"
import CTA from "../../components/CTA"
import Layout from "../../components/layout"
import {
  GridThree,
  Section,
  Container,
  Flex,
  FlexMobileOpp,
} from "../../components/layoutComponents"
import AllReviews from "../../components/reviews"
import ServicePage from "../../components/servicePage"
import FormContact from "../../components/forms/formContact"

import BannerImg from "../../images/24-hour-emergency-commercial-window-repair-calgary.jpg"
import MainImg from "../../images/commercial-window-repair-calgary.jpg"
import styled from "styled-components"
import CommercialFAQ from "../../components/faqs/commercialFAQ"
import SEO from "../../components/seo"

const ContentWrapper = styled.div`
  h2,
  p {
    max-width: 70ch;
    width: 100%;
  }
`

export default function CommercialWindowRepair() {
  return (
    <Layout>
      <SEO
        title="Commercial Window Repair Calgary - 24/7 Emergency Repairs"
        description="Did a car drive through your window? Was your building vandalized? KLAAD Glass Ltd. offers 24/7 commercial window repair services in Calgary! 403-272-8932."
      />
      <BannerSecondary
        to1="/"
        link1="home"
        to2="/services"
        link2="services"
        to3="/services/commercial-window-repair-calgary"
        link3="commercial window repair calgary"
        title="24/7 emergency Commercial Window Repair services in Calgary"
        description="KLAAD Glass Ltd. offers 24/7 emergency window & glass repairs for commercial buildings in Calgary. Call us day or night for a repair quote!"
        img={BannerImg}
        alt="24/7 emergency Commercial Window Repair services in Calgary"
      />
      <ServicePage
        title="commercial window repair calgary"
        subtitle="24/7 emergency glass repair services on storefronts, offices, & buildings"
        mainContent="
        At KLAAD Glass, we understand that a broken window can be a major inconvenience for your business, not to mention the security risk. That's why we offer emergency commercial window repair Calgary 24 hours a day, 7 days a week. Whether you need a quick fix for a cracked window or a complete glass replacement, our team of experienced professionals will get the job done quickly and efficiently. We also offer a wide range of other commercial glass services, including installation, repairs, and maintenance. So whether you need emergency commercial glass replacement Calgary or simply want to keep your windows in top condition, KLAAD Glass is the perfect partner for your business.
        "
        mainImg={MainImg}
        mainAlt="commercial window repair calgary"
      />
      <Section>
        <Container>
          <div className="center spacing">
            <h3 className="italics title bold caps">
              request a service on your commercial window
            </h3>
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
      <AllReviews />
      <Section>
        <ContentWrapper>
          <Container className="spacing-lg">
            <Flex>
              <div className="spacing">
                <h2 className="title bold italics">
                  Causes for window damage to storefronts or office buildings
                </h2>
                <p>
                  If you've had the misfortune of having a car drive through
                  your storefront window, or someone vandalizing your window,
                  you'll need to find a commercial window repair company in
                  Calgary that can help you fix the damage... IN A HURRY!!!
                  There are a few things you'll need to take into account when
                  choosing a company to work with. First, you'll need to make
                  sure that they have experience repairing commercial windows.
                  Second, you'll need to make sure that they use high-quality
                  materials and have a good reputation for completing repairs in
                  a timely manner. Finally, you'll need to get an estimate for
                  the cost of the repairs before making a decision. With over 25
                  years of experience serving the Calgary area, KLAAD Glass can
                  be your 24 hour commercial window repair expert in Calgary.
                  Call us now to get your estimate!
                </p>
                <p>Other types of commercial windows we fix are:</p>
                <ul>
                  <li>Storefront window repair & replacement Calgary</li>
                  <li>Office window repairs Calgary</li>
                  <li>High-rise office & building window repairs Calgary</li>
                  <li>Restaurant window & patio glass repair Calgary</li>
                </ul>
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
              <StaticImage
                src="../../images/storefront-window-repair-calgary.jpg"
                alt="storefront window repair calgary"
                className="stretch"
              />
            </Flex>
            <FlexMobileOpp>
              <StaticImage
                src="../../images/commercial-door-repairs-and-replacements-calgary.jpg"
                alt="commercial door repairs and replacements calgary"
                className="stretch"
              />
              <div className="spacing">
                <h2 className="title bold italics">
                  Commercial window/door repairs & replacements
                </h2>
                <p>
                  As a business, we understand that commercial buildings have
                  many specialized needs when it comes to door repair and
                  replacement. Office doors or apartment building entrances in
                  particular see a lot of wear and tear, as they are opened and
                  closed multiple times throughout the day. Commercial doors
                  also take a beating, as they are exposed to the elements and
                  can be subject to forced entry or even daily abuse. When it
                  comes to commercial/office/high-rise/apartment door repairs
                  Calgary, we can replace damaged panels, frames, hinges, locks,
                  and hardware. We can also provide new doors that match the
                  style and color of your existing doors. For storefront door
                  repairs Calgary, we can replace glass panels,
                  weatherstripping, door closers, and more. We understand the
                  importance of keeping your business running smoothly and
                  securely, so we offer fast turnaround times and 24/7 emergency
                  services. Contact KLAAD Glass today for all of your
                  commercial/office/high-rise/apartment door repair needs!
                </p>
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
            </FlexMobileOpp>
            <StaticImage
              src="../../images/building-window-repair-downtown-calgary.jpeg"
              alt="building window repair in dowtown calgary"
            />
          </Container>
        </ContentWrapper>
      </Section>
      <CommercialFAQ />
      <CTA
        subtitle="need a new window for your building or office?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra nisl, eget et sit justo, maecenas elit."
      />
      <FormContact title="get free estimate on your commercial window repair" />
    </Layout>
  )
}
