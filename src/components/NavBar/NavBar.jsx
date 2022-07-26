import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    <header className='App-header'>
      {user ?
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="">
                  SEI 5/23
                </Link>
              </Typography>
              <Button  color="inherit"><Link to="/reminder">Personal Reminders</Link></Button>
              <Button><Link to="/changePassword">Change Password</Link></Button>
              <Button  color="inherit"><Link to="" onClick={handleLogout}>Log out</Link></Button>
            </Toolbar>
          </AppBar>
        </Box>
      :
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                SEI 5/23
              </Typography>
              <Button color="inherit"><Link to="/signup">Sign Up</Link></Button>
              <Button color="inherit"><Link to="/login">Log In</Link></Button>
            </Toolbar>
          </AppBar>
        </Box>
      } 
    </header>
      </>
  );
}

export default NavBar
