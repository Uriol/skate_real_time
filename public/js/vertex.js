var increment = 0.5;
var centerAxis = 0;
var noseTopPositions = [ 
	[24+centerAxis, 2,  6],
	[ 24.5+centerAxis, 2.15,  6],
	[ 24.5+centerAxis, 2.15,  -6],

	[ 24.5+centerAxis,  2.15,  -6],
	[ 24+centerAxis,  2,  -6],
	[ 24+centerAxis,  2,  6],

	[24.5+centerAxis, 2.15,  6],
	[ 25+centerAxis, 2.30,  6],
	[ 25+centerAxis,  2.30,  -6],

	[ 25+centerAxis,  2.30,  -6],
	[ 24.5+centerAxis, 2.15,  -6],
	[ 24.5+centerAxis,  2.15,  6],

	[25+centerAxis, 2.30,  6],
	[ 25.5+centerAxis, 2.45,  6],
	[ 25.5+centerAxis,  2.45,  -6],

	[ 25.5+centerAxis,  2.45,  -6],
	[ 25+centerAxis,  2.30,  -6],
	[ 25+centerAxis,  2.30,  6],

	[25.5+centerAxis, 2.45,  6],
	[ 26+centerAxis, 2.60,  6],
	[ 26+centerAxis,  2.60,  -6],

	[ 26+centerAxis,  2.60,  -6],
	[ 25.5+centerAxis,  2.45,  -6],
	[ 25.5+centerAxis,  2.45,  6],


	[26+centerAxis, 2.60,  6],
	[ 26.5+centerAxis, 2.75,  6],
	[ 26.5+centerAxis,  2.75,  -6],

	[ 26.5+centerAxis,  2.75,  -6],
	[ 26+centerAxis,  2.60,  -6],
	[ 26+centerAxis,  2.60,  6],

	[26.5+centerAxis, 2.75,  6],
	[ 27+centerAxis, 2.90,  6],
	[ 27+centerAxis,  2.90,  -6],

	[ 27+centerAxis,  2.90,  -6],
	[ 26.5+centerAxis,  2.75,  -6],
	[ 26.5+centerAxis,  2.75,  6],



	[ 27+centerAxis, 2.90,  6],
	[27.5+centerAxis, 3.05, 5.9],
	[27.5+centerAxis, 3.05, -5.9],

	[27.5+centerAxis, 3.05, -5.9],
	[27+centerAxis, 2.90, -6],
	[27+centerAxis, 2.90, 6],

	[27.5+centerAxis, 3.05, 5.9],
	[28+centerAxis, 3.20, 5.8],
	[28+centerAxis, 3.20, -5.8],

	[28+centerAxis, 3.20, -5.8],
	[27.5+centerAxis, 3.05, -5.9],
	[27.5+centerAxis, 3.05, 5.9],

	[28+centerAxis, 3.20, 5.8],
	[28.5+centerAxis, 3.35, 5.7],
	[28.5+centerAxis, 3.35, -5.7],

	[28.5+centerAxis, 3.35, -5.7],
	[28+centerAxis, 3.20, -5.8],
	[28+centerAxis, 3.20, 5.8],

	[28.5+centerAxis, 3.35, 5.7],
	[29+centerAxis, 3.50, 5.6],
	[29+centerAxis, 3.50, -5.6],

	[29+centerAxis, 3.50, -5.6],
	[28.5+centerAxis, 3.35, -5.7],
	[28.5+centerAxis, 3.35, 5.7],

	[29+centerAxis, 3.50, 5.6],
	[29.5+centerAxis, 3.65, 5.5],
	[29.5+centerAxis, 3.65, -5.5],

	[29.5+centerAxis, 3.65, -5.5],
	[29+centerAxis, 3.50, -5.6],
	[29+centerAxis, 3.50, 5.6],

	[29.5+centerAxis, 3.65, 5.5],
	[30+centerAxis, 3.80, 5.4],
	[30+centerAxis, 3.80, -5.4],

	[30+centerAxis, 3.80, -5.4],
	[29.5+centerAxis, 3.65, -5.5],
	[29.5+centerAxis, 3.65, 5.5],

	[30+centerAxis, 3.80, 5.4],
	[30.5+centerAxis, 3.95, 5.2],
	[30.5+centerAxis, 3.95, -5.2],

	[30.5+centerAxis, 3.95, -5.2],
	[30+centerAxis, 3.80, -5.4],
	[30+centerAxis, 3.80, 5.4],

	[30.5+centerAxis, 3.95, 5.2],
	[31+centerAxis, 4.1, 5],
	[31+centerAxis, 4.1, -5],

	[31+centerAxis, 4.1, -5],
	[30.5+centerAxis, 3.95, -5.2],
	[30.5+centerAxis, 3.95, 5.2],

	[31+centerAxis, 4.1, 5],
	[31.5+centerAxis,4.25, 4.7],
	[31.5+centerAxis, 4.25, -4.7],

	[31.5+centerAxis, 4.25, -4.7],
	[31+centerAxis, 4.1, -5],
	[31+centerAxis, 4.1, 5],

	[31.5+centerAxis, 4.25, 4.7],
	[32+centerAxis, 4.40, 4.5],
	[32+centerAxis, 4.40, -4.5],

	[32+centerAxis, 4.40, -4.5],
	[31.5+centerAxis, 4.25, -4.7],
	[31.5+centerAxis, 4.25, 4.7],

	[32+centerAxis, 4.40, 4.5],
	[32.5+centerAxis, 4.55, 4],
	[32.5+centerAxis, 4.55, -4],

	[32.5+centerAxis, 4.55, -4],
	[32+centerAxis, 4.40, -4.5],
	[32+centerAxis, 4.40, 4.5],

	[32.5+centerAxis, 4.55, 4],
	[33+centerAxis, 4.70, 3.5],
	[33+centerAxis, 4.70, -3.5],

	[33+centerAxis, 4.70, -3.5],
	[32.5+centerAxis, 4.55, -4],
	[32.5+centerAxis, 4.55, 4],

	[33+centerAxis, 4.70, 3.5],
	[33.5+centerAxis, 4.85, 2.5],
	[33.5+centerAxis, 4.85, -2.5],

	[33.5+centerAxis, 4.85, -2.5],
	[33+centerAxis, 4.70, -3.5],
	[33+centerAxis, 4.70, 3.5],

	[33.5+centerAxis, 4.85, 2.5],
	[34+centerAxis, 5, 0],
	[33.5+centerAxis, 4.85, -2.5]
];





