// REACT
import PropTypes from 'prop-types';
import { Children, useRef } from 'react';

// MUI
import { useTheme } from '@mui/material/styles';

// EXTRA
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import cls from 'classnames';

// BKOOL
import BkBox from '../../layout/box/bk-box';

const BkCarousel = (props) => {
    const { animationDelay, arrowColor, carouselRef, autoplay, centeredSlides, children, loop, navigation, slidesPerView, slidesPerViewSm, slidesPerViewMd, slidesPerViewLg, slidesPerViewXl, showArrows, showPagination, spaceBetween, ...other } = props;

    const theme = useTheme();

    const carouselContent = Children.toArray( children );

    const swiperRef = useRef(null);

    return (
        <BkBox

            sx={{
                paddingBottom: '1rem',
                paddingLeft: '0',
                paddingRight: '0',
                paddingTop: '1rem',
                '.swiper-wrapper': {
                    paddingBottom: '.75rem',
                    paddingTop: '.75rem',
                },
                '.swiper-pagination': {
                    bottom: 0,
                    marginTop: '1.5rem',
                    position: 'relative',
                    '.swiper-pagination-bullet': {
                        backgroundColor: theme.palette.common.white,
                        height: '6px',
                        opacity: .7 ,
                        width: '6px',
                    },
                    '.swiper-pagination-bullet-active': {
                        backgroundColor: theme.palette.accent.main,
                        opacity: 1,
                    },
                },
                '.swiper-button-prev, .swiper-button-next': {
                    border: `2px solid ${ arrowColor === 'accent' ? theme.palette.accent.main : theme.palette.secondary.main }`,
                    borderRadius: '50%',
                    color: arrowColor === 'accent' ? theme.palette.accent.main : theme.palette.secondary.main,
                    content: '"\e90a"',
                    height: '54px',
                    width: '54px',
                    '&.swiper-button-disabled': {
                        borderColor: arrowColor === 'accent' ? theme.palette.common.white : theme.palette.secondary.main,
                        color: arrowColor === 'accent' ? theme.palette.common.white : theme.palette.secondary.main,
                    }
                },
            }}
        >
            <Swiper 
                autoplay={ autoplay && {
                    delay: animationDelay,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: slidesPerViewSm && slidesPerViewSm,
                        spaceBetween: spaceBetween,
                    },
                    900: {
                        slidesPerView: slidesPerViewMd && slidesPerViewMd,
                        spaceBetween: spaceBetween,
                    },
                    1200: {
                        slidesPerView: slidesPerViewLg && slidesPerViewLg,
                        spaceBetween: spaceBetween,
                    },
                    1536: {
                        slidesPerView: slidesPerViewXl && slidesPerViewXl,
                        spaceBetween: spaceBetween,
                    },
                }}
                centeredSlides={ centeredSlides }
                modules={[ Autoplay, Navigation, Pagination ]}
                navigation={ navigation }
                pagination={ showPagination && { clickable: true }}
                spaceBetween={ spaceBetween }
                slidesPerView={ slidesPerView }
                ref={ carouselRef ? carouselRef : swiperRef }
                loop={ loop }
                { ...other }
            >
                {
                    carouselContent.map( (carouselItem, carouselItemIndex) => (
                        <SwiperSlide key={ carouselItemIndex }>
                            { carouselItem }
                        </SwiperSlide>
                    ) )
                }
                {/*
                    showArrows
                    &&
                    <BkBox
                        sx={{
                            justifyContent: 'end',
                            display: 'flex',
                            flexDirection: 'row',
                            padding: '1rem 0',
                        }}
                    >
                        <BkBox sx={{ margin: '0 .5rem' }}>
                            <BkButtonArrow color='white' direction='left' onClick={() => swiperRef.current.swiper.slidePrev()}/>
                        </BkBox>
                        <BkBox sx={{ margin: '0 .5rem' }}>
                            <BkButtonArrow color='white' direction='right' onClick={() => swiperRef.current.swiper.slideNext()}/>
                        </BkBox>
                    </BkBox>*/
                }
            </Swiper>
        </BkBox>
    );
};

BkCarousel.defaultProps = {
    arrowColor: 'accent',
    autoplay: false,
    animationDelay: 5000,
    centeredSlides: false,
    loop: false,
    navigation: true,
    slidesPerView: 1,
    slidesPerViewSm: 1,
    slidesPerViewMd: 1,
    slidesPerViewLg: 1,
    slidesPerViewXl: 1,
    showPagination: false,
    spaceBetween: 0,
};

BkCarousel.propTypes = {
    arrowColor: PropTypes.oneOf(['accent', 'secondary']),
    autoplay: PropTypes.bool,
    animationDelay: PropTypes.number,
    centeredSlides: PropTypes.bool,
    children: PropTypes.array,
    loop: PropTypes.bool,
    navigation: PropTypes.bool,
    slidesPerView: PropTypes.number,
    slidesPerViewSm: PropTypes.number,
    slidesPerViewMd: PropTypes.number,
    slidesPerViewLg: PropTypes.number,
    slidesPerViewXl: PropTypes.number,
    showPagination: PropTypes.bool,
    spaceBetween: PropTypes.number,
};
 
export default BkCarousel;