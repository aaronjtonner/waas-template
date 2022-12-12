import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"
import FormContact from "../components/forms/formContact"
import Bio from "../components/bio"
import Guarantee from "../components/guarantee"
import AllReviews from "../components/reviews"
import CTA from "../components/CTA"
import SEO from "../components/seo"

export default function About() {
  return (
    <Layout>
      <SEO
        title="Abous Us - KLAAD Glass Ltd."
        description="KLAAD Glass Ltd. is a reliable window & door repair contractor servicing Calgary, AB and surrounding areas. With extensive residential & commercial experience, we can handle your window installation & glass replacement needs, storm door installation & repairs, shower systems, commercial mirrors, and more! Call us today to request a free estimate!"
      />
      <Banner
        to1="/"
        link1="Home"
        to2="/about"
        link2="About"
        title="about us"
      />
      <Bio />
      <Guarantee />
      <AllReviews />
      <CTA
        subtitle="need to request a service"
        description="KLAAD Glass can help you with all your residential or commercial glass and window service needs"
      />
      <FormContact title="get a free estimate for your glass installation or repair!" />
    </Layout>
  )
}
