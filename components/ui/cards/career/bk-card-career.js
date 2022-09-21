// NEXT
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types'

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkIcon from '../../icon/bk-icon';
import BkTypography from '../../typography/bk-typography';
import BkBox from '../../../layout/box/bk-box';
import { pSBC } from '../../../../src/utils/Luminosity';

const CardCareer = (props) => {
    const {  description, location, size, subtitle, linkUrl, title } = props;

    const theme = useTheme();

    return (
        <Card
            sx={{
                backgroundColor: '#363636',
                boxShadow: 'none',
                transition: 'all .25s',
                '&:hover': {
                    transform: linkUrl && 'scale(1.05)',
                    '.MuiTypography-subtitleExtraLarge': {
                        color: theme.palette.accent.main
                    },
                    '.MuiTypography-body2': {
                        color: linkUrl && pSBC(.65, theme.palette.accent.main)
                    },
                }
            }}
        >
            <CardContent >
                <BkTypography 
                    variant={ size === 'medium' ? 'subtitleExtraLarge' : 'subtitleLarge' } 
                    gutterBottom 
                    color="white"
                >
                    { title }
                </BkTypography>
                <BkTypography 
                    variant='body2' 
                    gutterBottom 
                    color="white"
                >
                    { subtitle }
                </BkTypography>
                <BkTypography 
                    variant={ size === 'medium' ? 'body1' : 'body2'}
                    gutterBottom
                    color="white"
                    sx={{
                        marginTop: size === 'medium' ? '1rem' : '.5rem'
                    }}
                >
                    { description }
                </BkTypography>
                <BkBox
                    alignItems='flex-end'
                    display='flex'
                    justifyContent='space-between'
                    mt={2}
                >
                    <BkTypography 
                        color="white" 
                        variant='body2'
                    >
                        <BkIcon iconName='icon-map-pin' iconSize='small' />
                        { location }
                    </BkTypography>
                </BkBox>
            </CardContent>
        </Card>
    );
};

const BkCardCareer = (props) => {
    const {  description, linkUrl, location, size, subtitle, target, title } = props;

    return (
        linkUrl
        ?
        <Link
            href={ linkUrl }
            passHref={ true }
        >
            <a style={{ display: 'block', textDecoration: 'none' }} target={ target }>
                <CardCareer
                    description={ description }
                    location={ location }
                    linkUrl={ linkUrl }
                    size={ size }
                    subtitle={ subtitle }
                    title={ title }
                />
            </a>
        </Link>
        :
        <CardCareer
            description={ description }
            location={ location }
            linkUrl={ linkUrl }
            size={ size }
            subtitle={ subtitle }
            title={ title }
        />
    );
};

BkCardCareer.defaultProps = {
    size: 'medium',
};

BkCardCareer.propTypes = {
    description: PropTypes.string,
    linkUrl: PropTypes.string,
    location: PropTypes.string,
    subtitle: PropTypes.string,
    size: PropTypes.oneOf(['medium', 'small']),
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    title: PropTypes.string,
};
 
export default BkCardCareer;