var noseBottomPositions = [ 
	[24+centerAxis, 1+increment,  6],
	[ 24.5+centerAxis, 1.15+increment,  6],
	[ 24.5+centerAxis, 1.15+increment,  -6],

	[ 24.5+centerAxis,  1.15+increment,  -6],
	[ 24+centerAxis,  1+increment,  -6],
	[ 24+centerAxis,  1+increment,  6],

	[24.5+centerAxis, 1.15+increment,  6],
	[ 25+centerAxis, 1.30+increment,  6],
	[ 25+centerAxis,  1.30+increment,  -6],

	[ 25+centerAxis,  1.30+increment,  -6],
	[ 24.5+centerAxis, 1.15+increment,  -6],
	[ 24.5+centerAxis,  1.15+increment,  6],

	[25+centerAxis, 1.30+increment,  6],
	[ 25.5+centerAxis, 1.45+increment,  6],
	[ 25.5+centerAxis,  1.45+increment,  -6],

	[ 25.5+centerAxis,  1.45+increment,  -6],
	[ 25+centerAxis,  1.30+increment,  -6],
	[ 25+centerAxis,  1.30+increment,  6],

	[25.5+centerAxis, 1.45+increment,  6],
	[ 26+centerAxis, 1.60+increment,  6],
	[ 26+centerAxis,  1.60+increment,  -6],

	[ 26+centerAxis,  1.60+increment,  -6],
	[ 25.5+centerAxis,  1.45+increment,  -6],
	[ 25.5+centerAxis,  1.45+increment,  6],


	[26+centerAxis, 1.60+increment,  6],
	[ 26.5+centerAxis, 1.75+increment,  6],
	[ 26.5+centerAxis,  1.75+increment,  -6],

	[ 26.5+centerAxis,  1.75+increment,  -6],
	[ 26+centerAxis,  1.60+increment,  -6],
	[ 26+centerAxis,  1.60+increment,  6],

	[26.5+centerAxis, 1.75+increment,  6],
	[ 27+centerAxis, 1.90+increment,  6],
	[ 27+centerAxis,  1.90+increment,  -6],

	[ 27+centerAxis,  1.90+increment,  -6],
	[ 26.5+centerAxis,  1.75+increment,  -6],
	[ 26.5+centerAxis,  1.75+increment,  6],



	[ 27+centerAxis, 1.90+increment,  6],
	[27.5+centerAxis, 2.05+increment, 5.9],
	[27.5+centerAxis, 2.05+increment, -5.9],

	[27.5+centerAxis, 2.05+increment, -5.9],
	[27+centerAxis, 1.90+increment, -6],
	[27+centerAxis, 1.90+increment, 6],

	[27.5+centerAxis, 2.05+increment, 5.9],
	[28+centerAxis, 2.20+increment, 5.8],
	[28+centerAxis, 2.20+increment, -5.8],

	[28+centerAxis, 2.20+increment, -5.8],
	[27.5+centerAxis, 2.05+increment, -5.9],
	[27.5+centerAxis, 2.05+increment, 5.9],

	[28+centerAxis, 2.20+increment, 5.8],
	[28.5+centerAxis, 2.35+increment, 5.7],
	[28.5+centerAxis, 2.35+increment, -5.7],

	[28.5+centerAxis, 2.35+increment, -5.7],
	[28+centerAxis, 2.20+increment, -5.8],
	[28+centerAxis, 2.20+increment, 5.8],

	[28.5+centerAxis, 2.35+increment, 5.7],
	[29+centerAxis, 2.50+increment, 5.6],
	[29+centerAxis, 2.50+increment, -5.6],

	[29+centerAxis, 2.50+increment, -5.6],
	[28.5+centerAxis, 2.35+increment, -5.7],
	[28.5+centerAxis, 2.35+increment, 5.7],

	[29+centerAxis, 2.50+increment, 5.6],
	[29.5+centerAxis, 2.65+increment, 5.5],
	[29.5+centerAxis, 2.65+increment, -5.5],

	[29.5+centerAxis, 2.65+increment, -5.5],
	[29+centerAxis, 2.50+increment, -5.6],
	[29+centerAxis, 2.50+increment, 5.6],

	[29.5+centerAxis, 2.65+increment, 5.5],
	[30+centerAxis, 2.80+increment, 5.4],
	[30+centerAxis, 2.80+increment, -5.4],

	[30+centerAxis, 2.80+increment, -5.4],
	[29.5+centerAxis, 2.65+increment, -5.5],
	[29.5+centerAxis, 2.65+increment, 5.5],

	[30+centerAxis, 2.80+increment, 5.4],
	[30.5+centerAxis, 2.95+increment, 5.2],
	[30.5+centerAxis, 2.95+increment, -5.2],

	[30.5+centerAxis, 2.95+increment, -5.2],
	[30+centerAxis, 2.80+increment, -5.4],
	[30+centerAxis, 2.80+increment, 5.4],

	[30.5+centerAxis, 2.95+increment, 5.2],
	[31+centerAxis, 3.1+increment, 5],
	[31+centerAxis, 3.1+increment, -5],

	[31+centerAxis, 3.1+increment, -5],
	[30.5+centerAxis, 2.95+increment, -5.2],
	[30.5+centerAxis, 2.95+increment, 5.2],

	[31+centerAxis, 3.1+increment, 5],
	[31.5+centerAxis,3.25+increment, 4.7],
	[31.5+centerAxis, 3.25+increment, -4.7],

	[31.5+centerAxis, 3.25+increment, -4.7],
	[31+centerAxis, 3.1+increment, -5],
	[31+centerAxis, 3.1+increment, 5],

	[31.5+centerAxis, 3.25+increment, 4.7],
	[32+centerAxis, 3.40+increment, 4.5],
	[32+centerAxis, 3.40+increment, -4.5],

	[32+centerAxis, 3.40+increment, -4.5],
	[31.5+centerAxis, 3.25+increment, -4.7],
	[31.5+centerAxis, 3.25+increment, 4.7],

	[32+centerAxis, 3.40+increment, 4.5],
	[32.5+centerAxis, 3.55+increment, 4],
	[32.5+centerAxis, 3.55+increment, -4],

	[32.5+centerAxis, 3.55+increment, -4],
	[32+centerAxis, 3.40+increment, -4.5],
	[32+centerAxis, 3.40+increment, 4.5],

	[32.5+centerAxis, 3.55+increment, 4],
	[33+centerAxis, 3.70+increment, 3.5],
	[33+centerAxis, 3.70+increment, -3.5],

	[33+centerAxis, 3.70+increment, -3.5],
	[32.5+centerAxis, 3.55+increment, -4],
	[32.5+centerAxis, 3.55+increment, 4],

	[33+centerAxis, 3.70+increment, 3.5],
	[33.5+centerAxis, 3.85+increment, 2.5],
	[33.5+centerAxis, 3.85+increment, -2.5],

	[33.5+centerAxis, 3.85+increment, -2.5],
	[33+centerAxis, 3.70+increment, -3.5],
	[33+centerAxis, 3.70+increment, 3.5],

	[33.5+centerAxis, 3.85+increment, 2.5],
	[34+centerAxis, 4+increment, 0],
	[33.5+centerAxis, 3.85+increment, -2.5]
];


