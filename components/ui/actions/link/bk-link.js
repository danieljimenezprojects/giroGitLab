// NEXT
import Link from 'next/link';

// REACT
import PropTypes from 'prop-types';
import { forwardRef } from "react";

// MUI
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkIcon from '../../icon/bk-icon';
import BkBox from '../../../layout/box/bk-box';

const MyLink = forwardRef((props, ref) => {
    const { arrowLink, children, color, featureIconClass, linkUrl, size, target } = props;

    const theme = useTheme();

    return (
        <BkBox
            sx={{
                alignItems: 'center',
                borderRadius: '8px',
                color: theme.palette[color].main,
                display: 'inline-flex',
                fontSize: size === 'small' ? '.8125rem' : '1rem',
                padding: (arrowLink && size === 'small') ? '.5rem .75rem' : arrowLink && '.75rem 1rem',
                textDecoration: arrowLink ? 'none' : 'underline',
                verticalAlign: 'middle',
                'span:not(.material-icons)': {
                    marginRight: arrowLink && '.25rem',
                },
                '&:hover': {
                    backgroundColor: arrowLink && `${theme.palette[color].main}14`,
                    'span:not(:first-of-type):last-child': {
                        transition: 'all .25s',
                        marginLeft: '.4rem',
                    }
                }
            }}
            component="a"
            href={ linkUrl }
            target={ target }
        >
            {
                featureIconClass
                &&
                <BkIcon 
                    iconName={ featureIconClass }
                    iconSize='small'
                    sx={{
                        alignItems: 'center',
                        border: `1px solid ${theme.palette[color].main}`,
                        borderRadius: '50%',
                        display: 'inline-flex',
                        height: '36px',
                        justifyContent: 'center',
                        marginRight: '.5rem',
                        width: '36px',
                    }}
                />
            }
            <span>{ children }</span>
            {
                arrowLink
                &&
                <BkIcon iconName="icon-arrow-forward" iconSize="small"/>
            }
        </BkBox>
    )
});

const BkLink = (props) => {
    const { arrowLink, children, color, featureIconClass, linkUrl, size, target } = props;

    const theme = useTheme();
    
    return (
        <Link
            href={ linkUrl }
            size={ size }
            color={ color }
        >
            <MyLink
                arrowLink={ arrowLink }
                children={ children }
                color={ color }
                featureIconClass={ featureIconClass }
                linkUrl={ linkUrl }
                size={ size }
                target={ target }
            />
        </Link>
    );
};

BkLink.propTypes = {
    arrowLink: PropTypes.bool,
    children: PropTypes.node,
    linkUrl: PropTypes.string,
    size: PropTypes.oneOf([ "medium", "small"]),
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    color: PropTypes.oneOf(["accent", "primary", "secondary"]),
    featureIconClass: PropTypes.string,
};

BkLink.defaultProps = {
    arrowLink: true,
    color: "secondary",
};
 
export default BkLink;