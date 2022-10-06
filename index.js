console.log(rectanglesWithPerimeter(3, 3, 8));
//console.log(rectanglesWithPerimeter(35,14));

function rectanglesWithPerimeter(rx, ry, peri) {
	let sum = 0;

	for (let innerW = 1; innerW <= rx; innerW++) {
		// Get height from width and perimeter
		const innerH = hFromWP(innerW, peri);

		// Skip to next if height can't be found
		if (isWhole(innerH) && (innerH > 0)) {
			// width * calculated height
			const res = (
				(rx-innerW+1) *
				(ry-innerH+1)
			);
			
			sum += res;
		}
	}

	return sum;
}

function hFromWP(w, p) {
	return (p/2) - w;
}

function isWhole(n) {
	return Math.floor(n) === n;
}
