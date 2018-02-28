import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Range, stringDuplication, paginationController } from '../../helpers/custom-helper-functions';

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
		const { touchableButton, active, pageNumStyle, arrowStyle } = styles;
		const disabled = this.checkButtonDisability(arrow, activePage, pageCount);

		return (
			<View style={{ flexDirection }}>
				<TouchableOpacity
					style={touchableButton}
					disabled={disabled}
					numberOfLines={1}
					onPress={() => this.props.slidePageSetup(arrow, 1000)}>
						<Text style={[arrowStyle, active]}>{stringDuplication(arrow, 3)}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={touchableButton}
					disabled={disabled}
					fontSize={15}
					numberOfLines={1}
					onPress={() => this.props.slidePageSetup(arrow, 100)}>
						<Text style={[arrowStyle, active]}>{stringDuplication(arrow, 2)}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={touchableButton}
					disabled={disabled}
					fontSize={20}
					numberOfLines={1}
					onPress={() => this.props.slidePageSetup(arrow, 10)}>
						<Text style={[arrowStyle, active]}>{stringDuplication(arrow, 1)}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

class Pagination extends Component {
	constructor(props) {
		super(props);
		const { page, pageCount } = this.props.pages;
		this.state = { activePage: page, pageCount, visiblePagination: Range(1, 10) }
	}

	componentWillReceiveProps(nextProps) {
		const { page, pageCount } = nextProps.pages;
		const { visiblePagination, activePage } = this.state;
		const controllerParams = {
			start: visiblePagination[0],
			end: visiblePagination[visiblePagination.length - 1],
			count: page - activePage,
			pageCount
		}

		if(page && pageCount) {
			this.setState({ activePage: page, pageCount, visiblePagination: paginationController(controllerParams) });
		} else {
			this.setState({ activePage: 0, pageCount: 0 });
		}
	}

	fontAdjust = number => {
		switch(`${number}`.length) {
			case 1:
				return { fontSize: 15 };
			case 2:
				return { fontSize: 13 };
			case 3:
				return { fontSize: 10 };
			default:
				return { fontSize: 8 };
		}
	}

	render() {
		const { activePage, pageCount, visiblePagination } = this.state;
		const { container, active, normal, pageNumStyle, touchableButton } = styles;

		return (
			<View style={container}>
				<ArrowButtons arrow='<' activePage={activePage} pageCount={pageCount} slidePageSetup={this.props.slidePageSetup}/>
				{visiblePagination.map(page => {

					return (
						<TouchableOpacity
							key={page}
							style={touchableButton}
							onPress={() => this.props.selectPage(page)}>
								<Text
									style={[pageNumStyle, (page === activePage ? active : normal), this.fontAdjust(page)]}
									numberOfLines={1}>{page}</Text>
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
		textAlign: 'center',
		lineHeight: 20,
		width: 20
	},
	arrowStyle: {
		textAlign: 'center',
		width: 16,
		fontSize: 10
	}
});

export default Pagination;