// REACT
import PropTypes from 'prop-types';
import { Fragment } from 'react';

// MUI
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkIcon from '../../icon/bk-icon';
import BkTypography from '../../typography/bk-typography';
import BkBox from '../../../layout/box/bk-box';

const BkBadge = (props) => {
    const { category, infoIcon, infoTitle, infoSubtitle, label, time, variant, ...other } = props;

    const theme = useTheme();

    const typeConverter = () => {
        if ( category === 'marketing' ) {
            return {
                backgroundColor: '#858585',
				color: theme.palette.common.white,
                '&:hover': {
                    backgroundColor: '#858585',
				    color: theme.palette.common.white,
                }
            };
        } else if ( category === 'groupRide' ) {
            return {
                backgroundColor: theme.palette.accent.main,
				color: theme.palette.background.default,
                '&:hover': {
                    backgroundColor: theme.palette.accent.main,
				    color: theme.palette.background.default,
                }
            };
        } else if ( category === 'race' ) {
            return {
                backgroundColor: theme.palette.experienceFitness.main,
				color: theme.palette.background.default,
                '&:hover': {
                    backgroundColor: theme.palette.experienceFitness.main,
				    color: theme.palette.background.default,
                }
            };
        } else if ( category === 'league' ) {
            return {
                backgroundColor: theme.palette.experienceVelodrome.main,
				color: theme.palette.common.white,
                '&:hover': {
                    backgroundColor: theme.palette.experienceVelodrome.main,
				    color: theme.palette.common.white,
                }
            };
        } else if ( category === 'challenge' ) {
            return {
                backgroundColor: theme.palette.experienceIndoor.main,
				color: theme.palette.common.white,
                '&:hover': {
                    backgroundColor: theme.palette.experienceIndoor.main,
				    color: theme.palette.common.white,
                }
            };
        } else if ( category === 'club' ) {
            return {
                backgroundColor: theme.palette.info.main,
				color: theme.palette.common.white,
                '&:hover': {
                    backgroundColor: theme.palette.info.main,
				    color: theme.palette.common.white,
                }
            };
        }
    };

    return (
        <Fragment>
            {
                variant === 'badge'
                &&
                <Chip
                    label={ label }
                    variant={ variant }
                    category={ category }
                    sx={ typeConverter() }
                    { ...other }
                />
            }
            {
                variant === 'calendar'
                &&
                <Chip
                    label={ `${time} - ${label}` }
                    variant={ variant }
                    category={ category }
                    sx={ typeConverter() }
                    { ...other }
                />
            }
            {
                variant === 'info'
                &&
                <BkBox
                    alignItems='center'
                    backgroundColor={ theme.palette.background.default }
                    borderRadius={ 28 }
                    color={ theme.palette.common.white }
                    display='inline-flex'
                    height={ 56 }
                    paddingX={ 3 }
                >
                    <BkIcon 
                        iconName={ infoIcon }
                        iconSize="large" 
                        sx={{
                            marginRight: '1rem',
                        }}
                    />
                    <div>
                        <BkTypography 
                            variant='subtitleSmall' 
                            sx={{
                                textTransform: 'uppercase'
                            }}
                        >
                            { infoTitle }
                        </BkTypography>
                        <BkTypography 
                            variant='subtitleExtraSmall'
                            sx={{
                                letterSpacing: '1px',
                                opacity: .5,
                                textTransform: 'uppercase'
                            }}
                        >
                            { infoSubtitle }
                        </BkTypography>
                    </div>
                </BkBox>
            }
        </Fragment>
    );
};

BkBadge.defaultProps = {
    category: 'marketing',
    infoIcon: 'icon-add-circle',
    infoTitle: 'Title',
    infoSubtitle: 'Subtitle',
    label: 'Badge',
};

BkBadge.propTypes = {
    category: PropTypes.PropTypes.oneOf(['marketing', 'groupRide', 'race', 'league', 'challenge', 'club']),
    infoIcon: PropTypes.string,
    infoTitle: PropTypes.string,
    infoSubtitle: PropTypes.string,
    label: PropTypes.string,
    time: PropTypes.string,
    variant: PropTypes.PropTypes.oneOf(['badge', 'info', 'calendar']),
};
 
export default BkBadge;