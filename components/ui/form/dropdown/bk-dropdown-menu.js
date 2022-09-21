// REACT
import PropTypes from 'prop-types';

// MUI
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';

const BkDropdownMenu = (props) => {
    const { children, ...other } = props;

    return (
        <Menu 
            TransitionComponent={ Fade }
            {  ...other }
        >
            { children }
        </Menu>
    );
};

BkDropdownMenu.propTypes = {
    children: PropTypes.node,
};
 
export default BkDropdownMenu;