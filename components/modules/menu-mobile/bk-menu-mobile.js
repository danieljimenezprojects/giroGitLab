// REACT
import PropTypes from 'prop-types';

// BKOOL
import BkBox from "../../layout/box/bk-box";
import BkButton from '../../ui/actions/button/bk-button';
import BkMainLanguage from '../topbar/bk-main-menu-language';

const BkMainMenuMobile = (props) => {
    const { banner, children, expanded, handleLanguageChange, languages, loginkUrl, onChangeLanguages, registerLabel, registerUrl, userLogged } = props;
    
    return (
        <BkBox
            sx={{
                backgroundColor: 'black',
                display: {
                    xs: 'flex',
                    sm: 'none'
                },
                flexDirection: 'column',
                height: expanded ? 'calc( 100% )' : 0,
                // justifyContent: 'space-between',
                opacity: expanded ? 1 : 0,
                overflow: 'hidden',
                // overflowY: 'auto',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                paddingTop:  expanded ? '64px' : 0,
                position: 'fixed',
                transition: 'all .5s',
                top: 0,
                width: '100%',
                zIndex: '10',
            }}
        >
            <BkBox
                sx={{
                    display: 'flex',
                    height: '100%',
                    flexDirection: 'column',
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    position: 'relative',
                }}
            >
                { children }
            </BkBox>

            {
                banner
            }

            <BkBox
                sx={{
                    alignItems: 'center',
                    backgroundColor: 'black',
                    // bottom: 0,
                    borderTop: '1px solid #202020',
                    display: 'flex',
                    flexShrink: 0,
                    justifyContent: 'flex-end',
                    height: '64px',
                    // left: '1rem',
                    // right: '1rem',
                    position: 'relative',
                }}
            >
                {
                    !userLogged
                    &&
                    <BkButton sx={{ margin: '0 .5rem' }} variant="contained" color="accent" size="small" linkUrl={ registerUrl } >{ registerLabel }</BkButton>
                }
                <BkMainLanguage languages={ languages } onChangeMenu={ handleLanguageChange } />
            </BkBox>
        </BkBox>
    );
};

BkMainMenuMobile.propTypes = {
    banner: PropTypes.node,
    children: PropTypes.node,
    expanded: PropTypes.bool,
    handleLanguageChange: PropTypes.func,
    registerLabel: PropTypes.string,
    registerUrl: PropTypes.string,
    userLogged: PropTypes.bool,
};
 
export default BkMainMenuMobile;