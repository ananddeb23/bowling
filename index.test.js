let index = require('./index');

describe('Output type being tested', () =>{
	let ar1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
	let ar2 = [10,10,10,10,10,10,10,10,10,10];
	let ar3 = [3,6,4,6,10,10,10,5,3,6,4,7,0,1,2,10,9,10,5];
	it('Return type must be a number when given correct sequence', () => {
		expect(typeof(index.score(ar1))).toBe('number');
	});
	it('Return type must be a number when given in-correct sequence with missing numbers', () => {
		expect(typeof(index.score(ar2))).toBe('number');
	});
	it('Return type must be a number when given in-correct sequence with excess numbers', () => {
		expect(typeof(index.score(ar3))).toBe('number');
	});

});
describe('Differnt frame combinations as inputs must return correct score', () =>{
	let ar1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
	let ar2 = [3,6,4,6,10,10,10,5,3,6,4,7,0,1,2,10,9,10];
	let ar3 = [10,10,10,10,10,10,10,10,10,10,10,10];
	let ar4 = [9,1,6,4,7,3,5,5,3,7,2,8,1,9,2,8,9,1,7,3,6];
	it('Frames without any strikes or spare must have must return correct score', () => {
		expect(index.score(ar1)).toEqual(90);
	});
	it('Frames with any strikes and spare must have must return correct score', () => {
		expect(index.score(ar2)).toEqual(166);
	});
	it('Frames with all strikes  must have must return correct score', () => {
		expect(index.score(ar3)).toEqual(300);
	});
	it('Frames with all spares  must have must return correct score', () => {
		expect(index.score(ar4)).toEqual(148);
	});

});
describe('Input must be validated', () =>{
	let ar1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
	let ar2 = [3,6,4,6,10,10,10,5,3,6,4,7,0,1,2,10,9,10,5];
	let ar3 = [10,10,10,10,10,10,10,10,10,10];
	let ar4 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
	let ar5 = [9,1,6,4,7,3,5,5,3,7,2,8,1,9,2,8,9,1,7,3];
	let ar6 = [10,10,10,10,10,10,10,10,10,10,10,9,4];
	let ar7 = [9,1,6,4,7,3,5,5,3,7,2,8,1,9,2,8,9,1,7,3,8,6,6];
	it('In case of missing values  when there is a strike at the end return -1', () => {
		expect((index.score(ar3))).toEqual(-1);
	});
	it('In case of missing values when there is no strike or spare at the end return -1', () => {
		expect((index.score(ar4))).toEqual(-1);
	});
	it('In case of missing values  when there is a spare at the end return -1', () => {
		expect((index.score(ar5))).toEqual(-1);
	});

	it('In case of excess values return -2', () => {
		expect((index.score(ar2))).toEqual(-2);
	});
	it('In case of excess values with all strikes return -2', () => {
		expect((index.score(ar6))).toEqual(-2);
	});
	it('In case of excess values with all spares return -2', () => {
		expect((index.score(ar7))).toEqual(-2);
	});


});
