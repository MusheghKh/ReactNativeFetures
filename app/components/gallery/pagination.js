import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Range, stringDuplication } from '../../helpers/custom-helper-functions';

class ArrowButtons extends Component {
	constructor(props) {
		super(props);
		const { arrow, activePage, pageCount } = this.props;
		this.state = { arrow, activePage, pageCount, flexDirection: arrow === '<' ? 'row' : 'row-reverse' };
	}

	componentWillReceiveProps(nextProps) {
		const { arrow, activePage, pageCount } = nextProps;
		this.setState({ arrow, activePage, pageCount });
	}

	checkButtonDisability = (arrow, activePage, pageCount) => {
		return arrow === '<' && Range(1, 10).includes(activePage) || arrow === '>' && Range(pageCount - 10, pageCount).includes(activePage);
	}

	render() {
		const { arrow, activePage, pageCount, flexDirection } = this.state;
		const { touchableButton, active, pageNumStyle } = styles;
		const disabled = this.checkButtonDisability(arrow, activePage, pageCount);

		return (
			<View style={{ flexDirection }}>
				<TouchableOpacity
					style={touchableButton}
					disabled={disabled}
					onPress={() => this.props.slidePageSetup(arrow, 1000)}>
						<Text style={[pageNumStyle, active]}>{stringDuplication(arrow, 3)}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={touchableButton}
					disabled={disabled}
					onPress={() => this.props.slidePageSetup(arrow, 100)}>
						<Text style={[pageNumStyle, active]}>{stringDuplication(arrow, 2)}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={touchableButton}
					disabled={disabled}
					onPress={() => this.props.slidePageSetup(arrow, 10)}>
						<Text style={[pageNumStyle, active]}>{stringDuplication(arrow, 1)}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

class Pagination extends Component {
	constructor(props) {
		super(props);
		const { page, pageCount } = this.props.pages;
		this.state = { activePage: page, pageCount }
	}

	componentWillReceiveProps(nextProps) {
		const { page, pageCount } = nextProps.pages;

		if(page && pageCount) {
			this.setState({ activePage: page, pageCount });
		} else {
			this.setState({ activePage: 0, pageCount: 0 });
		}
	}

	render() {
		const { activePage, pageCount } = this.state;
		const { container, active, normal, pageNumStyle, touchableButton } = styles;

		return (
			<View style={container}>
				<ArrowButtons arrow='<' activePage={activePage} pageCount={pageCount} slidePageSetup={this.props.slidePageSetup}/>
				{Array(pageCount > 10 && 10 || pageCount).fill().map((elem, index) => {
					const pageNum = index + 1;
					return (
						<TouchableOpacity
							key={pageNum}
							style={touchableButton}
							onPress={() => this.props.selectPage(pageNum)}>
								<Text style={[pageNumStyle, (pageNum === activePage ? active : normal)]}>{pageNum}</Text>
						</TouchableOpacity>
					)
				})}
				<ArrowButtons arrow='>' activePage={activePage} pageCount={pageCount} slidePageSetup={this.props.slidePageSetup}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	touchableButton: {
		borderRadius: 20,
		padding: 5,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	active: {
		color: '#81c04d'
	},
	normal: {
		color: '#0099CC'
	},
	pageNumStyle: {
		textAlign: 'center'
	}
});

export default Pagination;