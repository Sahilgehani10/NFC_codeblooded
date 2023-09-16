import React from 'react'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect,useState } from 'react'
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import Geocoder from './LocGeocoder'
import Llrouting from './Llrouting'
import axios from 'axios'
import "./Maps.css";
import { data } from 'autoprefixer'
const Maps = () => {
  const [currLoc,setcurrLoc]=useState({});
  const[lat,setLat]=useState();
  const[long,setLong]=useState();
  
    useEffect(()=>{
        getLocation() 
    },[])
    const getLocation=async()=>{
        const location=await axios.get('https://ipapi.co/json')
        
        setcurrLoc(location.data)
        
    }
     const center=[currLoc.latitude,currLoc.longitude]

  return (
    <div className='bg-bgcolor h-[100vh] pt-20'>
    <MapContainer id='container'className='h-[85vh]  mx-10 rounded-lg border border-accent ' center={[19.18,72.97]} zoom={17} scrollWheelZoom={false}>
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

