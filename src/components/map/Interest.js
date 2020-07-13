import React from 'react';
import PropTypes from 'prop-types';

import InterestSymbol from '../symbols/InterestSymbol';
import PositionCalculator from './PositionCalculator';

import convexHull from 'hull';

const Interest = props => {
	const positionCalc = new PositionCalculator();
	const { interestComps, mapDimensions } = props;
	const point = c => [
		positionCalc.maturityToX(c.maturity, mapDimensions.width),
		positionCalc.visibilityToY(c.visibility, mapDimensions.height),
	];

	const type = 'townplanners';
	const interestPoints = interestComps.map(point);
	const hull = convexHull(interestPoints);
	console.log({ interestPoints, hull });
	return (
		<>
			<InterestSymbol
				id={`interest_${type}`}
				points={hull}
				textAnchor="middle"
				styles={props.mapStyleDefs.attitudes[type]}
			/>
		</>
	);
};

Interest.propTypes = {
	attitude: PropTypes.object.isRequired,
	mapDimensions: PropTypes.object.isRequired,
	mapText: PropTypes.string.isRequired,
	mutateMapText: PropTypes.func.isRequired,
	mapStyleDefs: PropTypes.object.isRequired,
};

export default Interest;
