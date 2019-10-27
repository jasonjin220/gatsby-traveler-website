import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h3>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </h3>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  text-transform: uppercase;

  h3 {
    text-align: center;
    font-size: 1.8rem;

    @media screen and (max-width: 500px) {
      font-size: 1.4rem;
      margin: 0 1.5rem;
    }
  }
  .title {
  }

  .subtitle {
    color: var(--primaryColor);

    @media screen and (max-width: 500px) {
      display: block;
    }
  }
`

export default Title
