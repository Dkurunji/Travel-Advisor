import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";

import Rating from "@material-ui/lab/Rating";

export default function PlaceDetails({ place }) {
  return (
    <div>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 300 }}
          image={
            place.photo
              ? place.photo.images.large.url
              : "https://www.thelalit.com/wp-content/uploads/2019/04/24-7-Bangalore-400x300.jpg"
          }
          title={place.name}
        />
      </Card>

      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating size="small" value={Number(place.rating)} readOnly></Rating>
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews}
          </Typography>
        </Box>
      </CardContent>
    </div>
  );
}
