// REACT
import PropTypes from 'prop-types';

// MUI
import Pagination from '@mui/material/Pagination';

const BkPagination = (props) => {
    const { count, variant, ...other } = props;

    return (
        <Pagination
            count={ count }
            shape="rounded"
            siblingCount={0}
            variant={ variant }
            { ...other }
        />
    );
};

BkPagination.propTypes = {
    count: PropTypes.number,
    variant: PropTypes.oneOf(["white", "black"]),
};
 
export default BkPagination;