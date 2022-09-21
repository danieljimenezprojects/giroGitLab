// REACT
import PropTypes from 'prop-types';

// MUI
import Table from '@mui/material/Table';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const BkTable = (props) => {
    const { children, responsive, ...other } = props;

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Table
            sx={{
                '&.MuiTable-root': {
                    maxWidth: `${responsive && matches ? '1140px' : 'unset'}`,
                    minWidth: `${responsive && matches ? '1140px' : 'unset'}`,
                },
                'thead': {
                    'tr': {
                        'th': {
                            '&:first-of-type': {
                                left: 0,
                                maxWidth: `${responsive && matches ? '250px' : 'unset'}`,
                                minWidth: `${responsive && matches ? '250px' : 'unset'}`,
                                position: `${responsive ? 'sticky' : 'relative'}`,
                                width: `${responsive && matches ? '250px' : 'unset'}`,
                                zIndex: 1,
                                '&:before': {
                                    boxShadow: `${responsive && matches ? '10px 0px 10px rgb(0, 0, 0, .15)' : 'none'}`,
                                    content: `${responsive && matches ? '""' : 'none'}`,
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    right: '0',
                                    width: '1rem',
                                }
                            },
                        }
                    }
                },
                'tbody': {
                    'tr': {
                        'td': {
                            '&:first-of-type': {
                                left: 0,
                                maxWidth: `${responsive && matches ? '250px' : 'unset'}`,
                                minWidth: `${responsive && matches ? '250px' : 'unset'}`,
                                position: `${responsive ? 'sticky' : 'relative'}`,
                                width: `${responsive && matches ? '250px' : 'unset'}`,
                                zIndex: 1,
                                '&:before': {
                                    boxShadow: `${responsive && matches ? '10px 0px 10px rgb(0, 0, 0, .15)' : 'none'}`,
                                    content: `${responsive && matches ? '""' : 'none'}`,
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    right: '0',
                                    width: '1rem',
                                }
                            },
                        }
                    }
                }
            }}
            { ...other }
        >
            { children }
        </Table>
    );
};

BkTable.propTypes = {
    children: PropTypes.node,
    responsive: PropTypes.bool,
};

export default BkTable;