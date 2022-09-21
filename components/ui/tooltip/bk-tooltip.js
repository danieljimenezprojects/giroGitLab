// REACT
import PropTypes from 'prop-types';

// MUI
import Tooltip from '@mui/material/Tooltip';

const BkTooltip = (props) => {
    const { children, title,variant, ...other } = props;

    return (
                <Tooltip 
                arrow
                title={ title }
                { ...other }
                >
                <div style={{ display: 'inline-flex' }} >{ children }</div>
                </Tooltip>
    );
};

BkTooltip.defaultProps = {
    placement: 'top',
    title: 'Tooltip'
};

BkTooltip.propTypes = {
    children: PropTypes.node,
};
 
export default BkTooltip;