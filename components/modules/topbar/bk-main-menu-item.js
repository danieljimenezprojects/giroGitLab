// NEXT
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types';
import { useState } from 'react';

// MUI
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkTypography from '../../ui/typography/bk-typography';
import BkBox from '../../layout/box/bk-box';
import BkIcon from '../../ui/icon/bk-icon';
import { Fragment } from 'react';

const MenuLink = (props) => {
    const { active, description, firstLevel, label, levelItem } = props;

    const [ hover, setHover ] = useState(false);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <BkBox
            sx={{
                alignItems: 'center',
                borderBottom: `2px solid ${ active ? theme.palette.accent.main : ( matches ? theme.palette.background.default : 'transparent' )}`,
                display: 'flex',
            }}
            onMouseEnter={ () => setHover(true) } onMouseLeave={ () => setHover(false) }
        >
            <BkBox
                sx={{
                    alignItems: 'flex-start',
                    display: 'flex',
                    flexDirection: 'column',
                    height: firstLevel ? 72 : 56,
                    justifyContent: 'center',
                    padding: firstLevel ? '0' : '.75rem 0',
                    width: '100%'
                }}
            >
                <BkTypography variant='subtitleSmall' color='white' sx={{
                    color: active || hover ? theme.palette.accent.main : 'white'
                }} >{ label }</BkTypography>
                <BkTypography 
                    color='white' 
                    sx={{ 
                        display: { xs: 'block', sm: 'none', lg: 'block' },
                        fontSize: '0.75rem',
                        opacity: .85,
                    }} 
                >
                    { description }
                </BkTypography>
            </BkBox>
            {
                levelItem
                &&
                <BkIcon iconName='icon-chevron-right' sx={{ color: hover ? theme.palette.accent.main : 'white' }} />
            }
        </BkBox>
    );
};

const BkMainMenuItem = (props) => {
    const { active, description, firstLevel, handleAction, label, levelItem, linkUrl, target } = props;

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Fragment 
            // className="main-menu-item"
        >
            {
                linkUrl
                ?
                <Link 
                    href={ linkUrl }
                    passHref={ true }
                >
                    <a
                        className="main-menu-item main-menu-link"
                        target={ target }
                    >
                        <MenuLink
                            active={ active }
                            description={ description }
                            firstLevel={ firstLevel }
                            label={ label }
                            levelItem={ levelItem }
                        />
                    </a>
                </Link>
                :
                <button
                    className="main-menu-link"
                    onClick={ handleAction }
                    style={{
                        width: matches ? '100%' : 'auto'
                    }}
                >
                    <MenuLink 
                        active={ active }
                        description={ description }
                        firstLevel={ firstLevel }
                        label={ label }
                        levelItem={ levelItem }
                    />
                </button>
            }
        </Fragment>
    );
};

BkMainMenuItem.defaultProps = {

};

BkMainMenuItem.propTypes = {
    active: PropTypes.bool,
    description: PropTypes.string,
    firstLevel: PropTypes.bool,
    handleAction: PropTypes.func,
    label: PropTypes.string,
    levelItem: PropTypes.bool,
    linkUrl: PropTypes.string,
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
};
 
export default BkMainMenuItem;