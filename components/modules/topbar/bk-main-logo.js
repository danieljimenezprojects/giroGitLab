// NEXT
import Image from 'next/image';
import Link from 'next/link';

// BKOOL
import BkBox from '../../layout/box/bk-box';

const BkMainLogo = () => {
    return (
        <BkBox
            sx={{
                alignItems: 'center',
                display: 'flex',
                height: 55,
                px: 2,
            }}
        >
            <Link 
                href='/'
                passHref={ true }
            >
                <a >
                    <Image 
                        src={ `/static/img/logo/logo-white.svg` }
                        alt='BKOOL Logo'
                        height={36}
                        width={127}
                    />
                </a>
            </Link>
        </BkBox>
    );
};
 
export default BkMainLogo;