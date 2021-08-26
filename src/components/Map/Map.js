import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

export default function Map({
  setCoordinates,
  setBounds,
  coordinates,
  places,
}) {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBCGltw6n97QTArrBfgt1LC0mscgTaNM48" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon
                color="primary"
                fontsize="large"
              ></LocationOnOutlinedIcon>
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  alt={place.name}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.thelalit.com/wp-content/uploads/2019/04/24-7-Bangalore-400x300.jpg"
                  }
                />
                <Rating
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                ></Rating>
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}
