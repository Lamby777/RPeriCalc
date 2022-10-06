rectanglesWithPerimeter(35, 14, 30);

function rectanglesWithPerimeter(rx, ry, peri) {
	let sum = 0;

	for (let innerW = 1; innerW <= rx; innerW++) {
		// Get height from width and perimeter
		const innerH = hFromWP(innerW, peri);

		// Skip to next if height can't be found
		if (isWhole(innerH) && (innerH > 0)) {
			// width * calculated height
			let res = (
				(rx-innerW+1) *
				(ry-innerH+1)
			);

			if (res < 0) continue;

			console.log(`Number of ${innerW}x${innerH}\trectangles inside:\t${res},\teach with area ${innerW*innerH}`);

			sum += res;
		}
	}

	console.log("----------------------------------------------");
	console.log("Total:\t\t\t\t\t" + sum);

	return sum;
}

function hFromWP(w, p) {
	return (p/2) - w;
}

function isWhole(n) {
	return Math.floor(n) === n;
}
