// NEXT
import Image from 'next/image';
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types'

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// BKOOL
import BkIcon from '../../icon/bk-icon';
import BkTypography from '../../typography/bk-typography';
import BkBox from '../../../layout/box/bk-box';
import BkAvatar from '../../content/avatar/bk-avatar';
import BkBadge from '../../content/badge/bk-badge';

const CardLeague = (props) => {
    const { avatarImg, badgeCategory, badgeLabel, date, imageUrl, linkUrl, title, users } = props;

    return (
        <Card
            sx={{
                backgroundColor: 'unset',
                boxShadow: 'none',
                position: 'relative',
                transition: 'all .25s',
                '&:hover': {
                    transform: linkUrl && 'scale(1.035)',
                }
            }}
        >
            <BkBox
                sx={{
                    left: '1rem',
                    position: 'absolute',
                    top:'1rem',
                    zIndex: 10
                }}
            >
                <BkBadge 
                    label={ badgeLabel }
                    category={ badgeCategory }
                    variant='badge'
                />
            </BkBox>
            <BkBox 
                sx={{
                    width: '100%',
                    position: 'relative',
                    paddingBottom: '250px',
                    '&:before': {
                        background: '-moz-linear-gradient(top,  rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 1%, rgba(0,0,0,0.8) 80%)',
                        background: '-webkit-linear-gradient(top,  rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 1%,rgba(0,0,0,0.8) 80%)',
                        background: 'linear-gradient(to bottom,  rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 1%,rgba(0,0,0,0.8) 80%)',
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
                <BkBox
                >
                    <BkAvatar 
                        align='left'
                        imageUrl={ avatarImg } 
                        nameOrTitle="Oscar Carballido"
                        showDescription={ false }
                    />
                    <BkTypography 
                        color="white"
                        variant='titleLarge'
                        sx={{
                            paddingTop: '1.5rem'
                        }}
                    >
                        { title }
                    </BkTypography>
                    <BkTypography 
                        variant='body1' 
                        gutterBottom 
                        color="white"
                        sx={{
                            opacity: .75
                        }}
                    >
                        { date }
                    </BkTypography>

                    <BkBox
                        alignItems='center'
                        display='flex'
                        sx={{
                            paddingTop: '.5rem'
                        }}
                    >
                        <BkTypography color="white" >
                            <BkIcon 
                                iconName='icon-user-group'
                            />
                        </BkTypography>
                        <BkTypography 
                            align='right'
                            color='white'
                            variant="body1"
                            sx={{
                                marginLeft: '.5rem',
                            }}
                        >
                            { users }
                        </BkTypography>
                    </BkBox>
                </BkBox>
            </CardContent>
        </Card>
    );
};

const BkCardInfoLeague = (props) => {
    const { avatarImg, badgeCategory, badgeLabel, date, imageUrl, title, users, linkUrl } = props;

    return (
        
        linkUrl
        ?
        <Link href={ linkUrl } passHref={ true }>
            <a style={{ display: 'block', textDecoration: 'none' }}>
                <CardLeague
                    avatarImg={ avatarImg }
                    badgeCategory={ badgeCategory }
                    badgeLabel={ badgeLabel }
                    date={ date }
                    imageUrl={ imageUrl }
                    linkUrl={ linkUrl }
                    title={ title }
                    users={ users }
                />
            </a>
        </Link>
        :
        <CardLeague
            avatarImg={ avatarImg }
            badgeCategory={ badgeCategory }
            badgeLabel={ badgeLabel }
            date={ date }
            imageUrl={ imageUrl }
            title={ title }
            users={ users }
        />
    );
};

BkCardInfoLeague.defaultProps = {
    imageUrl: '/static/img/cards/card_info_leagues-default.jpg',
    users: 0
};

BkCardInfoLeague.propTypes = {
    avatarImg: PropTypes.string,
    badgeCategory: PropTypes.oneOf(["marketing", "groupRide", "race", "league", "challenge", "club"]),
    badgeLabel:PropTypes.string,
    date:PropTypes.string,
    imageUrl: PropTypes.string,
    linkUrl: PropTypes.string,
    title: PropTypes.string,
    users: PropTypes.number,
};
 
export default BkCardInfoLeague;