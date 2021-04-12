import React from 'react';
import BookingForm from './BookingForm';
import OpeningTime from './OpeningTime';
import PageTitle from '../PageTitle';

function Booking() {
  return (
    <div className="flex w-full mt-10 flex-col justify-center items-center">
      <PageTitle title="Table Booking" />
      <BookingForm />
      <OpeningTime />
    </div>
  )
}

export default Booking