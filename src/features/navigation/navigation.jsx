import * as React from 'react';
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
import { Logo } from '../../assets';

const pages = ['Home', 'Shop', 'How To Order?', 'About Us', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      className="fadeinleft animation-duration-1000 shadow-3"
      sx={{ position: 'sticky', backgroundColor: '#3A6073' }}
    >
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', lg: 'flex' },
            }}
          >
            <Logo />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', lg: 'none' },
            }}
          >
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
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', lg: 'none' },
              flexGrow: 1,
              fontFamily: 'Playfair Display',
            }}
          >
            <Logo />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                lg: 'flex',
                justifyContent: 'center',
                gap: '15px',
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  fontStyle: 'Arial',
                  fontSize: '16px',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              justifyContent: 'spaceBetween',
              alignItems: `center`,
              gap: '25px',
              color: 'black',
              maxWidth: '280px',
              width: '100%',
            }}
          >
            <p>CART ICON</p>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
