// REACT
import PropTypes from 'prop-types';

// MUI
import { ButtonBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkIcon from '../../icon/bk-icon';

const BkButtonArrow = (props) => {
    const { color, direction, ...other } = props;

    const theme = useTheme();

    return (
        <ButtonBase
            sx={{
                alignItems: 'center',
                borderRadius: '50%',
                border: `2px solid ${color === 'accent' ? theme.palette.accent.main : theme.palette.secondary.main}`,
                color: color === 'accent' ? theme.palette.accent.main : theme.palette.secondary.main,
                display: 'flex',
                height: '54px',
                justifyContent: 'center',
                // opacity: color === 'white' ? .6 : .4,
                width: '54px',
                '&:hover': {
                    opacity: 1,
                },
                '&:disabled': {
                    borderColor: color === 'accent' ? theme.palette.common.white : theme.palette.secondary.main,
                    color: color === 'accent' ? theme.palette.common.white : theme.palette.secondary.main,
                    opacity: .2,
                },
            }}
            { ...other }
        >
            {
                direction === 'left'
                ?
                <BkIcon iconName="icon-arrow-backward" sx={{}}/>
                :
                <BkIcon iconName="icon-arrow-forward"/>
            }
        </ButtonBase>
    );
};

BkButtonArrow.defaultProps = {
    color: 'secondary'
};
BkButtonArrow.propTypes = {
    color: PropTypes.oneOf(['accent', 'secondary']),
    direction: PropTypes.oneOf(['left', 'right']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};
export default BkButtonArrow;