// NEXT
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types';

// MUI
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkBox from "../../layout/box/bk-box";
import BkAvatar from '../../ui/content/avatar/bk-avatar';
import BkButton from "../../ui/actions/button/bk-button";
import BkButtonIcon from '../../ui/actions/button/bk-button-icon';
import BkMainLanguage from './bk-main-menu-language';

const BkMainProfile = (props) => {
    const { languages, loginkUrl, onChangeLanguages, profileUrl, registerLabel, registerUrl, userLogged, userName, userImage } = props;

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <BkBox
            sx={{
                display: 'flex',
                paddingLeft: '.5rem',
                paddingRight: '.5rem',
            }}
        >
            {
                !matches
                &&
                (
                    userLogged
                    ?
                    <Link
                        href={ profileUrl }
                    >
                        <a style={{ textDecoration: 'none' }}>
                            <BkAvatar size='extraSmall' nameOrTitle={ userName } imageUrl={ userImage } showDescription={ false } />
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
                            backgroundColor: 'rgba(255, 255, 255, .15)',
                            color: 'white',
                            // '&:hover': {
                            //     backgroundColor: theme.palette.accent.main
                            // }
                        }}
                    />
                )
            }

            {
                !userLogged
                &&
                <BkButton sx={{ margin: '0 .5rem' }} variant="contained" color="accent" size="small" linkUrl={ registerUrl } >{ registerLabel }</BkButton>
            }
            <BkMainLanguage languages={ languages } onChangeMenu={ onChangeLanguages } />
        </BkBox>
    );
};

BkMainProfile.defaultProps = {
    profileLabel: 'My Profile',
    registerLabel: 'Register',
};

BkMainProfile.propTypes = {
    language: PropTypes.array,
    loginkUrl: PropTypes.string,
    onChangeLanguages: PropTypes.func,
    profileUrl: PropTypes.string,
    registerLabel: PropTypes.string,
    registerUrl: PropTypes.string,
    userLogged: PropTypes.bool,
    userImage: PropTypes.string,
    userName: PropTypes.string,
};
 
export default BkMainProfile;