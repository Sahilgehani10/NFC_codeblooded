import React from 'react'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect,useState } from 'react'
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import Geocoder from './LocGeocoder'
import Llrouting from './Llrouting'
import axios from 'axios'
const Maps = () => {
  const [currLoc,setcurrLoc]=useState({});
    useEffect(()=>{
        getLocation() 
    },[])
    const getLocation=async()=>{
        const location=await axios.get('https://ipapi.co/json')
        
        setcurrLoc(location.data)
        
       
       
    }
   var latlong=[currLoc.latitude,currLoc.longitude]

  return (
    <div className='bg-bgcolor h-[100vh] pt-10'>
    <MapContainer className='h-[75vh]  mx-10 rounded-lg border border-accent ' center={[19.2183,72.9781]} zoom={17} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {/*<Geocoder />*/}
  
  <Llrouting />
  
</MapContainer>
</div>
  )
}

export default Maps

