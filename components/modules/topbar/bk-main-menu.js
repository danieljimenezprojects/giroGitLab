// NEXT
import Link from 'next/link';
import { useRouter } from 'next/router';

// REACT
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useState, useEffect, useRef } from 'react';

// MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BkMainNavigation from './bk-main-navigation';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Slide } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkButtonIcon from '../../ui/actions/button/bk-button-icon';
import BkBox from '../../layout/box/bk-box';
import BkMainProfile from './bk-main-profile';
import BkMainLogo from './bk-main-logo';
import BkAvatar from '../../ui/content/avatar/bk-avatar';
import BkMainMenuMobile from '../menu-mobile/bk-menu-mobile';
import BkMainMenuItem from './bk-main-menu-item';
import BkTypography from '../../ui/typography/bk-typography';
import BkIcon from '../../ui/icon/bk-icon';
import BkMainMegaMenu from '../mega-menu/bk-main-mega-menu';
import BkBannerEvent from '../marketing/bk-banner-event';
import { menu } from '../../../public/static/consts/menu';
import BkContainer from '../../layout/container/bk-container';

const filteredFunc = (arr, prop, value) => {
	return arr.reduce((acc, item) => {
        if (item[prop] === value && item.items) {
            return [...acc, ...item.items];    	
        }
        if (item.items) {
            const itemsFiltered = item.items
                ? filteredFunc(item.items, prop, value)
                : [];
            if (itemsFiltered.length) {
                return [...acc, ...itemsFiltered];
            }
        }
        return acc;
    }, []);
};

