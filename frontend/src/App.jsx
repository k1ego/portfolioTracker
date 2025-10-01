import AppLayout from './components/layout/AppLayot'
import { CryptoContextProvider } from './context/crypto-context'

export default function App() {
	return (
		<CryptoContextProvider>
			<AppLayout />
		</CryptoContextProvider>
	)
}
