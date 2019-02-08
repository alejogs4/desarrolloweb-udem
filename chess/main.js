const fields = document.getElementsByTagName('td')
Array.from(fields).forEach((_, i) => {
	fields[i].addEventListener('click', e => {
		const field = e.target
		field.textContent = field.dataset.piece ? field.dataset.piece : ''
	})
})