import React from 'react'
import Link from "next/link"
import Search from './Search'

export default function Navbar() {
  return (
    <div>

    <nav className="Wiki-UI__nav-bar">

        <h1 className="Wiki-UI__nav-bar__title">
            <Link href="/" className="Wiki-UI__nav-bar__title__link">wikipedia search!</Link>
        </h1>

        <Search />
    </nav>
    </div>
  )
}
