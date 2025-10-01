import { Divider, Tag, Typography } from 'antd'
import CoinInfo from './Coininfo'

export default function CoinInfoModal({ coin }) {
	return (
		<>
			<CoinInfo coin={coin} withSymbol />
			<Divider />
			<Typography.Paragraph>
				<Typography.Text style={{ marginRight: 7 }} strong>
					1 hour:
				</Typography.Text>
				<Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
					{coin.priceChange1h}%
				</Tag>
				<Typography.Text style={{ marginRight: 7 }} strong>
					1 day:
				</Typography.Text>
				<Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>
					{coin.priceChange1d}%
				</Tag>
				<Typography.Text style={{ marginRight: 7 }} strong>
					1 week:
				</Typography.Text>
				<Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>
					{coin.priceChange1w}%
				</Tag>
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text style={{ marginRight: 5 }} strong>
					Price:
				</Typography.Text>
				{coin.price.toFixed(2)}$
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text style={{ marginRight: 5 }} strong>
					Price BTC:
				</Typography.Text>
				{coin.priceBtc}
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text style={{ marginRight: 5 }} strong>
					Market Cap:
				</Typography.Text>
				{coin.marketCap}$
			</Typography.Paragraph>
			{coin.contractAddress && (
				<Typography.Paragraph>
					<Typography.Text style={{ marginRight: 5 }} strong>
						Contract Address:
					</Typography.Text>
					{coin.contractAddress}
				</Typography.Paragraph>
			)}
		</>
	)
}
