// REACT
import PropTypes from 'prop-types';

// MUI
import TableContainer from '@mui/material/TableContainer';

const BkTableContainer = (props) => {
    const { children, ...other } = props;

    return (
        <TableContainer
            { ...other }
        >
            { children }
        </TableContainer>
    );
};

BkTableContainer.propTypes = {
    children: PropTypes.node,
};
 
export default BkTableContainer;