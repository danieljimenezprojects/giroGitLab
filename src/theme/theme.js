import { createTheme } from '@mui/material/styles';

// Variables
import { bkColorWhite, bkColorBlack,bkColorBkool, bkColorBackgroundDark, bkColorLight, bkColorError, bkColorWarning, bkColorInfo, bkColorSuccess, bkColorExperienceCycling, bkColorExperienceFitness, bkColorExperienceVelodrome, bkColorExperienceIndoor, bkColorZ1, bkColorZ2, bkColorZ3, bkColorZ4, bkColorZ5, bkColorZ6, bkColorGiro, bkColorDarkBase, bkTypographyBase, bkTypographyHeading, bkTypographyDisplay, bkTypographyTitle, bkTypographySubtitle, bkTypographyCaption, bkTypographyBody, bkTypographyButton, bkTypographyLink, giroTypographyBase } from './bkConsts.module.css';
import { pSBC } from '../utils/Luminosity'

const giroTypographyRatio = 1.414;


// Create a theme instance.
let theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 900,
			lg: 1200,
			xl: 1536,
		}
	},
	components: {
		MuiAlert: {
			styleOverrides: {
				root: {
					'&.MuiAlert-outlinedError': {
						color: bkColorError
					}
				}
			},
			variants: [
				{
					props: { variant: 'black'},
					style: {
						backgroundColor: 'transparent',
						border: '1px solid rgba(255, 255, 255, .2)',
						borderRadius: 8,
						color: 'white !important',
						'&.MuiAlert-blackError': {
							border: `1px solid ${bkColorError}`,
							borderRadius: 8,
							color: `${bkColorError}!important`,
						}
					},
				},
				{
					props: { variant: 'white'},
					style: {
						backgroundColor: 'transparent',
						border: '1px solid rgba(32, 32, 32, .2)',
						borderRadius: 8,
						color: `${bkColorBackgroundDark}!important`,
						'&.MuiAlert-whiteError': {
							border: `1px solid ${bkColorError}`,
							borderRadius: 8,
							color: `${bkColorError}!important`,
						}
					},
				},
			]
		},
		MuiButtonBase: {
			defaultProps: {
				// disableelevation: true,
				//disablefocusripple: true,
				// disableRipple: true,
			},
			styleOverrides: {
				root: {
					fontFamily: bkTypographyHeading,
				},
			}
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				//  disablefocusripple:true
				//  disableRipple: false,
			},
			styleOverrides: {
				root: ({ ownerState, theme }) => ({
					// disableElevation: true,
					//disableFocusRipple: true,
					//disableRipple: true,
					"&.Mui-disabled": {
						color:"#636363"
					},
					borderRadius: '8px',
					...(ownerState.size === 'medium' && {
						padding: '8px 32px',
						fontSize:"16px"
					}),
					...(ownerState.size === 'small' && {
						padding: '4px 24px',
						fontSize:"14px"
					}),
					...(ownerState.size === 'large' && {
						padding: '12px 40px',
						fontSize:"20px"
					}),
			 	}),
			 },
			 variants:[
				{
					props: { variant: 'outlined'},
					style: {
						border:"2px solid",
						"&.Mui-disabled": {
							border: "2px solid #636363",
							color:"#636363"
						},
						"&:hover":{
						border:"2px solid",
						}
					},
				},
				{
					props: { variant: 'contained'},
					style: {
						"&.Mui-disabled": {
							backgroundColor: "#A6A6A6",
							color:"#636363"
						},
					},
				},
			 ]
			 
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: '8px'
				}
			}
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					'&:last-child': {
						paddingBottom: '1rem'
					}
				}
			}
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					'&.Mui-disabled': {
						color: '#A6A6A6'
					}
				}
			}
		},
		MuiChip: {
			styleOverrides: {
				root: {},
			},
			variants: [
				{
					props: { variant: 'calendar'},
					style: {
						borderRadius: '12px',
						height: '24px',
						fontFamily: bkTypographyBase,
						fontWeight: 600,
						fontSize: '12px',
						lineHeight: '12px',
						'.MuiChip-label': {
							marginBottom: '-2px'
						}
					},
				},
				{
					props: { variant: 'badge'},
					style: {
						borderRadius: '12px',
						height: '24px',
						fontFamily: bkTypographyCaption,
						fontWeight: 600,
						fontSize: '9px',
						lineHeight: '9px',
						textTransform: 'uppercase',
						letterSpacing: '2px',
						'.MuiChip-label': {
							overflow:"visible",
							marginBottom: '-2px',
						}
					},
				},
				{
					props: { variant: 'info'},
					style: {
						backgroundColor: bkColorBackgroundDark,
						borderRadius: '28px',
						color: bkColorWhite,
						height: '56px',
					},
				},
			]
		},
		MuiDialogActions: {
			styleOverrides: {
				root: {
					padding: '1.5rem',
					paddingTop: 0,
					justifyContent: 'center',
					marginTop:"8px"
				}
			}
		},
		MuiDialogTitle: {
			styleOverrides: {
				root: {
					fontFamily: bkTypographyHeading,
					fontWeight: 600,
					fontSize: '1.5rem',
					lineHeight: '2rem',
					'@media (min-width:768px)': {
						fontSize: '1.75rem',
						lineHeight: '2.25rem',
					},
					paddingTop: '2rem',
					marginBottom:"8px"
				}
			}
		},
		MuiIconButton: {
			variants: [
				{
					props: { variant: 'white'},
					style: {
						backgroundColor: 'transparent',
						color: bkColorWhite
					},
				},
			]
		},
		MuiFormControl: {
			styleOverrides: {
				root: {
					width: '100%'
				}
			}
		},
		MuiFormControlLabel: {
			styleOverrides: {
				root: {
					marginBottom: '1rem',
					'.MuiFormControlLabel-label': {
						flexGrow: '1',
						'&.Mui-disabled': {
							color: 'unset'
						}
					},
					':last-of-type': {
						marginBottom: 0
					},
					'&.Mui-disabled': {
						opacity: .4
					}
				},
			}
		},
		MuiMobileStepper: {
			styleOverrides: {
				root: {
										backgroundColor:"transparent",
					'.MuiMobileStepper-dot': {
						height: '6px',
						width: '6px',
						backgroundColor:pSBC(-0.3,bkColorWhite)
					},

				},
			},
			variants: [
				{
					props: { variant: 'lines'},
					style: {
						'.MuiMobileStepper-dot': {
							height: '10px',
							width: '10px',
						}
					},
				},
			]
		},
		MuiPagination: {
			variants: [
				{
					props: { variant: 'black'},
					style: {
						'.MuiPaginationItem-root': {
							color: bkColorWhite,
							margin: '0 .5rem',
							'&.Mui-selected': {
								backgroundColor: bkColorWhite,
								border: 'none',
								borderRadius: 4,
								color: bkColorBackgroundDark,
								'&:hover': {
									backgroundColor: pSBC(-0.6,bkColorWhite),
									color: bkColorBackgroundDark,
								},
							},
							'&:hover': {
								backgroundColor: '#363636',
							},
						}
					},
				},
				{
					props: { variant: 'white'},
					style: {
						'.MuiPaginationItem-root': {
							color: bkColorBackgroundDark,
							margin: '0 .5rem',
							'&.Mui-selected': {
								backgroundColor: bkColorBackgroundDark,
								border: 'none',
								borderRadius: 4,
								color: bkColorWhite,
								'&:hover': {
									backgroundColor: pSBC(-0.6,bkColorWhite),
									color: bkColorWhite,
								},
							},
							'&:hover': {
								backgroundColor: '#E9E9E9',
							},
						}
					},
				},
			]
		},
		MuiRadio: {
			styleOverrides: {
				root: {
					'&.Mui-disabled': {
						color: '#A6A6A6'
					}
					},

				}
			
		},
		MuiStepConnector: {
			styleOverrides: {
				root: {
					
				},
				line: {
					borderTopWidth: '2px',
				},
				vertical: {
					marginLeft: 9
				}
			}
		},
		MuiStepLabel: {
			styleOverrides: {
				iconContainer: {
					paddingRight: 0
				}
			}
		},
		MuiSwitch: {
			styleOverrides: {
				root: {
					height: '24px',
					margin: '.5rem',
					padding: 0,
					width: '40px',
					'&.primary': {
						'.MuiSwitch-track': {
							backgroundColor: '#E8E8E8 !important',
							opacity: '1 !important'
						},
						'.MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
							backgroundColor: bkColorBlack
						}
					},
					'&.secondary': {
						'.MuiSwitch-track': {
							backgroundColor: '#4D4D4D !important',
							opacity: '1 !important'
						},
						'.MuiSwitch-thumb': {
							backgroundColor: bkColorBackgroundDark
						},
						'.MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
							backgroundColor: bkColorBkool
						}
					},
				},
				sizeSmall: {
					height: '16px',
					padding: 0,
					width: '24px',
					'.MuiSwitch-thumb': {
						height: '14px',
						width: '14px',
					},
					'.MuiSwitch-switchBase': {
						left: '1px',
						padding: 0,
						top: '1px',
						'&.Mui-checked': {
							transform: 'translateX(8px)',
						}
					}
				},
				switchBase: {
					left: '2px',
					top: '2px',
					'.MuiSwitch-thumb': {
						boxShadow: 'none'
					},
					padding: 0,
					'&.Mui-checked': {
						transform: 'translateX(16px)',
					}
				},
				track: {
					borderRadius: '12px',
					// height: '24px',
					// width: '40px',
				}
			}
		},
		MuiTab: {
			styleOverrides: {
				root: {
					color: '#909090',
					fontSize: '0.875rem',
					paddingBottom: '19.25px',
					paddingTop: '19.25px',
					textTransform: 'uppercase',
					'&.Mui-disabled': {
						color: 'rgba(144, 144, 144, .25)'
					}
				}
			}
		},
		MuiTable: {
			styleOverrides: {
				root: {
					background:bkColorBackgroundDark,
					borderCollapse: 'separate',
					borderRadius: 8,
					position: 'relative'
				},
			}
		},
		MuiTableBody: {
			styleOverrides: {
				root: {
					backgroundColor: '#363636',
					borderCollapse: 'collapse',
					boxShadow: '0 0 0 1px #363636',
					borderRadius:4,
					'.MuiTableRow-root': {
						'.MuiTableCell-root': {
							backgroundColor: '#363636',
							fontSize: '1rem',
							'&:first-of-type': {
								fontWeight: 600
							},
						}
					}
				}
			}
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					// backgroundColor: '#363636',
					color: bkColorWhite,
					borderBottom: `1px solid ${bkColorBackgroundDark}`
				}
			}
		},
		MuiTableHead: {
			styleOverrides: {
				root: {
					'.MuiTableRow-root': {
						'.MuiTableCell-root': {
							backgroundColor: bkColorBackgroundDark,
							paddingBottom: '.5rem',
							paddingTop: '.5rem'
						}
					}
				}
			}
		},
		MuiTableRow: {
			styleOverrides: {
				root: {
					'&:last-child': {
						'.MuiTableCell-root': {
							borderBottom: 'none',
						}
					},
				}
			}
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'&.white': {
						'.MuiFilledInput-root': {
							border: `2px solid transparent`,
							'&.Mui-focused': {
								border: `2px solid ${bkColorBackgroundDark}`,
							},
							'&.MuiInputBase-colorError': {
								border: `2px solid ${bkColorError}`,
								'& + .MuiFormHelperText-root': {
									color: bkColorError
								},
								'.material-icons': {
									color: bkColorError,
								}
							},
							'&:after': {
								display: 'none'
							},
							'&:before': {
								display: 'none'
							},
							'&:hover': {
								backgroundColor: bkColorLight,
							},
							backgroundColor: bkColorLight,
							borderRadius: 4,
							color: bkColorBackgroundDark,
							'.MuiFilledInput-input': {
								paddingTop: 22,
							},
							'&.Mui-disabled': {
								opacity: .25
							}
						},
						'.MuiInputLabel-root': {
							color: bkColorBackgroundDark,
							'&.MuiFormLabel-colorError': {
								color: bkColorError,
							},
							'&.Mui-disabled': {
								opacity: .25
							}
						},
						'.MuiFormHelperText-root': {
							color: '#7A7A7A',
							'&.Mui-disabled': {
								opacity: .25
							}
						}
					},
					'&.black': {
						'.MuiFilledInput-root': {
							border: `2px solid transparent`,
							'&.Mui-focused': {
								border: `2px solid ${bkColorBkool}`,
							},
							'.material-icons': {
								color: bkColorWhite,
							},
							'&.MuiInputBase-colorError': {
								border: `2px solid ${bkColorError}`,
								'& + .MuiFormHelperText-root': {
									color: bkColorError
								},
								'.material-icons': {
									color: bkColorError,
								}
							},
							'&:after': {
								display: 'none'
							},
							'&:before': {
								display: 'none'
							},
							'&:hover': {
								backgroundColor: '#363636',
							},
							backgroundColor: '#363636',
							borderRadius: 4,
							color: bkColorWhite,
							'.MuiFilledInput-input': {
								paddingTop: 22
							},
							'&.Mui-disabled': {
								opacity: .25
							}
						},
						'.MuiInputLabel-root': {
							color: bkColorWhite,
							'&.MuiFormLabel-colorError': {
								color: bkColorError,
							},
							'&.Mui-disabled': {
								opacity: .25
							}
						},
						'.MuiFormHelperText-root': {
							color: bkColorWhite,
							'&.Mui-disabled': {
								opacity: .25
							}
						}
					},
					'&.newsletterTextfield': {
						'.MuiOutlinedInput-root': {
							backgroundColor: bkColorWhite,
							// border: `2px solid transparent`,
							borderRadius: 8,
							paddingRight: 0,
							'&.Mui-focused': {
								// border: `2px solid ${bkColorBkool}`,
								boxShadow: `0 0 0 2px ${bkColorBkool}`
							},
							'.MuiOutlinedInput-notchedOutline': {
								border: 'none'
							},
							'&.MuiInputBase-colorError': {
								boxShadow: `0 0 0 2px ${bkColorError}`,
								'& + .MuiFormHelperText-root': {
									color: bkColorError
								},
							},
						},
						'.MuiFormHelperText-root': {
							color: bkColorWhite,
							marginTop: '.25rem',
							// paddingLeft: '1rem',
							'&.Mui-disabled': {
								opacity: .25
							}
						}
					},
					'.MuiFormHelperText-root': {
						fontFamily: bkTypographyBase,
						fontWeight: 400,
						fontSize: '0.8125rem',
						letterSpacing: 0,
						lineHeight: '1.313rem',
						marginLeft: 0,
						textTransform: 'unset',
					}
				}
			}
		},
		// MuiFormHelperText: {
		// 	styleOverrides: {
		// 		root: {
		// 			fontFamily: bkTypographyBase,
		// 			fontWeight: 400,
		// 			fontSize: '0.8125rem',
		// 			letterSpacing: 0,
		// 			lineHeight: '1.313rem',
		// 			textTransform: 'unset',
		// 		}
		// 	}
		// },
		MuiTooltip: {
			styleOverrides: {
				arrow:{
					color:bkColorWhite
				},
				tooltip: {
					backgroundColor:bkColorWhite,
					color:bkColorBackgroundDark,
					padding:"16px",
					fontSize:"14px",
					fontWeight:"400",
					lineHeight:"18px",
					boxShadow: "0px 1px 4px 3.7px rgba(32, 32, 32, 0.06)"
				}
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					// '&.MuiTypography-gutterBottom': {
					// 	marginBottom: '.3em'
					// }
				}
			},
			variants: [
				{
					props: { variant: 'titleExtraLarge' },
					style: {
						fontFamily: bkTypographyTitle,
						fontWeight: 600,
						fontSize: '1.25rem',
						lineHeight: '1.5rem'
					},
				},
				{
					props: { variant: 'titleLarge' },
					style: {
						fontFamily: bkTypographyTitle,
						fontWeight: 600,
						fontSize: '1.125rem',
						lineHeight: '1.375rem'
					},
				},
				{
					props: { variant: 'titleMedium' },
					style: {
						fontFamily: bkTypographyTitle,
						fontWeight: 600,
						fontSize: '1rem',
						lineHeight: '1.25rem'
					},
				},
				{
					props: { variant: 'titleSmall' },
					style: {
						fontFamily: bkTypographyTitle,
						fontWeight: 600,
						fontSize: '0.875rem',
						lineHeight: '1.125rem'
					},
				},
				{
					props: { variant: 'displayLarge' },
					style: {
						fontFamily: bkTypographyTitle,
						fontWeight: 600,
						fontSize: '2.375rem',
						lineHeight: '2.875rem',
						'@media (min-width:768px)': {
							fontSize: '6.75rem',
							lineHeight: '7rem',
						},
					},
				},
				{
					props: { variant: 'displayMedium' },
					style: {
						fontFamily: bkTypographyTitle,
						fontWeight: 600,
						fontSize: '2.25rem',
						lineHeight: '2.75rem',
						'@media (min-width:768px)': {
							fontSize: '3.5rem',
							lineHeight: '4.25rem',
						},
					},
				},
				{
					props: { variant: 'displaySmall' },
					style: {
						fontFamily: bkTypographyBase,
						fontWeight: 400,
						fontSize: '2.125rem',
						lineHeight: '2.5rem',
						'@media (min-width:768px)': {
							fontSize: '2.25rem',
							lineHeight: '2.75rem',
						},
					},
				},
				{
					props: { variant: 'subtitleExtraLarge' },
					style: {
						fontFamily: bkTypographySubtitle,
						fontWeight: 600,
						fontSize: '1.5rem',
						lineHeight: '2rem'
					},
				},
				{
					props: { variant: 'subtitleLarge' },
					style: {
						fontFamily: bkTypographySubtitle,
						fontWeight: 600,
						fontSize: '1.125rem',
						lineHeight: '1.5rem'
					},
				},
				{
					props: { variant: 'subtitleMedium' },
					style: {
						fontFamily: bkTypographySubtitle,
						fontWeight: 600,
						fontSize: '1rem',
						lineHeight: '1.313rem'
					},
				},
				{
					props: { variant: 'subtitleSmall' },
					style: {
						fontFamily: bkTypographySubtitle,
						fontWeight: 600,
						fontSize: '0.875rem',
						lineHeight: '1.125rem'
					},
				},
				{
					props: { variant: 'subtitleExtraSmall' },
					style: {
						fontFamily: bkTypographySubtitle,
						fontWeight: 600,
						fontSize: '0.75rem',
						lineHeight: '1rem'
					},
				},
				{
					props: { variant: 'body3' },
					style: {
						fontFamily: bkTypographyBase,
						fontWeight: 400,
						fontSize: '1.125rem',
						lineHeight: '1.313rem'
					},
				},
			]
		}
	},
	palette: {
		common: {
			black: bkColorBlack,
			white: bkColorWhite
		},
		background:{
			default: bkColorBackgroundDark
		},
		accent: {
			main:bkColorBkool,
			dark:pSBC(-0.6,bkColorBkool)
		},
		primary: {
			main: bkColorWhite,
			dark:pSBC(-0.6,bkColorWhite),
			light:pSBC(0.6,bkColorWhite)
		},
		secondary: {
			main: bkColorBlack,
			dark:pSBC(-0.8,bkColorWhite),

		},
		error: {
			main: bkColorError,
			dark:pSBC(-0.8,bkColorWhite),
		},
		warning: {
			main: bkColorWarning
		},
		info: {
			main: bkColorInfo
		},
		success: {
			main: bkColorSuccess
		},
		darkBase: {
			main: bkColorDarkBase
		},
		experienceCycling: {
			main: bkColorExperienceCycling,
			contrastText: bkColorBlack
		},
		experienceFitness: {
			main: bkColorExperienceFitness,
			contrastText: bkColorBlack
		},
		experienceIndoor: {
			main: bkColorExperienceIndoor
		},
		experienceVelodrome: {
			main: bkColorExperienceVelodrome
		},
		sportLevelAmater: {
			main: bkColorWarning,
			contrastText: bkColorBlack
		},
		sportLevelActive: {
			main: bkColorError,
			contrastText: bkColorBlack
		},
		sportLevelPro: {
			main: bkColorSuccess,
			contrastText: bkColorBlack
		},
		sportLevelElite: {
			main: '#0E4DDC',
			contrastText: bkColorWhite
		},
		giroItalia: {
			main: bkColorGiro,
			dark: "#D0225B"
		},
		bkool:{
			main:bkColorBkool,
			dark:pSBC(-0.4,bkColorBkool)
		},
		zone1: {
			main: bkColorZ1
		},
		zone2: {
			main: bkColorZ2
		},
		zone3: {
			main: bkColorZ3
		},
		zone4: {
			main: bkColorZ4
		},
		zone5: {
			main: bkColorZ5
		},
		zone6: {
			main: bkColorZ6
		},
		tonalOffset: 0.2
	},
	typography: {
		fontFamily: bkTypographyBase,
		h1: {
			fontFamily: bkTypographyHeading,
			fontWeight: 600,
			fontSize: '3rem',
			lineHeight: '2.125rem',
			'@media (min-width:768px)': {
				fontSize: '3.25rem',
				lineHeight: '3.875rem',
			},
		},
		h2: {
			fontFamily: bkTypographyHeading,
			fontWeight: 600,
			fontSize: '2rem',
			lineHeight: '2rem',
			'@media (min-width:768px)': {
				fontSize: '1.75rem',
				lineHeight: '2.25rem',
			},
		},
		h3: {
			fontFamily: bkTypographyHeading,
			fontWeight: 600,
			fontSize: '1.5rem',
			lineHeight: '1.625rem',
			'@media (min-width:768px)': {
				fontSize: '1.625rem',
				lineHeight: '2rem',
			},
		},
		h4: {
			fontFamily: bkTypographyHeading,
			fontWeight: 600,
			fontSize: '1.313rem',
			lineHeight: '1.313rem',
			'@media (min-width:768px)': {
				fontSize: '1.375rem',
				lineHeight: '2rem',
			},
		},
		h5: undefined,
		h6: undefined,
		subtitle1: undefined,
		subtitle2: undefined,
		body1: {
			fontFamily: bkTypographyBase,
			fontWeight: 400,
			fontSize: '1rem',
			lineHeight: '1.313rem'
		},
		body2: {
			fontFamily: bkTypographyBase,
			fontWeight: 400,
			fontSize: '0.8125rem',
			lineHeight: '1.313rem'
		},
		button: {
			fontFamily: bkTypographyButton,
			fontWeight: 700,
			fontSize: '1rem',
			lineHeight: '1.5rem',
			textTransform: 'none'
		},
		caption: {
			fontFamily: bkTypographyCaption,
			fontWeight: 600,
			fontSize: '0.75rem',
			lineHeight: '1rem',
			textTransform: 'uppercase',
			letterSpacing: '0.125rem'
		},			
	}
});
// theme = responsiveFontSizes(theme);

