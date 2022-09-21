// NEXT
import Image from 'next/image';

// REACT
import PropTypes from 'prop-types';

// MUI
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// BKOLL
import BkSection from '../../layout/section/bk-section';
import BkBox from '../../layout/box/bk-box';

const BkHeader = (props) => {
    const { children, backgroundImage, textAlign, wave, ...other } = props;

    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <BkSection 
            backgroundImage={ backgroundImage }
            paddingX={ matches ? 'small' : 'medium' }
            paddingY={ matches ? 'large' : 'extraLarge' }
            backgroundOverlay={ backgroundImage && true }
            { ...other }
        >
            <BkBox 
                sx={{ 
                    position: 'relative',
                    textAlign: textAlign,
                    zIndex: 1,
                }} 
            >
                { children }
            </BkBox>
            {
                wave
                &&
                <BkBox
                    sx={{
                        marginBottom: matches ? '-4rem' : '-8rem',
                        marginLeft: matches ? '-1rem' : '-2rem',
                        marginRight: matches ? '-1rem' : '-2rem',
                        paddingTop: wave ? ( matches ? '4rem' : '6rem' ) : 0
                    }}
                >
                    <Image 
                        layout="responsive"
                        src={ `/static/img/header/wave-${wave}.svg` }
                        height={ 225 }
                        width={ 1440 }
                    />
                </BkBox>
            }
        </BkSection>
    );
};

BkHeader.defaultProps = {
    textAlign: 'left',
};

BkHeader.propTypes = {
    children: PropTypes.node,
    backgroundImage: PropTypes.string,
    textAlign: PropTypes.oneOf(["left", "right", "center"]),
    wave: PropTypes.oneOf(["white", "black"]),
};
 
export default BkHeader;