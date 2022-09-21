// REACT
import PropTypes from 'prop-types';

// MUI
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// BKOOL
import BkButtonIcon from '../../actions/button/bk-button-icon';
import BkTypography from '../../typography/bk-typography';
import BkButton from '../../actions/button/bk-button';

const BkModalBasic = (props) => {
    const { actionLabel, actionLink, actionTarget, children, handleAction, modalDescription, modalTitle, closeModal, ...other } = props;

    return (
        <Dialog
            { ...other }
        >
            <DialogTitle 
                sx={{
                    textAlign: 'center'
                }}
            >
                { modalTitle }
                {
                    closeModal
                    &&
                    <BkButtonIcon
                        aria-label="close"
                        iconName="icon-close-circle"
                        onClick={ closeModal }
                        sx={{
                            position: 'absolute',
                            right: '.25rem',
                            top: '.25rem',
                        }}
                    />
                }
            </DialogTitle>
            <DialogContent >
                {
                    modalDescription
                    &&
                    <BkTypography variant="body3" align="center" gutterBottom={ children && true } >{ modalDescription }</BkTypography>
                }
                { children && children }
            </DialogContent>
            <DialogActions>
                <BkButton variant="contained" color="accent" size="small" linkUrl={ actionLink } target={ actionTarget } onClick={ handleAction } >{ actionLabel }</BkButton>
            </DialogActions>
        </Dialog>
    );
};

BkModalBasic.propTypes = {
    actionLabel: PropTypes.string,
    actionLink: PropTypes.string,
    actionTarget: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    children: PropTypes.node,
    handleAction: PropTypes.func,
    modalDescription: PropTypes.string,
    modalTitle: PropTypes.string,
    closeModal: PropTypes.func,
};
 
export default BkModalBasic;