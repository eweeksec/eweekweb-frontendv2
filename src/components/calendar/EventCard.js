// components/EventCard.js

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import "../../app/components.css";

const EventCard = ({ event }) => {
  const start = new Date(event.start_time);
  const end = new Date(event.end_time);
  // event.start_time = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  // event.end_time = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <Card sx={{ minWidth: 275, height: '100%', color: '#000', flexDirection: 'column', background: '#ffcccb', borderLeft: '5px solid linear-gradient(to bottom, #C6632D, #3A1701' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}  gutterBottom>
          {event.org}
        </Typography>
        <Typography variant="h5" className='eventSubHeader' component="div">
          {event.name}
        </Typography>
        <Typography variant="h6" component="div">
          {start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          {event.location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
