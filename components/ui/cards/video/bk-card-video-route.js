// NEXT
import Image from 'next/image';
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types'
import { Fragment } from 'react';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// BKOOL
import BkTypography from '../../typography/bk-typography';
import BkBox from '../../../layout/box/bk-box';
import BkButtonVideo from '../../actions/video/bk-button-video';
import BkIcon from '../../icon/bk-icon';

const CardVideoRoute = (props) => {
    const { averageEffort, description, distance, distanceUnit, handleOnClickVideo, hoverLabel, imageUrl, moreInfoLabel, moreInfoLink, moreInfoTarget, location, linkUrl, size, subtitle, target, title } = props;

    return (
        <Fragment>
            <BkBox 
                sx={{
                    width: '100%',
                    position: 'relative',
                    paddingBottom: size !== 'small' ? '370px' : '270px',
                    '&:before': {
                        background: '-moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 90%)',
                        background: '-webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 90%)',
                        background: 'linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 90%)',
                        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#00000000", endColorstr="#cc000000",GradientType=0 )',
                        content: '""',
                        height: '100%',
                        left: 0,
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        zIndex: '1'
                    }
                }}
            >
                <Image 
                    alt={ title }
                    layout='fill'
                    src={ imageUrl }
                    objectFit='cover'
                    objectPosition='center'
                    priority
                />
            </BkBox>
            
            <CardContent
                sx={{
                    left: 0,
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    zIndex: '2'
                }}
            >
                {
                    title
                    &&
                    <BkTypography 
                        variant='titleExtraLarge'
                        color="white" 
                        gutterBottom
                    >
                        { title }
                    </BkTypography>
                }
                {
                    description
                    &&
                    <BkTypography 
                        variant='body1'
                        color="white" 
                        gutterBottom
                        sx={{
                            maxHeight: '42px',
                            overflow: 'hidden',
                        }}
                    >
                        { description }
                    </BkTypography>
                }
                {
                    subtitle
                    &&
                    <BkTypography 
                        variant='subtitleMedium'
                        color="white" 
                        gutterBottom
                    >
                        { subtitle }
                    </BkTypography>
                }
                {
                    subtitle
                    &&
                    <Fragment>
                        <BkTypography 
                            gutterBottom
                            color="white" 
                            variant='body2'
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <BkIcon iconName='icon-map-pin' iconSize="small"/>
                            { location }
                        </BkTypography>
                        <BkBox
                            alignItems='center'
                            display='flex'
                            displayWrap='wrap'
                        >
                            <BkTypography 
                                color="white" 
                                variant='body2'
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    marginRight: '1rem'
                                }}
                            >
                                <BkIcon iconName='icon-distance'iconSize="small"/>
                                { distance }
                                { distanceUnit }
                            </BkTypography>
                            <BkTypography 
                                color="white" 
                                variant='body2'
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                }}
                            >
                                <BkIcon iconName='icon-slope' iconSize="small"/>
                                { averageEffort }
                            </BkTypography>
                        </BkBox>
                    </Fragment>
                }
            </CardContent>
        </Fragment>
    );
};

const BkCardVideoRoute = (props) => {
    const { averageEffort, description, distance, distanceUnit, handleOnClickVideo, hoverLabel, imageUrl, moreInfoLabel, moreInfoLink, moreInfoTarget, location, linkUrl, size, subtitle, target, title } = props;

    return (
        <Card
            sx={{
                backgroundColor: 'unset',
                boxShadow: 'none',
                position: 'relative',
                transition: 'all .25s',
                '&:hover': {
                    transform: 'scale(1.05)',
                }
            }}
        >
            {
                (handleOnClickVideo || linkUrl)
                &&
                <BkBox
                    sx={{
                        left: 'calc(50% - 32px)',
                        position: 'absolute',
                        top: 'calc(50% - 32px)',
                        zIndex: 5,
                    }}
                >
                    <BkButtonVideo onClick={ handleOnClickVideo } linkUrl={ linkUrl } target={ target } hoverLabel={ hoverLabel } />
                </BkBox>
            }
            {
                moreInfoLink
                ?
                <Link
                    href={ moreInfoLink }
                    passHref={ true }
                >
                    <a style={{ textDecoration: 'none' }} target={ target }>
                        <CardVideoRoute
                            averageEffort={ averageEffort }
                            description={ description }
                            distance={ distance }
                            distanceUnit={ distanceUnit }
                            handleOnClickVideo={ handleOnClickVideo }
                            hoverLabel={ hoverLabel }
                            imageUrl={ imageUrl }
                            moreInfoLabel={ moreInfoLabel }
                            moreInfoLink={ moreInfoLink }
                            moreInfoTarget={ moreInfoTarget }
                            location={ location }
                            linkUrl={ linkUrl }
                            size={ size }
                            subtitle={ subtitle }
                            target={ target }
                            title={ title }
                        />
                    </a>
                </Link>
                :
                <CardVideoRoute
                    averageEffort={ averageEffort }
                    description={ description }
                    distance={ distance }
                    distanceUnit={ distanceUnit }
                    handleOnClickVideo={ handleOnClickVideo }
                    hoverLabel={ hoverLabel }
                    imageUrl={ imageUrl }
                    location={ location }
                    linkUrl={ linkUrl }
                    size={ size }
                    subtitle={ subtitle }
                    target={ target }
                    title={ title }
                />
            }
        </Card>
    );
};

BkCardVideoRoute.defaultProps = {
    imageUrl: '/static/img/cards/card_video_route-default.jpg',
    size: 'medium',
};

BkCardVideoRoute.propTypes = {
    averageEffort: PropTypes.string,
    description: PropTypes.string,
    distance: PropTypes.string,
    distanceUnit: PropTypes.string,
    handleOnClickVideo: PropTypes.func,
    hoverLabel: PropTypes.string,
    imageUrl: PropTypes.string,
    moreInfoLabel: PropTypes.string,
    moreInfoLink: PropTypes.string,
    moreInfoTarget: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    linkUrl: PropTypes.string,
    location: PropTypes.string,
    size: PropTypes.oneOf(['medium', 'small']),
    subtitle: PropTypes.string,
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    title: PropTypes.string,
};

export default BkCardVideoRoute;