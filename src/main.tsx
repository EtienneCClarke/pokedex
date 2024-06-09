import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { browserRouter } from './router'
import { PaginationProvider } from './context/pagination'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import './index.css'
import { LanguageProvider } from './context/language'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<LanguageProvider>
				<PaginationProvider>
					<RouterProvider router={browserRouter} />
				</PaginationProvider>
			</LanguageProvider>
		</QueryClientProvider>
  	</React.StrictMode>,
)
