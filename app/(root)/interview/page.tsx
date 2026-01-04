import React from 'react'
import Agent from '@/components/Agent';

const page = () => {
  return (
    <>
      <div>Interview generation</div>
      <Agent userName="You" userId="user1" type="generate" />
    </>
  )
}

export default page