// NEXT
import Image from 'next/image';

// REACT
import PropTypes from 'prop-types';
import { Children } from 'react';

// MUI
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkSection from "../../layout/section/bk-section";
import BkTypography from "../../ui/typography/bk-typography";
import BkBox from '../../layout/box/bk-box';
import BkGrid from '../../layout/grid/bk-grid';
import BkLink from '../../ui/actions/link/bk-link';
import BkList from '../../ui/list/bk-list';
import BkButton from '../../ui/actions/button/bk-button';
import styles from './bk-billboard.module.css';

const BkBillboard = (props) => {
    const { backgroundImage, buttonLabel, buttonLink, buttonTarget, children, description, imageDescription, imageTitle, layout, title } = props;

    const featuresContent = Children.toArray( children );

    const theme = useTheme();

    return (
        <BkSection backgroundColor='secondary'>
            <BkGrid
                alignItems='stretch'
                container
                direction={ layout === 'textFirst' ? 'row-reverse' : 'row' }
                // spacing={2}
            >
                <BkGrid 
                    className={ styles.backgroundOverlay }
                    item
                    xs={ 12 }
                    sm={ 6 }
                    lg={ 7 }
                    xl={ 8 }
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                    }}
                    style={{ 
                        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative'
                    }}
                >
                    <BkBox
                        sx={{
                            margin: '2rem auto',
                            maxWidth:{
                                xs: '100%',
                                sm: '80%',
                                lg: '60%',
                            },
                            padding: {
                                xs: 3,
                                sm: 4,
                                lg: 6,
                            },
                            position: 'relative',
                            textAlign: 'center',
                            zIndex: 1,
                        }}
                    >
                        <BkTypography variant='h3' color='white' sx={{ marginBottom: '1.5rem' }}>{ imageTitle }</BkTypography>
                        <BkTypography variant='body1' color='white' sx={{ marginBottom: '2rem' }}>{ imageDescription }</BkTypography>
                        {
                            buttonLink
                            &&
                            <BkButton 
                                variant="contained"
                                color="accent"
                                linkUrl={ buttonLink }
                                target={ buttonTarget }
                            >
                                { buttonLabel }
                            </BkButton>
                        }
                    </BkBox>
                </BkGrid>
                <BkGrid
                    item
                    xs={ 12 }
                    sm={ 6 }
                    lg={ 5 }
                    xl={ 4 }
                    sx={{
                        alignItems: 'center',
                        backgroundColor: theme.palette.accent.main,
                        display: 'flex',
                    }}
                >
                    <BkBox
                        sx={{
                            margin: '2rem auto',
                            padding: {
                                xs: 3,
                                sm: 4,
                                md: 5,
                                lg: 6,
                            },
                        }}
                    >
                        <BkTypography variant='h3' color='black' lineDecoration>{ title }</BkTypography>
                        <BkTypography variant='body1' color='black' sx={{ marginBottom: '1rem' }}>{ description }</BkTypography>
                        <BkList>
                            {
                                featuresContent.map( (feature, index) => (
                                    <BkBox 
                                        component='li'
                                        sx={{
                                            marginBottom: index !== featuresContent.length - 1 ? '.75rem' : 0
                                        }}
                                        key={ index }
                                    >
                                        <BkLink 
                                            linkUrl={ feature.props.linkUrl }
                                            featureIconClass={ feature.props.featureIconClass }
                                            target={ feature.props.target }
                                        >
                                            { feature.props.children }
                                        </BkLink>
                                    </BkBox>
                                ) )
                            }
                        </BkList>
                    </BkBox>
                </BkGrid>
            </BkGrid>
        </BkSection>
    );
};

BkBillboard.defaultProps = {
    backgroundImage: '/static/img/cards/hannes-glockl-5-3-Rjd0d_U-unsplash.jpg',
    layout: 'imageFirst',
};

BkBillboard.propTypes = {
    backgroundImage: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonTarget: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    children: PropTypes.node,
    description: PropTypes.string,
    imageDescription: PropTypes.string,
    imageTitle: PropTypes.string,
    layout: PropTypes.PropTypes.oneOf(['imageFirst', 'textFirst']),
    title: PropTypes.string,
};
 
export default BkBillboard;