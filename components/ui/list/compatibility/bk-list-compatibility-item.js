// REACT
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';

// MUI
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkBox from "../../../layout/box/bk-box";
import BkTypography from '../../typography/bk-typography';
import BkIcon from '../../icon/bk-icon';
import BkModalBasic from '../../content/modal/bk-modal-basic';
import { pSBC } from '../../../../src/utils/Luminosity';

const BkListCompatibilityItem = (props) => {
    const { antPlus, bluetooth, certified, message, listText } = props;

    const [openModal, setOpenModal] = useState(false);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpenModal(true);
    };
    const handleClose = (value) => {
        setOpenModal(false);
    };

    return (
        <Fragment>
            <BkBox 
                component='li'
                sx={{ 
                    alignItems:'center',
                    borderRadius: "8px",
                    backgroundColor: pSBC(.045, theme.palette.secondary.main),
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginBottom: '.5rem',
                    px: 2,
                    py: !matches ? 3 : 2,
                    transition: 'all .25s',
                    '&:hover': {
                        boxShadow: '0px 24px 24px -16px rgba(29, 29, 29, 0.65)',
                        transform: 'scale(1.015)',
                    }
                }}
            >
                <BkBox >
                    <BkTypography variant={ !matches ? 'subtitleMedium' : 'subtitleSmall' } color="white" >{ listText }</BkTypography>
                </BkBox>
                <BkBox 
                    sx={{ 
                        alignItems:'center',
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between',
                    }}
                >
                    <BkBox 
                        sx={{ 
                            opacity: antPlus ? 1 : .25,
                            px: !matches ? 3 : 2,
                        }}
                    >
                        <BkIcon iconName='icon-antplus' color='primary'/>
                    </BkBox>
                    <BkBox 
                        sx={{ 
                            opacity: bluetooth ? 1 : .25,
                            px: !matches ? 3 : 2,
                        }}
                    >
                        <BkIcon iconName='icon-bluetooth' color='primary'/>
                    </BkBox>
                    <BkBox
                        onClick={ message ? handleClickOpen : undefined }
                        sx={{ 
                            opacity: message ? 1 : .25,
                            px: !matches ? 3 : 2,
                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <BkIcon iconName='icon-message' sx={{ color: theme.palette.accent.main, }}/>
                    </BkBox>
                    <BkBox 
                        sx={{ 
                            px: !matches ? 2 : 1,
                        }}
                    >
                        <BkIcon iconName={ certified ? 'icon-checked' : 'icon-close' } color={ certified ? 'success' : 'error'}/>
                    </BkBox>
                </BkBox>
            </BkBox>

            <BkModalBasic open={ openModal } onClose={ handleClose } modalTitle='Comentarios' modalDescription={ message } actionLabel="Cerrar" handleAction={ handleClose } />
        </Fragment>
    );
};

BkListCompatibilityItem.propTypes = {
    antPlus: PropTypes.bool,
    bluetooth: PropTypes.bool,
    certified: PropTypes.bool,
    listText: PropTypes.string,
    message: PropTypes.string,
};
 
export default BkListCompatibilityItem;