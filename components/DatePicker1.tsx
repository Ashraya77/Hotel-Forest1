"use client"
import React, { useState } from "react";
import Datetime from "react-datetime"
import "react-datetime/css/react-datetime.css"

const DatePicker1 = () => {
  return (
    <div>
        <Datetime value={new Date()} className="appreance-none shadow border rounded py-3 px-2 text-gray-darker"/>
    </div>
  )
}

export default DatePicker1