var noseRightEdgePositions = [
	[24+centerAxis,1+increment,6],
	[24.5+centerAxis,1.15+increment,6],
	[24.5+centerAxis, 2.15, 6],

	[24.5+centerAxis, 2.15, 6],
	[24+centerAxis, 2, 6],
	[24+centerAxis, 1+increment, 6],

	[24.5+centerAxis, 1.15+increment, 6],
	[25+centerAxis, 1.3+increment, 6],
	[25+centerAxis, 2.3, 6],

	[25+centerAxis, 2.3, 6],
	[24.5+centerAxis, 2.15, 6],
	[24.5+centerAxis, 1.15+increment, 6],

	[25+centerAxis, 1.3+increment, 6],
	[25.5+centerAxis, 1.45+increment, 6],
	[25.5+centerAxis, 2.45, 6],

	[25.5+centerAxis, 2.45, 6],
	[25+centerAxis, 2.3, 6],
	[25+centerAxis, 1.3+increment, 6],

	[25.5+centerAxis, 1.45+increment, 6],
	[26+centerAxis, 1.6+increment, 6],
	[26+centerAxis, 2.6, 6],

	[26+centerAxis, 2.6, 6],
	[25.5+centerAxis, 2.45, 6],
	[25.5+centerAxis, 1.45+increment, 6],

	[26+centerAxis, 1.6+increment, 6],
	[26.5+centerAxis, 1.75+increment, 6],
	[26.5+centerAxis, 2.75, 6],

	[26.5+centerAxis, 2.75, 6],
	[26+centerAxis, 2.6, 6],
	[26+centerAxis, 1.6+increment, 6],

	[26.5+centerAxis, 1.75+increment, 6],
	[27+centerAxis, 1.9+increment, 6],
	[27+centerAxis, 2.9, 6],

	[27+centerAxis, 2.9, 6],
	[26.5+centerAxis, 2.75, 6],
	[26.5+centerAxis, 1.75+increment, 6],

	[27+centerAxis, 1.9+increment, 6],
	[27.5+centerAxis, 2.05+increment, 5.9],
	[27.5+centerAxis, 3.05, 5.9],

	[27.5+centerAxis, 3.05, 5.9],
	[27+centerAxis, 2.9, 6],
	[27+centerAxis, 1.9+increment, 6],

	[27.5+centerAxis, 2.05+increment, 5.9],
	[28+centerAxis, 2.2+increment, 5.8],
	[28+centerAxis, 3.2, 5.8],

	[28+centerAxis, 3.2, 5.8],
	[27.5+centerAxis, 3.05, 5.9],
	[27.5+centerAxis, 2.05+increment, 5.9],

	[28+centerAxis, 2.2+increment, 5.8],
	[28.5+centerAxis, 2.35+increment, 5.7],
	[28.5+centerAxis, 3.35, 5.7],

	[28.5+centerAxis, 3.35, 5.7],
	[28+centerAxis, 3.2, 5.8],
	[28+centerAxis, 2.2+increment, 5.8],

	[28.5+centerAxis, 2.35+increment, 5.7],
	[29+centerAxis, 2.5+increment, 5.6],
	[29+centerAxis, 3.5, 5.6],

	[29+centerAxis, 3.5, 5.6],
	[28.5+centerAxis, 3.35, 5.7],
	[28.5+centerAxis, 2.35+increment, 5.7],

	[29+centerAxis, 2.5+increment, 5.6],
	[29.5+centerAxis, 2.65+increment, 5.5],
	[29.5+centerAxis, 3.65, 5.5],

	[29.5+centerAxis, 3.65, 5.5],
	[29+centerAxis, 3.5, 5.6],
	[29+centerAxis, 2.5+increment, 5.6],

	[29.5+centerAxis, 2.65+increment, 5.5],
	[30+centerAxis, 2.8+increment, 5.4],
	[30+centerAxis, 3.8, 5.4],

	[30+centerAxis, 3.8, 5.4],
	[29.5+centerAxis, 3.65, 5.5],
	[29.5+centerAxis, 2.65+increment, 5.5],

	[30+centerAxis, 2.8+increment, 5.4],
	[30.5+centerAxis, 2.95+increment, 5.2],
	[30.5+centerAxis, 3.95, 5.2],

	[30.5+centerAxis, 3.95, 5.2],
	[30+centerAxis, 3.8, 5.4],
	[30+centerAxis, 2.8+increment, 5.4],

	[30.5+centerAxis, 2.95+increment, 5.2],
	[31+centerAxis, 3.1+increment, 5],
	[31+centerAxis, 4.1, 5],

	[31+centerAxis, 4.1, 5],
	[30.5+centerAxis, 3.95, 5.2],
	[30.5+centerAxis, 2.95+increment, 5.2],

	[31+centerAxis, 3.1+increment, 5],
	[31.5+centerAxis, 3.25+increment, 4.7],
	[31.5+centerAxis, 4.25, 4.7],

	[31.5+centerAxis, 4.25, 4.7],
	[31+centerAxis, 4.1, 5],
	[31+centerAxis, 3.1+increment, 5],

	[31.5+centerAxis, 3.25+increment, 4.7],
	[32+centerAxis, 3.4+increment, 4.5],
	[32+centerAxis, 4.4, 4.5],

	[32+centerAxis, 4.4, 4.5],
	[31.5+centerAxis, 4.25, 4.7],
	[31.5+centerAxis, 3.25+increment, 4.7],

	[32+centerAxis, 3.4+increment, 4.5],
	[32.5+centerAxis, 3.55+increment, 4],
	[32.5+centerAxis, 4.55, 4],

	[32.5+centerAxis, 4.55, 4],
	[32+centerAxis, 4.4, 4.5],
	[32+centerAxis, 3.4+increment, 4.5],

	[32.5+centerAxis, 3.55+increment, 4],
	[33+centerAxis, 3.7+increment, 3.5],
	[33+centerAxis, 4.7, 3.5],

	[33+centerAxis, 4.7, 3.5],
	[32.5+centerAxis, 4.55, 4],
	[32.5+centerAxis, 3.55+increment, 4],

	[33+centerAxis, 3.7+increment, 3.5],
	[33.5+centerAxis, 3.85+increment, 2.5],
	[33.5+centerAxis, 4.85, 2.5],

	[33.5+centerAxis, 4.85, 2.5],
	[33+centerAxis, 4.7, 3.5],
	[33+centerAxis, 3.7+increment, 3.5],

	[33.5+centerAxis, 3.85+increment, 2.5],
	[34+centerAxis, 4+increment, 0],
	[34+centerAxis, 5, 0],

	[34+centerAxis, 5, 0],
	[33.5+centerAxis, 4.85, 2.5],
	[33.5+centerAxis, 3.85+increment, 2.5]
];



