import React, { memo } from 'react';
import PropTypes from 'prop-types';

const HIGHLIGHT_DEF = 'url(#ctrlHighlight)';

const HighlightSymbol = props => {
	const { id, cx, cy, radius } = props;
	console.log("i'm here");
	return (
		<>
			<circle
				id={id}
				cx={cx}
				cy={cy}
				r={radius * 2}
				stroke="none"
				fillOpacity={0.1}
				fill="white"
			/>
			<circle
				id={id}
				cx={cx}
				cy={cy}
				filter={HIGHLIGHT_DEF}
				r={radius}
				style={{
					fill: 'white',
					fillOpacity: 0.1,
					stroke: 'none',
				}}
			/>
		</>
	);
};

HighlightSymbol.propTypes = {
	onClick: PropTypes.func,
	id: PropTypes.string,
	cx: PropTypes.string,
	cy: PropTypes.string,
	styles: PropTypes.object.isRequired,
	evolved: PropTypes.bool,
};

export default memo(HighlightSymbol);
