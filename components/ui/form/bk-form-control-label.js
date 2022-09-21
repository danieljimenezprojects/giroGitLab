// REACT
import PropTypes from 'prop-types';

// MUI
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from '@mui/material/styles';

const BkFormControlLabel = (props) => {
    const { color, marginBottom, size, ...other } = props;

    const theme = useTheme();

    return (
        <FormControlLabel 
            sx={{
                color: color === 'primary' ? theme.palette.background.default : theme.palette.common.white,
                '.MuiFormControlLabel-label': {
                    fontSize: size === 'medium' ? '1rem' : '0.875rem',
                },
                marginBottom: marginBottom === 'none' ? 0 : ( marginBottom === 'medium' ? '1rem' : '0.5rem' ),
            }}
            { ...other }
        />
    );
};

BkFormControlLabel.defaultProps = {
    color: 'primary',
    marginBottom: 'none',
    size: 'medium',
};

BkFormControlLabel.propTypes = {
    color: PropTypes.oneOf(["primary", "secondary"]),
    marginBottom: PropTypes.oneOf(["medium", "small", "none"]),
    size: PropTypes.oneOf(["medium", "small"]),
};
 
export default BkFormControlLabel;