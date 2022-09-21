// REACT
import PropTypes from 'prop-types';

// EXTRA
import cls from 'classnames';

// MUI
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const BkFormTextField = (props) => {
    const { className, colorStyle, endAdornment, startAdornment, ...other } = props;

    return (
        <TextField 
            className={ cls(
                className && className,
                colorStyle
            ) }
            InputProps={{
                ...(startAdornment && {
                    startAdornment: (
                        <InputAdornment position="start" >
                            {  startAdornment }
                        </InputAdornment>
                    ),
                }),
                ...(endAdornment && {
                    endAdornment: (
                        <InputAdornment position="end" >
                            { endAdornment }
                        </InputAdornment>
                    ),
                }),
            }}
            variant='filled'
            { ...other }
        />
    );
};

BkFormTextField.defaultProps = {
    colorStyle: 'white',
    margin: 'dense',
};

BkFormTextField.propTypes = {
    className: PropTypes.string,
    colorStyle: PropTypes.oneOf(["white", "black"]),
    endAdornment: PropTypes.node,
    startAdornment: PropTypes.node,
};
 
export default BkFormTextField;