// REACT
import PropTypes from 'prop-types';

// MUI
import TableRow from '@mui/material/TableRow';

const BkTableRow = (props) => {
    const { children, ...other } = props;

    return (
        <TableRow
            { ...other }
        >
            { children }
        </TableRow>
    );
};

BkTableRow.propTypes = {
    children: PropTypes.node,
};

export default BkTableRow;