// Create Giro theme instance
export const themeGiro = createTheme({
	...theme,
	palette: {
		common: {
			black: bkColorBlack,
			white: bkColorWhite
		},
		background:{
			default: bkColorBackgroundDark
		},
		accent: {
			main:bkColorGiro,
			dark:pSBC(-0.4,bkColorGiro)
		},
		primary: {
			main: bkColorWhite,
			dark:pSBC(-0.4,bkColorWhite),
			light:pSBC(0.4,bkColorWhite)
		},
		secondary: {
			main: bkColorBlack,
			dark:pSBC(-0.9,bkColorWhite),

		},
		error: {
			main: bkColorError,
			dark:pSBC(-0.9,bkColorWhite),
		},
		warning: {
			main: bkColorWarning
		},
		info: {
			main: bkColorInfo
		},
		success: {
			main: bkColorSuccess
		},
		darkBase: {
			main: bkColorDarkBase
		},
		experienceCycling: {
			main: bkColorExperienceCycling,
			contrastText: bkColorBlack
		},
		experienceFitness: {
			main: bkColorExperienceFitness,
			contrastText: bkColorBlack
		},
		experienceIndoor: {
			main: bkColorExperienceIndoor
		},
		experienceVelodrome: {
			main: bkColorExperienceVelodrome
		},
		sportLevelAmater: {
			main: bkColorWarning,
			contrastText: bkColorBlack
		},
		sportLevelActive: {
			main: bkColorError,
			contrastText: bkColorBlack
		},
		sportLevelPro: {
			main: bkColorSuccess,
			contrastText: bkColorBlack
		},
		sportLevelElite: {
			main: '#0E4DDC',
			contrastText: bkColorWhite
		},
		giroItalia: {
			main: bkColorGiro,
			dark:pSBC(-0.4,bkColorGiro)
		},
		bkool:{
			main:bkColorBkool,
			dark:pSBC(-0.4,bkColorBkool)
		},
		zone1: {
			main: bkColorZ1
		},
		zone2: {
			main: bkColorZ2
		},
		zone3: {
			main: bkColorZ3
		},
		zone4: {
			main: bkColorZ4
		},
		zone5: {
			main: bkColorZ5
		},
		zone6: {
			main: bkColorZ6
		},
	},
	typography: {
		fontFamily: giroTypographyBase,
		h1: {
			fontFamily: giroTypographyBase,
			fontWeight: 600,
			fontSize: '3.5rem',
			lineHeight: '4rem',
			'@media (max-width:768px)': {
				fontSize: '3.25rem',
				lineHeight: '3.875rem',
			},
		},
		h2: {
			fontFamily: giroTypographyBase,
			fontWeight: 700,
			fontSize: '2.25rem',
			lineHeight: '3.375rem',
			'@media (max-width:768px)': {
				fontSize: '1.75rem',
				lineHeight: '2.25rem',
			},
		},
		h3: {
			fontFamily: giroTypographyBase,
			fontWeight: 600,
			fontSize: '2rem',
			lineHeight: '2.25rem',
			'@media (max-width:768px)': {
				fontSize: '1.625rem',
				lineHeight: '2rem',
			},
		},
		h4: {
			fontFamily: giroTypographyBase,
			fontWeight: 600,
			fontSize: '1.5rem',
			lineHeight: '2.25rem',
			'@media (max-width:768px)': {
				fontSize: '1.375rem',
				lineHeight: '2rem',
			},
		},
		h5: undefined,
		h6: undefined,
		subtitle1: undefined,
		subtitle2: undefined,
		body1: {
			fontFamily: giroTypographyBase,
			fontWeight: 400,
			fontSize: '1rem',
			lineHeight: '1.313rem'
		},
		body2: {
			fontFamily: giroTypographyBase,
			fontWeight: 400,
			fontSize: '0.8125rem',
			lineHeight: '1.313rem'
		},
		button: {
			fontFamily: giroTypographyBase,
			fontWeight: 700,
			fontSize: '1rem',
			lineHeight: '1.5rem',
			textTransform: 'none'
		},
		caption: {
			fontFamily: giroTypographyBase,
			fontWeight: 600,
			fontSize: '0.75rem',
			lineHeight: '1rem',
			textTransform: 'uppercase',
			letterSpacing: '0.125rem'
		},			
	},
	components: {
		MuiAlert: {
			styleOverrides: {
				root: {
					'&.MuiAlert-outlinedError': {
						color: bkColorError
					}
				}
			},
			variants: [
				{
					props: { variant: 'black'},
					style: {
						backgroundColor: 'transparent',
						border: '1px solid rgba(255, 255, 255, .2)',
						borderRadius: 8,
						color: 'white !important',
						'&.MuiAlert-blackError': {
							border: `1px solid ${bkColorError}`,
							borderRadius: 8,
							color: `${bkColorError}!important`,
						}
					},
				},
				{
					props: { variant: 'white'},
					style: {
						backgroundColor: 'transparent',
						border: '1px solid rgba(32, 32, 32, .2)',
						borderRadius: 8,
						color: `${bkColorBackgroundDark}!important`,
						'&.MuiAlert-whiteError': {
							border: `1px solid ${bkColorError}`,
							borderRadius: 8,
							color: `${bkColorError}!important`,
						}
					},
				},
			]
		},
		MuiButtonBase: {
			defaultProps: {
				// disableelevation: true,
				//disablefocusripple: true,
				// disableRipple: true,
			},
			styleOverrides: {
				root: {
					fontFamily: giroTypographyBase,
				},
			}
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				// disableFocusRipple: true,
				// disableRipple: true,
			},
			styleOverrides: {
				root: ({ ownerState, themeGiro }) => ({
					fontWeight:"500",
					borderRadius: '8px',

					"&.Mui-disabled": {
						color:"#636363"
					},
					...(ownerState.size === 'medium' && {
						padding: '12px 32px',
						fontSize:"16px"
					}),
					...(ownerState.size === 'small' && {
						padding: '8px 24px',
						fontSize:"14px"
					}),
					...(ownerState.size === 'large' && {
						padding: '24px 40px',
						fontSize:"20px"
					}),
			 	}),
			 },
			 variants:[
				{
					props: { variant: 'outlined'},
					style: {
						border:"2px solid",
						"&.Mui-disabled": {
							border: "2px solid #636363",
							color:"#636363"
						},
						"&:hover":{
						border:"2px solid",
						}
					},
				},
				{
					props: { variant: 'contained'},
					style: {
						fontSize:"1rem",
						fontWeight:"600",
						"&.Mui-disabled": {
							backgroundColor: "#A6A6A6",
							color:"#636363"
						},
					},
				},
			 ]
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: '8px'
				}
			}
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					'&:last-child': {
						paddingBottom: '1rem'
					}
				}
			}
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					'&.Mui-disabled': {
						color: '#A6A6A6'
					}
				}
			}
		},
		MuiChip: {
			styleOverrides: {
				root: {},
			},
			variants: [
				{
					props: { variant: 'calendar'},
					style: {
						borderRadius: '12px',
						height: '24px',
						fontFamily: giroTypographyBase,
						fontWeight: 600,
						fontSize: '12px',
						lineHeight: '12px',
						'.MuiChip-label': {
							marginBottom: '-2px'
						}
					},
				},
				{
					props: { variant: 'badge'},
					style: {
						borderRadius: '12px',
						height: '24px',
						fontFamily: giroTypographyBase,
						fontWeight: 600,
						fontSize: '9px',
						lineHeight: '9px',
						textTransform: 'uppercase',
						letterSpacing: '2px',
						'.MuiChip-label': {
							overflow:"visible",
							marginBottom: '-2px',
						}
					},
				},
				{
					props: { variant: 'info'},
					style: {
						backgroundColor: bkColorBackgroundDark,
						borderRadius: '28px',
						color: bkColorWhite,
						height: '56px',
					},
				},
			]
		},
		MuiDialogActions: {
			styleOverrides: {
				root: {
					padding: '1.5rem',
					paddingTop: 0,
					justifyContent: 'center',
					marginTop:"8px"
				}
			}
		},
		MuiDialogTitle: {
			styleOverrides: {
				root: {
					fontFamily: giroTypographyBase,
					fontWeight: 600,
					fontSize: '1.5rem',
					lineHeight: '2rem',
					'@media (min-width:768px)': {
						fontSize: '1.75rem',
						lineHeight: '2.25rem',
					},
					paddingTop: '2rem',
					marginBottom:"8px"
				}
			}
		},
		MuiIconButton: {
			variants: [
				{
					props: { variant: 'white'},
					style: {
						backgroundColor: 'transparent',
						color: bkColorWhite
					},
				},
			]
		},
		MuiFormControl: {
			styleOverrides: {
				root: {
					width: '100%'
				}
			}
		},
		MuiFormControlLabel: {
			styleOverrides: {
				root: {
					marginBottom: '1rem',
					'.MuiFormControlLabel-label': {
						flexGrow: '1',
						'&.Mui-disabled': {
							color: 'unset'
						}
					},
					':last-of-type': {
						marginBottom: 0
					},
					'&.Mui-disabled': {
						opacity: .4
					}
				},
			}
		},
		MuiMobileStepper: {
			styleOverrides: {
				root: {
					backgroundColor:"transparent",
					'.MuiMobileStepper-dot': {
						height: '6px',
						width: '6px',
						backgroundColor:pSBC(-0.3,bkColorWhite)
					},

				},
			},
			variants: [
				{
					props: { variant: 'lines'},
					style: {
						'.MuiMobileStepper-dot': {
							height: '10px',
							width: '10px',
						}
					},
				},
			]
		},
		MuiPagination: {
			variants: [
				{
					props: { variant: 'black'},
					style: {
						'.MuiPaginationItem-root': {
							color: bkColorWhite,
							margin: '0 .5rem',
							'&.Mui-selected': {
								backgroundColor: bkColorWhite,
								border: 'none',
								borderRadius: 4,
								color: bkColorBackgroundDark,
								'&:hover': {
									backgroundColor: bkColorWhite,
									color: bkColorBackgroundDark,
								},
							},
							'&:hover': {
								backgroundColor: '#363636',
							},
						}
					},
				},
				{
					props: { variant: 'white'},
					style: {
						'.MuiPaginationItem-root': {
							color: bkColorBackgroundDark,
							margin: '0 .5rem',
							'&.Mui-selected': {
								backgroundColor: bkColorBackgroundDark,
								border: 'none',
								borderRadius: 4,
								color: bkColorWhite,
								'&:hover': {
									backgroundColor: bkColorBackgroundDark,
									color: bkColorBackgroundDark,
								},
							},
							'&:hover': {
								backgroundColor: '#E9E9E9',
							},
						}
					},
				},
			]
		},
		MuiRadio: {
			styleOverrides: {
				root: {
					'&.Mui-disabled': {
						color: '#A6A6A6'
					}
					},

				}
			
		},
		MuiSwitch: {
			styleOverrides: {
				root: {
					height: '24px',
					margin: '.5rem',
					padding: 0,
					width: '40px',
					'&.primary': {
						'.MuiSwitch-track': {
							backgroundColor: '#E8E8E8 !important',
							opacity: '1 !important'
						},
						'.MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
							backgroundColor: bkColorBlack
						}
					},
					'&.secondary': {
						'.MuiSwitch-track': {
							backgroundColor: '#4D4D4D !important',
							opacity: '1 !important'
						},
						'.MuiSwitch-thumb': {
							backgroundColor: bkColorBackgroundDark
						},
						'.MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
							backgroundColor: bkColorGiro
						}
					},
				},
				sizeSmall: {
					height: '16px',
					padding: 0,
					width: '24px',
					'.MuiSwitch-thumb': {
						height: '14px',
						width: '14px',
					},
					'.MuiSwitch-switchBase': {
						left: '1px',
						padding: 0,
						top: '1px',
						'&.Mui-checked': {
							transform: 'translateX(8px)',
						}
					}
				},
				switchBase: {
					left: '2px',
					top: '2px',
					'.MuiSwitch-thumb': {
						boxShadow: 'none'
					},
					padding: 0,
					'&.Mui-checked': {
						transform: 'translateX(16px)',
					}
				},
				track: {
					borderRadius: '12px',
					// height: '24px',
					// width: '40px',
				}
			}
		},
		MuiTab: {
			styleOverrides: {
				root: {
					color: '#909090',
					fontSize: '0.875rem',
					paddingBottom: '19.25px',
					paddingTop: '19.25px',
					textTransform: 'uppercase',
					'&.Mui-disabled': {
						color: 'rgba(144, 144, 144, .25)'
					}
				}
			}
		},
		MuiStepConnector: {
			styleOverrides: {
				root: {
					
				},
				line: {
					borderTopWidth: '2px',
				},
				vertical: {
					marginLeft: 9
				}
			}
		},
		MuiStepLabel: {
			styleOverrides: {
				iconContainer: {
					paddingRight: 0
				}
			}
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'&.white': {
						'.MuiFilledInput-root': {
							border: `2px solid transparent`,
							'&.Mui-focused': {
								border: `2px solid ${bkColorBackgroundDark}`,
							},
							'&.MuiInputBase-colorError': {
								border: `2px solid ${bkColorError}`,
								'& + .MuiFormHelperText-root': {
									color: bkColorError
								},
								'.material-icons': {
									color: bkColorError,
								}
							},
							'&:after': {
								display: 'none'
							},
							'&:before': {
								display: 'none'
							},
							'&:hover': {
								backgroundColor: bkColorLight,
							},
							backgroundColor: bkColorLight,
							borderRadius: 4,
							color: bkColorBackgroundDark,
							'.MuiFilledInput-input': {
								paddingTop: 22,
							},
							'&.Mui-disabled': {
								opacity: .25
							}
						},
						'.MuiInputLabel-root': {
							color: bkColorBackgroundDark,
							'&.MuiFormLabel-colorError': {
								color: bkColorError,
							},
							'&.Mui-disabled': {
								opacity: .25
							}
						},
						'.MuiFormHelperText-root': {
							color: '#7A7A7A',
							'&.Mui-disabled': {
								opacity: .25
							}
						}
					},
					'&.black': {
						'.MuiFilledInput-root': {
							border: `2px solid transparent`,
							'&.Mui-focused': {
								border: `2px solid ${bkColorGiro}`,
							},
							'.material-icons': {
								color: bkColorWhite,
							},
							'&.MuiInputBase-colorError': {
								border: `2px solid ${bkColorError}`,
								'& + .MuiFormHelperText-root': {
									color: bkColorError
								},
								'.material-icons': {
									color: bkColorError,
								}
							},
							'&:after': {
								display: 'none'
							},
							'&:before': {
								display: 'none'
							},
							'&:hover': {
								backgroundColor: '#363636',
							},
							backgroundColor: '#363636',
							borderRadius: 4,
							color: bkColorWhite,
							'.MuiFilledInput-input': {
								paddingTop: 22
							},
							'&.Mui-disabled': {
								opacity: .25
							}
						},
						'.MuiInputLabel-root': {
							color: bkColorWhite,
							'&.MuiFormLabel-colorError': {
								color: bkColorError,
							},
							'&.Mui-disabled': {
								opacity: .25
							}
						},
						'.MuiFormHelperText-root': {
							color: bkColorWhite,
							'&.Mui-disabled': {
								opacity: .25
							}
						}
					},
					'&.newsletterTextfield': {
						'.MuiOutlinedInput-root': {
							backgroundColor: bkColorWhite,
							// border: `2px solid transparent`,
							borderRadius: 8,
							paddingRight: 0,
							'&.Mui-focused': {
								// border: `2px solid ${bkColorBkool}`,
								boxShadow: `0 0 0 2px ${bkColorGiro}`
							},
							'.MuiOutlinedInput-notchedOutline': {
								border: 'none'
							},
							'&.MuiInputBase-colorError': {
								boxShadow: `0 0 0 2px ${bkColorError}`,
								'& + .MuiFormHelperText-root': {
									color: bkColorError
								},
							},
						},
						'.MuiFormHelperText-root': {
							color: bkColorWhite,
							marginTop: '.25rem',
							// paddingLeft: '1rem',
							'&.Mui-disabled': {
								opacity: .25
							}
						}
					},
					'.MuiFormHelperText-root': {
						fontFamily: giroTypographyBase,
						fontWeight: 400,
						fontSize: '0.8125rem',
						letterSpacing: 0,
						lineHeight: '1.313rem',
						marginLeft: 0,
						textTransform: 'unset',
					}
				}
			}
		},
		MuiTooltip: {
			styleOverrides: {
				arrow:{
					color:bkColorWhite
				},
				tooltip: {
					backgroundColor:bkColorWhite,
					color:bkColorBackgroundDark,
					padding:"16px",
					fontSize:"14px",
					fontWeight:"400",
					lineHeight:"18px",
					boxShadow: "0px 1px 4px 3.7px rgba(32, 32, 32, 0.06)"
				}
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					// '&.MuiTypography-gutterBottom': {
					// 	marginBottom: '.3em'
					// }
				}
			},
			variants: [
				{
					props: { variant: 'titleExtraLarge' },
					style: {
						fontFamily: giroTypographyBase,
						fontWeight: 600,
						fontSize: '1.25rem',
						lineHeight: '1.5rem'
					},
				},
				{
					props: { variant: 'titleLarge' },
					style: {
						fontFamily: giroTypographyBase,
						fontWeight: 600,
						fontSize: '1.125rem',
						lineHeight: '1.375rem'
					},
				},
				{
					props: { variant: 'titleMedium' },
					style: {
						fontFamily: giroTypographyBase,
						fontWeight: 600,
						fontSize: '1rem',
						lineHeight: '1.25rem'
					},
				},
				{
					props: { variant: 'titleSmall' },
					style: {
						fontFamily: giroTypographyBase,
						fontWeight: 600,
						fontSize: '0.875rem',
						lineHeight: '1.125rem'
					},
				},
				{
					props: { variant: 'displayLarge' },
					style: {
						fontFamily: giroTypographyBase,
						fontWeight: 600,
						fontSize: '2.375rem',
						lineHeight: '2.875rem',
						'@media (min-width:768px)': {
							fontSize: '6.75rem',
							lineHeight: '7rem',
						},
					},
				},
				{
					props: { variant: 'displayMedium' },
					style: {
						fontFamily: giroTypographyBase,
						fontWeight: 600,
						fontSize: '2.25rem',
						lineHeight: '2.75rem',
						'@media (min-width:768px)': {
							fontSize: '3.5rem',
							lineHeight: '4.25rem',
						},
					},
				},
				{
					props: { variant: 'displaySmall' },
					style: {
						fontFamily: giroTypographyBase,
						fontWeight: 400,
						fontSize: '2.125rem',
						lineHeight: '2.5rem',
						'@media (min-width:768px)': {
							fontSize: '2.25rem',
							lineHeight: '2.75rem',
						},
					},
				},
				{
					props: { variant: 'subtitleExtraLarge' },
					style: {
						fontFamily: giroTypographyBase,
						fontWeight: 600,
						fontSize: '1.5rem',
						lineHeight: '2rem'
					},
				},
				{
					props: { variant: 'subtitleLarge' },
					style: {
						fontFamily: giroTypographyBase,
						fontWeight: 600,
						fontSize: '1.125rem',
						lineHeight: '1.5rem'
					},
				},
				{
					props: { variant: 'subtitleMedium' },
					style: {
						fontFamily: giroTypographyBase,
						fontWeight: 600,
						fontSize: '1rem',
						lineHeight: '1.313rem'
					},
				},
				{
					props: { variant: 'subtitleSmall' },
					style: {
						fontFamily: giroTypographyBase,
						fontWeight: 600,
						fontSize: '0.875rem',
						lineHeight: '1.125rem'
					},
				},
				{
					props: { variant: 'subtitleExtraSmall' },
					style: {
						fontFamily: giroTypographyBase,
						fontWeight: 600,
						fontSize: '0.75rem',
						lineHeight: '1rem'
					},
				},
				{
					props: { variant: 'body3' },
					style: {
						fontFamily: giroTypographyBase,
						fontWeight: 400,
						fontSize: '1.125rem',
						lineHeight: '1.313rem'
					},
				},
			]
		},
		MuiTable: {
			styleOverrides: {
				root: {
					background:bkColorBackgroundDark,
					borderCollapse: 'separate',
					borderRadius: 8,
					position: 'relative'
				},
			}
		},
		MuiTableBody: {
			styleOverrides: {
				root: {
					backgroundColor: '#363636',
					borderCollapse: 'collapse',
					boxShadow: '0 0 0 1px #363636',
					borderRadius:4,
					'.MuiTableRow-root': {
						'.MuiTableCell-root': {
							backgroundColor: '#363636',
							fontSize: '1rem',
							'&:first-of-type': {
								fontWeight: 600
							},
						}
					}
				}
			}
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					// backgroundColor: '#363636',
					color: bkColorWhite,
					borderBottom: `1px solid ${bkColorBackgroundDark}`
				}
			}
		},
		MuiTableHead: {
			styleOverrides: {
				root: {
					'.MuiTableRow-root': {
						'.MuiTableCell-root': {
							backgroundColor: bkColorBackgroundDark,
							paddingBottom: '.5rem',
							paddingTop: '.5rem'
						}
					}
				}
			}
		},
		MuiTableRow: {
			styleOverrides: {
				root: {
					'&:last-child': {
						'.MuiTableCell-root': {
							borderBottom: 'none',
						}
					},
				}
			}
		},
		
	},
});

export default theme;