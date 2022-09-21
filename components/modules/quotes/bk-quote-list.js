// REACT
import PropTypes from 'prop-types';
import { Children } from 'react';

// MUI
import { useTheme } from '@mui/material/styles';

// EXTRA
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// BKOOL
import BkQuoteItem from './bk-quote-item';
import BkBox from '../../layout/box/bk-box';

const BkQuoteList = (props) => {
    const { children, animationDelay } = props;

    const theme = useTheme();

    const quotesContent = Children.toArray( children );

    return (
        <BkBox
            sx={{
                paddingBottom: '1rem',
                paddingLeft: '0',
                paddingRight: '0',
                paddingTop: '1rem',
                '.swiper-pagination': {
                    bottom: 0,
                    marginTop: '.5rem',
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
                }
            }}
        >
            <Swiper 
                autoplay={{
                    delay: animationDelay,
                    disableOnInteraction: false,
                }}
                className=''
                modules={[ Autoplay, Navigation, Pagination ]}
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
            >
                {
                    quotesContent.map( (quote, index) => (
                        <SwiperSlide key={ index }>
                            <BkQuoteItem quote={ quote.props.quote } quotePerson={ quote.props.quotePerson } quotePersonSubtitle={ quote.props.quotePersonSubtitle } quotePersonImage={ quote.props.quotePersonImage } />
                        </SwiperSlide>
                    ) )
                }
            </Swiper>
        </BkBox>
    );
};

BkQuoteList.defaultProps = {
    animationDelay: 5000,
};

BkQuoteList.propTypes = {
    animationDelay: PropTypes.number,
    children: PropTypes.array,
};
 
export default BkQuoteList;