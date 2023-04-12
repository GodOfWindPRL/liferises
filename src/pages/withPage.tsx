import React, { ComponentType } from 'react'
import styled from 'styled-components'

const withPage = (Component: any) => (title: string, props: any) => {
  return <Wrap>
    <p className='uppercase'>{title}</p>
    <Component {...props}></Component>
  </Wrap>

}

export default withPage
const Wrap = styled.div`
  
`