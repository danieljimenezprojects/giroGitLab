// REACT
import PropTypes from 'prop-types';

// MUI
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';

const BkSliderPagination = (props) => {
    const { color, activeStep, lines, steps, variant, ...other } = props;

    const theme = useTheme();

    return (
        <MobileStepper 
            color={ color }
            activeStep={ activeStep }
            steps={ steps }
            sx={{
                '.MuiMobileStepper-dotActive': {
                    backgroundColor: theme.palette[color].main
                },
                '.MuiMobileStepper-dot': {
                    borderRadius: lines && variant !== 'dots' ? '0' : '50%',
                    height: lines && variant !== 'dots' ? '2px' : '6px',
                    margin: lines && variant !== 'dots' ? '0 8px' : '0 4px',
                    width: lines && variant !== 'dots' ? '64px' : '6px',
                },
            }}
            variant={ variant }
            { ...other }
        />
    );
};

BkSliderPagination.defaultProps = {
    color: 'accent',
    activeStep: 0,
};

BkSliderPagination.propTypes = {
    color: PropTypes.oneOf(["accent", "secondary"]),
    activeStep: PropTypes.number,
    lines: PropTypes.bool,
    steps: PropTypes.number,
    variant: PropTypes.oneOf(["dots", "progress", "text"]),
};
 
export default BkSliderPagination;