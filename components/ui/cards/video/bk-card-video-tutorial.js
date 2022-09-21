// NEXT
import Image from 'next/image';
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types'

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// BKOOL
import BkTypography from '../../typography/bk-typography';
import BkBox from '../../../layout/box/bk-box';
import BkButtonVideo from '../../actions/video/bk-button-video';

const BkCardVideoTutorial = (props) => {
    const { duration, handleOnClickVideo, imageUrl, linkUrl, size, target, title } = props;

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
            <BkBox 
                sx={{
                    width: '100%',
                    position: 'relative',
                    paddingBottom: size !== 'small' ? '370px' : '270px',
                    '&:before': {
                        background: '-moz-linear-gradient(top,  rgba(32,32,32,0.2) 0%, rgba(32,32,32,0.2) 1%, rgba(0,0,0,0.5) 80%)',
                        background: '-webkit-linear-gradient(top,  rgba(32,32,32,0.2) 0%,rgba(32,32,32,0.2) 1%,rgba(0,0,0,0.5) 80%)',
                        background: 'linear-gradient(to bottom,  rgba(32,32,32,0.2) 0%,rgba(32,32,32,0.2) 1%,rgba(0,0,0,0.5) 80%)',
                        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#66000000", endColorstr="#cc000000",GradientType=0 )',
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
            <BkBox
                sx={{
                    left: 'calc(50% - 32px)',
                    position: 'absolute',
                    top: 'calc(50% - 32px)',
                    zIndex: 5,
                }}
            >
                <BkButtonVideo onClick={ handleOnClickVideo } linkUrl={ linkUrl } target={ target } />
            </BkBox>
            <CardContent
                sx={{
                    left: 0,
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    zIndex: '2'
                }}
            >
                <BkBox
                    alignItems='flex-end'
                    display='flex'
                    justifyContent='space-between'
                >
                    <BkTypography 
                        variant='subtitleLarge'
                        color="white" 
                    >
                        { title }
                    </BkTypography>
                    <BkTypography 
                        align='right'
                        color='white'
                        variant="body1"
                    >
                        { duration }
                    </BkTypography>
                </BkBox>
            </CardContent>
        </Card>
    );
};

BkCardVideoTutorial.defaultProps = {
    imageUrl: '/static/img/cards/card_video_tutorial-default.jpg',
    size: 'medium',
    title: 'Tutorial',
};

BkCardVideoTutorial.propTypes = {
    duration: PropTypes.string,
    handleOnClickVideo: PropTypes.func,
    imageUrl: PropTypes.string,
    linkUrl: PropTypes.string,
    size: PropTypes.oneOf(['medium', 'small']),
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    title: PropTypes.string,
};

export default BkCardVideoTutorial;