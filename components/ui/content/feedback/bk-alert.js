// REACT
import PropTypes from 'prop-types';

// MUI
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

// BKOOL
import BkIcon from '../../icon/bk-icon';
import BkTypography from '../../typography/bk-typography';

const BkAlert = (props) => {
    const { children, title, severity, variant, ...other } = props;

    return (
        <Alert 
            icon={ <BkIcon iconName='icon-info' /> }
            variant={ variant === '' ? 'outlined' : variant }
            severity={ severity }
            { ...other }
            
        >
            <AlertTitle sx={{marginBottom:"8px"}}>
                <BkTypography variant='subtitleMedium' >
                    { title }
                </BkTypography>
            </AlertTitle>
            { children }
        </Alert>
    );
};

BkAlert.defaultProps = {
    title: 'Alert!',
    severity: 'info',
};

BkAlert.propTypes = {
    children: PropTypes.node,
    severity: PropTypes.oneOf(["info", "error"]),
    title: PropTypes.string,
    variant: PropTypes.oneOf(["white", "black"]),
};
 
export default BkAlert;