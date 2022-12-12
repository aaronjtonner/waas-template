import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { AnchorInline, ButtonPrimary } from "./buttons"
import { Actions, Container, Flex, Section } from "./layoutComponents"

const Wrapper = styled.div`
  background: var(--clr-light);
  padding: 2em;
  border-radius: var(--br);
  box-shadow: var(--shadow-light);
`

export default function CTASmall(props) {
  return (
    <Wrapper className="center spacing">
      <h3 className="italics caps">request a service</h3>
      <p>
        Call us at <AnchorInline href="tel: ">000-000-0000</AnchorInline> or
        fill out our contact form to reuest a service or free estimate for us!
      </p>
      <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
    </Wrapper>
  )
}
