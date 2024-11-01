let grid_container	= document.getElementsByClassName('grid-container')[0]
let justify_content = document.getElementById('justify-content')
let align_content	= document.getElementById('align-content')
let justify_items	= document.getElementById('justify-items')
let align_items		= document.getElementById('align-items')
let rest			= document.getElementById('rest')

function update(){
	// justify content -----------------------------------------------------------------------
	switch(justify_content.value) {
		case "normal":			grid_container.style.justifyContent = "normal";			break;
		case "space-evenly":	grid_container.style.justifyContent = "space-evenly";	break;
		case "space-around":	grid_container.style.justifyContent = "space-around";	break;
		case "space-between":	grid_container.style.justifyContent = "space-between";	break;
		case "center":			grid_container.style.justifyContent = "center";			break;
		case "start":			grid_container.style.justifyContent = "start";			break;
		case "end":				grid_container.style.justifyContent = "end";			break;
	} 

	// align content -------------------------------------------------------------------------
	switch(align_content.value) {
		case "normal":			grid_container.style.alignContent = "normal";			break;
		case "center":			grid_container.style.alignContent = "center";			break;
		case "space-evenly":	grid_container.style.alignContent = "space-evenly";		break;
		case "space-around":	grid_container.style.alignContent = "space-around";		break;
		case "space-between":	grid_container.style.alignContent = "space-between";	break;
		case "start":			grid_container.style.alignContent = "start";			break;
		case "end":				grid_container.style.alignContent = "end";				break;
	} 

	// justify-items -------------------------------------------------------------------------
	switch(justify_items.value) {
		case "stretch":			grid_container.style.justifyItems = "stretch";			break;
		case "center":			grid_container.style.justifyItems = "center";			break;
		case "start":			grid_container.style.justifyItems = "start";			break;
		case "end":				grid_container.style.justifyItems = "end";				break;
	} 

	// align-items ---------------------------------------------------------------------------
	switch(align_items.value) {
		case "stretch":			grid_container.style.alignItems = "stretch";			break;
		case "center":			grid_container.style.alignItems = "center";				break;
		case "start":			grid_container.style.alignItems = "start";				break;
		case "end":				grid_container.style.alignItems = "end";				break;
		case "baseline":		grid_container.style.alignItems = "baseline";			break;
	} 

    requestAnimationFrame(update)
}
update()

rest.onclick = function () {
	console.log('hi')
justify_content.value = 'normal'
align_content.value = 'normal'
justify_items.value = 'stretch'
align_items.value = 'stretch'

}
