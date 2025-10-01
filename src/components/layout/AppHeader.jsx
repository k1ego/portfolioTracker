import { Button, Drawer, Layout, Modal, Select, Space } from 'antd'
import { useEffect, useState } from 'react'
import { UseCrypto } from '../../context/crypto-context'
import CoinInfoModal from '../CoinInfoModal'
import AddAssetForm from '../AddAssetForm'

const headerStyle = {
	width: '100%',
	textAlign: 'center',
	height: 60,
	padding: '1rem',
	display: 'flex',
	background: 'white',
	justifyContent: 'space-between',
	alignItems: 'center',
}

export default function AppHeader() {
	const [isModal, setIsModal] = useState(false)
	const [coin, setCoin] = useState(null)
	const [select, setSelect] = useState(false)
	const [drawer, setDrawer] = useState(false)

	const { crypto } = UseCrypto()

	useEffect(() => {
		const keypress = event => {
			if (event.key === '/') {
				setSelect(prev => !prev)
			}
		}
		document.addEventListener('keypress', keypress)
		return () => document.removeEventListener('keypress', keypress)
	}, [])

	function handleSelect(value) {
		setCoin(crypto.find(c => c.id === value))
		setIsModal(true)
	}

	return (
		<Layout.Header style={headerStyle}>
			<Select
				style={{ width: 250 }}
				open={select}
				onSelect={handleSelect}
				onClick={() => setSelect(prev => !prev)}
				value='press / to open'
				options={crypto.map(coin => ({
					label: coin.name,
					value: coin.id,
					icon: coin.icon,
				}))}
				optionRender={option => (
					<Space>
						<img width={20} src={option.data.icon} alt={option.data.label} />{' '}
						{option.data.label}
					</Space>
				)}
			/>

			<Button onClick={() => setDrawer(true)} type='primary'>
				Add Asset
			</Button>

			<Modal open={isModal} onCancel={() => setIsModal(false)} footer={null}>
				<CoinInfoModal coin={coin} />
			</Modal>

			<Drawer
				width={600}
				title='Add Asset'
				onClose={() => setDrawer(false)}
				open={drawer}
				destroyOnHidden
			>
				<AddAssetForm onClose={() => setDrawer(false)} />
			</Drawer>
		</Layout.Header>
	)
}
