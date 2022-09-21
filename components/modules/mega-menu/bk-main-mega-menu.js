// NEXT
import Image from 'next/image';

// REACT
import PropTypes from 'prop-types';

// MUI
import Drawer from '@mui/material/Drawer';

// BKOOL
import BkGrid from '../../layout/grid/bk-grid';
import BkBox from '../../layout/box/bk-box';
import BkMainMegaMenuList from './bk-main-mega-menu-list';
import BkMainMegaMenuItem from'./bk-main-mega-menu-item';
import BkContainer from '../../layout/container/bk-container';

const BkMainMegaMenu = (props) => {
    const { banner, children, submenu, title, ...other } = props;

    return (
        <Drawer
            anchor='top'
            className='bkMegaMenu'
            elevation={ 0 }
            { ...other }
            sx={{
                display: {
                    xs: 'none',
                    sm: 'block'
                },
                top: 74,
                // zIndex: 9,
                '.MuiBackdrop-root': {
                    top: 74,
                },
                '.MuiDrawer-paper': {
                    backgroundColor: 'transparent',
                    top: '74px',
                }
            }}
        >
            <BkBox
                px={ 2 }
                py={ 3 }
                sx={{
                    backgroundColor: 'black',
                    display: 'flex',
                }}
            >
                <BkContainer sx={{
                    display: 'flex'
                }}>
                    <BkGrid container spacing={ 2 }>
                        {
                            submenu.items.map( (submenuItem, index) => (
                                <BkGrid item xs={ 6 } sm={ 6 } md={ 3 } key={ index }>
                                    <BkMainMegaMenuList>
                                        <li key={ index }><BkMainMegaMenuItem linkUrl={ submenuItem.linkUrl }>{ submenuItem.label }</BkMainMegaMenuItem></li>
                                        {
                                            submenuItem.hasOwnProperty('items')
                                            &&
                                            submenuItem.items.map( (submenuItemChild, childIndex) => (
                                                <li key={ childIndex }><BkMainMegaMenuItem linkUrl={ submenuItemChild.linkUrl }>{ submenuItemChild.label }</BkMainMegaMenuItem></li>
                                            ) )
                                        }
                                    </BkMainMegaMenuList>
                                </BkGrid>
                            ) )
                        }
                    </BkGrid>
                    {
                        banner
                    }
                </BkContainer>
            </BkBox>
        </Drawer>
    );
};

BkMainMegaMenu.propTypes = {
    banner: PropTypes.node,
    children: PropTypes.node,
    submenu: PropTypes.object,
    title: PropTypes.string,
};
 
export default BkMainMegaMenu;