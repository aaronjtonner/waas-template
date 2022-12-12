import React from "react"
import Layout from "../components/layout"
import Hero from "../components/heros/hero"
import Bio from "../components/bio"
import Guarantee from "../components/guarantee"
import FullServices from "../components/fullServices"
import AllReviews from "../components/reviews"
import FormContact from "../components/forms/formContact"
import FeaturedGallery from "../components/featuredGallery"
import SEO from "../components/seo"

export default function index() {
  return (
    <Layout>
      <SEO
        title="KLAAD Glass Ltd. -  Your Trusted Window Contractor in Calgary, AB!"
        description="KLAAD Glass Ltd. is a reliable window & door repair contractor in Calgary, AB with 25 years of residential & commercial experience. Call 403-272-8932 now!"
      />
      <Hero />
      <Bio />
      <FullServices />
      <AllReviews />
      <FormContact title="Write us a message!" />
    </Layout>
  )
}
