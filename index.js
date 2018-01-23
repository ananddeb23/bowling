function score(arr){
	let tot = 0;
	let indiscore = [0,0,0,0,0,0,0,0,0,0];
	let frame = 0;
	let i_used =0;
	for(let i = 0; i < arr.length && frame <10; i++){
		//  console.log('total',tot);
		//  console.log('indi', indiscore);
		//  console.log('frame', frame,' i = ', i);

		if(arr[i] === 10){
			if(arr[i+1] === undefined || arr[i+2] === undefined){
				return -1;
			}
			tot += arr[i] + arr[i+1] +arr[i+2];
			indiscore[frame] = arr[i] + arr[i+1] +arr[i+2];
			frame +=1;
			i_used = i+2;
			//i+=1;
		}
		else if(arr[i] < 10 ){
			if(arr[i+1] === undefined ){
				return -1;
			}

			let temp = arr[i] + arr[i+1];
			if(temp === 10){
				tot += 10 + arr[i+2];
				indiscore[frame] = 10 + arr[i+2];
				frame +=1;
				i+=1;
				i_used = i+2;
			}
			else{
				tot += arr[i] + arr[i+1];
				indiscore[frame] = arr[i] + arr[i+1];
				frame +=1;
				i+=1;
				i_used = i+1;
			}
		}
	}
	if(i_used  < arr.length-1){
		return -2;  // excess values passed as arguments in array
	}
	return tot;

}
// let ar1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
// let ar2 = [3,6,4,6,10,10,10,5,3,6,4,7,0,1,2,10,9,10];
//console.log(score(ar2));
module.exports.score = score;