const BkMainMenu = (props) => {
    const { backMenuLabel, children, handleLanguageChange, languages, loginkUrl, menuData, profileLabel, profileUrl, registerLabel, registerUrl, userLogged, userName, userImage, ...other } = props;

    // Getting media wuery
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    // Getting router
    const router = useRouter();

    // State - Abrir mega menu
    const [ openMegaMenu, setOpenMegaMenu ] = useState(false);

    // State - Items a mostrar en el mega menu
    const [ selectedMegaDropdownMenu, setSelectedMegaDropdownMenu ] = useState(menuData[0]);

    // State - Items a mostrar en menu mobile
    const [ rendereddMobileMenus, setRendereddMobileMenus ] = useState([]);

    // State - Menu mobile expandido o no
    const [ mobileMenuExpanded, setMobileMenuExpanded ] = useState(false);

    // State - Menú activo
    const [ activeMenu, setActiveMenu ] = useState([]);

    // State - Menú activo
    const [ menuLevel, setMenuLevel ] = useState(0);

    // State - Si es un item de menú, o si es botón Volver
    const [ trigger, setTrigger ] = useState('');

    const menuItemClickedIndex = useRef(undefined);

    const handleMobileMenu = () => {
        setMobileMenuExpanded(!mobileMenuExpanded);

        // Reset opciones en menu mobile
        if (mobileMenuExpanded) {
            setMenuLevel(0);
            setRendereddMobileMenus([]);
        }
    };

    // Update si megadrop está abierto y muestra items de menú
    const handleDesktopItemClick = (index) => {
        console.log(menuItemClickedIndex, index)
        setSelectedMegaDropdownMenu(menuData[index]);
        setOpenMegaMenu(true);
        if (menuItemClickedIndex.current !== index) {
            setOpenMegaMenu(true);
            menuItemClickedIndex.current = index;
        } else if (!openMegaMenu) {
            menuItemClickedIndex.current = undefined;
        } else {
            setOpenMegaMenu(false);
            menuItemClickedIndex.current = undefined;
        }
    };

    const handleMobileItemClick = (target, trigger, index) => {
        // Update state menuLevel
        setMenuLevel(menuLevel + 1);

        // Obtener menú clicado
        const menuChunkSelected = filteredFunc(menuData, 'mobileLink', target);
        setRendereddMobileMenus( rendereddMobileMenus => [...rendereddMobileMenus, menuChunkSelected] );

        // Update state -> si es item de menú o botón back
        setTrigger(trigger);
    };

    // Update state on click on Back bobile button
    const handleMobileBack = (trigger) => {
        setTrigger(trigger);
        setMenuLevel(menuLevel - 1);
    };

    // useEffect(() => {
    //     console.log(activeMenu)
    //     console.log(rendereddMobileMenus)
    //     console.log(rendereddMobileMenus.length)
    //     console.log(menuLevel)
    // }, [rendereddMobileMenus]);

    return (
        <Fragment>
            {/* Menú principal en mobile */}
            <BkMainMenuMobile languages={ languages } expanded={ mobileMenuExpanded } handleLanguageChange={ handleLanguageChange } registerLabel='Registrarme' registerUrl="https://www.google.es/" banner={ <BkBannerEvent size="small" title='Participa en el Giro d’Italia 2021 desde casa' linkUrl='https://www.google.es/' linkLabel='Más información' logoImage='/static/img/events/giro-logo.png' logoWidth={ 80 } logoHeight={ 63 }/> } userLogged={ userLogged }>
                <Slide
                    in={ menuLevel === 0 }
                    easing="cubic-bezier(0.0, 0, 0.2, 1)"
                    unmountOnExit
                    timeout={ 500 }
                    direction={ menuLevel === 0 ? ( trigger === 'item' ? 'left' : 'right' ) : ( trigger !== 'item' ? 'left' : 'right' ) }

                >
                    <div className="menuSlide">
                        {
                            menuData.map((menuItem, menuItemIndex) => (
                                <BkMainMenuItem active={ menuItem.linkUrl === router.route } firstLevel levelItem label={ menuItem.label } description={ menuItem.description } handleAction={ menuItem.mobileLink ? (index) => handleMobileItemClick( menuItem.mobileLink, 'item', menuItemIndex ) : undefined } linkUrl={ !menuItem.mobileLink ? menuItem.linkUrl : undefined } key={ menuItemIndex } />
                            ))
                        }
                    </div>
                </Slide>
                
                {
                    rendereddMobileMenus.map( (submenu, submenuIndex) => (
                        <Slide
                            in={ submenuIndex === menuLevel - 1 }
                            unmountOnExit
                            easing="cubic-bezier(0.0, 0, 0.2, 1)"
                            timeout={ 500 }
                            direction={ submenuIndex === menuLevel - 1 ? ( trigger === 'item' ? 'left' : 'right' ) : ( trigger !== 'item' ? 'left' : 'right' ) }
                            exit
                            key={submenuIndex}
                            onExited={() => {
                                trigger === 'back'
                                &&
                                setRendereddMobileMenus([
                                    ...rendereddMobileMenus.slice(0, submenuIndex),
                                    ...rendereddMobileMenus.slice(submenuIndex + 1, rendereddMobileMenus.length)
                                ]);
                            }}
                        >
                            <div className="menuSlide">
                                <BkBox>
                                    <BkTypography 
                                        color="white"
                                        variant="titleMedium"
                                        onClick={ () => handleMobileBack('back') }
                                        sx={{
                                            '&:hover': {
                                                cursor: 'pointer'
                                            },
                                            marginBottom: '1.5rem',
                                            marginTop: '1rem'
                                    }}>
                                        <BkIcon iconName='icon-chevron-left' /> { backMenuLabel }
                                    </BkTypography>
                                    <BkTypography
                                        color="white"
                                        variant="titleLarge"
                                        sx={{
                                            marginBottom: '1rem',
                                            opacity: .25,
                                        }}
                                    >
                                        { submenu[menuLevel - 1] !== undefined && submenu[menuLevel - 1].parent.parentLabel }
                                    </BkTypography>
                                </BkBox>
                                {
                                    submenu.map((menuItem, menuItemIndex) => (
                                        <BkMainMenuItem levelItem={ menuItem.mobileLink !== undefined } label={ menuItem.label } description={ menuItem.description } handleAction={ menuItem.mobileLink ? () => handleMobileItemClick( menuItem.mobileLink, 'item', menuItemIndex ) : undefined } linkUrl={ !menuItem.mobileLink ? menuItem.linkUrl : undefined } key={ menuItemIndex } active={ menuItem.linkUrl === router.route } />
                                    ))
                                }
                            </div>
                        </Slide>
                    ) )
                }
                
            </BkMainMenuMobile>
            
            {/* Elemento que crea un alto al momento de desplegar submenú o menú mobile */}
            <BkBox
                sx={{
                    display: 'flex',
                    height: matches ? (mobileMenuExpanded || openMegaMenu ? '64px' : '0') :  (mobileMenuExpanded || openMegaMenu ? '74px' : '0'),
                    width: '100%'
                }}
            ></BkBox>

            {/* Menú principal */}
            <AppBar
                elevation={ 0 }
                position={mobileMenuExpanded || openMegaMenu ? "fixed" : "relative"}
                sx={{
                    backgroundColor: mobileMenuExpanded || openMegaMenu ? 'black' : '#202020',
                    zIndex: 10,
                }}
                { ...other }
            >
                <BkContainer disableGutters>
                    <Toolbar 
                        disableGutters
                        sx={{
                            backgroundColor: mobileMenuExpanded || openMegaMenu ? 'black' : 'transparent',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            height: matches ? '64px' : '74px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <BkMainLogo />
                        
                        <BkMainNavigation>
                            {
                                menuData.map((menuItem, menuItemIndex) => (
                                    <BkMainMenuItem label={ menuItem.label } description={ menuItem.description } handleAction={ () => handleDesktopItemClick(menuItemIndex) } firstLevel key={ menuItemIndex } active={ menuItem.linkUrl === router.route }/>
                                ))
                            }
                        </BkMainNavigation>

                        <BkBox
                            sx={{
                                display: 'flex',
                            }}
                        >
                            {
                                matches
                                &&
                                <BkBox
                                    sx={{ 
                                        alignItems: 'center',
                                        borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                                        display: { xs: 'flex', sm: 'none' },
                                        justifyContent: 'center',
                                        height: 64,
                                        width: 64,
                                    }} 
                                >
                                    {
                                        userLogged
                                        ?
                                        <Link
                                            href={ profileUrl }
                                        >
                                            <a style={{ textDecoration: 'none' }}>
                                                <BkAvatar size='extraSmall' nameOrTitle={ userName } showDescription={ false } />
                                            </a>
                                        </Link>
                                        :
                                        <BkButtonIcon 
                                            iconName='icon-user'
                                            href={ loginkUrl }
                                            target='_blank'
                                            size='small'
                                            // className='loginLink' 
                                            sx={{
                                                // backgroundColor: 'rgba(255, 255, 255, .15)',
                                                color: 'white',
                                                '&:hover': {
                                                    color: theme.palette.accent.main
                                                }
                                            }}
                                        />
                                    }
                                </BkBox>
                            }

                            <BkButtonIcon 
                                iconName={ mobileMenuExpanded ? 'icon-close' : 'icon-menu'} 
                                onClick={ handleMobileMenu } 
                                sx={{ 
                                    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '0',
                                    color: 'white',
                                    display: { xs: 'block', sm: 'none' },
                                    height: 64,
                                    width: 64,
                                    '&:hover': {
                                        color: theme.palette.accent.main
                                    }
                                }} 
                            />
                        </BkBox>

                        {
                            !matches
                            &&
                            <BkMainProfile
                                languages={ languages }
                                loginkUrl={ loginkUrl }
                                profileLabel={ profileLabel }
                                profileUrl={ profileUrl }
                                registerLabel={ registerLabel }
                                registerUrl={ registerUrl }
                                userName={ userName }
                                userImage={ userImage }
                                userLogged={ userLogged }
                                onChangeLanguages={ handleLanguageChange }
                            />
                        }
                        <BkMainMegaMenu onClose={ () => setOpenMegaMenu(!openMegaMenu) } open={ openMegaMenu } submenu={ selectedMegaDropdownMenu } banner={ <BkBannerEvent size="small" title='Participa en el Giro d’Italia 2021 desde casa' linkUrl='https://www.google.es/' linkLabel='Más información' logoImage='/static/img/events/giro-logo.png' logoWidth={ 80 } logoHeight={ 63 } /> } />
                    </Toolbar>
                </BkContainer>
            </AppBar>
        </Fragment>
    );
};

BkMainMenu.propTypes = {
    backMenuLabel: PropTypes.string,
    children: PropTypes.node,
    handleLanguageChange: PropTypes.func,
    languages: PropTypes.array,
    loginkUrl: PropTypes.string,
    menuData: PropTypes.array,
    profileLabel: PropTypes.string,
    profileUrl: PropTypes.string,
    registerLabel: PropTypes.string,
    registerUrl: PropTypes.string,
    userImage: PropTypes.string,
    userLogged: PropTypes.bool,
    userName: PropTypes.string,
};
 
export default BkMainMenu;