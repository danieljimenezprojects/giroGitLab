// REACT
import { Fragment} from 'react';

// NEXT
import Image from 'next/image';
import Head from 'next/head';


// MUI
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// BKOOL
import BkTypography from '../components/ui/typography/bk-typography';
import BkLink from '../components/ui/actions/link/bk-link';
import BkBox from '../components/layout/box/bk-box';
import BkSection from '../components/layout/section/bk-section';
import BkHeader from '../components/modules/header/bk-header';
import BkButton from '../components/ui/actions/button/bk-button';
import BkGrid from '../components/layout/grid/bk-grid';
import BkNewsletter from '../components/modules/newsletter/bk-newsletter';
import BkCardInfo from '../components/ui/cards/info/bk-card-info';
import BkAccordion from '../components/ui/accordions/bk-accordion';
import BkFooter from '../components/modules/footer/bk-footer';
import BkContainer from '../components/layout/container/bk-container';
import BkGiroTopBarDesktop from '../components/modules/girotopbar/bk-giro-topbar-desktop';
import BkGiroTopBarMobile from '../components/modules/girotopbar/bk-giro-topbar-mobile';


const footer = [
	{
		section: "Giro d'Italia",
		items: [
			{
				label: "Visita Giro d'Italia",
				link: 'https://www.google.es/',
			},
			{
				label: 'Canjea tu cupón',
				link: 'https://www.google.es/',
			},
		]
	},
	{
		section: 'BKOOL',
		items: [
			{
				label: 'Descarga BKOOL',
				link: 'https://www.google.es/',
			},
			{
				label: 'Visita BKOOL',
				link: 'https://www.google.es/',
			},
		]
	},
	{
		section: 'Más información',
		items: [
			{
				label: 'Reglamento',
				link: 'https://www.google.es/',
			},
			{
				label: 'Preguntas frecuentes',
				link: 'https://www.google.es/',
			},
		]
	},
	{
		section: 'Conócenos',
		items: [
			{
				label: 'Términos de uso',
				link: 'https://www.google.es/',
			},
			{
				label: 'Política de privacidad',
				link: 'https://www.google.es/',
			},
			{
				label: 'Política de cookies',
				link: 'https://www.google.es/',
			}
		]
	},
];