var noseLeftEdgePositions = [
	[24+centerAxis,1+increment,-6],
	[24.5+centerAxis,1.15+increment,-6],
	[24.5+centerAxis, 2.15, -6],

	[24.5+centerAxis, 2.15, -6],
	[24+centerAxis, 2, -6],
	[24+centerAxis, 1+increment, -6],

	[24.5+centerAxis, 1.15+increment, -6],
	[25+centerAxis, 1.3+increment, -6],
	[25+centerAxis, 2.3, -6],

	[25+centerAxis, 2.3, -6],
	[24.5+centerAxis, 2.15, -6],
	[24.5+centerAxis, 1.15+increment, -6],

	[25+centerAxis, 1.3+increment, -6],
	[25.5+centerAxis, 1.45+increment, -6],
	[25.5+centerAxis, 2.45, -6],

	[25.5+centerAxis, 2.45, -6],
	[25+centerAxis, 2.3, -6],
	[25+centerAxis, 1.3+increment, -6],

	[25.5+centerAxis, 1.45+increment, -6],
	[26+centerAxis, 1.6+increment, -6],
	[26+centerAxis, 2.6, -6],

	[26+centerAxis, 2.6, -6],
	[25.5+centerAxis, 2.45, -6],
	[25.5+centerAxis, 1.45+increment, -6],

	[26+centerAxis, 1.6+increment, -6],
	[26.5+centerAxis, 1.75+increment, -6],
	[26.5+centerAxis, 2.75, -6],

	[26.5+centerAxis, 2.75, -6],
	[26+centerAxis, 2.6, -6],
	[26+centerAxis, 1.6+increment, -6],

	[26.5+centerAxis, 1.75+increment, -6],
	[27+centerAxis, 1.9+increment, -6],
	[27+centerAxis, 2.9, -6],

	[27+centerAxis, 2.9, -6],
	[26.5+centerAxis, 2.75, -6],
	[26.5+centerAxis, 1.75+increment, -6],

	[27+centerAxis, 1.9+increment, -6],
	[27.5+centerAxis, 2.05+increment, -5.9],
	[27.5+centerAxis, 3.05, -5.9],

	[27.5+centerAxis, 3.05, -5.9],
	[27+centerAxis, 2.9, -6],
	[27+centerAxis, 1.9+increment, -6],

	[27.5+centerAxis, 2.05+increment, -5.9],
	[28+centerAxis, 2.2+increment, -5.8],
	[28+centerAxis, 3.2, -5.8],

	[28+centerAxis, 3.2, -5.8],
	[27.5+centerAxis, 3.05, -5.9],
	[27.5+centerAxis, 2.05+increment, -5.9],

	[28+centerAxis, 2.2+increment, -5.8],
	[28.5+centerAxis, 2.35+increment, -5.7],
	[28.5+centerAxis, 3.35, -5.7],

	[28.5+centerAxis, 3.35, -5.7],
	[28+centerAxis, 3.2, -5.8],
	[28+centerAxis, 2.2+increment, -5.8],

	[28.5+centerAxis, 2.35+increment, -5.7],
	[29+centerAxis, 2.5+increment, -5.6],
	[29+centerAxis, 3.5, -5.6],

	[29+centerAxis, 3.5, -5.6],
	[28.5+centerAxis, 3.35, -5.7],
	[28.5+centerAxis, 2.35+increment, -5.7],

	[29+centerAxis, 2.5+increment, -5.6],
	[29.5+centerAxis, 2.65+increment, -5.5],
	[29.5+centerAxis, 3.65, -5.5],

	[29.5+centerAxis, 3.65, -5.5],
	[29+centerAxis, 3.5, -5.6],
	[29+centerAxis, 2.5+increment, -5.6],

	[29.5+centerAxis, 2.65+increment, -5.5],
	[30+centerAxis, 2.8+increment, -5.4],
	[30+centerAxis, 3.8, -5.4],

	[30+centerAxis, 3.8, -5.4],
	[29.5+centerAxis, 3.65, -5.5],
	[29.5+centerAxis, 2.65+increment, -5.5],

	[30+centerAxis, 2.8+increment, -5.4],
	[30.5+centerAxis, 2.95+increment, -5.2],
	[30.5+centerAxis, 3.95, -5.2],

	[30.5+centerAxis, 3.95, -5.2],
	[30+centerAxis, 3.8, -5.4],
	[30+centerAxis, 2.8+increment, -5.4],

	[30.5+centerAxis, 2.95+increment, -5.2],
	[31+centerAxis, 3.1+increment, -5],
	[31+centerAxis, 4.1, -5],

	[31+centerAxis, 4.1, -5],
	[30.5+centerAxis, 3.95, -5.2],
	[30.5+centerAxis, 2.95+increment, -5.2],

	[31+centerAxis, 3.1+increment, -5],
	[31.5+centerAxis, 3.25+increment, -4.7],
	[31.5+centerAxis, 4.25, -4.7],

	[31.5+centerAxis, 4.25, -4.7],
	[31+centerAxis, 4.1, -5],
	[31+centerAxis, 3.1+increment, -5],

	[31.5+centerAxis, 3.25+increment, -4.7],
	[32+centerAxis, 3.4+increment, -4.5],
	[32+centerAxis, 4.4, -4.5],

	[32+centerAxis, 4.4, -4.5],
	[31.5+centerAxis, 4.25, -4.7],
	[31.5+centerAxis, 3.25+increment, -4.7],

	[32+centerAxis, 3.4+increment, -4.5],
	[32.5+centerAxis, 3.55+increment, -4],
	[32.5+centerAxis, 4.55, -4],

	[32.5+centerAxis, 4.55, -4],
	[32+centerAxis, 4.4, -4.5],
	[32+centerAxis, 3.4+increment, -4.5],

	[32.5+centerAxis, 3.55+increment, -4],
	[33+centerAxis, 3.7+increment, -3.5],
	[33+centerAxis, 4.7, -3.5],

	[33+centerAxis, 4.7, -3.5],
	[32.5+centerAxis, 4.55, -4],
	[32.5+centerAxis, 3.55+increment, -4],

	[33+centerAxis, 3.7+increment, -3.5],
	[33.5+centerAxis, 3.85+increment, -2.5],
	[33.5+centerAxis, 4.85, -2.5],

	[33.5+centerAxis, 4.85, -2.5],
	[33+centerAxis, 4.7, -3.5],
	[33+centerAxis, 3.7+increment, -3.5],

	[33.5+centerAxis, 3.85+increment, -2.5],
	[34+centerAxis, 4+increment, 0],
	[34+centerAxis, 5, 0],

	[34+centerAxis, 5, 0],
	[33.5+centerAxis, 4.85, -2.5],
	[33.5+centerAxis, 3.85+increment, -2.5]
];



