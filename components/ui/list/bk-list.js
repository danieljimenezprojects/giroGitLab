// REACT
import PropTypes from 'prop-types';

// BKOOL
import BkBox from '../../layout/box/bk-box';

const BkList = (props) => {
    const { children, paddingLeft } = props;

    return (
        <BkBox
            component='ul'
            sx={{
                listStyleType: 'none',
                margin: 0,
                pl: paddingLeft,
            }}
        >
            { children }
        </BkBox>
    );
};

BkList.defaultProps = {
    display: 'block',
    paddingLeft: 0,
};

BkList.propTypes = {
    children: PropTypes.node,
    paddingLeft: PropTypes.number,
};
 
export default BkList;