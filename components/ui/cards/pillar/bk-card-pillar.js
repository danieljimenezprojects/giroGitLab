// NEXT
import Image from 'next/image';
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types';
import { Fragment } from 'react';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// BKOOL
import BkTypography from '../../typography/bk-typography';
import BkBox from '../../../layout/box/bk-box';
import BkButtonVideo from '../../actions/video/bk-button-video';

const CardPillarContent = (props) => {
    const { children, handleOnClickVideo, imageUrl, moreInfoLabel, moreInfoLink, moreInfoTarget, linkUrl, target, title, videoLabel } = props;

    return (
        <Fragment>
            <BkBox 
                sx={{
                    width: '100%',
                    position: 'relative',
                    paddingBottom: '370px',
                    '&:before': {
                        background: '-moz-linear-gradient(top,  rgba(20,20,20,.4) 0%, rgba(20,20,20,0.9) 90%)',
                        background: '-webkit-linear-gradient(top,  rgba(20,20,20,.4) 0%,rgba(20,20,20,0.9) 90%)',
                        background: 'linear-gradient(to bottom,  rgba(20,20,20,.4) 0%,rgba(20,20,20,0.9) 90%)',
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
                        variant='h3'
                        color="white" 
                        gutterBottom
                    >
                        { title }
                    </BkTypography>
                }
                <BkBox 
                    sx={{ 
                        color: 'white',
                    }}
                >
                    { children }
                </BkBox>
            </CardContent>
        </Fragment>
    );
};

const BkCardPillar = (props) => {
    const { children, handleOnClickVideo, imageUrl, moreInfoLabel, moreInfoLink, moreInfoTarget, linkUrl, target, title, videoLabel } = props;

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
                        right: '1rem',
                        position: 'absolute',
                        top: '1rem',
                        zIndex: 5,
                    }}
                >
                    <BkButtonVideo onClick={ handleOnClickVideo } linkUrl={ linkUrl } target={ target } hoverLabel={ videoLabel }/>
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
                        <CardPillarContent
                            children={ children }
                            handleOnClickVideo={ handleOnClickVideo }
                            imageUrl={ imageUrl }
                            moreInfoLabel={ moreInfoLabel }
                            moreInfoLink={ moreInfoLink }
                            moreInfoTarget={ moreInfoTarget }
                            linkUrl={ linkUrl }
                            target={ target }
                            title={ title }
                            videoLabel={ videoLabel }
                        />
                    </a>
                </Link>
                :
                <CardPillarContent
                    children={ children }
                    handleOnClickVideo={ handleOnClickVideo }
                    imageUrl={ imageUrl }
                    linkUrl={ linkUrl }
                    target={ target }
                    title={ title }
                    videoLabel={ videoLabel }
                />
            }
        </Card>
    );
};

BkCardPillar.defaultProps = {
    imageUrl: '/static/img/cards/card_video_pillars-default.jpg',
};

BkCardPillar.propTypes = {
    children: PropTypes.node,
    handleOnClickVideo: PropTypes.func,
    imageUrl: PropTypes.string,
    moreInfoLabel: PropTypes.string,
    moreInfoLink: PropTypes.string,
    moreInfoTarget: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    linkUrl: PropTypes.string,
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    title: PropTypes.string,
    videoLabel: PropTypes.string,
};

export default BkCardPillar;