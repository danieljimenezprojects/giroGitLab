// REACT
import PropTypes from 'prop-types';

// MUI
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';

// BKOOL
import BkIcon from '../../icon/bk-icon';

const BkTabMenuItem = (props) => {
    const { ...other } = props;

    return (
        <Tab
            disableFocusRipple
            disableRipple
            sx={{
                zIndex: 1,
                '.MuiIcon-root': {
                    fontFamily: 'icomoon'
                }
            }}
            { ...other }
        />
    );
};
 
export default BkTabMenuItem;