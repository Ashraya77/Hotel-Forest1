import Book from '@/components/Book'
import Gallery from '@/components/Gallery'
import Banner1 from '@/components/Banner1'
import React from 'react'
import Home1 from '@/home/Home1'
import Footer1 from '@/components/Footer1'
import Home2 from '@/home/Home2'
import Home3 from '@/home/Home3'
import BookingComponent from '@/components/BookingComponent'

const page = () => {
  return (
<>
<Banner1/>
          <BookingComponent/>

    <Home1/>
    <Home2/>
    <Home3/>
</>

  )
}

export default page