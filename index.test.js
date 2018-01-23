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
describe('Validating input', () =>{
	let ar1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
	let ar2 = [3,6,4,6,10,10,10,5,3,6,4,7,0,1,2,10,9,10];
	let ar3 = [10,10,10,10,10,10,10,10,10,10];
	it('Missing frames must safely be rejected', () => {
		expect((index.score(ar3))).toEqual(-1);
	});

});
