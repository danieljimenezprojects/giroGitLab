// REACT
import PropTypes from 'prop-types';

// BKOOL
import BkBox from "../../../layout/box/bk-box";
import BkIcon from "../../icon/bk-icon";
import BkTypography from "../../typography/bk-typography";

const BkListCheckItem = (props) => {
    const { color, itemLabel } = props;

    return (
        <BkBox 
            alignItems='center'
            component='li'
            display= 'flex'
            py={1}
        >
            <BkTypography 
                color={ color }
                variant='body2'
                sx={{
                    marginRight: '.5rem',
                }}
            >
                <BkIcon 
                    iconName="icon-checked" 
                    color='success'
                />
            </BkTypography>
            <BkTypography 
                color={ color }
                variant='body2'
            >
                { itemLabel }
            </BkTypography>
        </BkBox>
    );
};

BkListCheckItem.propTypes = {
    color: PropTypes.oneOf(["white", "black"]),
    itemLabel: PropTypes.string,
};
 
export default BkListCheckItem;