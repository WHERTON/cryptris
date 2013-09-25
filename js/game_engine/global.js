
var COLUMN_TYPE_1 = 'type1';
var COLUMN_TYPE_2 = 'type2';
var COLUMN_TYPE_3 = 'empty';

var KEY_TYPE_NORMAL = 0;
var KEY_TYPE_REVERSE = 1;

var DEFAULT_SPACE_WIDTH = 4;
var DEFAULT_SQUARE_WIDTH = 40;
var DEFAULT_COLUMN_WIDTH = DEFAULT_SQUARE_WIDTH + 3;
var DEFAULT_SQUARE_HEIGHT = 20;
var DEFAULT_SPACE_HEIGHT = 4;

function GameBoxOption() {
	this.SQUARE_WIDTH = DEFAULT_SQUARE_WIDTH;
	this.COLUMN_WIDTH = this.SQUARE_WIDTH + 3;
	this.SQUARE_HEIGHT = DEFAULT_SQUARE_HEIGHT;
	this.SPACE_WIDTH = DEFAULT_SPACE_WIDTH;
	this.SPACE_HEIGHT = DEFAULT_SPACE_HEIGHT;
	this.BORDER_HEIGHT = 2 * this.SPACE_HEIGHT;
	this.BORDER_WIDTH = 8;

	this.paused = false;

	this.ColorLeft = { 'type2' : 'rgba(138, 155, 199, 1)', 'type1' : 'rgba(31, 151, 195, 1)', 'empty' : null };
	this.Color = { 'type2' : 'rgba(79, 135, 191, 1)', 'type1' : 'rgba(1, 109, 181, 1)', 'empty' : null };
	this.blurColorLeft = { 'type2' : 'rgba(138, 155, 199, 1)', 'type1' : 'rgba(31, 151, 195, 1)', 'empty' : null };
	this.blurColor = { 'type2' : 'rgba(79, 135, 191, 1)', 'type1' : 'rgba(1, 109, 181, 1)', 'empty' : null };
	this.StrokeColor = { 'type2' : 'rgba(255, 255, 255, 1)', 'type1' : 'rgba(0, 187, 178, 1)', 'empty' : null };
	this.blurStrokeColor = { 'type2' : 'rgba(255, 255, 255, 1)', 'type1' : 'rgba(0, 187, 178, 1)', 'empty' : null };

	this.defaultStrokeColor = { 'type2' : '#ffffff', 'type1' : '#00bbb2', 'empty' : null };
	this.fullStrokeColor = { 'type2' : '#555555', 'type1' : '#0077a2', 'empty' : null };

	this.columnColor = 'rgba(0, 113, 187, 0.2)';
	this.objectsInMove = [];
	this.maxKeyNumber = 1;
	this.keyNeedToUpdate = false;
	this.endResolved = null;

	this.setDefaultColor = function() {
		this.StrokeColor = this.defaultStrokeColor;
	}

	this.setFullColor = function() {
		this.StrokeColor = this.fullStrokeColor;
	}

	this.numberColor = "#00e770";
	this.numberGrow = "#00FF9D";
}

function RivalBoxOption() {
	this.SQUARE_WIDTH = DEFAULT_SQUARE_WIDTH;
	this.COLUMN_WIDTH = this.SQUARE_WIDTH + 3;
	this.SQUARE_HEIGHT = DEFAULT_SQUARE_HEIGHT;
	this.SPACE_WIDTH = DEFAULT_SPACE_WIDTH;
	this.SPACE_HEIGHT = DEFAULT_SPACE_HEIGHT;
	this.BORDER_HEIGHT = 2 * this.SPACE_HEIGHT;
	this.BORDER_WIDTH = 8;
	
	this.paused = false;

	this.ColorLeft = { 'type2' : 'rgba(200, 200, 191, 1)', 'type1' : 'rgba(157, 109, 181, 1)', 'empty' : null };
	this.Color = { 'type2' : 'rgba(156, 155, 199, 1)', 'type1' : 'rgba(152, 53, 195, 1)', 'empty' : null };
	this.blurColorLeft = { 'type2' : 'rgba(200, 200, 191, 0.5)', 'type1' : 'rgba(157, 109, 181, 0.5)', 'empty' : null };
	this.blurColor = { 'type2' : 'rgba(156, 155, 199, 0.5)', 'type1' : 'rgba(152, 53, 195, 0.5)', 'empty' : null };

	this.StrokeColor = { 'type2' : 'rgba(255, 255, 255, 1)', 'type1' : 'rgba(163, 96, 187, 1)', 'empty' : null };
	this.blurStrokeColor = { 'type2' : 'rgba(255, 255, 255, 0.5)', 'type1' : 'rgba(163, 96, 187, 0.5)', 'empty' : null };
	this.defaultStrokeColor = { 'type2' : 'rgba(255, 255, 255, 1)', 'type1' : 'rgba(163, 96, 187, 1)', 'empty' : null };
	this.fullStrokeColor = { 'type2' : 'rgba(255, 255, 255, 1)', 'type1' : 'rgba(163, 96, 187, 1)', 'empty' : null };

	this.columnColor = 'rgba(187, 53, 0, 0.2)';
	this.objectsInMove = [];
	this.maxKeyNumber = 1;
	this.keyNeedToUpdate = false;
	this.endResolved = null;

	this.setDefaultColor = function() {
		this.StrokeColor = this.defaultStrokeColor;
	}

	this.setFullColor = function() {
		this.StrokeColor = this.fullStrokeColor;
	}
	this.numberColor = "#d30088";
	this.numberGrow = "#fc56fc";
}
