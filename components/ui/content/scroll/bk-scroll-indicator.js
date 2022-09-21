// MUI
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkBox from "../../../layout/box/bk-box";

const BkScrollIndicator = (props) => {
    const { ...other } = props;

    const theme = useTheme();

    return (
        <BkBox
            { ...other }
        >
            <BkBox
                sx={{
                    backgroundColor: 'white',
                    height: '72px',
                    margin: '0 auto',
                    width: '1px',
                }}
            >
                <BkBox 
                    sx={{
                        backgroundColor: theme.palette.accent.main,
                        height: '48px',
                        width: '1px'
                    }}
                ></BkBox>
            </BkBox>
        </BkBox>
    );
};
 
export default BkScrollIndicator;