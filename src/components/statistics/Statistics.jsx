import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Statistics = ({ title, stats }) => {
  const allStats = stats.map(stat => {
    return (
      <li
        style={{ backgroundColor: getRandomHexColor() }}
        key={stat.id}
        className={css.item}
      >
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}%</span>
      </li>
    );
  });
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>{allStats}</ul>
    </section>
  );
};
export default Statistics;

Statistics.prototypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
