// REACT
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// MUI
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkDropdownItem from "../../ui/form/dropdown/bk-dropdown-item";
import BkDropdownMenu from '../../ui/form/dropdown/bk-dropdown-menu';
import BkIcon from '../../ui/icon/bk-icon';
import BkBox from '../../layout/box/bk-box';

const BkMainLanguage = (props) => {
    const { languages, onChangeMenu } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState(languages.find(item => item.selected === true && item.language).language);

	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

    const handleMenuItemClick = ( event, index ) => {
        setSelectedIndex(index);
        setSelectedLanguage(event.target.innerText);
        setAnchorEl(null);
        if (onChangeMenu) {
            onChangeMenu(index);
        }
    };

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <BkBox
            sx={{
                marginLeft: '.5rem',
                marginRight: '.5rem',
                minWidth: 42
            }}
        >
            <Button 
                endIcon={ open ? <BkIcon iconName='icon-expand-less' /> : <BkIcon iconName='icon-expand-more' /> }
                onClick={ handleClick }
                size='small'
                sx={{
                    color: 'white',
                    minWidth: 'unset',
                    paddingLeft: 0,
                    paddingRight: 0,
                }}
            >
                { selectedLanguage }
            </Button>
            <BkDropdownMenu 
                anchorOrigin={{
                    vertical: matches ? 'top' : 'bottom',
                    horizontal: matches ? 'right' : 'right',
                }}
                onClose={ handleClose } 
                anchorEl={ anchorEl } 
                open={ open }
                transformOrigin={{
                    vertical: matches ? 'bottom' : 'top',
                    horizontal: matches ? 'right' : 'right',
                }}
            >
                {
                    languages.map( (item, index) => (
                        <BkDropdownItem 
                            dense 
                            key={ index }
                            selected={ index === selectedIndex }
                            onClick={(event) => handleMenuItemClick( event, index )}
                        >
                            { item.language }
                        </BkDropdownItem>
                    ) )
                }
            </BkDropdownMenu>
        </BkBox>
    );
};

BkMainLanguage.propTypes = {
    language: PropTypes.array,
    onChangeMenu: PropTypes.func,
};
 
export default BkMainLanguage;