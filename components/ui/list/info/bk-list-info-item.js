// REACT
import PropTypes from 'prop-types';

// BKOOL
import BkBox from "../../../layout/box/bk-box";
import BkTypography from '../../typography/bk-typography';
import BkBadge from '../../content/badge/bk-badge';
import BkLink from '../../actions/link/bk-link';

const BkListInfoItem = (props) => {
    const { badgeType, badgeTypeLabel, linkLabel, linkTarget, linkUrl, subtitle, title } = props;

    return (
        <BkBox
            component="li"
            sx={{ 
                borderBottom: '1px solid #363636',
                paddingBottom: '1.5rem',
                paddingTop: '1.5rem',
            }}
        >
            <BkBox 
                sx={{ 
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                }}
            >
                <BkTypography 
                    color='white'
                    variant='subtitleSmall'
                >
                    { title }
                </BkTypography>
                <BkBadge variant="badge" category={ badgeType } label={ badgeTypeLabel } />
            </BkBox>
            
            <BkTypography 
                color='white'
                variant='body3'
                sx={{ marginBottom: linkUrl && '.75rem' }}
            >
                { subtitle }
            </BkTypography>

            {
                linkUrl
                &&
                <BkLink 
                    color="accent"
                    linkUrl={ linkUrl } 
                    size='small'
                    target={ linkTarget }
                >
                    { linkLabel }
                </BkLink>
            }
        </BkBox>
    );
};

BkListInfoItem.propTypes = {
    badgeType: PropTypes.PropTypes.oneOf(['marketing', 'groupRide', 'race', 'league', 'challenge', 'club']),
    badgeTypeLabel: PropTypes.string,
    linkLabel: PropTypes.string,
    linkUrl: PropTypes.string,
    linkTarget: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    subtitle: PropTypes.string,
    title: PropTypes.string,
};
 
export default BkListInfoItem;