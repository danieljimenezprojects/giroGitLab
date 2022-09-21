// REACT
import PropTypes from 'prop-types';

// EXTRA
import cls from 'classnames';

// MUI
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkButtonIcon from '../../actions/button/bk-button-icon';

const BkFormTextFieldNewsletter = (props) => {
    const { buttonAction, className, placeholder, ...other } = props;

    const theme = useTheme();

    return (
        <TextField 
            className={ cls(
                className && className,
                'newsletterTextfield'
            ) }
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end" >
                        <BkButtonIcon 
                            iconName="icon-arrow-forward" 
                            size="large"
                            sx={{
                                backgroundColor: theme.palette.accent.main,
                                borderRadius: 0,
                                borderBottomRightRadius: '4px',
                                borderTopRightRadius: '4px',
                                height: '56px',
                                width: '56px',
                                '&:hover': {
                                    backgroundColor: theme.palette.accent.main,
                                }
                            }}
                            onClick={ buttonAction }
                        />
                    </InputAdornment>
                ),
            }}
            placeholder={ placeholder }
            type="email"
            { ...other }
        />
    );
};

BkFormTextFieldNewsletter.defaultProps = {
    margin: 'dense',
};

BkFormTextFieldNewsletter.propTypes = {
    buttonAction: PropTypes.func,
    className: PropTypes.string,
    placeholder: PropTypes.string,
};
 
export default BkFormTextFieldNewsletter;