function MessageColumn(type, container) {
    this.type = type;
    this.shapeList = [];
    this.container = container;

    this.column = new CAAT.Foundation.ActorContainer().setSize(SQUARE_WIDTH, SQUARE_HEIGHT);
    this.saveChild = [];

    this.container.addChild(this.column);

    this.shapeList.push(new CAAT.ShapeActor().setSize(SQUARE_WIDTH, SQUARE_HEIGHT)
                                                 .setFillStyle(Color[this.type])
                                                 .setShape(CAAT.ShapeActor.prototype.SHAPE_RECTANGLE)
                                                 .setStrokeStyle(StrokeColor[this.type]));
    this.column.addChild(this.shapeList[this.shapeList.length - 1]);

    this.redraw = function(x, relativeY) {
        var columnY = this.container.height - relativeY - SQUARE_HEIGHT * this.shapeList.length;

        if (columnY > 0) {
            this.column.setLocation(x, this.container.height - relativeY - SQUARE_HEIGHT * this.shapeList.length);
        } else {
            this.column.setLocation(x, 0);
        }
        for (var i = 0; i < this.shapeList.length; ++i) {
            if (columnY > 0) {
                this.shapeList[i].setLocation(0, i * SQUARE_HEIGHT);
            } else {
                if (this.container.height - i * SQUARE_HEIGHT >  this.container.y) {
                    this.shapeList[i].setLocation(0, this.container.height - (i + 1) * SQUARE_HEIGHT);
                } else {
                    this.shapeList[i].setLocation(0, 0);
                }
            }
        }
    }

    this.changeType = function(newType) {
    	this.type = newType;
    	this.fillColor = Color[newType];
        for (var i = 0; i < this.shapeList.length; ++i) {
            this.shapeList[i].setFillStyle(Color[this.type]);
        }
    }

    this.clean = function() {
        for (var i = 0; i < this.saveChild.length; ++i) {
            this.column.removeChild(this.saveChild[i]);
        }
    }

    this.addSquares = function(numberSquare, type) {
        if (numberSquare > 0 && this.type === COLUMN_TYPE_3) {
            this.saveChild = this.shapeList;
            this.shapeList = [];
            this.changeType(type);
        }
        var referent = this.shapeList.length;
        for (var i = referent; i < referent + numberSquare; ++i) {
            this.shapeList.push(new CAAT.ShapeActor().setSize(SQUARE_WIDTH, SQUARE_HEIGHT)
                                                 .setFillStyle(Color[this.type])
                                                 .setShape(CAAT.ShapeActor.prototype.SHAPE_RECTANGLE)
                                                 .setStrokeStyle(StrokeColor[this.type]));
            this.column.addChild(this.shapeList[i]);
        }
    }

    this.subSquares = function(numberSquare, type) {
        newSquareNumber = this.shapeList.length - numberSquare;
        if (newSquareNumber === 0) {
            this.changeType(COLUMN_TYPE_3);
            this.saveChild = this.shapeList;
            this.shapeList = [];
            this.shapeList.push(new CAAT.ShapeActor().setSize(SQUARE_WIDTH, SQUARE_HEIGHT)
                                                 .setShape(CAAT.ShapeActor.prototype.SHAPE_RECTANGLE));
            this.column.addChild(this.shapeList[this.shapeList.length - 1]);
        } else {
            if (newSquareNumber < 0) {
                newSquareNumber = newSquareNumber * (-1);
                this.changeType(type);
            }
            this.saveChild = this.shapeList;
            this.shapeList = [];
            this.addSquares(newSquareNumber, type);
        }
    }
}


function Message(message, bottomLine, container) {
    this.message = message;
    this.columnList = [];
    this.bottomLine = bottomLine;
    this.container = container;

    this.createMessage = function() {
        for (var i = 0; i < this.message.length; ++i) {
            this.columnList.push(new MessageColumn(this.message[i], container));
        }
        this.redraw();
        return this;
    }

    this.mergeColumns = function(index, column) {
        if (column.shapeList.length > 0) {
            if (this.columnList[index].type === COLUMN_TYPE_3) {
                this.addSquaresAtColumn(index, column.shapeList.length, column.type);
            }
            else if (this.columnList[index].type === column.type) {
                this.addSquaresAtColumn(index, column.shapeList.length, column.type);
            }
            else if (this.columnList[index].type !== column.type) {
                this.subSquaresAtColumn(index, column.shapeList.length, column.type);
            }
        }
    }

    this.subSquaresAtColumn = function(index, numberSquare, type) {
        this.columnList[index].subSquares(numberSquare, type);
        return this;
    }

    this.addSquaresAtColumn = function(index, numberSquare, type) {
        this.columnList[index].addSquares(numberSquare, type);
        return this;
    }

    this.redraw = function() {
        for (var i = 0; i < this.columnList.length; ++i) {
            this.columnList[i].redraw(i * SQUARE_WIDTH, bottomLine.height);
        }
    }

    this.clean = function() {
        for (var i = 0; i < this.columnList.length; ++i) {
            this.columnList[i].clean();
        }
    }
}