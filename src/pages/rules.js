import BasicContentWrapper from '@/components/BasicContentWrapper'
import Layout from '@/components/Layout'
import { Typography } from '@mui/material'
import React from 'react'

const rules = () => {
  return (
    <Layout>
      <h1>Rules</h1>

      <BasicContentWrapper title="Stuff" type="redWrapper">
        <Typography>
          This is the stuff I want to render
        </Typography>
      </BasicContentWrapper>
    </Layout>
  )
}

export default rules