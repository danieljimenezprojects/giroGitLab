// REACT
import PropTypes from 'prop-types';

// BKOOL
import BkBox from "../../layout/box/bk-box";
const BkMainNavigation = (props) => {
    const { children } = props;

    return (
        <BkBox
            component="nav"
            sx={{
                alignItems: 'center',
                display: { xs: 'none', sm: 'flex' },
                flexGrow: 1,
                justifyContent: 'space-around'
            }}
        >
            { children }
        </BkBox>
    );
};

BkMainNavigation.propTypes = {
    children: PropTypes.node,
};
 
export default BkMainNavigation;