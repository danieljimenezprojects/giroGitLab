// REACT
import { Children } from 'react';
import PropTypes from 'prop-types';

// MUI
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// BKOOL
import BkIcon from '../icon/bk-icon';
import BkTypography from '../typography/bk-typography';

const BkAccordion = (props) => {
    const { children, color, detailPaddingX, detailPaddingY, defaultExpanded, label, ...other } = props;

    // const accordionContent = Children.only(children);
    const id = label.split(' ').join('-');

    return (
        <Accordion
            disableGutters
            elevation={0}
            defaultExpanded={ defaultExpanded }
            square
            {...other}
            sx={{
                '&.MuiAccordion-root': {
                    backgroundColor: 'transparent',
                    borderBottom: `1px solid ${color === 'black' ? 'black' : 'rgba(255, 255, 255, .25)'}`,
                }
            }}
        >
            <AccordionSummary
                expandIcon={ <BkIcon iconName='icon-expand-more' /> }
                aria-controls={ id }
                id={ id }
                sx={{
                    '&.MuiAccordionSummary-root': {
                        color: color,
                        paddingLeft: '0',
                        paddingRight: '0',
                        '.MuiAccordionSummary-expandIconWrapper': {
                            color: color,
                        }
                    },
                    '&.Mui-expanded': {
                        '.MuiAccordionSummary-expandIconWrapper': {
                            transform: 'rotate(-180deg)'
                        }
                    }
                }}
            >
                <BkTypography variant='subtitleMedium' >{label}</BkTypography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    '&.MuiAccordionDetails-root': {
                        paddingLeft: '0',
                        paddingRight: '0',
                    }
                }}
            >
                { children }
            </AccordionDetails>
        </Accordion>
    );
};

BkAccordion.defaultProps = {
    color: 'black'
};

BkAccordion.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["black", "white"]),
    defaultExpanded: PropTypes.bool,
    detailPaddingX: PropTypes.number,
    detailPaddingY: PropTypes.number,
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}

export default BkAccordion;