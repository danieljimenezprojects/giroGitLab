// REACT
import PropTypes from 'prop-types';

// MUI
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkBox from "../../layout/box/bk-box";
import BkIcon from "../icon/bk-icon";
import BkTypography from "./bk-typography";

const BkPseudoLink = (props) => {
    const { color, endIconName, label, startIconName } = props;

    const theme = useTheme();

    return (
        <BkBox
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {
                startIconName
                &&
                <BkIcon iconName={ startIconName } color={ color !== 'accent' ? color : undefined } sx={{ color: color === 'accent' ? theme.palette.accent.main : 'unset' }} />
            }
            <BkTypography
                color={ color }
                variant="button"
                sx={{
                    marginLeft: startIconName ? '.5rem' : 0,
                    marginRight: endIconName ? '.5rem' : 0,
                }}
            >
                { label }
            </BkTypography>
            {
                endIconName
                &&
                <BkIcon iconName={ endIconName } color={ color !== 'accent' ? color : undefined } sx={{ color: color === 'accent' ? theme.palette.accent.main : 'unset' }} />
            }
        </BkBox>
    );
};

BkPseudoLink.defaultProps = {
    color: 'primary',
};

BkPseudoLink.propTypes = {
    color: PropTypes.oneOf(['accent', 'primary', 'secondary', 'error', 'info', 'success', 'warning']),
    endIconName: PropTypes.string,
    label: PropTypes.string,
    startIconName: PropTypes.string,
};
 
export default BkPseudoLink;