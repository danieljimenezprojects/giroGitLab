// REACT
import PropTypes from 'prop-types';

// MUI
import Radio from '@mui/material/Radio';
import { useTheme } from '@mui/material/styles';

const BkFormRadiobutton = (props) => {
    const { color, size, ...other } = props;
    const theme = useTheme()
    return (
        <Radio 
            color={ color }
            size={size}
            sx={{
            color: color === "accent" ? theme.palette.accent.main : theme.palette.secondary.main 
            }}
            { ...other }
        />
    );
};

BkFormRadiobutton.defaultProps = {
    color: 'accent',
    size: 'medium',
};

BkFormRadiobutton.propTypes = {
    color: PropTypes.oneOf(["accent", "secondary"]),
    size: PropTypes.oneOf(["medium", "small"]),
};
 
export default BkFormRadiobutton;