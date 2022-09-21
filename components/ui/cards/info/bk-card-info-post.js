// NEXT
import Image from 'next/image';
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types'
import { Fragment, useState } from 'react';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkTypography from '../../typography/bk-typography';
import BkBox from '../../../layout/box/bk-box';
import BkButtonIcon from '../../actions/button/bk-button-icon';
import BkIcon from '../../icon/bk-icon';
import { pSBC } from '../../../../src/utils/Luminosity';

const BkCardInfoPost = (props) => {
    const { categoryLabel, date, imageRatio, imageUrl, linkUrl, orientation, size, style, title, voteCounter } = props;

    const theme = useTheme();

    return (
        <Card
            sx={{
                backgroundColor: style === 'black' ? pSBC(.045, theme.palette.secondary.main) : theme.palette.common.white,
                boxShadow: '0 24px 24px -16px rgba(32, 32, 32, .16)',
                position: 'relative',
                transition: 'all .25s',
                '&:hover': {
                    transform: linkUrl && 'scale(1.035)',
                }
            }}
        >
            {
                orientation === 'vertical'
                ?
                <Link
                    href={ linkUrl }
                    passHref={ true }
                >
                    <a style={{ display: 'block', textDecoration: 'none' }}>
                        {
                            imageUrl
                            &&
                            <div style={{ width: '100%', position: 'relative', paddingBottom: imageRatio === 'square' ? '100%' : (imageRatio === 'third' ? '75%' : '56%') }}>
                                <Image 
                                    alt={ title }
                                    layout='fill'
                                    src={ imageUrl }
                                    objectFit='cover'
                                    objectPosition='center'
                                />
                            </div>
                        }

                        <BkBox
                            alignItems='center'
                            display='flex'
                            justifyContent='space-between'
                            pt={ 2 }
                            px={ 2 }
                        >
                            <BkTypography 
                                color={ style === 'black' ? 'white' : 'black' }
                                variant={ size === 'small' ? 'body2' : 'body1' }
                                sx={{
                                    opacity: .6
                                }}
                            >
                                { date }
                            </BkTypography>
                            <BkBox
                                alignItems='center'
                                display='flex'
                                justifyContent='space-between'
                            >
                                <BkTypography 
                                    align='right'
                                    color={ style === 'black' ? 'white' : 'black' }
                                    variant="body1"
                                    sx={{
                                        opacity: .6
                                    }}
                                >
                                    { voteCounter }
                                </BkTypography>
                                <BkIcon color={ style === 'black' ? 'primary' : 'secondary' } iconName="icon-likes" size="small" sx={{
                                    marginLeft: '.25rem',
                                    opacity: .4
                                }}/>
                            </BkBox>
                        </BkBox>

                        <CardContent>
                            <BkTypography 
                                color={ style === 'black' ? 'white' : 'black' }
                                gutterBottom
                                variant={ size === 'small' ? 'subtitleMedium' : 'subtitleLarge' }
                            >
                                { title }
                            </BkTypography>
                        </CardContent>
                    </a>
                </Link>
                :
                <Link
                    href={ linkUrl }
                    passHref={ true }
                >
                    <a style={{ display: 'block', textDecoration: 'none' }}>
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
                                <BkTypography 
                                    color={ style === 'black' ? 'white' : 'black' }
                                    gutterBottom
                                    variant={ size === 'small' ? 'body2' : 'body1' }
                                    sx={{
                                        display: 'inline-block',
                                        marginRight: '.25rem',
                                        opacity: .6
                                    }}
                                >
                                    { categoryLabel }
                                </BkTypography>
                                <BkTypography 
                                    color={ style === 'black' ? 'white' : 'black' }
                                    gutterBottom
                                    variant={ size === 'small' ? 'body2' : 'body1' }
                                    sx={{
                                        display: 'inline-block',
                                        opacity: .6
                                    }}
                                >
                                    { date }
                                </BkTypography>
                                <BkTypography 
                                    color={ style === 'black' ? 'white' : 'black' }
                                    gutterBottom
                                    variant={ size === 'small' ? 'subtitleMedium' : 'subtitleLarge' }
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
                                        height: size === 'small' ? 80 : 100,
                                        marginLeft: '1rem',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        width: size === 'small' ? 80 : 100,
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
                    </a>
                </Link>
            }
        </Card>
    );
};

BkCardInfoPost.defaultProps = {
    categoryLabel: 'Category •',
    orientation: 'vertical',
    imageRatio: 'wide',
    size: 'medium',
    style: 'white',
    voteCounter: 0,
};

BkCardInfoPost.propTypes = {
    categoryLabel: PropTypes.string,
    date: PropTypes.string,
    imageRatio: PropTypes.PropTypes.oneOf(['square', 'third', 'wide']),
    linkUrl: PropTypes.string,
    orientation: PropTypes.PropTypes.oneOf(['horizontal', 'vertical']),
    size: PropTypes.PropTypes.oneOf(['small', 'medium']),
    style: PropTypes.PropTypes.oneOf(['black', 'white']),
    title: PropTypes.string,
    voteCounter: PropTypes.number,
};
 
export default BkCardInfoPost;