// NEXT
import Image from 'next/image';
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types';

// BKOOL
import BkTypography from "../../ui/typography/bk-typography";
import BkBox from '../../layout/box/bk-box';
import BkGrid from '../../layout/grid/bk-grid';
import BkLink from '../../ui/actions/link/bk-link';

const BkBannerEvent = (props) => {
    const { backgroundImage, description, fontColor, linkLabel, linkTarget, linkUrl, logoImage, logoHeight, logoWidth, size, title } = props;

    return (
        <Link href={ linkUrl } passHref={ true }>
            <a target={ linkTarget } style={{ textDecoration: 'none' }}>
                <BkBox
                    sx={{
                        borderRadius: 2,
                        padding: size === 'small' ? '1rem' : {
                            xs: '1rem',
                            sm: '2rem',
                            md: '3rem',
                            lg: '8rem',
                        }
                    }}
                    style={{ 
                        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative'
                    }}
                >
                    <BkGrid
                        alignItems='center'
                        container
                        spacing={2}
                    >
                        <BkGrid item xs={ 12 } sm={ size === 'small' ? 12 : 6 } md={ size === 'small' ? 12 : 5 } lg={ size === 'small' ? 12 : 4 }>
                            {
                                logoImage
                                &&
                                <BkBox mb={ 3 }>
                                    <Image 
                                        src={ logoImage }
                                        height={ logoHeight }
                                        width={ logoWidth }
                                    />
                                </BkBox>
                            }
                            <BkTypography variant={ size === 'small' ? 'titleMedium' : 'h4' } gutterBottom color={ fontColor }>{ title }</BkTypography>
                            <BkTypography variant='body1' color={ fontColor } sx={{ marginBottom: '1.5rem' }} >{ description }</BkTypography>
                        </BkGrid>
                    </BkGrid>
                </BkBox>
            </a>
        </Link>
    );
};

BkBannerEvent.defaultProps = {
    backgroundImage: '/static/img/events/banner-event.jpg',
    fontColor: 'white',
    size: 'medium',
};

BkBannerEvent.propTypes = {
    backgroundImage: PropTypes.string,
    description: PropTypes.string,
    fontColor: PropTypes.oneOf(['primary', 'secondary', 'black', 'white', 'error', 'warning', 'success', 'info']),
    linkLabel: PropTypes.string,
    linkUrl: PropTypes.string,
    linkTarget: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    logo: PropTypes.elementType,
    size: PropTypes.oneOf(["small", "medium"]),
    title: PropTypes.string,
};
 
export default BkBannerEvent;