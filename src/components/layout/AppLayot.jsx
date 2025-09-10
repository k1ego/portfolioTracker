import { Layout, Spin } from 'antd'
import { UseCrypto } from '../../context/crypto-context'
import AppContent from './AppContent'
import AppHeader from './AppHeader'
import AppSider from './AppSider'
export default function AppLayout() {
	const { loading } = UseCrypto()

	if (loading) {
		return <Spin fullscreen />
	}

	return (
		<Layout>
			<AppHeader />
			<Layout>
				<AppSider />
				<AppContent />
			</Layout>
		</Layout>
	)
}
