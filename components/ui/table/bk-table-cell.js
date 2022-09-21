// REACT
import PropTypes from 'prop-types';

// MUI
import TableCell from '@mui/material/TableCell';

const BkTableCell = (props) => {
    const { children, ...other } = props;

    return (
        <TableCell
            { ...other }
        >
            { children }
        </TableCell>
    );
};

BkTableCell.propTypes = {
    children: PropTypes.node,
};

export default BkTableCell;