// NEXT
import Link from 'next/link';
import Image from 'next/image';

// REACT
import PropTypes from 'prop-types';

// EXTRA
import cls from 'classnames';

// BKOOL
import styles from './bk-button-social.module.css';
import BkTypography from '../../typography/bk-typography';

const BkButtonSocial = (props) => {
    const { children, linkUrl, variant } = props;
    
    return (
        <Link
            href={ linkUrl }
            variant= { variant }
        >
            <a 
                className={ cls( styles.buttonSocial, styles[variant] ) }
            >
                <span className={ styles.image }>
                    <Image 
                        src={ `/static/icons/${variant}_icon.svg` }
                        alt={ variant }
                        height="24"
                        width="24"
                    />
                </span>
                <BkTypography variant='button'>{ children || variant }</BkTypography>
            </a>
        </Link>
    );
};

BkButtonSocial.propTypes = {
    children: PropTypes.node,
    linkUrl: PropTypes.string,
    variant: PropTypes.oneOf(["facebook", "google", "mail"])
};

BkButtonSocial.defaultProps = {
    variant: "black",
};
 
export default BkButtonSocial;