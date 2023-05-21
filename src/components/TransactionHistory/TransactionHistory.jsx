import PropTypes from 'prop-types';
import { Table, Thead, Tr, ThTitle, Tbody, TdValue } from './TransactionHistory.styled'

const TransactionHistory = ({ items }) => {
    return (
        <Table>
        <Thead>
            <Tr>
                <ThTitle>Type</ThTitle>
                <ThTitle>Amount</ThTitle>
                <ThTitle>Currency</ThTitle>
            </Tr>
        </Thead>

        <Tbody>
            { items.map(item => (
                <Tr key={item.id}>
                    <TdValue>{ item.type }</TdValue>
                    <TdValue>{ item.amount }</TdValue>
                    <TdValue>{ item.currency }</TdValue>
                </Tr>
            )) }
        </Tbody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ).isRequired,
}

export default TransactionHistory;