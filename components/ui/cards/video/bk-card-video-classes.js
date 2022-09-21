// NEXT
import Image from 'next/image';
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types'

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';

// BKOOL
import BkTypography from '../../typography/bk-typography';
import BkBox from '../../../layout/box/bk-box';
import BkButtonVideo from '../../actions/video/bk-button-video';
import BkAvatar from '../../content/avatar/bk-avatar';

const BkCardVideoClasses = (props) => {
    const { avatarImage, avatarName, description, handleOnClickVideo, hoverLabel, imageUrl, linkLabel, linkUrl, target, title } = props;

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
                    paddingBottom: '370px',
                    '&:before': {
                        background: '-moz-linear-gradient(top,  rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 90%)',
                        background: '-webkit-linear-gradient(top,  rgba(0,0,0,0.8) 10%,rgba(0,0,0,0.5) 50%,rgba(0,0,0,0.8) 90%)',
                        background: 'linear-gradient(to bottom,  rgba(0,0,0,0.8) 10%,rgba(0,0,0,0.5) 50%,rgba(0,0,0,0.8) 90%)',
                        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#cc000000", endColorstr="#cc000000",GradientType=0 )',
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
                <BkButtonVideo onClick={ handleOnClickVideo } linkUrl={ linkUrl } target={ target } hoverLabel={ hoverLabel } />
            </BkBox>
            <CardContent
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    zIndex: '2'
                }}
            >
                <BkAvatar 
                    align='left'
                    color='white'
                    imageUrl={ avatarImage }
                    nameOrTitle={ avatarName }
                    size='small'
                />
                <BkBox>
                    <BkTypography 
                        variant='titleExtraLarge'
                        color="white" 
                        sx={{
                            marginBottom: description && '1rem'
                        }}
                    >
                        { title }
                    </BkTypography>
                    <BkTypography 
                        variant='body1'
                        color="white"
                    >
                        { description }
                    </BkTypography>
                </BkBox>
            </CardContent>
        </Card>
    );
};

BkCardVideoClasses.defaultProps = {
    imageUrl: '/static/img/cards/card_video_classes-default.jpg',
};

BkCardVideoClasses.propTypes = {
    description: PropTypes.string,
    handleOnClickVideo: PropTypes.func,
    hoverLabel: PropTypes.string,
    imageUrl: PropTypes.string,
    linkLabel: PropTypes.string,
    linkUrl: PropTypes.string,
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    title: PropTypes.string,
};

export default BkCardVideoClasses;