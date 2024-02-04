import React from 'react'
import Card from '../components/Card'

export default function NotableMembers() {
  return (
    <div className='h-auto border-2 m-2  lg:justify-center lg:items-center gap-12 justify-around lg:flex  '>
      <Card Name={"Chariman"} words={"suriya"}/>
      <Card Name={"pricipal "} words={"ariya"}/>
    </div>
  )
}
