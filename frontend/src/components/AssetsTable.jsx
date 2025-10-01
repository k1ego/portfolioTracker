import { Table } from 'antd'
import { UseCrypto } from '../context/crypto-context'

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		sorter: (a, b) => a.name.length - b.name.length,
		sortDirections: ['descend'],
	},
	{
		title: 'Price, $',
		dataIndex: 'price',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.price - b.price,
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.amount - b.amount,
	},
]


export function AssetsTable() {
	const { assets } = UseCrypto()

	const data = assets.map(a => ({
	key: a.id,
		name: a.name,
		price: a.price,
		amount: a.amount,
	}))

	return (
		<Table
			pagination={false}
			columns={columns}
			dataSource={data}
		/>
	)
}
