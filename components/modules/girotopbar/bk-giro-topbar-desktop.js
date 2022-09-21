import * as React from 'react';
import BkMainLanguage from '../topbar/bk-main-menu-language';
import { languages } from '../../../public/static/consts/consts';
import BkBox from '../../layout/box/bk-box';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import { giroTopbar } from '../../../public/static/consts/giroTopbar';
import { useRouter } from 'next/router';
import {useRef, useEffect,useState} from 'react';

export default function BkGiroTopBarDesktop() {

  const [liWidthLine,setLiWidthLine] = useState([])
  const theme = useTheme();
  const router = useRouter();
  const routeId = (router.asPath).substring(1)

  const liId = routeId.charAt(routeId.length - 1)
  const ref = useRef(null);
  let navWidthLine;
  useEffect(() => {
    navWidthLine = Array.from(ref.current.children);;
    console.log(navWidthLine)
    
    navWidthLine.forEach(li => {
        liWidthLine.push(li.clientWidth)
     })

  }, [ref]);


  return (
    <AppBar sx={{backgroundColor:theme.palette.secondary.main,}}>
        <BkBox 
        sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            padding:"10px"
        }}>
            <BkBox sx={{display:"flex"}}>
                    <BkBox
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            height: 55,
                            marginLeft: {
                                xs: '4rem',

                            }
                        }}
                        >
                            <Link 
                                href='/'
                                passHref={ true }
                            >
                                    <a >
                                        <Image 
                                            src={ `/static/img/logo/logo_topbar.png` }
                                            alt='BKOOL Logo'
                                            height={29}
                                            width={40}
                                        />
                                    </a>
                            </Link>
                    </BkBox>
                    <nav>
                        
                            <ul ref={ref} style={{textDecoration:"none",display:"flex", alignItems:"center",gap:"30px"}}>
                                {giroTopbar.map(item => {
                                    return (
                                        <>
                                            <BkBox key={item.id} component="li" sx={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                                                <div>
                                                <Link href={item.id} key={item.id} ><a style={{textDecoration:"none",color:routeId == item.id ? theme.palette.accent.main : theme.palette.primary.main}}>{item.label}</a></Link>
                                                {routeId == item.id && <span style={{display:"block", width:liWidthLine[liId-1] + "px",borderTop: "2px solid" + theme.palette.accent.main ,position:"absolute",top:74}}></span>}
                                                </div>
                                            </BkBox>
                                        </>
                                    )
                                })}

                            </ul>
                    </nav>
            </BkBox>
            <BkBox sx={{display:"flex",alignItems:"center", justifyContent:"space-around", marginRight: {xs: '0.2rem',sm: '4rem',}}}>
                <BkMainLanguage languages={ languages } onChangeMenu={() => console.log('oscar')} sx={{marginTop:"12px"}} />
            </BkBox>
        </BkBox>
    </AppBar>
  );
}