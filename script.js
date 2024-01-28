//your JS code here. If required.
function updateSizeInfo (){
	const width = window.innerWidth;
	const height = window.innerHeight;

	document.getElementById('sizeInfo').innerHTML = `<h1>Width:${width} and Height:${height}</h1>`;
}
window.addEventListener('resize', updateSizeInfo);
window.onload = updateSizeInfo;
