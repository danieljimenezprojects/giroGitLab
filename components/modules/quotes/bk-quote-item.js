// REACT
import PropTypes from 'prop-types';

// MUI
import BkBox from '../../layout/box/bk-box';
import BkTypography from '../../ui/typography/bk-typography';
import BkAvatar from '../../ui/content/avatar/bk-avatar';

const BkQuoteItem = (props) => {
    const { quote, quotePerson, quotePersonSubtitle, quotePersonImage } = props;

    return (
        <BkBox 
            sx={{ 
                aligItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem 2rem',
                textAlign: 'center',
            }} 
        >
            <BkTypography 
                variant='displaySmall' 
                color='white' 
                sx={{ 
                    marginBottom: '2rem',
                    opacity: .75,
                }}
            >
                { quote }
            </BkTypography>
            <BkBox
                sx={{
                    margin: 'auto',
                    maxWidth: '300px',
                }}
            >
                <BkAvatar 
                    align="left"
                    color="white"
                    imageUrl={ quotePersonImage }
                    nameOrTitle={ quotePerson }
                    size="small"
                    subtitle={ quotePersonSubtitle }
                />
            </BkBox>
        </BkBox>
    );
};

BkQuoteItem.propTypes = {
    quote: PropTypes.string,
    quotePerson: PropTypes.string,
    quotePersonSubtitle: PropTypes.string,
    quotePersonImage: PropTypes.string,
};
 
export default BkQuoteItem;