import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Container = styled.div`
  animation: ${spin} 2s linear infinite;
  border: 8px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  border-top: 8px solid #6b5344;
  height: 32px;
  width: 32px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 50px;
`

const Loader: FC = () => (
  <Wrapper>
    <Container />
  </Wrapper>
)

export default Loader
