//Checks if element is an array. Returns true if it is, otherwise false.

var data = [4, 8, 15, 16, 23, 42],
	obj = {a:1,b:2,c:3};

var is_array = function (value) {
	return console.log(value && typeof value === 'object' && value.constructor === Array);
};

is_array(obj); // false
is_array(data); // true


//better version..

var is_array = function (value) {
	return console.log(value && typeof value === 'object' && typeof value.length === 'number' && typeof value.splice === 'function' && !(value.propertyIsEnumerable('length')));
};
