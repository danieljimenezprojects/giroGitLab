// REACT
import PropTypes from 'prop-types'

// MUI
import Container from '@mui/material/Container';

const BkContainer = (props) => {
    const { children, ...other } = props;

    return (
        <Container
            { ...other }
        >
            { children }
        </Container>
    );
};

BkContainer.defaultProps = {
    maxWidth: 'xl'
};

BkContainer.propTypes = {
    children: PropTypes.node,
};
 
export default BkContainer;