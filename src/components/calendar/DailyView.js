import getEvents from '@/pages/api/events_api';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography, Paper, CircularProgress } from '@mui/material';
import { eachDayOfInterval, format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import EventCard from './EventCard';

const times = [
  '8:00', '8:30', '9:00', '9:30', 
  '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', 
  '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00',
  '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'
];

const DailyView = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
	useEffect(() => {
    setLoading(true)
		getEvents().then((events) => {
			console.log(events)
			setEvents(events)
      setLoading(false)
		}).catch((err) => {
      console.log(err)
      setLoading(false)
    })
	},[])

  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }
  console.log(events[0]?.start_time)
  const startDate = new Date(events[0]?.start_time)
  const lastDate = new Date(events[events.length - 1]?.end_time)
  const dateRange = eachDayOfInterval({start: startDate, end: lastDate})
  console.log(startDate)

  const getEventDurationInSlots = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const durationInMinutes = (end - start) / (1000 * 60); // Convert duration from milliseconds to minutes
    return Math.ceil(durationInMinutes / 30); 
  }

  // Method to find events for a specific time slot
  const findEventsForTimeSlot = (date, time) => {
    return events.filter(event => {
      const eventStart = new Date(event.start_time);
      const slotDate = new Date(date);
  
      // Extract the year, month, and day to compare dates
      const isSameDate = eventStart.getFullYear() === slotDate.getFullYear() &&
                         eventStart.getMonth() === slotDate.getMonth() &&
                         eventStart.getDate() === slotDate.getDate();
  
      // Compare the time by creating a Date object for the slot time on the same day as the event
      const [slotHour, slotMinute] = time.split(':').map(Number);
      const slotDateTime = new Date(slotDate.setHours(slotHour, slotMinute, 0));
  
      // Compare times (assuming events cannot span multiple slots)
      const isSameTime = eventStart.getHours() === slotDateTime.getHours() &&
                         eventStart.getMinutes() === slotDateTime.getMinutes();
  
      return isSameDate && isSameTime;
    });
  };
  // console.log(getFirstDay())
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 600, overflow: 'auto' }}>
      <Table stickyHeader aria-label="time grid">
        {dateRange.map((date, index) => (
          <TableBody>
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {format(date, 'EEEE, MM/dd/yyyy')}
            </TableCell>
          </TableRow>
          {times.map((time, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {time}
                </TableCell>
                {findEventsForTimeSlot(date, time).map((event, eventIndex) => {
                  if (event) {
                    const numSlots = getEventDurationInSlots(event.start_time, event.end_time);
                    return (
                      <TableCell key={eventIndex} align="right" rowSpan={numSlots} >
                        <EventCard event={event} />
                      </TableCell>
                    )
                  } else {
                    return <TableCell style={{ borderBottom: "1px solid rgba(0, 0, 0, 1)" }} key={eventIndex} align="right" />
                  }

                })}
              </TableRow>
            )
          )}
        </TableBody>
        ))}
        
      </Table>
    </TableContainer>
  );
}

export default DailyView