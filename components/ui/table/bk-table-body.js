// REACT
import PropTypes from 'prop-types';

// MUI
import TableBody from '@mui/material/TableBody';

const BkTableBody = (props) => {
    const { children, ...other } = props;

    return (
        <TableBody
            { ...other }
        >
            { children }
        </TableBody>
    );
};

BkTableBody.propTypes = {
    children: PropTypes.node,
};

export default BkTableBody;