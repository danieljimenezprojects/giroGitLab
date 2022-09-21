// REACT
import PropTypes from 'prop-types';

// MUI
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';

const BkFormCheckbox = (props) => {
    const { color, size, ...other } = props;
    const theme = useTheme()
    return (
        <Checkbox 
            color={ color }
            size={size}
            sx={{
            color: color === "accent" ? theme.palette.accent.main : theme.palette.secondary.main 
            }}
            { ...other }
        />
    );
};

BkFormCheckbox.defaultProps = {
    color: 'accent',
    size: 'medium',
};

BkFormCheckbox.propTypes = {
    color: PropTypes.oneOf(["accent", "secondary"]),
    size: PropTypes.oneOf(["medium", "small"]),
};
 
export default BkFormCheckbox;