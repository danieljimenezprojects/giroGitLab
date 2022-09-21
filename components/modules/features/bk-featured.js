// NEXT
import Image from 'next/image';

// REACT
import PropTypes from 'prop-types';
import { Children } from 'react';

// MUI
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkSection from "../../layout/section/bk-section";
import BkTypography from "../../ui/typography/bk-typography";
import BkBox from '../../layout/box/bk-box';
import BkGrid from '../../layout/grid/bk-grid';
import BkLink from '../../ui/actions/link/bk-link';
import BkList from '../../ui/list/bk-list';

const BkFeatured = (props) => {
    const { children, description, imageUrl, layout, title } = props;

    const featuresContent = Children.toArray( children );

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <BkSection
            backgroundColor='accent'
            paddingX='small'
            paddingY={ !matches ? 'large' : 'small'}
        >
            <BkGrid
                alignItems='center'
                container
                direction={ layout === 'textFirst' ? 'row-reverse' : 'row' }
                justifyContent='center'
                spacing={2}
            >
                <BkGrid item xs={ 12 } sm={ 5 } md={ 4 } >
                    <BkBox 
                        padding={ !matches ? 0 : 2}
                    >
                        <Image 
                            layout="responsive"
                            src={ imageUrl }
                            height={ 525 }
                            width={ 700 }
                        />
                    </BkBox>
                </BkGrid>
                <BkGrid item xs={ 12 } sm={ 5 } md={ 4 } >
                    <BkTypography variant='h3' color='black' lineDecoration>{ title }</BkTypography>
                    <BkTypography variant='body1' sx={{ marginBottom: '1rem' }}>{ description }</BkTypography>
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
                </BkGrid>
            </BkGrid>
        </BkSection>
    );
};

BkFeatured.defaultProps = {
    imageUrl: '/static/img/features/features.png',
    layout: 'textFirst',
};

BkFeatured.propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    layout: PropTypes.oneOf(['imageFirst', 'textFirst']),
    title: PropTypes.string,
};

export default BkFeatured;