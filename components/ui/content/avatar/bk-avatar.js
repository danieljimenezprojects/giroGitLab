// REACT
import PropTypes from 'prop-types'
import { Fragment } from 'react';

// MUI
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkBox from '../../../layout/box/bk-box';
import BkTypography from '../../typography/bk-typography';

const BkAvatar = (props) => {
    const { align, color, imageUrl, showDescription, size, subtitle, nameOrTitle } = props;

    const theme = useTheme();

    const sizeConverter = () => {
        if ( size === 'small' ) {
            return {
                avatarSsize: 48,
                titleSmallize: 'titleSmall',
                subtitleSmallize: 'body2',
                letterSize: 'h4',
            };
        } else if ( size === 'medium' ) {
            return {
                avatarSsize: 64,
                titleSmallize: 'titleMedium',
                subtitleSmallize: 'body1',
                letterSize: 'h3',
            };
        } else if ( size === 'large' ) {
            return {
                avatarSsize: 96,
                titleSmallize: 'titleLarge',
                subtitleSmallize: 'body1',
                letterSize: 'h2',
            };
        } else if ( size === 'extraLarge' ) {
            return {
                avatarSsize: 128,
                titleSmallize: 'titleExtraLarge',
                subtitleSmallize: 'body3',
                letterSize: 'h1',
            };
        } else if ( size === 'extraSmall' ) {
            return {
                avatarSsize: 32,
                titleSmallize: 'subtitleSmall',
                subtitleSmallize: 'body2',
                letterSize: 'subtitleSmall',
            };
        }
    };

    return (
        <BkBox
            alignItems='center'
            display='flex'
            flexDirection={ align === 'center' ? 'column' : ( align === 'left' ? 'row' : 'row-reverse' ) }
            justifyContent={ align === 'center' && 'center' }
        >
            {
                imageUrl
                ?
                <Avatar
                    alt={ 'Avatar image' || nameOrTitle }
                    src={ imageUrl }
                    sx={{
                        height: sizeConverter().avatarSsize,
                        marginBottom: align === 'center' ? '.75rem' : 0,
                        marginLeft: align === 'right' ? '.75rem' : 0,
                        marginRight: align === 'left' ? '.75rem' : 0,
                        width: sizeConverter().avatarSsize,
                    }}
                />
                :
                <Avatar
                    sx={{
                        backgroundColor: theme.palette.accent.main,
                        // color: theme.palette.common.black,
                        height: sizeConverter().avatarSsize,
                        marginBottom: align === 'center' ? '.75rem' : 0,
                        marginLeft: align === 'right' ? '.75rem' : 0,
                        marginRight: align === 'left' ? '.75rem' : 0,
                        width: sizeConverter().avatarSsize,
                    }}
                >
                <BkTypography variant={ sizeConverter().letterSize } color="black" >{ nameOrTitle[0].toUpperCase() }</BkTypography>
                </Avatar>
            }
            {
                ( showDescription && ( nameOrTitle || subtitle ) )
                &&
                <div>
                    {
                        nameOrTitle
                        &&
                        <BkTypography variant={ sizeConverter().titleSmallize } align={ align } color={ color } >{ nameOrTitle }</BkTypography>
                    }
                    {
                        subtitle
                        &&
                        <BkTypography variant={ sizeConverter().subtitleSmallize } align={ align } color={ color } >{ subtitle }</BkTypography>
                    }
                </div>
            }
        </BkBox>
    );
};

BkAvatar.defaultProps = {
    // imageUrl: '/static/img/avatar/avatar_default.png',
    size: 'medium',
    color: 'black',
    showDescription: true,
};

BkAvatar.propTypes = {
    align: PropTypes.PropTypes.oneOf(['left', 'center', 'right']),
    color: PropTypes.PropTypes.oneOf(['accent', 'black', 'white', 'primary', 'secondary']),
    imageUrl: PropTypes.string,
    nameOrTitle:PropTypes.string.isRequired,
    size: PropTypes.PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large', 'extraLarge']),
    subtitle: PropTypes.string,
    showDescription: PropTypes.bool,
};

export default BkAvatar;