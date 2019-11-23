import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h2 className="title">{title}</h2>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  .title {
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
    font-family: "Nunito";
    font-weight: bold;
    color: var(--primaryColor);

    @media screen and (max-width: 500px) {
      font-size: 2.6rem;
      margin: 0 1rem 3rem;
    }
  }
`

export default Title
