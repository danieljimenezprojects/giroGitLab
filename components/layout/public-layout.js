// MUI
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// BKOOL
import BkBox from "./box/bk-box";
import BkContainer from '../layout/container/bk-container';
import BkMainMenu from "../modules/topbar/bk-main-menu";
import BkFooter from "../modules/footer/bk-footer";
import { footer } from "../../public/static/consts/consts";
import theme from '../../src/theme/theme';
import { themeGiro } from '../../src/theme/theme';

// CONTEXT
import BkAppContext from '../../src/context/store';

// CONSTS TEST
import { menuItems, languages } from "../../public/static/consts/consts";
import { Fragment, useContext } from "react";

const BkPublicLayout = (props) => {
    const { children } = props;

    // Context state
    const { themeAdded } = useContext(BkAppContext);

    return (
        <ThemeProvider theme={themeAdded}>
            <CssBaseline />
            <BkMainMenu backMenuLabel="Volver" menuData={ menuItems } languages={ languages } handleLanguageChange={() => console.log('oscar')} loginkUrl="https://www.google.es/" profileUrl="https://www.google.es/" registerUrl="https://www.google.es/" registerLabel='Registrarme' />
            <BkBox
                component="main"
            >
                <BkContainer disableGutters >
                    {children}
                </BkContainer>
            </BkBox>
            <BkFooter
                data={ footer }
                accessibilityLink="https://www.google.es/"
                accessibilityLabel="Accesibilidad"
                legalTextLink="https://www.google.es/"
                legalTextLabel="Aviso legal"
                privacyAndCookiesLink="https://www.google.es/"
                privacyAndCookiesLabel="Privacidad y Cookies"
                facebookLink="https://www.google.es/"
                twitterLink="https://www.google.es/"
                youtubeLink="https://www.google.es/"
                instagramLink="https://www.google.es/"
                stravaLink="https://www.google.es/"
            />
        </ThemeProvider>
    );
}
 
export default BkPublicLayout;