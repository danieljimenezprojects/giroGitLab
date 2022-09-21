// REACT
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';

// MUI
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkBox from "../../../layout/box/bk-box";
import BkTypography from '../../typography/bk-typography';
import BkAvatar from '../../content/avatar/bk-avatar';
import { pSBC } from '../../../../src/utils/Luminosity';

const BkListRankingItem = (props) => {
    const { category, color, gap, gapLabel, position, time, timeLabel, userName, userImage } = props;

    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

    const typeConverter = () => {
        if ( category === 'groupRide' ) {
            return {
                backgroundColor: theme.palette.accent.main,
            };
        } else if ( category === 'race' ) {
            return {
                backgroundColor: theme.palette.experienceFitness.main,
            };
        } else if ( category === 'league' ) {
            return {
                backgroundColor: theme.palette.experienceVelodrome.main,
            };
        } else if ( category === 'challenge' ) {
            return {
                backgroundColor: theme.palette.experienceIndoor.main,
            };
        } else if ( category === 'club' ) {
            return {
                backgroundColor: theme.palette.info.main,
            };
        }
    };

    return (
        <BkBox 
            component='li'
            sx={{ 
                alignItems:'start',
                borderRadius: 2,
                backgroundColor: color === 'black' ? pSBC(.045, theme.palette.secondary.main) : pSBC(-.075, theme.palette.common.white),
                display:'flex',
                flexDirection:'row',
                marginBottom: '.5rem',
                px: 2,
                py: 2,
                transition: 'all .25s',
                '&:hover': {
                    boxShadow: '0px 24px 24px -16px rgba(32, 32, 32, 0.16)',
                    transform: 'scale(1.015)',
                }
            }}
        >
            <BkBox 
                sx={{ 
                    alignItems:'center',
                    display:'flex',
                    flexDirection:'row-reverse',
                    justifyContent:matchesMd ? 'flex-end' : 'space-between',
                }}
            >
                <BkAvatar nameOrTitle={ userName } size="small" color={ color === 'black' ? 'white' : 'primary' } align="left" imageUrl={ userImage } showDescription={ false } />
                <BkBox
                    sx={{ 
                        backgroundColor: typeConverter(),
                        border: `2px solid ${ color === 'black' ? '#363636' : 'white' }`,
                        borderRadius: '1rem',
                        color: '#363636',
                        marginRight: '-.75rem',
                        minWidth: '25px',
                        padding: '0 4px',
                        textAlign: 'center',
                        zIndex: 1,
                    }}
                >
                    <BkTypography variant='subtitleSmall' sx={{ lineHeight: 'unset' }} >
                        { position }
                    </BkTypography>
                </BkBox>
            </BkBox>
            
            <BkBox 
                sx={{ 
                    alignItems:'center',
                    display:'flex',
                    flexDirection:'row',
                    flexWrap:  matchesMd ? 'wrap' : 'nowrap',
                    justifyContent:matchesSm ? 'flex-start' : 'space-between',
                    marginLeft: '0',
                    marginTop: matchesSm ? '1rem' : '.4rem',
                    width: '100%',
                }}
            >
                <BkBox
                    sx={{
                        width: matchesSm ? '100%' : 'unset',
                    }}
                >
                    <BkTypography variant='subtitleMedium' color={ color === 'black' ? 'white' : 'secondary' } >{ userName }</BkTypography>
                </BkBox>

                <BkBox
                    sx={{
                        display: 'flex',
                        marginTop: matchesSm ? '.7rem' : '0',
                    }}
                >
                    <BkBox 
                        sx={{ 
                            padding: matchesSm ? '0 1rem 0 0' : '0 1rem',
                        }}
                    >
                        <BkTypography color={ color === 'black' ? 'white' : 'secondary' } sx={{ marginBottom: '-2px', opacity: color === 'black' ? .5 : .5 }} variant="subtitleExtraSmall" >
                            { timeLabel }
                        </BkTypography>
                        <BkTypography color={ color === 'black' ? 'white' : 'secondary' } variant='body1' >
                            { time }
                        </BkTypography>
                    </BkBox>
                    <BkBox 
                        sx={{ 
                            padding: matchesSm ? '0 1rem 0 0' : '0 1rem',
                        }}
                    >
                        <BkTypography color={ color === 'black' ? 'white' : 'secondary' } sx={{ marginBottom: '-2px', opacity: color === 'black' ? .5 : .5 }} variant="subtitleExtraSmall" >
                            { gapLabel }
                        </BkTypography>
                        <BkTypography color={ color === 'black' ? 'white' : 'secondary' } variant='body1' >
                            { gap }
                        </BkTypography>
                    </BkBox>
                </BkBox>
            </BkBox>
        </BkBox>
    );
};

BkListRankingItem.defaultProps = {
    category: 'groupRide',
    gap: '00:00:00',
    position: '1',
    time: '00:00:00',
};

BkListRankingItem.propTypes = {
    category: PropTypes.oneOf(['groupRide', 'race', 'league', 'challenge', 'club']),
    color: PropTypes.oneOf(["white", "black"]),
    gapLabel: PropTypes.string,
    gap: PropTypes.string,
    time: PropTypes.string,
    timeLabel: PropTypes.string,
    userImage: PropTypes.string,
    userName: PropTypes.string.isRequired,
};
 
export default BkListRankingItem;