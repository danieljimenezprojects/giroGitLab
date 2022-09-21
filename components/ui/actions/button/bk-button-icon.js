// NEXT
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types';

// MUI
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

// BKOOL
import BkIcon from '../../icon/bk-icon';
import BkBox from '../../../layout/box/bk-box';

const BkButtonIcon = (props) => {
    const { iconName, linkUrl, target, ...other } = props;

    return (
        linkUrl
        ?
        <Link href={ linkUrl } passHref={ true } >
            <IconButton
                { ...other }
            >
                <BkIcon iconName={ iconName } />
            </IconButton>
        </Link>
        :
        <IconButton
            { ...other }
        >
            <BkIcon iconName={ iconName } />
        </IconButton>
    );
};

BkButtonIcon.propTypes = {
    linkUrl: PropTypes.string,
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
	iconName: PropTypes.string
};
 
export default BkButtonIcon;