// NEXT
import Link from "next/link";

// REACT
import PropTypes from 'prop-types';

// MUI
import BkList from "../../ui/list/bk-list";

// BKOOL
import BkTypography from "../../ui/typography/bk-typography";

const BkFooterMenuList = (props) => {
    const { children, title } = props;

    return (
        <BkList>
            <li><BkTypography variant="titleMedium" gutterBottom color="white" sx={{ marginBottom: '1rem', marginLeft: '.75rem' }}>{ title }</BkTypography></li>
            { children }
        </BkList>
    );
};

BkFooterMenuList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
};
 
export default BkFooterMenuList;