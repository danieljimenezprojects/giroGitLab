// REACT
import PropTypes from 'prop-types';

// MUI
import Tabs from '@mui/material/Tabs';
import BkBox from '../../../layout/box/bk-box';
import { useTheme } from '@mui/material/styles';

const BkTabMenu = (props) => {
    const { children, tabColor, tabType, variant, ...other } = props;

    const theme = useTheme();
    
    return (
        <BkBox
            display={ variant === 'fullWidth' ? 'block' : 'flex' }
        >
            <Tabs
                sx={{
                    backgroundColor: tabType === 'pill' ? (tabColor === 'white' ? '#F5F5F5' : theme.palette.background.default) : (tabColor === 'white' ? 'transparent' : theme.palette.background.default),
                    borderRadius: tabType === 'pill' ? '28px' : 0,
                    boxShadow: tabType === 'pill' ? 'none' : tabColor === 'white' ? 'inset 0 -2px 0 0 #D3D3D3' : 'inset 0 -2px 0 0 rgba(144, 144, 144, .25)',
                    padding: tabType === 'pill' ? '0 4px' : 0,
                    '.MuiTab-root': {
                        '&:hover': {
                            color: tabColor === 'white' ? theme.palette.background.default : theme.palette.common.white,
                        }
                    },
                    '.MuiButtonBase-root.Mui-selected': {
                        color: tabColor === 'white' || tabType === 'pill' ? theme.palette.background.default : theme.palette.accent.main,
                        '&:hover': {
                            color: tabColor === 'white' || tabType === 'pill' ? theme.palette.background.default : theme.palette.accent.main,
                        },

                    },
                    '.MuiTabs-indicator': {
                        backgroundColor:tabColor === 'black' || tabType === 'pill' ? theme.palette.accent.main : theme.palette.background.default,
                        borderRadius: tabType === 'pill' ? '28px' : 0,
                        height: tabType === 'pill' ? 48 : '2px',
                        top: tabType === 'pill' ? '4px' : 'unset',
                    },
                }}
                variant={ variant }
                { ...other }
            >
                { children }
            </Tabs>
        </BkBox>
    );
};

BkTabMenu.defaultProps = {
    tabColor: 'white',
    tabType: 'line',
    variant: 'standard',
};

BkTabMenu.propTypes = {
    children: PropTypes.node,
    tabColor: PropTypes.PropTypes.oneOf(['white', 'black']),
    tabType: PropTypes.PropTypes.oneOf(['line', 'pill']),
    variant: PropTypes.PropTypes.oneOf(['fullWidth', 'scrollable', 'standard']),
};
 
export default BkTabMenu;