import getEvents from '@/pages/api/events_api'
import { Button, Container, FormControlLabel, Switch, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DailyView from './DailyView'
import WeeklyView from './WeeklyView'
import CustomToggleSwitch from '../CustomToggleSwitch'

const Calendar = () => {
	// Call getEvents api which returns array of event objects asynchronously
	// const [events, setEvents] = useState([])
	// useEffect(() => {
	// 	getEvents().then((events) => {
	// 		console.log(events)
	// 		setEvents(events)
	// 	})
	// },[])


	// have a state for daily or weekly view give code
	const [view, setView] = useState('daily')
	return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        {view === 'daily' ? 'Daily View' : 'Weekly View'}
      </Typography>
      <CustomToggleSwitch view={view} setView={setView} />
			{view === 'daily' ? <DailyView  /> : <WeeklyView  />}
    </div>
  );
}

export default Calendar