let grid_container       = document.getElementsByClassName('grid-container' )[0]
let justify_content      = document.getElementById('justify-content')
let align_content        = document.getElementById('align-content')
let justify_items        = document.getElementById('justify-items')
let align_items          = document.getElementById('align-items')
let column_gap           = document.getElementById('column-gap')
let row_gap              = document.getElementById('row-gap')

let rest_justify_content = document.getElementById('rest-justify-content')
let rest_align_content   = document.getElementById('rest-align-content')
let rest_justify_items   = document.getElementById('rest-justify-items')
let rest_align_items     = document.getElementById('rest-align-items')
let rest_column_gap	     = document.getElementById('rest-column-gap')
let rest_row_gap         = document.getElementById('rest-row-gap')
let rest_all             = document.getElementById('rest-all')

function update(){
	grid_container.style.justifyContent = justify_content.value
	grid_container.style.alignContent	= align_content.value
	grid_container.style.justifyItems	= justify_items.value
	grid_container.style.alignItems		= align_items.value
	grid_container.style.columnGap      = column_gap.value + 'px'
	grid_container.style.rowGap         = row_gap.value + 'px'

    requestAnimationFrame(update)
}
update()

rest_justify_content.onclick = () => { justify_content.value = 'normal' }
rest_align_content.onclick   = () => { align_content.value = 'normal' }
rest_justify_items.onclick   = () => { justify_items.value = 'stretch' }
rest_align_items.onclick     = () => { align_items.value = 'stretch' }
rest_column_gap.onclick      = () => { column_gap.value = 0 }
rest_row_gap.onclick	     = () => { row_gap.value = 0 }


rest_all.onclick = function () {
	justify_content.value	= 'normal'
	align_content.value		= 'normal'
	justify_items.value		= 'stretch'
	align_items.value		= 'stretch'
	column_gap.value		= '0'
	row_gap.value			= '0'
}