var tailTopPositions = [ 
	[-24, 2,  6],
	[ -24.5, 2.15,  6],
	[ -24.5, 2.15,  -6],

	[ -24.5,  2.15,  -6],
	[ -24,  2,  -6],
	[ -24,  2,  6],

	[-24.5, 2.15,  6],
	[ -25, 2.30,  6],
	[ -25,  2.30,  -6],

	[ -25,  2.30,  -6],
	[ -24.5, 2.15,  -6],
	[ -24.5,  2.15,  6],

	[-25, 2.30,  6],
	[ -25.5, 2.45,  6],
	[ -25.5,  2.45,  -6],

	[ -25.5,  2.45,  -6],
	[ -25,  2.30,  -6],
	[ -25,  2.30,  6],

	[-25.5, 2.45,  6],
	[ -26, 2.60,  6],
	[ -26,  2.60,  -6],

	[ -26,  2.60,  -6],
	[ -25.5,  2.45,  -6],
	[ -25.5,  2.45,  6],


	[-26, 2.60,  6],
	[ -26.5, 2.75,  6],
	[ -26.5,  2.75,  -6],

	[ -26.5,  2.75,  -6],
	[ -26,  2.60,  -6],
	[ -26,  2.60,  6],

	[-26.5, 2.75,  6],
	[ -27, 2.90,  6],
	[ -27,  2.90,  -6],

	[ -27,  2.90,  -6],
	[ -26.5,  2.75,  -6],
	[ -26.5,  2.75,  6],



	[ -27, 2.90,  6],
	[-27.5, 3.05, 5.9],
	[-27.5, 3.05, -5.9],

	[-27.5, 3.05, -5.9],
	[-27, 2.90, -6],
	[-27, 2.90, 6],

	[-27.5, 3.05, 5.9],
	[-28, 3.20, 5.8],
	[-28, 3.20, -5.8],

	[-28, 3.20, -5.8],
	[-27.5, 3.05, -5.9],
	[-27.5, 3.05, 5.9],

	[-28, 3.20, 5.8],
	[-28.5, 3.35, 5.7],
	[-28.5, 3.35, -5.7],

	[-28.5, 3.35, -5.7],
	[-28, 3.20, -5.8],
	[-28, 3.20, 5.8],

	[-28.5, 3.35, 5.7],
	[-29, 3.50, 5.6],
	[-29, 3.50, -5.6],

	[-29, 3.50, -5.6],
	[-28.5, 3.35, -5.7],
	[-28.5, 3.35, 5.7],

	[-29, 3.50, 5.6],
	[-29.5, 3.65, 5.5],
	[-29.5, 3.65, -5.5],

	[-29.5, 3.65, -5.5],
	[-29, 3.50, -5.6],
	[-29, 3.50, 5.6],

	[-29.5, 3.65, 5.5],
	[-30, 3.80, 5.4],
	[-30, 3.80, -5.4],

	[-30, 3.80, -5.4],
	[-29.5, 3.65, -5.5],
	[-29.5, 3.65, 5.5],

	[-30, 3.80, 5.4],
	[-30.5, 3.95, 5.2],
	[-30.5, 3.95, -5.2],

	[-30.5, 3.95, -5.2],
	[-30, 3.80, -5.4],
	[-30, 3.80, 5.4],

	[-30.5, 3.95, 5.2],
	[-31, 4.1, 5],
	[-31, 4.1, -5],

	[-31, 4.1, -5],
	[-30.5, 3.95, -5.2],
	[-30.5, 3.95, 5.2],

	[-31, 4.1, 5],
	[-31.5,4.25, 4.7],
	[-31.5, 4.25, -4.7],

	[-31.5, 4.25, -4.7],
	[-31, 4.1, -5],
	[-31, 4.1, 5],

	[-31.5, 4.25, 4.7],
	[-32, 4.40, 4.5],
	[-32, 4.40, -4.5],

	[-32, 4.40, -4.5],
	[-31.5, 4.25, -4.7],
	[-31.5, 4.25, 4.7],

	[-32, 4.40, 4.5],
	[-32.5, 4.55, 4],
	[-32.5, 4.55, -4],

	[-32.5, 4.55, -4],
	[-32, 4.40, -4.5],
	[-32, 4.40, 4.5],

	[-32.5, 4.55, 4],
	[-33, 4.70, 3.5],
	[-33, 4.70, -3.5],

	[-33, 4.70, -3.5],
	[-32.5, 4.55, -4],
	[-32.5, 4.55, 4],

	[-33, 4.70, 3.5],
	[-33.5, 4.85, 2.5],
	[-33.5, 4.85, -2.5],

	[-33.5, 4.85, -2.5],
	[-33, 4.70, -3.5],
	[-33, 4.70, 3.5],

	[-33.5, 4.85, 2.5],
	[-34, 5, 0],
	[-33.5, 4.85, -2.5]
];


