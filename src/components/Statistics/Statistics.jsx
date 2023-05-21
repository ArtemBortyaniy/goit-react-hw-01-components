import PropTypes from 'prop-types';
import { Section, TitleStatistics, ListStatistics, ItemStatistics, Label, Percentage } from './Statistics.styled';

const Statistics = ({title, stats}) => {
    return (
        <Section>
        {title.length > 0 && <TitleStatistics>{title}</TitleStatistics>}
        <ListStatistics>
        {stats.map(stats => (
        <ItemStatistics key={stats.id}>
            <Label>{ stats.label }</Label>
            <Percentage>{ stats.percentage }</Percentage>
        </ItemStatistics>
        ))}
        </ListStatistics>
        </Section>
    );
}

Statistics.propTypes = {
    title : PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default Statistics;