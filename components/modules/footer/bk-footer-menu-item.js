// NEXT
import Link from "next/link";

// REACT
import PropTypes from 'prop-types';
import { forwardRef } from "react";

// MUI
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkButton from "../../ui/actions/button/bk-button";

const MyButton = forwardRef((props, ref) => {
    const { children, linkUrl, target } = props;

    const theme = useTheme();

    return (
        <BkButton
            color="primary"
            component="a"
            // size="small"
            href={ linkUrl }
            sx={{
                color: 'rgba(255, 255, 255, .6)',
                fontFamily: theme.typography.body1,
                padding: '.5rem .7rem',
            }}
        >
            { children }
        </BkButton>
    )
});

const BkFooterMenuItem = (props) => {
    const { children, linkUrl, target } = props;

    return (
        <Link
            href={ linkUrl }
            passHref={ true }
        >
            <MyButton
                children={ children }
                linkUrl={ linkUrl }
            />
        </Link>
    );
};

BkFooterMenuItem.propTypes = {
    children: PropTypes.node,
    linkUrl: PropTypes.string,
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
};

export default BkFooterMenuItem;