// REACT
import PropTypes from 'prop-types';

// BKOOL
import BkSection from "../../layout/section/bk-section";
import BkButton from '../../ui/actions/button/bk-button';
import BkTypography from "../../ui/typography/bk-typography";
import BkBox from '../../layout/box/bk-box';

const BkSubscription = (props) => {
    const { buttonLabel, buttonLink, buttonTarget, children, imageUrl, subtitle, title, ...other } = props;

    return (
        <BkSection
            backgroundImage={ imageUrl }
            paddingX="small"
            paddingY="extraLarge"
            backgroundOverlay={ imageUrl && true }
            { ...other }
        >
            <BkBox
                sx={{
                    margin: '0 auto',
                    maxWidth:{
                        xs: '100%',
                        sm: '80%',
                        md: '60%',
                        lg: '40%',
                    },
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {
                    title
                    &&
                    <BkTypography
                        align="center"
                        color="white"
                        gutterBottom
                        variant="h4"
                    >
                        { title }
                    </BkTypography>
                }
                {
                    subtitle
                    &&
                    <BkTypography
                        align="center"
                        color="white"
                        variant="body1"
                    >
                        { subtitle }
                    </BkTypography>
                }
                {
                    children
                    &&
                    <BkBox 
                        sx={{ 
                            padding: '1.5rem 0',
                            textAlign: 'center',
                        }}
                    >
                        { children }
                    </BkBox>
                }
                <BkBox 
                    sx={{ 
                        margin: '0 auto',
                        maxWidth: '350px',
                        padding: '1.5rem 0 0',
                        textAlign: 'center',
                    }}
                >
                    <BkButton 
                        variant="contained"
                        color="accent"
                        linkUrl={ buttonLink }
                        target={ buttonTarget }
                    >
                        { buttonLabel }
                    </BkButton>
                </BkBox>
            </BkBox>
        </BkSection>
    );
};

BkSubscription.defaultProps = {
    imageUrl: '/static/img/cards/card_info_leagues-default.jpg',
};

BkSubscription.propTypes = {
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonTarget: PropTypes.string,
    children: PropTypes.node,
    imageUrl: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
};
 
export default BkSubscription;