// REACT
import PropTypes from 'prop-types';
import { Children, useState } from 'react';

// BKOOL
import BkDropdownItem from './bk-dropdown-item';
import BkDropdownMenu from './bk-dropdown-menu';
import BkBox from '../../../layout/box/bk-box';

const BkDropdown = (props) => {
    const { anchorOrigin, children, transformOrigin, trigger } = props;

    const menuContent = Children.toArray(children);

    const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

    const isDisabled = trigger.props.hasOwnProperty('disabled');

    return (
        <BkBox 
            sx={{
                display: 'inline-flex'
            }}
        >
            <div onClick={ !isDisabled ? handleClick : undefined } >
                { 
                    trigger
                }
            </div>
            <BkDropdownMenu onClose={ handleClose } anchorEl={ anchorEl } open={ open }
                anchorOrigin={ anchorOrigin }
                transformOrigin={ transformOrigin }
            >
                {
                    menuContent.map( (item, index) => (
                        <BkDropdownItem key={ index } linkUrl={ item.props.linkUrl } target={ item.props.target } iconName={ item.props.iconName } onClick={ () => {
                            item.props.onClick && item.props.onClick()
                            handleClose()
                        } } >{ item.props.children }</BkDropdownItem>
                    ) )
                }
            </BkDropdownMenu>
        </BkBox>
    );
};

BkDropdown.defaultProps = {
    anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
    },
    transformOrigin: {
        horizontal: 'left',
        vertical: 'top',
    },
};

BkDropdown.propTypes = {
    anchorOrigin: PropTypes.object,
    children: PropTypes.node,
    transformOrigin: PropTypes.object,
    trigger: PropTypes.node,
};
 
export default BkDropdown;