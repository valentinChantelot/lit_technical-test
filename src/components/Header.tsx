import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface NavigationItem {
  label: string;
  path: string;
}

export interface Props {
  navigation: NavigationItem[];
}

const Header = ({ navigation }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LIT Technical test
          </Typography>

          {navigation &&
            navigation.length > 0 &&
            navigation.map((item: NavigationItem, index: number) => (
              <Button
                color="inherit"
                component={Link}
                to={item.path}
                key={index}
              >
                {item.label}
              </Button>
            ))}

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
