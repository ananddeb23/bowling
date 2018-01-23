let index = require('./index');
describe('Output type being tested', () =>{
	let ar1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
	let ar2 = [3,6,4,6,10,10,10,5,3,6,4,7,0,1,2,10,9,10];
	it('Returne type must be a number', () => {
		expect(typeof(index.score(ar1))).toBe('number');
	});
});
