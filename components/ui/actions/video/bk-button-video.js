// NEXT
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types';

// MUI
import { ButtonBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// EXTRA
import cls from 'classnames';

// BKOOL
import styles from './bk-button-video.module.css';
import BkTypography from '../../typography/bk-typography';
import BkBox from '../../../layout/box/bk-box';

const ButtonVideo = (props) => {
    const { color, hoverLabel, label, linkUrl, size, onClick, target, ...other } = props;

    const theme = useTheme();

    return (
        <ButtonBase
            className={ cls( styles.buttonVideo, styles[color], !label && styles.buttonAnimated ) }
            target={ target }
            onClick={ onClick }
            disableRipple
            { ...other }
            sx={{
                '&:before': {
                    backgroundColor: theme.palette.accent.main,
                    opacity: .75
                }
            }}
        >
            <BkBox className={ cls( styles.videoIcon, styles[size] ) } sx={{ backgroundColor: theme.palette.accent.main }}>
                <img src='/static/icons/play.svg' width={size === 'medium' ? '13' : '9'} height={size === 'medium' ? '20' : '14'} />
                {
                    !label && <span className={ styles.watchVideo }><BkTypography variant='subtitleSmall'>{ hoverLabel }</BkTypography></span>
                }
            </BkBox>
            { 
                label 
                && 
                <span className={ styles.videoLabel }><BkTypography variant='subtitleSmall'>{ label }</BkTypography></span>
            }
        </ButtonBase>
    );
}

const BkButtonVideo = (props) => {
    const { color, hoverLabel, label, linkUrl, size, onClick, target } = props;

    const theme = useTheme();

    return (
        linkUrl
        ?
        <Link 
            href={ linkUrl } 
            passHref={ true } 
        >
            <a style={{ textDecoration: 'none' }} target={ target }>
                <ButtonVideo
                    color={ color }
                    hoverLabel={ hoverLabel }
                    label={ label }
                    linkUrl={ linkUrl }
                    size={ size }
                    target={ target }
                />
            </a>
        </Link>
        :
        <ButtonVideo
            color={ color }
            hoverLabel={ hoverLabel }
            label={ label }
            size={ size }
            onClick={ onClick }
        />
    );
}

BkButtonVideo.propTypes = {
    children: PropTypes.node,
    hoverLabel: PropTypes.string,
    label: PropTypes.string,
    linkUrl: PropTypes.string,
    size: PropTypes.oneOf([ "medium", "small"]),
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    color: PropTypes.oneOf(["black", "white"]),
    onClick: PropTypes.func,
};

BkButtonVideo.defaultProps = {
    color: "black",
    hoverLabel: "VER VÍDEO",
    size: "medium",
};
 
export default BkButtonVideo;