import Link from 'next/link'
import React from 'react'
import ItemCard from './components/ItemCard'

const page = () => {
  return (
    <main>
      <h1>This is the home page</h1>
      <Link href= "/users">User Page</Link>
      <br /><br />
      <ItemCard />
    </main>
  )
}
export default page
