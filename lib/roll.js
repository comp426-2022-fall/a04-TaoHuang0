export function roll(sides, dices, rolls){
	let res = []
	for(let i = 0; i < rolls; i++){
		let sum = 0
		for(let j = 0; j < dices; j++){
			sum = sum + Math.floor(Math.random() * sides + 1)
		}
		res.push(sum)
	}
	return {
  		"sides": sides,
  		"dice": dices,
  		"rolls": rolls,
  		"results": res
	};
}
