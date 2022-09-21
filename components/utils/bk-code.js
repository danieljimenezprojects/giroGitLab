import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import BkBox from '../layout/box/bk-box';

const BkCode = (props) => {
    const { children, language } = props;

    return (
        <BkBox
            sx={{
                'pre': {
                    borderRadius: '.5rem',
                    margin: '0 !important',
                }
            }}
        >
            <SyntaxHighlighter wrapLines wrapLongLines language={ language } style={ materialDark } >
            { children }
            </SyntaxHighlighter>
        </BkBox>
    );
};

BkCode.defaultProps = {
    language: 'jsx'
};
 
export default BkCode;