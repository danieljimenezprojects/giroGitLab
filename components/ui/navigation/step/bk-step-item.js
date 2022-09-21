// REACT
import PropTypes from 'prop-types';

// EXTRA
import cls from 'classnames';

// MUI
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import NoiseControlOffIcon from '@mui/icons-material/NoiseControlOff';

import { styled } from '@mui/material/styles';

// BKOOL

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    display: 'flex',
    height: 22,
    alignItems: 'center',
    '& .QontoStepIcon-completedIcon': {
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));
  
function QontoStepIcon(props) {
    const { active, completed, className } = props;
  
    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <NoiseControlOffIcon className={cls("QontoStepIcon-circle")} />
            ) : (
                <RadioButtonCheckedIcon className={cls("QontoStepIcon-completedIcon")} />
            )}
        </QontoStepIconRoot>
    );
}

const BkStepItem = (props) => {
    const { children, ...other } = props;

    return (
        <Step
            { ...other }
            sx={{
                width: '20px',
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: '0',
                paddingRight: '0',
            }}
        >
            <StepLabel StepIconComponent={QontoStepIcon} >{ children }</StepLabel>
        </Step>
    );
};

BkStepItem.propTypes = {
    children: PropTypes.node,
};

export default BkStepItem;