export default function GiroItalia() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<Fragment>
            <Head>
				<title> Giro de Italia - Bkool</title>
				<meta name="description" content="Maquetación de ejemplo de giro de Italia"></meta>
			</Head>
            {matches ? <BkGiroTopBarMobile/> : <BkGiroTopBarDesktop/>}
            <BkHeader backgroundImage="/static/img/header/home/header-home.jpg" textAlign='left'>
                <BkBox
                    sx={{
                        paddingLeft: matches ? '1rem' : '6rem',
                        paddingRight: matches ? '1rem' : '6rem',
                        paddingTop: matches ? '2rem' : '6rem',
                        paddingBottom: matches ? '2rem' : '6rem',
                    }}
                >
                    <BkGrid container spacing={ 2 } sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:matches ? "column-reverse" : "row"}}>
                        <BkGrid item sm={12} lg={7} xl={8}>
                            <BkTypography color="white" variant='h1' sx={{ marginBottom: '2rem' }} >¡Nos vemos en la próxima temporada!</BkTypography>
                            <BkTypography color="white" variant='titleExtraLarge' gutterBottom sx={{ marginBottom: '1rem' }}>Únete a BKOOL y recorre todas las etapas del Giro d'Italia</BkTypography>
                            <BkButton variant="contained" color="accent" sx={{ marginBottom: { xs: '3rem', lg: 0 } }}>Prueba el Giro d'Italia gratis*</BkButton>
                            <BkTypography color="white" variant='subtitleSmall' gutterBottom sx={{ marginTop: '1rem' }}>*Gratis durante 30 días</BkTypography>
                        </BkGrid>
                        <BkGrid item sm={12} lg={5} xl={4} sx={{ textAlign: 'center', backgroundColor: matches && 'rgba(0, 0, 0, 0.4)', borderRadius:matches ?? '8px'}}>
                            <Image 
                                layout="fixed"
                                src="/static/img/giro/header/logoGiro.png"
                                height={ 244.8 }
                                width={ 366 }
                            />
                        </BkGrid>
                    </BkGrid>
                </BkBox>
            </BkHeader>
			<BkSection id="section1" paddingY='large' paddingX={ matches ? 'small' : 'extraLarge' } backgroundImage="/static/img/giro/section1/section_1-BG.png" style={{ backgroundSize: 'contain', backgroundPosition: 'bottom' }}>
                <BkTypography variant='h2' align="center" color='white' sx={{ marginBottom: '3rem' }}>Qué ofrecemos</BkTypography>

                <BkGrid container spacing={ 2 } sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 0' }}>
                    <BkGrid item xs={12} lg={6}>
                        <BkBox sx={{ borderRadius: '.5rem', overflow: 'hidden', maxWidth: '400px', margin: '0 auto', marginBottom: { xs: '2rem', lg: 0 } }}>
                            <Image 
                                layout="responsive"
                                src="/static/img/giro/section1/section_1-image_1.jpg"
                                height={ 490 }
                                width={ 400 }
                            />
                        </BkBox>
                    </BkGrid>
                    <BkGrid item xs={12} lg={6} sx={{maxWidth:"400px"}}>
                        <BkTypography color="white" variant='h3' gutterBottom sx={{ marginBottom: '2rem' }}>Nueva tecnología</BkTypography>
                        <BkTypography color="white" variant='h4' gutterBottom sx={{ marginBottom: '2rem' }}>Avatar 3D sobre vídeo</BkTypography>
                        <BkTypography color="white" variant='body3' gutterBottom sx={{ marginBottom: '2rem', opacity: .4 }}>La nueva tecnología desarrollada en exclusiva para el Giro d'Italia Virtual te permitira disfrutar de los vídeos de las etapas reales, con una experiencia de simulación más inmersiva y realista.</BkTypography>
                        <BkButton iconNameStart="icon-play" variant="outlined" color="accent">Prueba la experiencia gratis</BkButton>
                    </BkGrid>
                </BkGrid>

                <BkGrid container spacing={ 2 } sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 0',flexDirection:matches ? "row" : "row-reverse" }}>
                    <BkGrid item xs={12} lg={6}>
                        <BkBox sx={{ borderRadius: '.5rem', overflow: 'hidden', maxWidth: '400px', margin: '0 auto' }}>
                            <Image 
                                layout="responsive"
                                src="/static/img/giro/section1/section_1-image_2.jpg"
                                height={ 490 }
                                width={ 400 }
                            />
                        </BkBox>
                    </BkGrid>
                    <BkGrid item xs={12} lg={6} sx={{maxWidth:"400px"}}>
                        <BkTypography color="white" variant='h3' gutterBottom sx={{ marginBottom: '2rem' }}>Contenido exclusivo</BkTypography>
                        <BkTypography color="white" variant='h4' gutterBottom sx={{ marginBottom: '2rem' }}>Todas las etapas del Giro</BkTypography>
                        <BkTypography color="white" variant='body3' gutterBottom sx={{ marginBottom: '2rem', opacity: .4 }}>Grande Partenza - parte 1 y parte 2 (Enero - Abril 2023). Grande Arrivo (Mayo - Julio 2023)</BkTypography>
                        <BkButton iconNameStart="icon-play" variant="outlined" color="accent" sx={{ marginBottom: { xs: '2rem', lg: 0 } }}>Prueba la experiencia gratis</BkButton>
                    </BkGrid>
                </BkGrid>

                <BkGrid container spacing={ 2 } sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 0' }}>
                    <BkGrid item xs={12} lg={6}>
                        <BkBox sx={{ borderRadius: '.5rem', overflow: 'hidden', maxWidth: '400px', margin: '0 auto', marginBottom: { xs: '2rem', lg: 0 } }}>
                            <Image 
                                layout="responsive"
                                src="/static/img/giro/section1/section_1-image_3.jpg"
                                height={ 490 }
                                width={ 400 }
                            />
                        </BkBox>
                    </BkGrid>
                    <BkGrid item xs={12} lg={6} sx={{maxWidth:"400px"}}>
                        <BkTypography color="white" variant='h3' gutterBottom sx={{ marginBottom: '2rem' }}>Gana magníficos premios</BkTypography>
                        <BkTypography color="white" variant='h4' gutterBottom sx={{ marginBottom: '2rem' }}>Cualquiera puede conseguirlos</BkTypography>
                        <BkTypography color="white" variant='body3' gutterBottom sx={{ marginBottom: '2rem', opacity: .4 }}>Únete, finaliza etapas, suma puntos y aumenta tus aportunidades de ganar magníficos premios en el sorteo que se realiza al final de cada una de las 3 rondas.</BkTypography>
                        <BkButton iconNameStart="icon-play" variant="outlined" color="accent">Prueba la experiencia gratis</BkButton>
                    </BkGrid>
                </BkGrid>
			</BkSection>
            <BkContainer>
			<BkSection paddingY='large' id="section2">
                <BkBox
                    sx={{
                        paddingLeft: matches ? '1rem' : '6rem',
                        paddingRight: matches ? '1rem' : '6rem',
                    }}
                >
				    <BkTypography variant='h2' color='white' align='center' gutterBottom>Como participar</BkTypography>
				    <BkTypography variant='h4' color='white' align='center' gutterBottom >Sigue estos 3 pasos</BkTypography>
                </BkBox>

                <BkGrid container spacing={ 2 } sx={{ padding: '3rem 3rem' }}>
                    <BkGrid item xs={12} lg={4}>
                        <BkCardInfo orientation="vertical" title="Regístrate" description="Prueba 30 días gratis y disfruta de todas las etapas" linkLabel="Más información" iconName="icon-add-user" linkUrl="https://www.google.es/"/>
                    </BkGrid>
                    <BkGrid item xs={12} lg={4}>
                        <BkCardInfo orientation="vertical" title="Descarga BKOOL" description="Descarga para Windows, Mac, Android o iPad y enlaza tus dispositivos" linkLabel="Más información" iconName="icon-download" linkUrl="https://www.google.es/"/>
                    </BkGrid>
                    <BkGrid item xs={12} lg={4}>
                        <BkCardInfo orientation="vertical" title="¡Disfruta!" description="Tendrás acceso a todas las etapas del Giro d'Italia virtual tantas veces como quieras" linkLabel="Más información" iconName="icon-cycling-outdoor" linkUrl="https://www.google.es/"/>
                    </BkGrid>
                </BkGrid>
			</BkSection>
			<BkSection paddingY="large" paddingX="medium" borderRadius backgroundImage="/static/img/giro/section3/backgroundSection3.png" id="section3">
                <BkBox
                    sx={{
                        paddingLeft: matches ? '1rem' : '6rem',
                        paddingRight: matches ? '1rem' : '6rem',
                    }}
                >
				    <BkGrid container spacing={ 10 } sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',flexDirection:matches ? "row-reverse" : "row" }}>
                        <BkGrid item sm={12} lg={5} sx={{ textAlign: 'center', marginBottom: { xs: '3rem', lg: 0 } }}>
                            <Image 
                                src="/static/img/giro/section3/bannerCiclista2.png"
                                width={ 540 }
                                height={ 370 }
                            />
                        </BkGrid>
                        <BkGrid item sm={12} lg={7} sx={{ marginBottom: { xs: '3rem', lg: 0 } }}>
                            {
                                matches
                                ?
                                <BkBox sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                    <BkTypography lineDecoration align="center" color="white" variant='h2'>Prueba GIRO D'ITALIA VIRTUAL gratis durante 30 días</BkTypography>
                                    <BkButton variant="contained" color="primary" sx={{ marginTop: '2rem'}}>Prueba el Giro d'Italia gratis</BkButton>
                                </BkBox>
                                :
                                <>
                                    <BkTypography lineDecoration color="white" variant='h2'>Prueba GIRO D'ITALIA VIRTUAL gratis durante 30 días</BkTypography>
                                    <BkButton variant="contained" color="primary" sx={{ marginTop: '2rem'}}>Prueba Giro d'Italia gratis</BkButton>
                                </>
                        
                            }

                        </BkGrid>
                    </BkGrid>
                </BkBox>
			</BkSection>
            </BkContainer>
			<BkSection paddingY='large' backgroundColor="#202020" id="section4">
                <BkBox
                    sx={{
                        paddingLeft: matches ? '1rem' : '6rem',
                        paddingRight: matches ? '1rem' : '6rem',
                    }}
                >
                    <BkTypography variant='caption' align='center' gutterBottom lineDecoration color="primary" >¿TIENES DUDAS?</BkTypography>
                    <BkTypography variant='h2' align='center' gutterBottom color="primary" >Preguntas frecuentes</BkTypography>

                    <BkBox sx={{ marginBottom: '3rem' }}>
                        <BkAccordion label='¿Qué es BKOOL?' color="white" defaultExpanded>
                            <BkTypography variant='body2' color='white' gutterBottom >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</BkTypography>
                        </BkAccordion>
                        <BkAccordion label='¿Qué me ofrece?' color="white">
                            <BkTypography variant='body2' color='white' gutterBottom >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</BkTypography>
                        </BkAccordion>
                        <BkAccordion label='¿Qué entrenamientos puedo hacer en el simulador' color="white">
                            <BkTypography variant='body2' color='white' gutterBottom >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</BkTypography>
                        </BkAccordion>
                        <BkAccordion label='¿Cuánto cuesta BKOOL?' color="white">
                            <BkTypography variant='body2' color='white' gutterBottom >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</BkTypography>
                        </BkAccordion>
                    </BkBox>

                    <BkTypography variant='h4' align='center' gutterBottom color="primary" >Si sigues teniendo alguna duda, por favor visita nuestra</BkTypography>
                    <BkTypography variant='h4' align='center' gutterBottom color="primary" ><BkLink linkUrl="https://www.google.es/" color='accent' target="_blank">Ver todas las preguntas</BkLink></BkTypography>
                </BkBox>
			</BkSection>

            <BkNewsletter title="El Giro d'Italia volverá pronto a BKOOL" subtitle="Déjanos tu email y entérate antes que nadie de las novedades en las que estamos trabajando." placeholder="Introduce tu email" handleAction={ () => console.log('Click event') } errorMessage="El mail no es válido">
                <BkTypography align="center" color="primary" variant="body2">*This site is protected by reCAPTCHA and the <BkLink linkUrl="https://www.google.es/" arrowLink={ false } color="accent" size="small" >Google Privacy Policy</BkLink> and <BkLink linkUrl="https://www.google.es/" arrowLink={ false } color="accent" size="small">Terms of Service apply</BkLink></BkTypography>
            </BkNewsletter>

            <BkSection paddingY='large' backgroundColor="#E8E8E8">
                <BkBox
                    sx={{
                        paddingLeft: matches ? '1rem' : '6rem',
                        paddingRight: matches ? '1rem' : '6rem',
                    }}
                >
                    <BkTypography variant='h2' align='center' gutterBottom color="secondary" >Sponsors</BkTypography>
                    <BkGrid container spacing={2} justifyContent="center" sx={{ padding:matches ? '3rem 8rem' : '3rem 1rem'}}>
                        <BkGrid item xs={6} lg={1.7}>
                            <Image 
                                layout="responsive"
                                src="/static/img/giro/sponsors/sponsors-enel.png"
                                height={ 50 }
                                width={ 120 }
                            />
                        </BkGrid>
                        <BkGrid item xs={6} lg={1.7}>
                            <Image 
                                layout="responsive"
                                src="/static/img/giro/sponsors/sponsors-tissot.png"
                                height={ 50 }
                                width={ 120 }
                            />                  
                        </BkGrid>
                        <BkGrid item xs={6} lg={1.7}>
                            <Image 
                                layout="responsive"
                                src="/static/img/giro/sponsors/sponsors-italia (1).png"
                                height={ 50 }
                                width={ 120 }
                            />   
                        </BkGrid>
                        <BkGrid item xs={6} lg={1.7}>
                            <Image
                                layout="responsive" 
                                src="/static/img/giro/sponsors/sponsors-technogym.png"
                                height={ 50 }
                                width={ 120 }
                            />                   
                        </BkGrid>
                        <BkGrid item xs={6} lg={1.7}>
                            <Image
                                layout="responsive" 
                                src="/static/img/giro/sponsors/sponsors-bianchi.png"
                                height={ 50 }
                                width={ 120 }
                            />   
                        </BkGrid>
                        <BkGrid item xs={6} lg={1.7}>
                            <Image
                                layout="responsive" 
                                src="/static/img/giro/sponsors/sponsors-castelli.png"
                                height={ 50 }
                                width={ 120 }
                            />   
                        </BkGrid>
                        <BkGrid item xs={6} lg={1.7}>
                            <Image
                                layout="responsive" 
                                src="/static/img/giro/sponsors/sponsors-named_sport.png"
                                height={ 50 }
                                width={ 120 }
                            />   
                        </BkGrid>
                    </BkGrid>
                </BkBox>
			</BkSection>
			<BkFooter
                data={ footer }
                accessibilityLink="https://www.google.es/"
                accessibilityLabel="Accesibilidad"
                legalTextLink="https://www.google.es/"
                legalTextLabel="Aviso legal"
                privacyAndCookiesLink="https://www.google.es/"
                privacyAndCookiesLabel="Privacidad y Cookies"
                facebookLink="https://www.google.es/"
                twitterLink="https://www.google.es/"
                youtubeLink="https://www.google.es/"
                instagramLink="https://www.google.es/"
                stravaLink="https://www.google.es/"
            />
		</Fragment>
	);
}