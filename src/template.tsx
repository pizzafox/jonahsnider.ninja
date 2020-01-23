import {
	Container,
	createMuiTheme,
	CssBaseline,
	Fab,
	Grid,
	responsiveFontSizes,
	ThemeProvider,
	useMediaQuery
} from '@material-ui/core';
import {FlashOnRounded} from '@material-ui/icons';
import {useAmp} from 'next/amp';
import Head from 'next/head';
import Link from 'next/link';
import React, {useMemo} from 'react';
import Seo from './components/seo';
import siteMetadata from './config/site-metadata';
import {customFonts, dark, pink} from './config/theme';

export const JonahSniderTemplate = (props: {children: JSX.Element[] | JSX.Element}): JSX.Element => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const isAMP = useAmp();

	const theme = useMemo(() => {
		return responsiveFontSizes(
			createMuiTheme({
				spacing: 12,
				palette: {
					type: prefersDarkMode ? 'dark' : 'light',
					background: prefersDarkMode ? {default: dark.main, paper: pink.main} : {default: pink.main, paper: dark.main},
					primary: prefersDarkMode ? pink : dark,
					secondary: prefersDarkMode ? dark : pink
				},
				overrides: {
					MuiCssBaseline: {
						'@global': {
							'@font-face': [
								{
									// eslint-disable-next-line @typescript-eslint/quotes
									fontFamily: isAMP ? 'Fira Mono' : "'Cascadia Code Regular'",
									fontStyle: 'normal',
									fontDisplay: 'swap',
									fontWeight: 400,
									// eslint-disable-next-line @typescript-eslint/quotes
									src: isAMP ? undefined : "url(/fonts/Cascadia.ttf) format('truetype')"
								}
							]
						}
					}
				},
				typography: {
					h1: {
						fontFamily: [...customFonts, 'monospace'].join()
					},
					h2: {
						fontFamily: [...customFonts, 'monospace'].join()
					}
				}
			})
		);
	}, [isAMP, prefersDarkMode]);

	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>{siteMetadata.title}</title>
				<link
					rel='stylesheet'
					href={`https://fonts.googleapis.com/css?family=${isAMP ? 'Fira+Mono|' : ''}Roboto:400,500&display=swap`}
				/>
			</Head>
			<Seo theme={theme} />
			<CssBaseline />
			<Container>
				{props.children}
				{isAMP && (
					<Grid container direction='row' justify='flex-end' alignItems='flex-end' spacing={1}>
						<Grid item>
							<Link passHref href='/'>
								<Fab color='primary' aria-label='amp' variant='extended'>
									<FlashOnRounded />
									Disable AMP
								</Fab>
							</Link>
						</Grid>
					</Grid>
				)}
			</Container>
		</ThemeProvider>
	);
};