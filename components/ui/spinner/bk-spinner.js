// REACT
import PropTypes from 'prop-types';

// EXTRA
import cls from 'classnames';

// BKOOL
import BkBox from '../../layout/box/bk-box';
import styles from './bk-spinner.module.css';

const BkSpinner = (props) => {
    const { spinnerOn, spinnerPosition, ...other } = props;

    return (
        <BkBox
            spinnerOn={ spinnerOn } 
            className={ 
                cls(
                    styles.bkSpinner,
                    !spinnerOn && styles.dNone,
                    spinnerPosition === 'absolute' ? styles.positionAbsolute : styles.positionFixed,
                )
            }
            { ...other }
        >
            <BkBox className={ styles.bkSpinnerWrapper }>
                <svg id={ styles.spinnerSymbol } data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 57"><title>Artboard 1</title><path className={ styles.spinnerPath } stroke="#202020" fill="transparent" strokeWidth="8" d="M39.88,24.86s-5.67-6.43-12.7-6.43-13,3.95-14.53,9S5.7,52.23,5.7,52.23H35.86S51.42,22,55.29,14.32,65.79,4.77,69,4.77c5.93,0,13.27,2.45,15.64,11S94.3,52.23,94.3,52.23H53.79l-4.26-7.85"/></svg>
                <svg id={ styles.spinnerSymbolStatic } data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 57"><title>Artboard 1</title><path className={ styles.spinnerPathStatic } stroke="#ddd" fill="transparent" strokeWidth="8" d="M39.88,24.86s-5.67-6.43-12.7-6.43-13,3.95-14.53,9S5.7,52.23,5.7,52.23H35.86S51.42,22,55.29,14.32,65.79,4.77,69,4.77c5.93,0,13.27,2.45,15.64,11S94.3,52.23,94.3,52.23H53.79l-4.26-7.85"/></svg>
            </BkBox>
        </BkBox>
    );
};

BkSpinner.defaultProps = {
    spinnerPosition: 'fixed',
    spinnerOn: 'false',
}

BkSpinner.propTypes = {
    spinnerPosition: PropTypes.oneOf(["fixed", "absolute"]),
    spinnerOn: PropTypes.bool,
}
 
export default BkSpinner;