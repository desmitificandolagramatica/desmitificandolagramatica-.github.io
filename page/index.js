const guidesRef = document.getElementById('guides')
const logoRef = document.getElementById('logo')

function showGuides(){
	guidesRef.classList.remove('guide-block-none')
	logoRef.classList.add('guide-block-none')
}