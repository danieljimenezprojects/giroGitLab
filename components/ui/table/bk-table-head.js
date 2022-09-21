// REACT
import PropTypes from 'prop-types';

// MUI
import TableHead from '@mui/material/TableHead';

const BkTableHead = (props) => {
    const { children, ...other } = props;

    return (
        <TableHead
            children
            { ...other }
        >
            { children }
        </TableHead>
    );
};

BkTableHead.propTypes = {
    children: PropTypes.node,
};

export default BkTableHead;