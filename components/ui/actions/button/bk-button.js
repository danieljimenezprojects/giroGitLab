// NEXT
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types';

// MUI
import Button from '@mui/material/Button';

// BKOOL
import BkIcon from '../../icon/bk-icon';

const BkButton = (props) => {
    const { children,iconNameStart, iconNameEnd, isLink, linkUrl, size, target,color,variant, ...other } = props;

    return (
        linkUrl
        ?
        <Link href={ linkUrl } passHref={ true } >
            <Button
                startIcon={ iconNameStart && <BkIcon iconName={ iconNameStart } /> }
                endIcon={ iconNameEnd && <BkIcon iconName={ iconNameEnd } /> }
                component='a'
                size={ size }
                target={ target }
                variant={variant}
                color={color}
                { ...other }

            >
                { children }
            </Button>
        </Link>
        :
        <Button
            startIcon={ iconNameStart && <BkIcon iconName={ iconNameStart } /> }
            endIcon={ iconNameEnd && <BkIcon iconName={ iconNameEnd } /> }
            size={ size }
            variant={variant}
            color={color}
            { ...other }
        >
            { children }
        </Button>
    );
};

BkButton.propTypes = {
    children: PropTypes.node,
	iconNameStart: PropTypes.string,
	iconNameEnd: PropTypes.string,
    linkUrl: PropTypes.string,
    color:PropTypes.oneOf(["accent","bkool","giroItalia","primary","secondary","error"]),
    size: PropTypes.oneOf(["small", "medium","large"]),
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
};
 
export default BkButton;