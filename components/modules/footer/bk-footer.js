// NEXT
import Image from 'next/image';

// REACT
import PropTypes from 'prop-types';

// MUI
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkGrid from '../../layout/grid/bk-grid';
import BkTypography from '../../ui/typography/bk-typography';
import BkButtonIcon from '../../ui/actions/button/bk-button-icon';
import BkBox from '../../layout/box/bk-box';
import BkFooterMenuItem from './bk-footer-menu-item';
import BkFooterMenuList from './bk-footer-menu-list';
import BkContainer from '../../layout/container/bk-container';

const BkFooter = (props) => {
    const { accessibilityLabel, accessibilityLink, data, facebookLink, instagramLink, legalTextLabel, legalTextLink, privacyAndCookiesLabel, privacyAndCookiesLink, stravaLink, twitterLink, youtubeLink } = props;

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <footer id="footer">
            <BkBox py={ 2 } sx={{ backgroundColor: theme.palette.background.default }}>
                <BkContainer disableGutters>
                    <BkBox px={ 3 } py={ 3 } id="footerContent">
                        <BkBox py={ 4 } id="footerLogo">
                            <Image 
                                src={ `/static/img/logo/logo-white.svg` }
                                alt='BKOOL Logo'
                                height={ 44 }
                                width={ 153 }
                            />
                        </BkBox>
                        <BkGrid container spacing={ 2 }>
                            {
                                data.map((list, index) => (
                                    <BkGrid item xs={ 6 } md={ 3 } key={ index }>
                                        <BkFooterMenuList title={ list.section }>
                                            {
                                                list.items.map((item, itemIndex) => (
                                                    <li style={{ marginBottom: '1rem' }} key={ itemIndex }><BkFooterMenuItem linkUrl={ item.link }>{ item.label }</BkFooterMenuItem></li>
                                                ))
                                            }
                                        </BkFooterMenuList>
                                    </BkGrid>
                                ))
                            }
                        </BkGrid>
                    </BkBox>
                    <BkBox px={ 3 } py={{ xs: 2, md: 1}} id="footerLegal" bgcolor={ theme.palette.common.black }>
                        <BkGrid container alignItems="center" justifyContent="center" spacing={ 1 } sx={{ textAlign: 'center' }}>
                            <BkGrid item xs={ 12 } md>
                                <BkTypography variant='caption' color='white'>BKOOL { new Date().getFullYear() }</BkTypography>
                            </BkGrid>
                            {
                                ( matches && (facebookLink || twitterLink || youtubeLink || instagramLink || stravaLink) )
                                &&
                                <BkGrid item xs={ 12 } md>
                                    {
                                        facebookLink
                                        &&
                                        <BkButtonIcon iconName="icon-facebook" linkUrl={ facebookLink } sx={{ color: 'white' }} />
                                    }
                                    {
                                        twitterLink
                                        &&
                                        <BkButtonIcon iconName="icon-twitter" linkUrl={ twitterLink } sx={{ color: 'white' }} />
                                    }
                                    {
                                        youtubeLink
                                        &&
                                        <BkButtonIcon iconName="icon-youtube" linkUrl={ youtubeLink } sx={{ color: 'white' }} />
                                    }
                                    {
                                        instagramLink
                                        &&
                                        <BkButtonIcon iconName="icon-instagram" linkUrl={ instagramLink } sx={{ color: 'white' }} />
                                    }
                                    {
                                        stravaLink
                                        &&
                                        <BkButtonIcon iconName="icon-strava" linkUrl={ stravaLink } sx={{ color: 'white' }} />
                                    }
                                </BkGrid>
                            }
                            {
                                legalTextLink
                                &&
                                <BkGrid item xs={ 12 } md style={{ marginBottom: matches && '1rem' }}>
                                    <BkFooterMenuItem linkUrl={ legalTextLink }>{ legalTextLabel }</BkFooterMenuItem>
                                </BkGrid>
                            }
                            {
                                privacyAndCookiesLink
                                &&
                                <BkGrid item xs={ 12 } md style={{ marginBottom: matches && '1rem' }}>
                                    <BkFooterMenuItem linkUrl={ privacyAndCookiesLink }>{ privacyAndCookiesLabel }</BkFooterMenuItem>
                                </BkGrid>
                            }
                            {
                                accessibilityLink
                                &&
                                <BkGrid item xs={ 12 } md style={{ marginBottom: matches && '1rem' }}>
                                    <BkFooterMenuItem linkUrl={ accessibilityLink }>{accessibilityLabel }</BkFooterMenuItem>
                                </BkGrid>
                            }
                            {
                                !matches && (facebookLink || twitterLink || youtubeLink || instagramLink || stravaLink)
                                &&
                                <BkGrid item xs={ 12 } md>
                                    {
                                        facebookLink
                                        &&
                                        <BkButtonIcon iconName="icon-facebook" linkUrl={ facebookLink } sx={{ color: 'white' }} />
                                    }
                                    {
                                        twitterLink
                                        &&
                                        <BkButtonIcon iconName="icon-twitter" linkUrl={ twitterLink } sx={{ color: 'white' }} />
                                    }
                                    {
                                        youtubeLink
                                        &&
                                        <BkButtonIcon iconName="icon-youtube" linkUrl={ youtubeLink } sx={{ color: 'white' }} />
                                    }
                                    {
                                        instagramLink
                                        &&
                                        <BkButtonIcon iconName="icon-instagram" linkUrl={ instagramLink } sx={{ color: 'white' }} />
                                    }
                                    {
                                        stravaLink
                                        &&
                                        <BkButtonIcon iconName="icon-strava" linkUrl={ stravaLink } sx={{ color: 'white' }} />
                                    }
                                </BkGrid>
                            }
                        </BkGrid>
                    </BkBox>
                </BkContainer>
            </BkBox>
        </footer>
    );
};

BkFooter.propTypes = {
    data: PropTypes.array,
    facebookLink: PropTypes.string,
    legalTextLink: PropTypes.string,
    legalTextLabel: PropTypes.string,
    twitterLink: PropTypes.string,
    youtubeLink: PropTypes.string,
    instagramLink: PropTypes.string,
    stravaLink: PropTypes.string,
};

export default BkFooter;