import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import {
  AnchorInline,
  ButtonInline,
  ButtonPrimary,
  ButtonUnderline,
} from "../../components/buttons"
import Layout from "../../components/layout"
import {
  Container,
  GridThree,
  Section,
} from "../../components/layoutComponents"

const Item = styled.div`
  text-align: center;
`

const ItemOther = styled.div`
  text-align: center;
  max-width: 70ch;
  width: 100%;
  margin: 0 auto;
`

export default function OtherGlassServices() {
  return (
    <Layout>
      <Section>
        <Container>
          <ItemOther className="spacing">
            <h3 className="caps bold">other services</h3>
            <StaticImage
              src="../../images/mirror-installation-calgary.jpg"
              alt="mirror installation calgary"
              height={400}
            />

            <p>
              We provide stand alone{" "}
              <span className="bold">shower systems</span>, corner systems,
              frameless and other variations of shower glass such as obscure
              glass. We also provide{" "}
              <span className="bold">mirror installation</span> for residential
              and commercial bathrooms, gyms, and studios. We provide{" "}
              <span className="bold">specialty services</span> such as building
              envelope consultation and we{" "}
              <span className="bold">contract glass</span> for large window
              manufacturers for glass installs.
            </p>
            <ButtonUnderline className="button" to="/contact">
              contact us &#x2192;
            </ButtonUnderline>
          </ItemOther>
        </Container>
      </Section>
    </Layout>
  )
}
