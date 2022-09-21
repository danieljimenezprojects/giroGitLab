// NEXT
import Link from "next/link";

// REACT
import PropTypes from 'prop-types';

const BkMainMegaMenuItem = (props) => {
    const { children, linkUrl, target } = props;

    return (
        <Link
            href={ linkUrl }
        >
            <a
                className='mega-menu-link'
                target={ target }
            >
                { children }
            </a>
        </Link>
    );
};

BkMainMegaMenuItem.propTypes = {
    children: PropTypes.node,
    linkUrl: PropTypes.string,
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
};
 
export default BkMainMegaMenuItem;