// REACT
import PropTypes from 'prop-types';

// MUI

// BKOOL
import BkBox from '../../../layout/box/bk-box';

const BkTabContent = (props) => {
    const { children, index, value, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <BkBox 
                    sx={{ p: 3 }}
                >
                    { children }
                </BkBox>
            )}
        </div>
    );
};

BkTabContent.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
 
export default BkTabContent;