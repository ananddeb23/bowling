let index = require('./index');
describe('Output type being tested', () =>{
	let ar1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
	let ar2 = [3,6,4,6,10,10,10,5,3,6,4,7,0,1,2,10,9,10];
	it('Return type must be a number', () => {
		expect(typeof(index.score(ar1))).toBe('number');
	});

});
describe('Differnt frame combinations as inputs must return correct score', () =>{
	let ar1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
	let ar2 = [3,6,4,6,10,10,10,5,3,6,4,7,0,1,2,10,9,10];
	let ar3 = [10,10,10,10,10,10,10,10,10,10,10,10];
	it('Frames without any strikes or spare must have must return correct score', () => {
		expect(index.score(ar1)).toEqual(90);
	});
	it('Frames with any strikes and spare must have must return correct score', () => {
		expect(index.score(ar2)).toEqual(166);
	});
	it('Frames with any strikes and spare must have must return correct score', () => {
		expect(index.score(ar3)).toEqual(300);
	});

});
