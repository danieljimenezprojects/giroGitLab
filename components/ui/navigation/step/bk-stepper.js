// REACT
import PropTypes from 'prop-types';

// MUI
import Stepper from '@mui/material/Stepper';
import { useTheme } from '@mui/material/styles';

const BkStepper = (props) => {
    const { children, color, ...other } = props;

    const theme = useTheme();
    
    return (
        <Stepper
            color={ color }
            sx={{
                '.MuiStep-root .Mui-disabled': {
                    color: color === 'white' ? '#E8E8E8' : '#636363',
                },
                '.MuiStep-root': {
                    color: color === 'white' ? theme.palette.background.default : theme.palette.accent.main,
                },
                '.Mui-completed': {
                    color: color === 'white' ? theme.palette.background.default : theme.palette.accent.main,
                },
                '.MuiStepConnector-root.Mui-active .MuiStepConnector-line, .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
                    borderColor: color === 'white' ? theme.palette.background.default : theme.palette.accent.main,
                },
                '.MuiStepConnector-root .MuiStepConnector-line': {
                    borderColor: color === 'white' ? '#E8E8E8' : '#636363',
                },
            }}
            { ...other }
        >
            { children }
        </Stepper>
    );
};

BkStepper.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(["white", "black"]),
};
 
export default BkStepper;