// NEXT
import Image from 'next/image';
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types';

// MUI
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkBox from "../../../layout/box/bk-box";
import BkTypography from '../../typography/bk-typography';
import BkBadge from '../../content/badge/bk-badge';
import { pSBC } from '../../../../src/utils/Luminosity';

const BkListEventItem = (props) => {
    const { eventType, eventTypeLabel, imageUrl, linkUrl, title } = props;

    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <BkBox
            component="li"
            sx={{ 
                marginBottom: '.5rem',
                transition: 'all .25s',
                '&:hover': {
                    boxShadow: '0px 24px 24px -16px rgba(29, 29, 29, 0.65)',
                    transform: 'scale(1.015)',
                }
            }}
        >
            <Link
                href={ linkUrl }
                passHref={ true }
            >
                <a style={{ textDecoration: 'none' }}>
                    <Card
                        sx={{
                            backgroundColor: pSBC(.045, theme.palette.secondary.main),
                            borderRadius: 2,
                        }}
                    >
                        <CardContent
                            sx={{
                                alignItems: 'start',
                                display: 'flex'
                            }}
                        >
                            <BkBox
                                sx={{
                                    flex: '1 1 auto'
                                }}
                            >
                                <BkBox
                                    sx={{
                                        marginBottom: '1rem'
                                    }}
                                >
                                    <BkBadge variant="badge" category={ eventType } label={ eventTypeLabel } />
                                </BkBox>
                                <BkTypography 
                                    color='white'
                                    gutterBottom
                                    variant={ matchesSm ? 'titleMedium' : 'titleLarge' }
                                >
                                    { title }
                                </BkTypography>
                            </BkBox>
                            {
                                imageUrl
                                &&
                                <BkBox 
                                    sx={{
                                        borderRadius: '4px',
                                        flex: '0 0 auto',
                                        height: matchesSm ? 64 : 100,
                                        marginLeft: '1rem',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        width: matchesSm ? 64 : 100,
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
                            }
                        </CardContent>
                    </Card>
                </a>
            </Link>
        </BkBox>
    );
};

BkListEventItem.propTypes = {
    eventType: PropTypes.PropTypes.oneOf(['marketing', 'groupRide', 'race', 'league', 'challenge', 'club']),
    eventTypeLabel: PropTypes.string,
    imageUrl: PropTypes.string,
    linkUrl: PropTypes.string.isRequired,
    title: PropTypes.string,
};

export default BkListEventItem;