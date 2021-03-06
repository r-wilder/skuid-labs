/**
 * @typedef {Array} arguments
 * @typedef {Object} skuid
 */
var mask = "(000) 000-0000",
	reverse = false,
	field = arguments[0],
	value = arguments[1];

//Draw the standard field
skuid.ui.getFieldRenderer(field.displayType)[field.mode](field, value);

switch (field.mode) {
	case 'edit':
		//If in "Edit" mode, attach the mask behavior to the field
		field.element.find("input").mask(mask, {reverse: reverse});
		break;
}