import React from "react"
import styled from "styled-components"
import { FaStar, FaGoogle } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { StaticImage } from "gatsby-plugin-image"
import { Container, GridAuto, Section } from "./layoutComponents"

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 6em auto 6em;
`

const Content = styled.div`
  h3 {
    color: var(--txt-light);
  }
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;
`

const Bg = styled.div`
  background: var(--clr-dark);
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
`

const Wrapper = styled.div`
  background: var(--clr-light-secondary);
  padding: 2em;
  border-radius: var(--br);
  height: 100%;
  a {
    text-decoration: underline;
  }
`

const FlexStars = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  & * + * {
    margin-left: 2px;
  }
`

const fontStyle = {
  color: "var(--clr-accent)",
}

const FlexTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 36em) {
    flex-direction: column;
  }

  & > * + * {
    margin-left: 10px;
  }
`

const Review = props => {
  return (
    <Wrapper className="spacing">
      <FlexStars>
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
      </FlexStars>
      <p className="italics bold">"{props.review}"</p>
      <a
        href="https://www.google.com/maps/place/KLAAD+Glass+Ltd./@51.0276233,-114.087835,10z/data=!4m7!3m6!1s0x0:0x29f27be051105846!8m2!3d51.0276233!4d-114.087835!9m1!1b1"
        target="_blank"
        className="accent"
      >
        Read more Google reviews &#8594;
      </a>
      <Flex>
        <FcGoogle size={35} />
        <div>
          <p className="caps">{props.name}</p>
        </div>
      </Flex>
    </Wrapper>
  )
}

const AllReviews = () => {
  return (
    <Section>
      <GridWrapper>
        <Bg />
        <Content className="spacing">
          <Container className="spacing">
            <FlexTitle>
              <FlexStars>
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
              </FlexStars>
              <h3 className="title bold caps italics center">5-star reviews</h3>
              <FlexStars>
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
              </FlexStars>
            </FlexTitle>
            <GridAuto>
              <Review
                name="David Friese"
                review="Klaad Glass really came through and helped me out in a bind.  Having moved from Alberta, I was stuck trying to get my window repaired in preparation for selling my condo.  Even with 3000 km's between me and Calgary, KLAAD was proactive, communicated within a timely manner, was able to coordinate access from me being a far, and their repair was top notch."
              />
              <Review
                name="Michael Bruce"
                review="I contracted KLAAD Glass to take care of a few jobs for me. Their lead time was excellent. And the jobs I sent them were definitely not easy. They completed them without issues. Coordinated with our customers directly and made it simple to give the details and move on to my many other busy tasks. I will definitely look to bring them back for more work in the future. They've got enough crew members to handle any jobs I have come up."
              />
              <Review
                name="Stefanie Somers"
                review="KLAAD is a very professional and reliable glass installer of ours. We use him for service repairs on windows/doors as well as sealed unit installs. I highly recommend their service to anyone who is in need of repairs and installs.
            10/10 recommend"
              />
            </GridAuto>
          </Container>
        </Content>
      </GridWrapper>
    </Section>
  )
}

export default AllReviews
