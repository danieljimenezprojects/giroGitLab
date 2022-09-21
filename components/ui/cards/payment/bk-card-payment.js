// NEXT
import Image from 'next/image';

// REACT
import PropTypes from 'prop-types';
import { Fragment } from 'react';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkTypography from '../../typography/bk-typography';
import BkBox from '../../../layout/box/bk-box';
import BkButtonIcon from '../../actions/button/bk-button-icon';
import { pSBC } from '../../../../src/utils/Luminosity';

const BkCardPayment = (props) => {
    const {  cardNumber, cardType, cardOwner, error, errorText, handleDeletePayment, payPalMail, payPalMethod } = props;

    const theme = useTheme();

    return (
        <Fragment>
            <Card
                sx={{
                    backgroundColor: pSBC(.045, theme.palette.secondary.main),
                    border: error ? `2px solid ${theme.palette.error.main}` : `2px solid ${pSBC(.15, theme.palette.secondary.main)}`,
                    boxShadow: 'none',
                    overflow: 'inherit',
                    position: 'relative',
                    transition: 'all .25s',
                    '&:hover': {
                        backgroundColor: pSBC(.09, theme.palette.secondary.main),
                        border: error ? `2px solid ${theme.palette.error.main}` : `2px solid ${pSBC(.545, theme.palette.secondary.main)}`,
                    }
                }}
            >
                <CardContent >
                    <BkBox
                        alignItems='center'
                        display='flex'
                    >
                        <BkBox
                            sx={{
                                display: 'flex',
                                height: '32px',
                                marginRight: '1rem',
                                position: 'relative',
                            }}
                        >
                            <Image 
                                src={ payPalMail ? '/static/img/cards/paypal.png' : `/static/img/cards/${cardType}.png` }
                                alt={ cardType }
                                width={ 32 }
                                height={ 32 }
                                objectPosition='center'
                                priority
                            />
                        </BkBox>
                        <BkBox>
                            <BkTypography 
                                variant='body1' 
                                color="white"
                            >
                                { payPalMail ? payPalMail : `${ cardType.charAt(0).toUpperCase() + cardType.slice(1) } ***** ${cardNumber}` }
                            </BkTypography>
                            <BkTypography 
                                variant='body2' 
                                color="white"
                                sx={{
                                    opacity: '.75'
                                }}
                            >
                                { cardOwner || payPalMethod }
                            </BkTypography>
                        </BkBox>
                        <BkButtonIcon
                            iconName='icon-delete'
                            color="error"
                            onClick={ handleDeletePayment }
                            sx={{ 
                                color: 'white',
                                height: 36,
                                marginLeft: 'auto',
                                width: 36,
                                'span': {
                                    fontSize: '1.25rem'
                                },
                                '&:hover': {
                                    backgroundColor: theme.palette.error.main,
                                    color: 'white',
                                }
                            }}
                        />
                    </BkBox>
                </CardContent>
            </Card>
            {
                error
                &&
                <BkTypography
                    variant='body2'
                    sx={{
                        color: theme.palette.error.main,
                        marginTop: '.5rem'
                    }}
                >
                    { errorText }
                </BkTypography>
            }
        </Fragment>
    );
};

BkCardPayment.defaultProps = {
    cardType: 'undefined',
    error: false,
    errorText: 'Error',
    removeButtonLabel: 'Delete'
};

BkCardPayment.propTypes = {
    cardNumber: PropTypes.string,
    cardType: PropTypes.string,
    cardOwner: PropTypes.string,
    error: PropTypes.bool,
    errorText: PropTypes.string,
    handleDeletePayment: PropTypes.func,
    payPalMail: PropTypes.string,
    payPalMethod: PropTypes.string,
};

export default BkCardPayment;