var tailBottomPositions = [ 
	[-24, 1+increment,  6],
	[ -24.5, 1.15+increment,  6],
	[ -24.5, 1.15+increment,  -6],

	[-24.5,  1.15+increment,  -6],
	[ -24,  1+increment,  -6],
	[ -24,  1+increment,  6],

	[-24.5, 1.15+increment,  6],
	[ -25, 1.30+increment,  6],
	[ -25,  1.30+increment,  -6],

	[ -25,  1.30+increment,  -6],
	[ -24.5, 1.15+increment,  -6],
	[ -24.5,  1.15+increment,  6],

	[-25, 1.30+increment,  6],
	[ -25.5, 1.45+increment,  6],
	[ -25.5,  1.45+increment,  -6],

	[ -25.5,  1.45+increment,  -6],
	[ -25,  1.30+increment,  -6],
	[ -25,  1.30+increment,  6],

	[-25.5, 1.45+increment,  6],
	[ -26, 1.60+increment,  6],
	[ -26,  1.60+increment,  -6],

	[ -26,  1.60+increment,  -6],
	[ -25.5,  1.45+increment,  -6],
	[ -25.5,  1.45+increment,  6],


	[-26, 1.60+increment,  6],
	[ -26.5, 1.75+increment,  6],
	[ -26.5,  1.75+increment,  -6],

	[ -26.5,  1.75+increment,  -6],
	[ -26,  1.60+increment,  -6],
	[ -26,  1.60+increment,  6],

	[-26.5, 1.75+increment,  6],
	[ -27, 1.90+increment,  6],
	[ -27,  1.90+increment,  -6],

	[ -27,  1.90+increment,  -6],
	[ -26.5,  1.75+increment,  -6],
	[ -26.5,  1.75+increment,  6],



	[ -27, 1.90+increment,  6],
	[-27.5, 2.05+increment, 5.9],
	[-27.5, 2.05+increment, -5.9],

	[-27.5, 2.05+increment, -5.9],
	[-27, 1.90+increment, -6],
	[-27, 1.90+increment, 6],

	[-27.5, 2.05+increment, 5.9],
	[-28, 2.20+increment, 5.8],
	[-28, 2.20+increment, -5.8],

	[-28, 2.20+increment, -5.8],
	[-27.5, 2.05+increment, -5.9],
	[-27.5, 2.05+increment, 5.9],

	[-28, 2.20+increment, 5.8],
	[-28.5, 2.35+increment, 5.7],
	[-28.5, 2.35+increment, -5.7],

	[-28.5, 2.35+increment, -5.7],
	[-28, 2.20+increment, -5.8],
	[-28, 2.20+increment, 5.8],

	[-28.5, 2.35+increment, 5.7],
	[-29, 2.50+increment, 5.6],
	[-29, 2.50+increment, -5.6],

	[-29, 2.50+increment, -5.6],
	[-28.5, 2.35+increment, -5.7],
	[-28.5, 2.35+increment, 5.7],

	[-29, 2.50+increment, 5.6],
	[-29.5, 2.65+increment, 5.5],
	[-29.5, 2.65+increment, -5.5],

	[-29.5, 2.65+increment, -5.5],
	[-29, 2.50+increment, -5.6],
	[-29, 2.50+increment, 5.6],

	[-29.5, 2.65+increment, 5.5],
	[-30, 2.80+increment, 5.4],
	[-30, 2.80+increment, -5.4],

	[-30, 2.80+increment, -5.4],
	[-29.5, 2.65+increment, -5.5],
	[-29.5, 2.65+increment, 5.5],

	[-30, 2.80+increment, 5.4],
	[-30.5, 2.95+increment, 5.2],
	[-30.5, 2.95+increment, -5.2],

	[-30.5, 2.95+increment, -5.2],
	[-30, 2.80+increment, -5.4],
	[-30, 2.80+increment, 5.4],

	[-30.5, 2.95+increment, 5.2],
	[-31, 3.1+increment, 5],
	[-31, 3.1+increment, -5],

	[-31, 3.1+increment, -5],
	[-30.5, 2.95+increment, -5.2],
	[-30.5, 2.95+increment, 5.2],

	[-31, 3.1+increment, 5],
	[-31.5,3.25+increment, 4.7],
	[-31.5, 3.25+increment, -4.7],

	[-31.5, 3.25+increment, -4.7],
	[-31, 3.1+increment, -5],
	[-31, 3.1+increment, 5],

	[-31.5, 3.25+increment, 4.7],
	[-32, 3.40+increment, 4.5],
	[-32, 3.40+increment, -4.5],

	[-32, 3.40+increment, -4.5],
	[-31.5, 3.25+increment, -4.7],
	[-31.5, 3.25+increment, 4.7],

	[-32, 3.40+increment, 4.5],
	[-32.5, 3.55+increment, 4],
	[-32.5, 3.55+increment, -4],

	[-32.5, 3.55+increment, -4],
	[-32, 3.40+increment, -4.5],
	[-32, 3.40+increment, 4.5],

	[-32.5, 3.55+increment, 4],
	[-33, 3.70+increment, 3.5],
	[-33, 3.70+increment, -3.5],

	[-33, 3.70+increment, -3.5],
	[-32.5, 3.55+increment, -4],
	[-32.5, 3.55+increment, 4],

	[-33, 3.70+increment, 3.5],
	[-33.5, 3.85+increment, 2.5],
	[-33.5, 3.85+increment, -2.5],

	[-33.5, 3.85+increment, -2.5],
	[-33, 3.70+increment, -3.5],
	[-33, 3.70+increment, 3.5],

	[-33.5, 3.85+increment, 2.5],
	[-34, 4+increment, 0],
	[-33.5, 3.85+increment, -2.5]
];


var tailRightEdgePositions = [
	[-24,1+increment,6],
	[-24.5,1.15+increment,6],
	[-24.5, 2.15, 6],

	[-24.5, 2.15, 6],
	[-24, 2, 6],
	[-24, 1+increment, 6],

	[-24.5, 1.15+increment, 6],
	[-25, 1.3+increment, 6],
	[-25, 2.3, 6],

	[-25, 2.3, 6],
	[-24.5, 2.15, 6],
	[-24.5, 1.15+increment, 6],

	[-25, 1.3+increment, 6],
	[-25.5, 1.45+increment, 6],
	[-25.5, 2.45, 6],

	[-25.5, 2.45, 6],
	[-25, 2.3, 6],
	[-25, 1.3+increment, 6],

	[-25.5, 1.45+increment, 6],
	[-26, 1.6+increment, 6],
	[-26, 2.6, 6],

	[-26, 2.6, 6],
	[-25.5, 2.45, 6],
	[-25.5, 1.45+increment, 6],

	[-26, 1.6+increment, 6],
	[-26.5, 1.75+increment, 6],
	[-26.5, 2.75, 6],

	[-26.5, 2.75, 6],
	[-26, 2.6, 6],
	[-26, 1.6+increment, 6],

	[-26.5, 1.75+increment, 6],
	[-27, 1.9+increment, 6],
	[-27, 2.9, 6],

	[-27, 2.9, 6],
	[-26.5, 2.75, 6],
	[-26.5, 1.75+increment, 6],

	[-27, 1.9+increment, 6],
	[-27.5, 2.05+increment, 5.9],
	[-27.5, 3.05, 5.9],

	[-27.5, 3.05, 5.9],
	[-27, 2.9, 6],
	[-27, 1.9+increment, 6],

	[-27.5, 2.05+increment, 5.9],
	[-28, 2.2+increment, 5.8],
	[-28, 3.2, 5.8],

	[-28, 3.2, 5.8],
	[-27.5, 3.05, 5.9],
	[-27.5, 2.05+increment, 5.9],

	[-28, 2.2+increment, 5.8],
	[-28.5, 2.35+increment, 5.7],
	[-28.5, 3.35, 5.7],

	[-28.5, 3.35, 5.7],
	[-28, 3.2, 5.8],
	[-28, 2.2+increment, 5.8],

	[-28.5, 2.35+increment, 5.7],
	[-29, 2.5+increment, 5.6],
	[-29, 3.5, 5.6],

	[-29, 3.5, 5.6],
	[-28.5, 3.35, 5.7],
	[-28.5, 2.35+increment, 5.7],

	[-29, 2.5+increment, 5.6],
	[-29.5, 2.65+increment, 5.5],
	[-29.5, 3.65, 5.5],

	[-29.5, 3.65, 5.5],
	[-29, 3.5, 5.6],
	[-29, 2.5+increment, 5.6],

	[-29.5, 2.65+increment, 5.5],
	[-30, 2.8+increment, 5.4],
	[-30, 3.8, 5.4],

	[-30, 3.8, 5.4],
	[-29.5, 3.65, 5.5],
	[-29.5, 2.65+increment, 5.5],

	[-30, 2.8+increment, 5.4],
	[-30.5, 2.95+increment, 5.2],
	[-30.5, 3.95, 5.2],

	[-30.5, 3.95, 5.2],
	[-30, 3.8, 5.4],
	[-30, 2.8+increment, 5.4],

	[-30.5, 2.95+increment, 5.2],
	[-31, 3.1+increment, 5],
	[-31, 4.1, 5],

	[-31, 4.1, 5],
	[-30.5, 3.95, 5.2],
	[-30.5, 2.95+increment, 5.2],

	[-31, 3.1+increment, 5],
	[-31.5, 3.25+increment, 4.7],
	[-31.5, 4.25, 4.7],

	[-31.5, 4.25, 4.7],
	[-31, 4.1, 5],
	[-31, 3.1+increment, 5],

	[-31.5, 3.25+increment, 4.7],
	[-32, 3.4+increment, 4.5],
	[-32, 4.4, 4.5],

	[-32, 4.4, 4.5],
	[-31.5, 4.25, 4.7],
	[-31.5, 3.25+increment, 4.7],

	[-32, 3.4+increment, 4.5],
	[-32.5, 3.55+increment, 4],
	[-32.5, 4.55, 4],

	[-32.5, 4.55, 4],
	[-32, 4.4, 4.5],
	[-32, 3.4+increment, 4.5],

	[-32.5, 3.55+increment, 4],
	[-33, 3.7+increment, 3.5],
	[-33, 4.7, 3.5],

	[-33, 4.7, 3.5],
	[-32.5, 4.55, 4],
	[-32.5, 3.55+increment, 4],

	[-33, 3.7+increment, 3.5],
	[-33.5, 3.85+increment, 2.5],
	[-33.5, 4.85, 2.5],

	[-33.5, 4.85, 2.5],
	[-33, 4.7, 3.5],
	[-33, 3.7+increment, 3.5],

	[-33.5, 3.85+increment, 2.5],
	[-34, 4+increment, 0],
	[-34, 5, 0],

	[-34, 5, 0],
	[-33.5, 4.85, 2.5],
	[-33.5, 3.85+increment, 2.5]
];


