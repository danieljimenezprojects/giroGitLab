// NEXT
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types'

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkIcon from '../../icon/bk-icon';
import BkTypography from '../../typography/bk-typography';
import BkBox from '../../../layout/box/bk-box';
import BkAvatar from '../../content/avatar/bk-avatar';

const CardInfo = (props) => {
    const { avatarImg, description, iconName, linkUrl, orientation, title } = props;

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card
            sx={{
                boxShadow: 'none',
                backgroundColor: 'rgba(0, 0, 0, .4)',
                transition: 'all .25s',
                '&:hover': {
                    transform: linkUrl && 'scale(1.035)',
                }
            }}
        >
            {
                orientation === 'vertical'
                ?
                <CardContent
                    sx={{
                        '&.MuiCardContent-root': {
                            marginBottom: `${linkUrl ? 'unset' : '3rem'}`,
                            marginTop: '3rem',
                            textAlign: 'center',
                            paddingBottom: matches ? '24px' : '32px !important',
                            paddingLeft: matches ? '16px' : '24px',
                            paddingRight: matches ? '16px' : '24px',
                        }
                    }}
                >
                    <BkTypography gutterBottom textAlign="center" color="accent" sx={{ marginBottom: '1rem' }}>
                        <BkIcon iconName={ iconName } iconSize="extraLarge" />
                    </BkTypography>
                    <BkTypography 
                        variant={ matches ? 'titleMedium' : 'titleExtraLarge' } 
                        gutterBottom 
                        textAlign="center" 
                        color="white"
                        sx={{ marginBottom: '1rem' }}
                    >
                        { title }
                    </BkTypography>
                    <BkTypography 
                        variant={ matches ? 'body2' : 'body1' } 
                        //gutterBottom={ linkUrl && true } 
                        textAlign="center" 
                        color="white"
                        sx={{
                            '&.MuiTypography-root': {
                                marginBottom: linkUrl ? '3rem' : 0,
                                opacity: .75,
                            }
                        }}
                    >
                        { description }
                    </BkTypography>
                </CardContent>
                :
                <CardContent
                    sx={{
                        alignItems: 'start',
                        display: 'flex',
                        paddingBottom: matches ? '24px' : '32px !important',
                        paddingLeft: matches ? '16px' : '24px',
                        paddingRight: matches ? '16px' : '24px',
                        paddingTop: matches ? '24px' : '32px',
                    }}
                >
                    <BkAvatar imageUrl={ avatarImg } align='left' nameOrTitle="Oscar Carballido" showDescription={ false } />
                    <BkBox>
                        <BkTypography 
                            variant={matches ? 'titleMedium' : 'titleExtraLarge'} 
                            gutterBottom 
                            color="white"
                        >
                            { title }
                        </BkTypography>
                        <BkTypography 
                            variant={matches ? 'body2' : 'body1'} 
                            gutterBottom={ linkUrl && true } 
                            color="white" 
                            sx={{
                                opacity: .75,
                            }}
                        >
                            { description }
                        </BkTypography>
                    </BkBox>
                </CardContent>
            }
        </Card>
    )
};

const BkCardInfo = (props) => {
    const { avatarImg, description, iconName, linkUrl, orientation, title } = props;
    
    return (
        linkUrl
        ?
        <Link
            href={ linkUrl }
            passHref={ true }
        >
            <a style={{ display: 'block', textDecoration: 'none' }}>
                <CardInfo
                    avatarImg={ avatarImg }
                    description={ description }
                    iconName={ iconName }
                    linkUrl={ linkUrl }
                    orientation={ orientation }
                    title={ title }
                />
            </a>
        </Link>
        :
        <CardInfo
            avatarImg={ avatarImg }
            description={ description }
            iconName={ iconName }
            linkUrl={ linkUrl }
            orientation={ orientation }
            title={ title }
        />
    );
};

BkCardInfo.defaultProps = {
    iconName: 'icon-add-circle',
    orientation: 'vertical',
};

BkCardInfo.propTypes = {
    avatarImg: PropTypes.string,
    description: PropTypes.string,
    iconName:PropTypes.string,
    linkUrl: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    title: PropTypes.string,
};
 
export default BkCardInfo;