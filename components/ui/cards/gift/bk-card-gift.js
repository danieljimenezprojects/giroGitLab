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

const CardGift = (props) => {
    const { cardStyle, currency, price, subtitle, title } = props;

    return (
        <CardContent
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '175px',
                justifyContent: 'space-between',
                padding: '1.5rem',
                width: '100%',
            }}
        >
            <BkBox>
                <BkTypography 
                    variant='caption'
                    color={ cardStyle === 'accent' ? "secondary" : "white" }
                    // sx={{ marginBottom: '0' }}
                >
                    { title }
                </BkTypography>
                <BkTypography 
                    variant='h2'
                    gutterBottom
                    color={ cardStyle === 'accent' ? "secondary" : "white" }
                    // sx={{ marginBottom: '2.5rem' }}
                >
                    { subtitle }
                </BkTypography>
            </BkBox>
            <BkTypography 
                variant='titleExtraLarge'
                color={ cardStyle === 'accent' ? "secondary" : "white" }
            >
                { price }
                { currency }
            </BkTypography>
        </CardContent>
    );
};

const BkCardGift = (props) => {
    const { cardStyle, currency, handleClick, linkUrl, price, subtitle, title } = props;

    const theme = useTheme();

    return (
        <Card
            onClick={ handleClick }
            sx={{
                boxShadow: 'none',
                backgroundColor: cardStyle === 'accent' ? theme.palette.accent.main : theme.palette.secondary.main,
                backgroundImage: cardStyle === 'accent' ? 'url("/static/img/cards/card_gift_accent-BG.svg")' : 'url("/static/img/cards/card_gift_secondary-BG.svg")',
                backgroundPosition: 'right bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '175px',
                maxWidth: '300px',
                transition: 'all .25s',
                '&:hover': {
                    backgroundColor: (handleClick || linkUrl) && (cardStyle === 'accent' ? pSBC(.5, theme.palette.accent.main) : pSBC(.15, theme.palette.secondary.main)),
                    cursor: handleClick && 'pointer',
                    transform: (handleClick || linkUrl) && 'scale(1.035)',
                    '.MuiTypography-root': {
                        color: (handleClick || linkUrl) && (cardStyle === 'accent' ? pSBC(.065, theme.palette.secondary.main) : pSBC(-.25, theme.palette.common.white))
                    }
                }
            }}
        >
            {
                linkUrl
                ?
                <Link
                    href={ linkUrl }
                    passHref={ true }
                >
                    <a style={{ textDecoration: 'none' }}>
                        <CardGift
                            currency={ currency }
                            linkUrl={ linkUrl }
                            price={ price }
                            subtitle={ subtitle }
                            cardStyle={ cardStyle }
                            title={ title }
                        />
                    </a>
                </Link>
                :
                <CardGift
                    currency={ currency }
                    linkUrl={ linkUrl }
                    price={ price }
                    subtitle={ subtitle }
                    cardStyle={ cardStyle }
                    title={ title }
                />
            }
        </Card>
    );
};

BkCardGift.defaultProps = {
    currency: '€',
    cardStyle: 'accent',
};

BkCardGift.propTypes = {
    cardStyle: PropTypes.oneOf(["accent", "secondary"]),
    currency: PropTypes.string,
    handleClick: PropTypes.func,
    linkUrl: PropTypes.string,
    price: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
};
 
export default BkCardGift;