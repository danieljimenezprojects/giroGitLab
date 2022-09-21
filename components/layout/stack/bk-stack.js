// REACT
import PropTypes from 'prop-types'

// MUI
import Stack from '@mui/material/Stack';

const BkStack = (props) => {
    const { children, ...other } = props;

    return (
        <Stack
            { ...other }
        >
            { children }
        </Stack>
    );
}

BkStack.propTypes = {
    children: PropTypes.node
};

export default BkStack;