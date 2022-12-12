import React from 'react'
import Layout from "../components/layout"
import SEO from '../components/seo'
import { Container, Section } from '../components/layoutComponents'
import FormCareer from '../components/forms/formCareer'
import BannerSimple from '../components/banners/bannerSimple'

export default function Careers() {
  return (
    <Layout>
        <SEO title="Careers with KLAAD Glass Ltd." description="KLAAD Glass has some exciting career opportunities in the glass industry!" />
        <BannerSimple
            to1="/"
            link1="Home"
            to2="/careers"
            link2="Careers"
            title="Careers with KLAAD Glass Ltd."
        />
        <Section>
            <Container className='spacing'>
            <FormCareer title="Please use the form below to send us your contact information and resume!" description="KLAAD Glass Ltd. is excited to announce that we are now looking to hire full-time employees to join the crew and work on residential and commercial projects in the glass repair industry!" />
            </Container>
        </Section>
    </Layout>
  )
}