var tailLeftEdgePositions = [
	[-24,1+increment,-6],
	[-24.5,1.15+increment,-6],
	[-24.5, 2.15, -6],

	[-24.5, 2.15, -6],
	[-24, 2, -6],
	[-24, 1+increment, -6],

	[-24.5, 1.15+increment, -6],
	[-25, 1.3+increment, -6],
	[-25, 2.3, -6],

	[-25, 2.3, -6],
	[-24.5, 2.15, -6],
	[-24.5, 1.15+increment, -6],

	[-25, 1.3+increment, -6],
	[-25.5, 1.45+increment, -6],
	[-25.5, 2.45, -6],

	[-25.5, 2.45, -6],
	[-25, 2.3, -6],
	[-25, 1.3+increment, -6],

	[-25.5, 1.45+increment, -6],
	[-26, 1.6+increment, -6],
	[-26, 2.6, -6],

	[-26, 2.6, -6],
	[-25.5, 2.45, -6],
	[-25.5, 1.45+increment, -6],

	[-26, 1.6+increment, -6],
	[-26.5, 1.75+increment, -6],
	[-26.5, 2.75, -6],

	[-26.5, 2.75, -6],
	[-26, 2.6, -6],
	[-26, 1.6+increment, -6],

	[-26.5, 1.75+increment, -6],
	[-27, 1.9+increment, -6],
	[-27, 2.9, -6],

	[-27, 2.9, -6],
	[-26.5, 2.75, -6],
	[-26.5, 1.75+increment, -6],

	[-27, 1.9+increment, -6],
	[-27.5, 2.05+increment, -5.9],
	[-27.5, 3.05, -5.9],

	[-27.5, 3.05, -5.9],
	[-27, 2.9, -6],
	[-27, 1.9+increment, -6],

	[-27.5, 2.05+increment, -5.9],
	[-28, 2.2+increment, -5.8],
	[-28, 3.2, -5.8],

	[-28, 3.2, -5.8],
	[-27.5, 3.05, -5.9],
	[-27.5, 2.05+increment, -5.9],

	[-28, 2.2+increment, -5.8],
	[-28.5, 2.35+increment, -5.7],
	[-28.5, 3.35, -5.7],

	[-28.5, 3.35, -5.7],
	[-28, 3.2, -5.8],
	[-28, 2.2+increment, -5.8],

	[-28.5, 2.35+increment, -5.7],
	[-29, 2.5+increment, -5.6],
	[-29, 3.5, -5.6],

	[-29, 3.5, -5.6],
	[-28.5, 3.35, -5.7],
	[-28.5, 2.35+increment, -5.7],

	[-29, 2.5+increment, -5.6],
	[-29.5, 2.65+increment, -5.5],
	[-29.5, 3.65, -5.5],

	[-29.5, 3.65, -5.5],
	[-29, 3.5, -5.6],
	[-29, 2.5+increment, -5.6],

	[-29.5, 2.65+increment, -5.5],
	[-30, 2.8+increment, -5.4],
	[-30, 3.8, -5.4],

	[-30, 3.8, -5.4],
	[-29.5, 3.65, -5.5],
	[-29.5, 2.65+increment, -5.5],

	[-30, 2.8+increment, -5.4],
	[-30.5, 2.95+increment, -5.2],
	[-30.5, 3.95, -5.2],

	[-30.5, 3.95, -5.2],
	[-30, 3.8, -5.4],
	[-30, 2.8+increment, -5.4],

	[-30.5, 2.95+increment, -5.2],
	[-31, 3.1+increment, -5],
	[-31, 4.1, -5],

	[-31, 4.1, -5],
	[-30.5, 3.95, -5.2],
	[-30.5, 2.95+increment, -5.2],

	[-31, 3.1+increment, -5],
	[-31.5, 3.25+increment, -4.7],
	[-31.5, 4.25, -4.7],

	[-31.5, 4.25, -4.7],
	[-31, 4.1, -5],
	[-31, 3.1+increment, -5],

	[-31.5, 3.25+increment, -4.7],
	[-32, 3.4+increment, -4.5],
	[-32, 4.4, -4.5],

	[-32, 4.4, -4.5],
	[-31.5, 4.25, -4.7],
	[-31.5, 3.25+increment, -4.7],

	[-32, 3.4+increment, -4.5],
	[-32.5, 3.55+increment, -4],
	[-32.5, 4.55, -4],

	[-32.5, 4.55, -4],
	[-32, 4.4, -4.5],
	[-32, 3.4+increment, -4.5],

	[-32.5, 3.55+increment, -4],
	[-33, 3.7+increment, -3.5],
	[-33, 4.7, -3.5],

	[-33, 4.7, -3.5],
	[-32.5, 4.55, -4],
	[-32.5, 3.55+increment, -4],

	[-33, 3.7+increment, -3.5],
	[-33.5, 3.85+increment, -2.5],
	[-33.5, 4.85, -2.5],

	[-33.5, 4.85, -2.5],
	[-33, 4.7, -3.5],
	[-33, 3.7+increment, -3.5],

	[-33.5, 3.85+increment, -2.5],
	[-34, 4+increment, 0],
	[-34, 5, 0],

	[-34, 5, 0],
	[-33.5, 4.85, -2.5],
	[-33.5, 3.85+increment, -2.5]
];


