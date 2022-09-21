// REACT
import PropTypes from 'prop-types'

// MUI
import Box from '@mui/material/Box';

const BkBox = (props) => {
    const { children, ...other } = props;
    return (
        <Box
            { ...other }
        >
            { children }
        </Box>
    );
};

BkBox.propTypes = {
    children: PropTypes.node
};
 
export default BkBox;