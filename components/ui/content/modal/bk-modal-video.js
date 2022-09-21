// REACT
import PropTypes from 'prop-types';

// MUI
import Dialog from '@mui/material/Dialog';

// BKOOL
import BkButtonIcon from '../../actions/button/bk-button-icon';
import BkBox from '../../../layout/box/bk-box';

const BkModalVideo = (props) => {
    const { children, closeModal, ...other } = props;

    return (
        <Dialog
            fullWidth
            maxWidth="xl"
            sx={{
                backgroundColor: 'transparent',
                '.MuiPaper-root': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    overflow: 'visible'
                }
            }}
            { ...other }
        >
            <BkButtonIcon
                aria-label="close"
                iconName="icon-close-circle"
                onClick={ closeModal }
                sx={{
                    color: 'white',
                    position: 'absolute',
                    right: '-30px',
                    top: '-30px',
                }}
            />
            <BkBox
                sx={{
                    backgroundColor: 'transparent',
                    padding: '2rem',
                    height: 0,
                    overflow: 'hidden',
                    paddingBottom: '56.25%',
                    position: 'relative',
                    width: '100%',
                    'iframe': {
                        borderRadius: '4px',
                        height: '100%',
                        left: 0,
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                    }
                }}
            >
                { children }
            </BkBox>
        </Dialog>
    );
};

BkModalVideo.propTypes = {
    children: PropTypes.node,
    closeModal: PropTypes.func,
};
 
export default BkModalVideo;