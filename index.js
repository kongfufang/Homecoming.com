function change(eclass, emode) {
	const list_cur = document.querySelector('.' + eclass);
	list_cur.style.display = emode
	if (emode == 'block') {
		list_cur.style.border = "1px solid #eee"
		list_cur.style.borderTop = "none";
		list_cur.parentNode.style.backgroundColor = '#fff';
		list_cur.parentNode.style.border = '1px solid #eee';
		list_cur.parentNode.style.borderBottom = "none";
	}
	else {
		list_cur.parentNode.style.backgroundColor = '';
		list_cur.parentNode.style.border = '';
	}

}
function changeColor() {
	let res = document.querySelectorAll('tr')
	for (let i = 2; i < res.length; i = i + 2) {
		res[i].style.backgroundColor = '#fff5e6'
	}
}













