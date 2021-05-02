document.addEventListener('DOMContentLoaded', (event) => {
	function handleDragStart(e) {
	    this.style.opacity = '0.4';

	    dragSrcEl = this;

	    e.dataTransfer.effectAllowed = 'move';
	    e.dataTransfer.setData('text/html', this.innerHTML);
	}

	function handleDragEnd(e) {
		this.style.opacity = '1';

		dragFields.forEach(function (item) {
			item.classList.remove('over');
		});
	}

	function handleDragOver(e) {
		if (e.preventDefault) {
			e.preventDefault();
		}

		return false;
	}

	function handleDragEnter(e) {
		this.classList.add('over');
	}

	function handleDragLeave(e) {
		this.classList.remove('over');
	}

	function handleDrop(e) {
		e.stopPropagation();

		if (dragSrcEl !== this) {
			if(this.children.length == 0){
				if(dragSrcEl.parentElement.className == "drag-field-v")
					dragSrcEl.parentElement.className = "drag-field";

				this.appendChild(dragSrcEl)
				this.classList.remove("drag-field")
				this.classList.add("drag-field-v")
			}
		}

		return false;
	}

	function handleContainerDrop(e) {
		e.stopPropagation();

		if (dragSrcEl !== this) {
			dragSrcEl.parentElement.classList.add("drag-field")
			this.appendChild(dragSrcEl);
		}

		return false;
	}

	function addFieldListeners(item){
		item.addEventListener('dragover', handleDragOver, false);
		item.addEventListener('dragenter', handleDragEnter, false);
		item.addEventListener('dragleave', handleDragLeave, false);
		item.addEventListener('drop', handleDrop, false);
	}

	let dragBoxes = document.querySelectorAll('.drag-words .drag-box');
	dragBoxes.forEach(function(item) {
		item.addEventListener('dragstart', handleDragStart, false);
		item.addEventListener('dragend', handleDragEnd, false);
	});

	let dragFields = document.querySelectorAll('.drag-fields .drag-field');
	dragFields.forEach(function(item) {
		addFieldListeners(item)
	});

	let container = document.querySelector('.drag-words')
	container.addEventListener('drop', handleContainerDrop, false)
	container.addEventListener('dragover', handleDragOver, false);
	container.addEventListener('dragenter', handleDragEnter, false);
	container.addEventListener('dragleave', handleDragLeave, false);

});