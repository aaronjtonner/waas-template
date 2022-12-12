import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"
import FormContact from "../components/forms/formContact"
import FullServices from "../components/fullServices"
import SEO from "../components/seo"

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Our Services - KLAAD Glass Ltd."
        description="We offer residential & commercial window repairs & replacement services, and storm door services in Calgary and surrounding areas."
      />
      <Banner
        to1="/"
        link1="Home"
        to2="/services"
        link2="Services"
        title="Glass Services"
      />
      <FullServices />
      <FormContact title="get in touch with us using the form below" />
    </Layout>
  )
}
