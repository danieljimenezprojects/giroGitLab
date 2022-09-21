// NEXT
import Link from "next/link";

// REACT
import PropTypes from 'prop-types';

// MUI
import BkList from "../../ui/list/bk-list";

const BkMainMegaMenuList = (props) => {
    const { children, title } = props;

    return (
        <BkList>
            { children }
        </BkList>
    );
};

BkMainMegaMenuList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
};
 
export default BkMainMegaMenuList;