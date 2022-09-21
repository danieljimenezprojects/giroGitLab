import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BkIcon from '../../ui/icon/bk-icon';
import BkMainLanguage from '../topbar/bk-main-menu-language';
import { languages } from '../../../public/static/consts/consts';
import BkBox from '../../layout/box/bk-box';
import { useTheme } from '@mui/material/styles';
import BkSection from '../../layout/section/bk-section';
import Link from 'next/link';
import Image from 'next/image';
import BkTypography from '../../ui/typography/bk-typography';
import AppBar from '@mui/material/AppBar';
import BkContainer from '../../layout/container/bk-container';


export default function BkGiroTopBarMobile() {
  const drawerWidth = 300;
  const theme = useTheme();
  const [toggleMenu, setToggleMenu] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    let top = {...toggleMenu}
    console.log(top.top)
    if(top.top){
      setToggleMenu({ ...toggleMenu, [anchor]: false });
    } else {
      setToggleMenu({ ...toggleMenu, [anchor]: true });
    }
    
  };

  const list = (anchor) => (
    <Box
      sx={{ width:250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Sobre el Giro d’Italia Virtual', 'Cómo participar', 'Preguntas frecuentes', 'Suscríbete'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} sx={{textAlign:"center"}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar>
    <BkBox 
      sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:theme.palette.secondary.main,
      
      }}>
      <BkBox
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    height: 55,
                    marginLeft: {
                        xs: '3rem',
                    }
                }}
            >
                <Link 
                    href='/'
                    passHref={ true }
                >
                        <a >
                            <Image 
                                src={ `/static/img/logo/logo_topbar.png` }
                                alt='BKOOL Logo'
                                height={29}
                                width={40}
                            />
                        </a>
                </Link>
        </BkBox>
        <BkBox sx={{display:"flex",alignItems:"center", justifyContent:"space-around", marginRight: {xs: '1rem',}}}>
        <BkMainLanguage languages={ languages } onChangeMenu={() => console.log('oscar')} sx={{marginTop:"12px"}} />
        <React.Fragment key="top">
          <Button onClick={toggleDrawer("top", true)}>{toggleMenu.top == true ? <BkIcon iconName="icon-close"/>  : <BkIcon iconName="icon-menu"/> }</Button>
          <BkContainer disableGutters>
          <Drawer
            anchor="top"
            open={toggleMenu["top"]}
            onClose={toggleDrawer("top", false)}
            elevation={ 0 }
            sx={{
                display: {
                    xs: 'block',
                },
                top: 72,
                // zIndex: 9,
                '.MuiBackdrop-root': {
                    top: 74,
                },
                '.MuiDrawer-paper': {
                    backgroundColor: 'transparent',
                    top: '50px',
                }
            }}
          >
            <BkBox sx={{backgroundColor:"black",color:"white",display:"flex",alignItems:"center",justifyContent:"center"}}>
              {list("top")}
            </BkBox>
          </Drawer>
          </BkContainer>
        </React.Fragment>
        </BkBox>
    </BkBox>
    </AppBar>
  );
}