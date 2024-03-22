import React from 'react';
import Head from 'next/head';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Layout from '@/components/Layout';
import HeaderContentWrapper from '@/components/HeaderContentWrapper';
import BasicContentWrapper from '@/components/BasicContentWrapper';

import '../app/globals.css';
import Link from 'next/link';

const about = () => {

  const deadlines = [
    { title: "Official E-Week Sign Up Opens", date: "December 12" },
    { title: "Official E-Week Sign Up Due", date: "December 31" },
    { title: "Mandatory Information Session for E-Week Teams", date: "January 24" },
    { title: "Dr. Ramshorn Pageant Sign-up Open", date: "January 24" },
    { title: "*Google Calendar for Events Sent Out", date: "January 24" },
    { title: "Event Time Slot Requests Due", date: "January 31" },
    { title: "Dr. Ramshorn Pageant Sign-up Due", date: "January 31" },
    { title: "Engineering vs Business Sign Up Opens", date: "February 1" },
    { title: "Dr. Ramshorn Workshop for Contestants", date: "February 2" },
    { title: "*Schedule Finalized", date: "February 3" },
    { title: "*Event QR Code + Event Codes Sent", date: "February 5" },
    { title: "Event Names Due", date: "February 9" },
    { title: "Event Rules and Logistics Due", date: "February 11" },
    { title: "Judge Training for MALs", date: "February 12" },
    { title: "Dr. Ramshorn Pageant Rehearsal", date: "February 20" },
    // Add more items as needed
  ];
  

  return (
    <Layout>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <Container style={{paddingInline: '50px', marginBottom: '50px'}}>
        <Box marginBlock={3}>  
          <HeaderContentWrapper title={"About Us"} subheader={""} headerType={"dualTone"} />
        </Box>
        <Grid container spacing={6} justifyContent="center">
          
          <Grid item xs={12}>
            <BasicContentWrapper title="Our Mission" type="blueWrapper">
              <Typography variant="p" className='typographySub'>
              E-Week is short for Engineers Week, a nationally recognized week dedicated to celebrating and increasing awareness of careers in engineering. Here at UT, Student Engineering Council (SEC) celebrates E-Week by hosting a week-long friendly competition between undergraduate engineering organizations on campus. The E-Week competition includes a kickoff, a scavenger hunt, a day of volunteering, a Meet and Greet with Department Chairs, many events hosted by the participating organizations, a talent pageant, a SECxUBC collaboration, an awards banquet, and many other ways to participate and earn points for your E-Week Teams! You are allowed to represent different E-Week Teams throughout the week, but ONLY 1 TEAM when you sign in and compete at an event.
              </Typography>
            </BasicContentWrapper>
          </Grid>

          <Grid item xs={12}>
            <BasicContentWrapper title="Our Vision" type="orangeWrapper">
              
              <p className='typographySub'>
                To compete ftor points, you must be a part of an{" "}
                <b>
                  <i>E-Week Team</i>
                </b>
                . E-Week Teams consist of one or more engineering
                organizations!
              </p>
              <ul>
                <li>Example Teams/Names: AIChE, SWEEP, etc.</li>
              </ul>
              <p className='typographySub'>
                To attend events or participate just for fun, we welcome
                all engineers to join us in the fun. You do not need to be
                affiliated with an organization/E-Week Team to attend our
                events!
              </p>
            </BasicContentWrapper>
          </Grid>

          <Grid item xs={12}>
            <BasicContentWrapper title="Special Events" type="redWrapper">
              <p>
                Special events happen all throughout E-Week and are
                usually hosted by SEC or a designated organization. For
                more information about specific special events, please
                visit the <Link style={{color: 'blue'}} href="/rules" passHref>Rules page</Link>.
              </p>
              <ul>
                <li>Engineering Extravaganza</li>
                <li>E-Week Kickoff</li>
                <li>E-Week Quest</li>
                <li>UT Girl Day</li>
                <li>Engineering Day of Service (EDOS)</li>
                <li>SEC General Meeting</li>
                <li>Call for Innovation with UT Genesis</li>
                <li>Western Wind Down with CSC</li>
                <li>Chairs N' Chats</li>
                <li>Emphathetic Leadership with LEAD</li>
                <li>Dr. Ramshorn Talent Pageant</li>
                <li>Engineering vs Business</li>
                <li>E-Week Banquet</li>
                <li>Halloween Canned Food Drive (HCFD)</li>
              </ul>
            </BasicContentWrapper>
          </Grid>

          <Grid item xs={12}>
            <BasicContentWrapper title="Important Deadlines" type="greenWrapper">
              <Grid container spacing={2} marginBottom={2} alignItems="stretch">
                {deadlines.map((deadline, index) => (
                  <Grid item xs={12} md={6} key={index} display="flex">
                    <Paper elevation={2} sx={{ width: '100%', padding: 2 }}>
                      <Typography variant="body1">{deadline.title}</Typography>
                      <Typography variant="body2" color="textSecondary">{deadline.date}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <Typography variant="body2" color="textSecondary">
                *SEC Deadlines
              </Typography>
            </BasicContentWrapper>
          </Grid>

          <Grid item xs={12}>
            <BasicContentWrapper title="Ways to Earn Points" type="blueWrapper">
              <ul>
                <li>Host event(s)</li>
                <li>Attend events hosted by other E-Week Teams</li>
                <li>Win events hosted by other E-Week Teams</li>
                <li>Complete E-Week Quest</li>
                <li>Host a booth at UT Girl Day</li>
                <li>Participate in Engineering Day of Service (EDOS)</li>
                <li>
                  Participate in Halloween Canned Food Drive [concluded]
                </li>
                <li>Attend SEC General Meeting</li>
                <li>Attend Chairs N' Chats</li>
                <li>Attend Empathetic Leadership with LEAD</li>
                <li>Attend Western Wind Down</li>
                <li>Attend Call for Innovation with Genesis</li>
                <li>Attend Dr. Ramshorn Pageant</li>
                <li>Participate in Dr. Ramshorn Pageant</li>
                <li>Place in Dr. Ramshorn Pageant</li>
                <li>Participate in Engineering vs Business</li>
                <li>Post on Social Media</li>
                <li>Complete Quest Challenges</li>
                <li>etc...</li>
              </ul>
            </BasicContentWrapper>
          </Grid>

          <Grid item xs={12}>
            <BasicContentWrapper title="Remind 101" type="orangeWrapper">
              <p className='typographySub'>
                Please sign up for our Remind 101! All official
                communications will happen through our website or email,
                but our Remind 101 will be used for announcements,
                reminders, and more. Make sure to sign up so you never
                miss a deadline or event!!
              </p>
              <br/>
              <p className='typographySub'>
                Text @eweek2024 to 81010 or visit{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.remind.com/join/eweek2024"
                  style={{color: 'blue'}}
                >
                  https://www.remind.com/join/eweek2024
                </a>
              </p>
            </BasicContentWrapper>
          </Grid>

          <Grid item xs={12}>
            <BasicContentWrapper title="Contact Us!" type="purpleWrapper">
              <p className='typographySub'>E-Week: techdev@sec.engr.utexas.edu</p>
              <p className='typographySub'>
                Engineering Activities: activities@sec.engr.utexas.edu
              </p>
              <p className='typographySub'>Dr. Ramshorn: ramshorn@sec.engr.utexas.edu</p>
              <p className='typographySub'>
                Complaint Form{" "}
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScGaLDEPHqQ6jxGryNxqBGlA0VnLCnpS_9bLLOVA6zMS9pDOg/viewform"
                  style={{color: 'blue'}}
                >
                  HERE
                </a>
              </p>
            </BasicContentWrapper>
          </Grid>

        </Grid>
      </Container>
    </ Layout>
  );
};

export default about;
