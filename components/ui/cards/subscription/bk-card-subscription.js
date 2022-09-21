// REACT
import PropTypes from 'prop-types';
import { useState } from 'react';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// BKOOL
import BkIcon from '../../icon/bk-icon';
import BkTypography from '../../typography/bk-typography';
import BkBox from '../../../layout/box/bk-box';
import BkBadge from '../../content/badge/bk-badge';
import BkListCheckItem from '../../list/check/bk-list-check-item';
import { pSBC } from '../../../../src/utils/Luminosity';

const BkCardSubscription = (props) => {
    const { badgeLabel, badgeCategory, checkList, currency, oldPrice, price, selected, subscriptionType, title } = props;

    const theme = useTheme();

    return (
        <Card
            sx={{
                backgroundColor: 'rgba(0, 0, 0, .8)',
                border: selected ? '2px solid #F5EB41' : '2px solid transparent',
                boxShadow: 'none',
                overflow: 'inherit',
                padding: '.5rem',
                position: 'relative',
                transition: 'all .25s',
                '&:hover': {
                    backgroundColor: pSBC(.1, theme.palette.secondary.main),
                    cursor: 'pointer',
                    transform: 'scale(1.035)',
                }
            }}
        >
            {
                selected
                &&
                <BkBox
                    sx={{
                        alignItems: 'center',
                        backgroundColor: '#F5EB41',
                        borderRadius: '50%',
                        display: 'flex',
                        height: '18px',
                        justifyContent: 'center',
                        position: 'absolute',
                        right: '-9px',
                        top: '-9px',
                        width: '18px',
                    }}
                >
                    <BkIcon iconName='icon-checked' iconSize='small' />
                </BkBox>
            }
            <CardContent >
                <BkBox
                    alignItems='center'
                    display='flex'
                    justifyContent='space-between'
                >
                    <BkBadge variant="badge" category={ badgeCategory } label={ badgeLabel } />
                    <BkTypography 
                        variant='subtitleExtraSmall' 
                        sx={{
                            alignItems: 'center',
                            color: pSBC(.5, theme.palette.accent.main),
                            display: 'flex',
                            flexDirection: 'column',
                            letterSpacing: '2px'
                        }}
                    >
                        <BkIcon iconName='icon-cycling-outdoor' />
                        { subscriptionType === 'individual' ? 'X1' : 'X4' }
                    </BkTypography>
                </BkBox>
                <BkBox
                    alignItems='flex-start'
                    display='flex'
                    justifyContent='space-between'
                    mt={2}
                >
                    <BkBox flex='auto' textAlign="center">
                        <BkTypography 
                            align="center"
                            variant='h3' 
                            gutterBottom 
                            lineDecoration
                            color="accent"
                        >
                            { title }
                        </BkTypography>
                        <div>
                            <BkTypography 
                                align="center"
                                variant='h4' 
                                color="accent"
                                sx={{
                                    color: pSBC(.5, theme.palette.accent.main),
                                    display: 'inline-block',
                                }}
                            >
                                { price }
                            </BkTypography>
                            <BkTypography 
                                variant='h4' 
                                color="accent"
                                sx={{
                                    color: pSBC(.5, theme.palette.accent.main),
                                    display: 'inline-block'
                                }}
                            >
                                { currency }
                            </BkTypography>
                        </div>
                        <div>
                            <BkTypography 
                                variant='body2' 
                                color="white"
                                sx={{
                                    color: pSBC(.85, theme.palette.accent.main),
                                    display: 'inline-block',
                                }}
                            >
                            <del>{ oldPrice }</del>
                            </BkTypography>
                            <BkTypography 
                                variant='body2' 
                                color="white"
                                sx={{
                                    color: pSBC(.85, theme.palette.accent.main),
                                    display: 'inline-block',
                                }}
                            >
                                <del>{ currency }</del>
                            </BkTypography>
                        </div>
                    </BkBox>
                </BkBox>
                <BkBox >
                    <ul style={{ paddingLeft: 0, marginTop: 0, marginBottom: 0 }}>
                        {
                            checkList
                            &&
                            checkList.map((item, index) => (
                                <BkListCheckItem key={ index } color='white' itemLabel={ item } />
                            ))
                        }
                    </ul>
                </BkBox>
            </CardContent>
        </Card>
    );
};

BkCardSubscription.defaultProps = {
    selected: false,
    subscriptionType: 'individual',
};

BkCardSubscription.propTypes = {
    badgeLabel: PropTypes.string,
    badgeCategory: PropTypes.PropTypes.oneOf(['marketing', 'groupRide', 'race', 'league', 'challenge', 'club']),
    checkList: PropTypes.array,
    currency: PropTypes.string,
    oldPrice: PropTypes.string,
    price: PropTypes.string,
    selected: PropTypes.bool,
    title: PropTypes.string,
    subscriptionType: PropTypes.oneOf(["individual", "familiar"]),
};

export default BkCardSubscription;