// REACT
import PropTypes from 'prop-types';

// MUI
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

// EXTRA
import cls from 'classnames';

// BKOOL
import styles from './bk-section.module.css';

const BkSection = (props) => {
    const { backgroundColor, backgroundImage, backgroundOverlay, borderRadius, children, className, paddingX, paddingY, ...other } = props;

    const theme = useTheme();

    return (
        <Box
            className={ 
                cls(
                    paddingX && styles[`paddingX-${paddingX}`],
                    paddingY && styles[`paddingY-${paddingY}`],
                    className && className
                )
            }
            component="section"
            sx={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none', 
                backgroundColor: backgroundColor === 'accent' || backgroundColor === 'primary' || backgroundColor === 'secondary' || backgroundColor === 'error' || backgroundColor === 'warning' || backgroundColor === 'info' || backgroundColor === 'success' ? theme.palette[backgroundColor].main : backgroundColor,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: borderRadius && '.5rem',
                position: 'relative',
                '&:before': backgroundOverlay && {
                    backgroundColor: theme.palette.accent.main === '#FF286E' ? 'rgba(75, 20, 40, .7)' : 'rgba(0, 0, 0, .6)',
                    content: '""',
                    height: '100%',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                }
            }}
            { ...other }
        >
            <Box 
                sx={{ 
                    position: 'relative',
                    zIndex: 1,
                }} 
            >
                { children }
            </Box>
        </Box>
    );
};

BkSection.propTypes = {
    backgroundColor: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf(['accent', 'primary', 'secondary', 'error', 'info', 'success', 'warning']),
    ]),
    backgroundImage: PropTypes.string,
    backgroundOverlay: PropTypes.bool,
    borderRadius:PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    paddingX: PropTypes.PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large', 'extraLarge', 'none']),
    paddingY: PropTypes.PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large', 'extraLarge', 'none']),
};
 
export default BkSection;