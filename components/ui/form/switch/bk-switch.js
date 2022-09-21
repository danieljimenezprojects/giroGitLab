// REACT
import PropTypes from 'prop-types';

// EXTRA
import cls from 'classnames';

// MUI
import Switch from '@mui/material/Switch';

const BkFormSwitch = (props) => {
    const { className, colorStyle, ...other } = props;

    return (
        <Switch 
            className={ cls(
                className && className,
                colorStyle
            ) }
            color={ colorStyle }
            disableRipple
            {  ...other }
        />
    );
};

BkFormSwitch.defaultProps = {
    colorStyle: 'primary',
};

BkFormSwitch.propTypes = {
    className: PropTypes.string,
    colorStyle: PropTypes.oneOf(["primary", "secondary"]),
};
 
export default BkFormSwitch;