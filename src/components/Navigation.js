import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import useStyles from '/app/styles';

import '../app/globals.css'; // Adjust the path to your global CSS file as needed
import { useAuth } from './AuthContext';


const Navigation = () => {

  const pages = ['About', 'Schedule', 'Scores', 'Rules', 'Forum']; // Add your page titles here
  const formsDropdownItems = ['Form 1', 'Form 2']; // Example form items
  const specialEventsDropdownItems = ['Event 1', 'Event 2']; // Example special event items
  const resourcesDropdownItems = ['Resource 1', 'Resource 2']; // Example resource items

  const {isLoggedIn, authLevel} = useAuth();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElForms, setAnchorElForms] = React.useState(null);
  const [anchorElEvents, setAnchorElEvents] = React.useState(null);
  const [anchorElResources, setAnchorElResources] = React.useState(null);
  const [anchorElAdmin, setAnchorElAdmin] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenFormsMenu = (event) => {
    setAnchorElForms(event.currentTarget);
  };
  
  const handleOpenEventsMenu = (event) => {
    setAnchorElEvents(event.currentTarget);
  };
  
  const handleOpenResourcesMenu = (event) => {
    setAnchorElResources(event.currentTarget);
  };

  const handleOpenAdminsMenu = (event) => {
    setAnchorElAdmin(event.currentTarget);
  }
  
  const handleCloseMenus = () => {
    setAnchorElForms(null);
    setAnchorElEvents(null);
    setAnchorElResources(null);
    setAnchorElAdmin(null);
    handleCloseNavMenu(); // Also close the mobile nav menu
  };

  const loggedInOptions = () => {
    // Conditional rendering based on authLevel
    const options = ['Admin', 'SEC']; // Add more options as per your requirements
    if (authLevel === 3) {
      return (
        <MenuItem key={'Admin'} onClick={handleOpenAdminsMenu}>
          <Typography textAlign="center">ADMIN OPTIONS</Typography>
          <ExpandMoreIcon />
        </MenuItem>
      )
    } else if (authLevel === 2) {
      return (
        <MenuItem key={'SEC'} onClick={handleOpenAdminsMenu}>
          <Typography textAlign="center">SEC OPTIONS</Typography>
          <ExpandMoreIcon />
        </MenuItem>
      )
    } else {
      <MenuItem key={'login'} onClick={handleCloseMenus}>
        <Link href={'/login'} passHref>
          <Typography textAlign="center">LOGIN</Typography>
        </Link>
      </MenuItem>
    }
    // {
    //   return <MenuItem onClick={handleCloseMenus}>Admin Options</MenuItem>;
    // } else if (authLevel === 2) {
    //   return <MenuItem onClick={handleCloseMenus}>SEC Options</MenuItem>;
    // }
    // Add more conditions as per your requirements
  };

  const renderMenuItems = () => 
  pages.map((page) => (
    <MenuItem key={page} onClick={handleCloseNavMenu}>
      <Link href={`/${page.toLowerCase()}`} passHref>
        <Typography textAlign="center">{page.toUpperCase()}</Typography>
      </Link>
    </MenuItem>
  )).concat([
    <MenuItem key={'Forms'} onClick={handleOpenFormsMenu}>
      <Typography textAlign="center">FORMS</Typography>
      <ExpandMoreIcon />
    </MenuItem>,
    <MenuItem key={'Special Events'} onClick={handleOpenEventsMenu}>
      <Typography textAlign="center">SPECIAL EVENTS</Typography>
    </MenuItem>,
    <MenuItem key={'Resources'} onClick={handleOpenResourcesMenu}>
      <Typography textAlign="center">RESOURCES</Typography>
      <ExpandMoreIcon />
    </MenuItem>,
    isLoggedIn ? null :
    <MenuItem key={'Login'} onClick={handleCloseNavMenu}>
      <Link href="/login" passHref>
        <Typography textAlign="center">LOGIN</Typography>
      </Link>
    </MenuItem>,
    isLoggedIn && loggedInOptions()
  ].filter(Boolean));

  return (
    <AppBar position="static" className='appBar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{display: 'flex', alignItems: 'center'}}>
          <Link href="/" passHref>
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={50}
            height={50}
          />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, justifyContent: 'center' }}>
            {/* Desktop Menu Items */}
            
            {/* Add Dropdowns here for Desktop if needed */}
            <MenuItem key={'Home'} onClick={handleCloseNavMenu}>
              <Link href='/' passHref>
                <Typography textAlign="center">HOME</Typography>
              </Link>
            </MenuItem>
            {renderMenuItems()}
          </Box>

          <Box sx={{ flexGrow: 0, width: '100%', display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            {/* Mobile Menu Icon */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {/* Render Menu Items for Mobile View */}
            <MenuItem key={'Home'} onClick={handleCloseNavMenu}>
              <Link href='/' passHref>
                <Typography textAlign="center">HOME</Typography>
              </Link>
            </MenuItem>
            {renderMenuItems()}
          </Menu>

          {/* Forms Dropdown Menu */}
          <Menu
            id="forms-menu"
            anchorEl={anchorElForms}
            keepMounted
            open={Boolean(anchorElForms)}
            onClose={handleCloseMenus}
          >
            {formsDropdownItems.map((item) => (
              <MenuItem key={item} onClick={handleCloseMenus}>{item}</MenuItem>
            ))}
          </Menu>

          {/* Special Events Dropdown Menu */}
          <Menu
            id="special-events-menu"
            anchorEl={anchorElEvents}
            keepMounted
            open={Boolean(anchorElEvents)}
            onClose={handleCloseMenus}
          >
            {specialEventsDropdownItems.map((item) => (
              <MenuItem key={item} onClick={handleCloseMenus}>{item}</MenuItem>
            ))}
          </Menu>

          {/* Resources Dropdown Menu */}
          <Menu
            id="resources-menu"
            anchorEl={anchorElResources}
            keepMounted
            open={Boolean(anchorElResources)}
            onClose={handleCloseMenus}
          >
            {resourcesDropdownItems.map((item) => (
              <MenuItem key={item} onClick={handleCloseMenus}>{item}</MenuItem>
            ))}
          </Menu>

          <Menu
            id="admins-menu"
            anchorEl={anchorElAdmin}
            keepMounted
            open={Boolean(anchorElAdmin)}
            onClose={handleCloseMenus}
          >
            <MenuItem key={'hosting'} onClick={handleCloseMenus}>
              <Link href='/admin/hosting' passHref>
                <Typography textAlign="center">Hosting Form</Typography>
              </Link>
            </MenuItem>
            <MenuItem key={'penalty'} onClick={handleCloseMenus}>
              <Link href='/admin/penalty' passHref>
                <Typography textAlign="center">Penalty Form</Typography>
              </Link>
            </MenuItem>
            <MenuItem key={'placement'} onClick={handleCloseMenus}>
              <Link href='/admin/placement' passHref>
                <Typography textAlign="center">Placement Form</Typography>
              </Link>
            </MenuItem>
            <MenuItem key={'specialevents'} onClick={handleCloseMenus}>
              <Link href='/admin/specialevents' passHref>
                <Typography textAlign="center">Special Events</Typography>
              </Link>
            </MenuItem>
            <MenuItem key={'logout'} onClick={handleCloseMenus}>
              <Link href='/admin/logout' passHref>
                <Typography textAlign="center">Logout</Typography>
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
