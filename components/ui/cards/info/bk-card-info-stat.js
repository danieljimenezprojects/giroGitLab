// REACT
import PropTypes from 'prop-types'

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkIcon from '../../icon/bk-icon';
import BkTypography from '../../typography/bk-typography';

const BkCardInfoStat = (props) => {
    const { iconName, title, subtitle, unit } = props;

    const theme = useTheme();

    return (
        <Card
            sx={{
                boxShadow: 'none',
                backgroundColor: theme.palette.background.default,
            }}
        >
            <CardContent
                sx={{
                    '&.MuiCardContent-root': {
                        marginBottom: '3rem',
                        marginTop: '3rem',
                        textAlign: 'center'
                    }
                }}
            >
                <BkTypography gutterBottom textAlign="center" color="accent" >
                    <BkIcon iconName={ iconName } iconSize="extraLarge" />
                </BkTypography>
                <BkTypography 
                    variant="titleExtraLarge" 
                    gutterBottom 
                    textAlign="center" 
                    color="white"
                >
                    { title }
                </BkTypography>
                <BkTypography 
                    textAlign="center" 
                    color="white"
                    component="span"
                    sx={{
                        fontSize: '2.25rem',
                        display: 'inline-block',
                        marginTop: '1rem'
                    }}
                >
                    { subtitle }
                </BkTypography>
                {
                    unit
                    &&
                    <BkTypography 
                        textAlign="center" 
                        color="white"
                        component="span"
                        sx={{
                            fontSize: '2.25rem',
                            display: 'inline-block'
                        }}
                    >
                        { unit }
                    </BkTypography>
                }
            </CardContent>
        </Card>
    );
};

BkCardInfoStat.defaultProps = {
    iconName: 'icon-add-circle',
};

BkCardInfoStat.propTypes = {
    iconName: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    unit: PropTypes.string,
};
 
export default BkCardInfoStat;