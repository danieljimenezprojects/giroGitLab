// REACT
import PropTypes from 'prop-types'

// MUI
import Grid from '@mui/material/Grid';

const BkGrid = (props) => {
    const { children, ...other } = props;
    return (
        <Grid
            { ...other }
        >
            { children }
        </Grid>
    );
};

BkGrid.propTypes = {
    children: PropTypes.node,
};

export default BkGrid;