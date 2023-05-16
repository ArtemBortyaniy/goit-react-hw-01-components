import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
        {title.length > 0 && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
        {stats.map(stats => (
        <li className="item" key={stats.id}>
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}</span>
        </li>
        ))}
        </ul>
        </section>
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