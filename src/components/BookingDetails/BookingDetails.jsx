import { Map, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import React from "react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const BookingDetails = () => {
  return (
    <div className="container h-full">
      <h1 className="text-4xl text-red-400">booking-details</h1>
      <div className="flex justify-between">
        <div className="lg:w-1/2"></div>

        <div className="lg:w-1/2">
          <h1>Google Map</h1>
          <Map
            provider={osm}
            height={400}
            defaultCenter={[50.879, 4.6997]}
            defaultZoom={11}
          >
            <ZoomControl />
          </Map>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
