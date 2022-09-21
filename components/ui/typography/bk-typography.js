// REACT
import PropTypes from 'prop-types';
import { Fragment } from 'react';

// MUI
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// EXTRA
import cls from 'classnames';

// BKOOL
import styles from './bk-typography.module.css';
import BkBox from '../../layout/box/bk-box';

const BkTypography = (props) => {
    const { align, children, color, component, lineDecoration, variant, ...other } = props;

    const theme = useTheme();

    const colorConverter = () => {
        if ( color === 'primary' ) {
            return theme.palette.primary.main;
        } else if ( color === 'secondary' ) {
            return theme.palette.secondary.main;
        } else if ( color === 'black' ) {
            return theme.palette.common.black;
        } else if ( color === 'white' ) {
            return theme.palette.common.white;
        } else if ( color === 'info' ) {
            return theme.palette.info.main;
        } else if ( color === 'error' ) {
            return theme.palette.error.main;
        } else if ( color === 'success' ) {
            return theme.palette.success.main;
        } else if ( color === 'warning' ) {
            return theme.palette.warning.main;
        } else if ( color === 'accent' ) {
            return theme.palette.accent.main;
        }
    };

    return (
        <Fragment>
            <Typography
                variant={ variant }
                component={
                    variant === 'displayLarge' ||
                    variant === 'displayMedium' ||
                    variant === 'displaySmall' ||
                    variant === 'subtitleExtraLarge' ||
                    variant === 'subtitleLarge' ||
                    variant === 'subtitleMedium' ||
                    variant === 'subtitleSmall' ||
                    variant === 'subtitleExtraSmall' ||
                    variant === 'titleExtraLarge' ||
                    variant === 'titleLarge' ||
                    variant === 'titleMedium' ||
                    variant === 'titleSmall' ||
                    variant === 'titleExtraSmall' ||
                    variant === 'caption' ||
                    variant === 'body3'
                    ?
                    'p'
                    :
                    undefined
                }
                className={ 
                    cls(
                        lineDecoration && styles.line, styles[align]
                    )
                }
                color={ colorConverter() }
                align={ align }
                // sx={{
                //     color: ,
                //     textAlign: align
                // }}
                {...other}
            >
                { children }
            </Typography>
            {
                lineDecoration
                &&
                <BkBox
                    sx={{
                        backgroundColor: color === 'accent' || color === 'primary' || color === 'secondary' || color === 'error' || color === 'warning' || color === 'success' || color === 'info' ? theme.palette[color].main : theme.palette.common[color]
                    }}
                ></BkBox>
            }
        </Fragment>
    );
};

BkTypography.propTypes = {
    align: PropTypes.oneOf(['center', 'left', 'right']),
    children: PropTypes.node,
	color: PropTypes.oneOf(['accent', 'primary', 'secondary', 'black', 'white', 'error', 'warning', 'success', 'info']),
	lineDecoration: PropTypes.bool,
    variant: PropTypes.oneOf(['body1', 'body2', 'body3', 'button', 'caption', 'displayLarge', 'displayMedium', 'displaySmall', 'h1', 'h2', 'h3', 'h4', 'inherit', 'overline', 'subtitleExtraLarge', 'subtitleLarge', 'subtitleMedium', 'subtitleSmall', 'subtitleExtraSmall', 'titleExtraLarge', 'titleLarge', 'titleMedium', 'titleSmall']),
};

export default BkTypography;