import React, { Component } from 'react';
import MapCanvas from './MapCanvas';

class MapView extends Component {
	render() {
		const contentLoadedFlag = this.props.mapText ? 'contentLoaded' : 'noText';
		return (
			<div className={contentLoadedFlag}>
				{/* Wrapping div required to ensure that images aren't generated with a ton of whitespace */}
				<div ref={this.props.mapRef}>
					<h5 id="title">{this.props.mapTitle}</h5>
					<div id="map">
						<MapCanvas mapPadding={20} {...this.props} />
					</div>
				</div>
			</div>
		);
	}
}

export default MapView;
