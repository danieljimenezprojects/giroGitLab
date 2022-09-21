// MUI
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// BKOOL
import BkBox from "./box/bk-box";
import useMediaQuery from '@mui/material/useMediaQuery';
import { themeGiro } from '../../src/theme/theme';


const BkGiroLayout = (props) => {
    const { children } = props;

    const matches = useMediaQuery(themeGiro.breakpoints.down('sm'));
    // Context state


    return (
        <ThemeProvider theme={themeGiro}>
            <CssBaseline />
            <BkBox
                component="main"
            >
                    {children}
            </BkBox>
        </ThemeProvider>
    );
}
 
export default BkGiroLayout;