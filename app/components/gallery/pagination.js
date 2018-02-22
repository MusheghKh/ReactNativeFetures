import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Range, stringDuplication } from '../../helpers/custom-helper-functions';

class ArrowButtons extends Component {
	constructor(props) {
		super(props);
		const { arrow, activePage, pageCount } = this.props;
		this.state = { arrow, activePage, pageCount };
	}

	checkButtonDisability = () => {
		const { arrow, activePage, pageCount } = this.state;
		return arrow === '<' && Range(1, 10).includes(activePage) || arrow === '>' && Range(pageCount - 10, pageCount).includes(activePage);
	}

	render() {
		const { arrow, activePage, pageCount } = this.state;
		const { touchableButton, active, pageNumStyle } = styles;

		return (
			<View>
				<TouchableOpacity
					style={[touchableButton, active]}
					disabled={this.checkButtonDisability()}
					onPress={() => this.props.slidePageSetup(arrow, 3)}>
						<Text style={pageNumStyle}>{stringDuplication(arrow, 3)}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[touchableButton, active]}
					disabled={this.checkButtonDisability()}
					onPress={() => this.props.slidePageSetup(arrow, 2)}>
						<Text style={pageNumStyle}>{stringDuplication(arrow, 2)}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[touchableButton, active]}
					disabled={this.checkButtonDisability()}
					onPress={() => this.props.slidePageSetup(arrow, 1)}>
						<Text style={pageNumStyle}>{stringDuplication(arrow, 1)}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage: this.props.pages.page,
			pageCount: this.props.pages.pageCount
		}
	}

	componentWillReceiveProps(nextProps) {
		const { page, pageCount } = nextProps;

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
				<ArrowButtons arrow='<' activePage={activePage} pageCount={pageCount}/>
				{Array(pageCount > 10 && 10 || pageCount).fill().map((elem, index) => {
					const pageNum = index + 1;
					return (
						<TouchableOpacity
							key={pageNum}
							style={[touchableButton, (pageNum === activePage ? active : normal)]}
							onPress={() => this.props.selectPage(pageNum)}>
								<Text style={pageNumStyle}>{pageNum}</Text>
						</TouchableOpacity>
					)
				})}
				<ArrowButtons arrow='>' activePage={activePage} pageCount={pageCount}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	touchableButton: {
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	active: {
		color: '#81c04d',
		background: '#fff'
	},
	normal: {
		color: '#333',
		background: '#f1f1eb'
	},
	pageNumStyle: {
		color: 'inherit',
		background: 'inherit',
		textAlign: 'center'
	}
});

export default Pagination;