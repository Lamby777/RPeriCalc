console.log(rectanglesWithPerimeter(3, 3, 4));
//console.log(rectanglesWithPerimeter(35,14));

console.log(hFromWP(1, 4));

function rectanglesWithPerimeter(rx, ry, peri) {
	let sum = 0;

	for (let innerW = 1; innerW <= rx; innerW++) {
		// Get height from width and perimeter
		const innerH = hFromWP(innerW, peri);

		// Skip to next if height isn't a whole number
		if (isWhole(innerH)) {
			// width * calculated height
			sum += (innerW*innerH);
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
