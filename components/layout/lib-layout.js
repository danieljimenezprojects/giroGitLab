// MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';

// REACT
import { Fragment, useContext, useState } from 'react';

// NEXT
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// BKOOL
import BkBox from "./box/bk-box";
import BkContainer from '../layout/container/bk-container';
import BkButtonIcon from '../ui/actions/button/bk-button-icon';
import BkIcon from '../ui/icon/bk-icon';
import { sidebarMenu } from "../../public/static/consts/submenu";
import BkTypography from '../ui/typography/bk-typography';
import BkButton from '../ui/actions/button/bk-button';
import theme from '../../src/theme/theme';
import { themeGiro } from '../../src/theme/theme';
import { pSBC } from '../../src/utils/Luminosity';

// CONTEXT
import BkAppContext from '../../src/context/store';

const drawerWidth = 300;

const BkLibLayout = (props) => {
    const { children, window } = props;

    const router = useRouter();

    const sideMenuArrValues = Object.values(sidebarMenu);
    const routeSection = router.route.split('/')[1];
    const myIndex = sideMenuArrValues.findIndex((el) => el.title.toLowerCase() === routeSection) !== -1 ? sideMenuArrValues.findIndex((el) => el.title.toLowerCase() === routeSection) : 0;

    const [mobileOpen, setMobileOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState({
        introduction: router.route.includes('introduction') || false,
        actions: router.route.includes('actions') || false,
        cards: router.route.includes('cards') || false,
        content: router.route.includes('content') || false,
        form: router.route.includes('form') || false,
        list: router.route.includes('list') || false,
        marketing: router.route.includes('marketing') || false,
        navigation: router.route.includes('navigation') || false,
    });

    // Context state
    const { themeAdded, setThemeAdded } = useContext(BkAppContext);

    const handleClick = (label) => {
        const prop = label.toLowerCase();
        setOpenAccordion({
            ...openAccordion,
            [prop]: !openAccordion[prop]
        });
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleThemeToggle = () => {
        if (themeAdded === theme) {
            setThemeAdded(themeGiro);
        } else {
            setThemeAdded(theme);
        }
    };
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const submenu = (
        <BkBox>
            <BkBox
                sx={{
                    marginTop:"12px",
                    alignItems: 'center',
                    display: 'flex',
                    height: 55,
                    marginLeft: {
                        xs: '16px',
                        sm: '24px',
                    }
                }}
            >
                <Link 
                    href='/'
                    passHref={ true }
                >
                        <a >
                            <Image 
                                src={ `/static/img/logo/logo-white.svg` }
                                alt='BKOOL Logo'
                                height={36}
                                width={127}
                            />
                        </a>
                </Link>
            </BkBox>
            {
                sidebarMenu.map( (section, sectionIndex) => {
                    return (
                        <Accordion key={ sectionIndex } defaultExpanded={ myIndex === sectionIndex } disableGutters sx={{
                            '&.Mui-expanded:before': {
                                opacity: 0,
                            },
                            backgroundColor: pSBC(-.75, themeAdded.palette.background.default),
                            color: 'white',
                            boxShadow: 'none',
                            '&:after': {
                                position: 'absolute',
                                left: 0,
                                top: '-1px',
                                right: 0,
                                height: '1px',
                                content: '""',
                                display: 'block',
                                opacity: 1,
                                backgroundColor:"rgba(255, 255, 255, 0.12)",
                                visibility: 'visible'
                            },
                            '&:before': {
                                opacity: 0,
                                backgroundColor:"transparent"
                            }
                        }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{
                                '.MuiAccordionSummary-content': {
                                    margin: 0
                                },
                                padding: 0,
                                '.MuiAccordionSummary-expandIconWrapper': {
                                    color: 'white',
                                    marginRight: '1rem',
                                }
                            }}>
                                <ListItem >
                                    <ListItemText 
                                        primary={ section.title } 
                                        secondary={ section.subtitle } 
                                        primaryTypographyProps={{
                                            variant: 'subtitleMedium'
                                        }}
                                        sx={{
                                            '.MuiTypography-root': {
                                                color: "white",
                                            }
                                        }}
                                    />
                                </ListItem>
                            </AccordionSummary>

                            <AccordionDetails sx={{
                                padding: 0
                            }}>
                                <List disablePadding dense>
                                    

                                    {
                                        section.items.map( (sectionItem, sectionItemIdenx) => {
                                            return (
                                                <Fragment key={ sectionItemIdenx }>
                                                    <li key={ sectionItemIdenx }>
                                                        <ListItemButton
                                                            href={ sectionItem.link || undefined }
                                                            component='a'
                                                            onClick={ !sectionItem.link ? () => handleClick(sectionItem.label) : undefined }
                                                            selected={ router.route.includes(sectionItem.label.toLocaleLowerCase()) || sectionItem.link === router.route}
                                                            sx={{
                                                                "&.Mui-selected":{
                                                                    backgroundColor: `${themeAdded.palette.accent.main}15`,
                                                                    "&:hover": {
                                                                        backgroundColor: `${themeAdded.palette.accent.main}15`
                                                                    }
                                                                },
                                                                '&:hover': {
                                                                    backgroundColor:`${themeAdded.palette.accent.main}15`
                                                                },
                                                            }}>
                                                            <ListItemText primary={ sectionItem.label } />
                                                            {
                                                                sectionItem.hasOwnProperty('items')
                                                                &&
                                                                (
                                                                    openAccordion[sectionItem.label.toLowerCase()]
                                                                    ?
                                                                    <BkIcon iconName='icon-expand-less' />
                                                                    :
                                                                    <BkIcon iconName='icon-expand-more' />
                                                                )
                                                            }
                                                        </ListItemButton>
                                                    </li>
                                                    {
                                                        sectionItem.hasOwnProperty('items')
                                                        &&
                                                        <li>
                                                            <Collapse key={ sectionItem.label + sectionItemIdenx } in={ openAccordion[sectionItem.label.toLowerCase()] } timeout="auto" unmountOnExit>
                                                                <List component="div" disablePadding dense>
                                                                    {
                                                                        sectionItem.items.map( (sectionItemItem, sectionItemItemIdenx) => {
                                                                            return (
                                                                                <ListItemButton key={ sectionItemItem.label } sx={{ 
                                                                                    pl: 4,
                                                                                    '&:hover': {
                                                                                        backgroundColor:`${themeAdded.palette.accent.main}15`
                                                                                    },
                                                                                    "&.Mui-selected": {
                                                                                        backgroundColor:`${themeAdded.palette.accent.main}15`,
                                                                                        "&:hover": {
                                                                                            backgroundColor:`${themeAdded.palette.accent.main}15`
                                                                                        }}
                                                                                }} href={ sectionItemItem.link } component='a' selected={ sectionItemItem.link === router.route }>
                                                                                    <ListItemText primary={ sectionItemItem.label } />
                                                                                </ListItemButton>
                                                                            );
                                                                        } )
                                                                    }
                                                                </List>
                                                            </Collapse>
                                                        </li>
                                                    }
                                                </Fragment>
                                            );
                                        } )
                                    }
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    );
                } )
            }
        </BkBox>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={themeAdded}>
            <CssBaseline />
            <BkBox sx={{ display: 'flex' }}>
                <AppBar
                    position="fixed"
                    elevation={ 0 }
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        py: 1,
                        backgroundColor:themeAdded.palette.background.default
                        // display: { sm: 'none' },
                    }}
                >
                    <Toolbar disableGutters sx={{}}>
                        <BkBox
                            sx={{

                                alignItems: 'center',
                                display: 'flex',
                                height: 55,
                                marginLeft: {
                                    xs: '16px',
                                    sm: '24px',
                                }
                            }}
                        >
                            <Link 
                                href='/'
                                passHref={ true }
                            >
                                <a style={{textDecoration:"none"}}>
                                    <BkTypography color="white" variant="subtitleLarge">Bkool Design System</BkTypography>
                                </a>
                            </Link>
                        </BkBox>
                        <BkButton color="accent" size="small" onClick={ handleThemeToggle } sx={{ marginLeft:"20px"}}>Cambiar Theme</BkButton>
                        <BkButtonIcon iconName='icon-menu' onClick={handleDrawerToggle} sx={{ float: 'right', marginLeft: 'auto', color: 'white', marginRight: '0 !important', display: { sm: 'none' } }} />
                    </Toolbar>
                </AppBar>

                <BkBox>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                                backgroundColor: pSBC(-.75, themeAdded.palette.background.default),
                                // paddingTop: '.5rem',
                                // backgroundColor: '#f5eb41',
                            },
                            
                        }}
                    >
                        { submenu }
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                                backgroundColor: pSBC(-.75, themeAdded.palette.background.default),
                                // paddingTop: '.5rem',
                                // backgroundColor: '#f5eb41',
                            },
                        }}
                        open
                    >
                        { submenu }
                    </Drawer>
                </BkBox>
                <BkContainer disableGutters component="main" sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }} >
                    <Toolbar 
                        sx={{
                            height: '80px',
                        }}
                    />
                    <BkBox sx={{ marginBottom: '3rem' }}>
                        <BkContainer>
                            <BkTypography variant='h1' color='white' gutterBottom>
                                { router.route === '/' ? '/about' : router.route }
                            </BkTypography>
                            { children }
                        </BkContainer>
                    </BkBox>
                </BkContainer>
            </BkBox>
        </ThemeProvider>
    );
}
 
export default BkLibLayout;