var rightTopLinePositions = [
	[-34, 5, 0],
	[-33.5, 4.85, 2.5],
	[-33, 4.7, 3.5], 

	[-32.5, 4.55, 4],
	[-32, 4.4, 4.5],
	[-31.5, 4.25, 4.7],
	
	[-31, 4.1, 5],
	[-30, 3.8, 5.4],
	[-29.5, 3.65, 5.5],

	[-29, 3.50, 5.6],
	[-28.5, 3.35, 5.7],
	[-28, 3.2, 5.8],

	[-27.5, 3.05, 5.9],
	[-27, 2.9, 6],
	[-26.5, 2.75, 6],

	[-26, 2.6, 6],
	[-25.5, 2.45, 6],
	[-25, 2.30, 6],

	[-24.5, 2.15, 6],
	[-24, 2, 6],
	[24, 2, 6],

	[24.5, 2.15, 6],
	[25, 2.3, 6],
	[25.5, 2.45, 6],

	[26, 2.6, 6],
	[26.5, 2.75, 6],
	[27, 2.9, 6],

	[27.5, 3.05, 5.9],
	[28, 3.2, 5.8],
	[28.5, 3.35, 5.7],

	[29, 3.5, 5.6],
	[29.5, 3.65, 5.5],
	[30, 3.8, 5.4],

	[31, 4.1, 5],
	[31.5, 4.25, 4.7],
	[32, 4.4, 4.5],

	[32.5, 4.55, 4],
	[33, 4.7, 3.5],
	[33.5, 4.85, 2.5],
	[34, 5, 0]
];


var rightBottomLinePositions = [
	[-34, 4+increment, 0],
	[-33.5, 3.85+increment, 2.5],
	[-33, 3.7+increment, 3.5], 

	[-32.5, 3.55+increment, 4],
	[-32, 3.4+increment, 4.5],
	[-31.5, 3.25+increment, 4.7],
	
	[-31, 3.1+increment, 5],
	[-30, 2.8+increment, 5.4],
	[-29.5, 2.65+increment, 5.5],

	[-29, 2.50+increment, 5.6],
	[-28.5, 2.35+increment, 5.7],
	[-28, 2.2+increment, 5.8],

	[-27.5, 2.05+increment, 5.9],
	[-27, 1.9+increment, 6],
	[-26.5, 1.75+increment, 6],

	[-26, 1.6+increment, 6],
	[-25.5, 1.45+increment, 6],
	[-25, 1.30+increment, 6],

	[-24.5, 1.15+increment, 6],
	[-24, 1+increment, 6],
	[24, 1+increment, 6],

	[24.5, 1.15+increment, 6],
	[25, 1.3+increment, 6],
	[25.5, 1.45+increment, 6],

	[26, 1.6+increment, 6],
	[26.5, 1.75+increment, 6],
	[27, 1.9+increment, 6],

	[27.5, 2.05+increment, 5.9],
	[28, 2.2+increment, 5.8],
	[28.5, 2.35+increment, 5.7],

	[29, 2.5+increment, 5.6],
	[29.5, 2.65+increment, 5.5],
	[30, 2.8+increment, 5.4],

	[31, 3.1+increment, 5],
	[31.5, 3.25+increment, 4.7],
	[32, 3.4+increment, 4.5],

	[32.5, 3.55+increment, 4],
	[33, 3.7+increment, 3.5],
	[33.5, 3.85+increment, 2.5],
	[34, 4+increment, 0]
]

var leftTopLinePositions = [
	[-34, 5, 0],
	[-33.5, 4.85, -2.5],
	[-33, 4.7, -3.5], 

	[-32.5, 4.55, -4],
	[-32, 4.4, -4.5],
	[-31.5, 4.25, -4.7],
	
	[-31, 4.1, -5],
	[-30, 3.8, -5.4],
	[-29.5, 3.65, -5.5],

	[-29, 3.50, -5.6],
	[-28.5, 3.35, -5.7],
	[-28, 3.2, -5.8],

	[-27.5, 3.05, -5.9],
	[-27, 2.9, -6],
	[-26.5, 2.75, -6],

	[-26, 2.6, -6],
	[-25.5, 2.45, -6],
	[-25, 2.30, -6],

	[-24.5, 2.15, -6],
	[-24, 2, -6],
	[24, 2, -6],

	[24.5, 2.15, -6],
	[25, 2.3, -6],
	[25.5, 2.45, -6],

	[26, 2.6, -6],
	[26.5, 2.75, -6],
	[27, 2.9, -6],

	[27.5, 3.05, -5.9],
	[28, 3.2, -5.8],
	[28.5, 3.35, -5.7],

	[29, 3.5, -5.6],
	[29.5, 3.65, -5.5],
	[30, 3.8, -5.4],

	[31, 4.1, -5],
	[31.5, 4.25, -4.7],
	[32, 4.4, -4.5],

	[32.5, 4.55, -4],
	[33, 4.7, -3.5],
	[33.5, 4.85, -2.5],
	[34, 5, 0]
];


var leftBottomLinePositions = [
	[-34, 4+increment, 0],
	[-33.5, 3.85+increment, -2.5],
	[-33, 3.7+increment, -3.5], 

	[-32.5, 3.55+increment, -4],
	[-32, 3.4+increment, -4.5],
	[-31.5, 3.25+increment, -4.7],
	
	[-31, 3.1+increment, -5],
	[-30, 2.8+increment, -5.4],
	[-29.5, 2.65+increment, -5.5],

	[-29, 2.50+increment, -5.6],
	[-28.5, 2.35+increment, -5.7],
	[-28, 2.2+increment, -5.8],

	[-27.5, 2.05+increment, -5.9],
	[-27, 1.9+increment, -6],
	[-26.5, 1.75+increment, -6],

	[-26, 1.6+increment, -6],
	[-25.5, 1.45+increment, -6],
	[-25, 1.30+increment, -6],

	[-24.5, 1.15+increment, -6],
	[-24, 1+increment, -6],
	[24, 1+increment, -6],

	[24.5, 1.15+increment, -6],
	[25, 1.3+increment, -6],
	[25.5, 1.45+increment, -6],

	[26, 1.6+increment, -6],
	[26.5, 1.75+increment, -6],
	[27, 1.9+increment, -6],

	[27.5, 2.05+increment, -5.9],
	[28, 2.2+increment, -5.8],
	[28.5, 2.35+increment, -5.7],

	[29, 2.5+increment, -5.6],
	[29.5, 2.65+increment, -5.5],
	[30, 2.8+increment, -5.4],

	[31, 3.1+increment, -5],
	[31.5, 3.25+increment, -4.7],
	[32, 3.4+increment, -4.5],

	[32.5, 3.55+increment, -4],
	[33, 3.7+increment, -3.5],
	[33.5, 3.85+increment, -2.5],
	[34, 4+increment, 0]
];