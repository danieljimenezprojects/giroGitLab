// NEXT
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types';

// MUI
import MenuItem from '@mui/material/MenuItem';

// BKOOL
import BkIcon from '../../icon/bk-icon';

const BkDropdownItem = (props) => {
    const { children, iconName, linkUrl, target, ...other } = props;

    return (
        linkUrl
        ?
        <Link href={ linkUrl } passHref={ true } >
            <a 
                className='cleanLink'
                target={ target }
            >
                <MenuItem 
                    { ...other }
                    sx={{
                        minHeight: 'auto',
                    }}
                >
                    {
                        iconName
                        &&
                        <BkIcon 
                            iconSize="medium"
                            iconName={ iconName }
                            sx={{
                                marginRight: '.5rem'
                            }}
                        />
                    }
                    { children }
                </MenuItem>
            </a>
        </Link>
        :
        <MenuItem 
            { ...other }
            sx={{
                minHeight: 'auto',
            }}
        >
            {
                iconName
                &&
                <BkIcon 
                    iconSize="medium"
                    iconName={ iconName }
                    sx={{
                        marginRight: '.5rem'
                    }}
                />
            }
            { children }
        </MenuItem>
    );
};

BkDropdownItem.propTypes = {
    children: PropTypes.node,
    iconName: PropTypes.string,
    linkUrl: PropTypes.string,
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
};
 
export default BkDropdownItem;