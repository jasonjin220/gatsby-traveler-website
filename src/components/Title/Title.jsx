import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </h4>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 1.7rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }

  h4 {
    text-align: center;
  }

  .subtitle {
    color: var(--primaryColor);

    @media screen and (max-width: 500px) {
      display: block;
    }
  }
`

export default Title
