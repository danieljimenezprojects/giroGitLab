// REACT
import PropTypes from 'prop-types';

// MUI
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkSection from "../../layout/section/bk-section";
import BkFormTextFieldNewsletter from "../../ui/form/textfield/bk-textfield-newsletter";
import BkTypography from "../../ui/typography/bk-typography";
import BkBox from '../../layout/box/bk-box';

const BkNewsletter = (props) => {
    const { children, error, errorMessage, handleAction, placeholder, subtitle, title, value, ...other } = props;

    const theme = useTheme();

    return (
        <BkSection
            backgroundColor={ theme.palette.common.black }
            paddingX="small"
            paddingY="large"
            { ...other }
        >
            <BkTypography
                align="center"
                color="white"
                gutterBottom
                variant="h4"
            >
                { title }
            </BkTypography>
            <BkTypography
                align="center"
                color="white"
                variant="body1"
            >
                { subtitle }
            </BkTypography>
            <BkBox 
                sx={{ 
                    margin: '0 auto',
                    marginBottom: children && '1.5rem',
                    maxWidth: '350px',
                    padding: '1.5rem 0 0',
                    textAlign: 'center',
                }}
            >
                <BkFormTextFieldNewsletter color={ error && 'error' } buttonAction={ handleAction } placeholder={ placeholder } helperText={ error && errorMessage } value={ value } />
            </BkBox>
            { children }
        </BkSection>
    );
};

BkNewsletter.propTypes = {
    children: PropTypes.node,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
};
 
export default BkNewsletter;