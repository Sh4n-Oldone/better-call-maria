import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { router } from './App'
import './index.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource-variable/noto-sans-symbols'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StyleSheetManager
			shouldForwardProp={isPropValid}
			enableVendorPrefixes={true}
		>
			<RouterProvider router={router} />
		</StyleSheetManager>
	</React.StrictMode>,
)
