import React, { memo } from 'react';
import PropTypes from 'prop-types';

// const pathString = (points) => {
// 	const start = `M${points[0]}`;
// 	const coords = [start];
// 	for (let i = 1; i < points.length; i++) {
// 		coords.push(`L${points[i]}`);
// 	}
// 	coords.push('Z');
// 	return coords.join(' ');
// };
function InterestSymbol(props) {
	const {
		id,
		fill,
		stroke,
		fillOpacity,
		strokeOpacity,
		points,
		// textAnchor = 'center',
		styles,
	} = props;
	return (
		<polygon
			id={id}
			points={points}
			fill={fill || styles.fill}
			stroke={stroke || styles.stroke}
			fillOpacity={fillOpacity || styles.fillOpacity}
			strokeOpacity={strokeOpacity || styles.strokeOpacity}
			strokeWidth={styles.strokeWidth}
		/>
	);
}

InterestSymbol.propTypes = {
	id: PropTypes.string,
	fill: PropTypes.string,
	stroke: PropTypes.string,
	attitude: PropTypes.string,
	fillOpacity: PropTypes.number,
	strokeOpacity: PropTypes.number,
};

export default memo(InterestSymbol);
