const counters = document.querySelectorAll('.counter');
const speed = 600; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

// Clear initial field values when clicked
document.addEventListener('DOMContentLoaded', function() {
	var fields = document.getElementsByTagName('input');
	var textarea = document.getElementsByTagName('textarea');
	
	for (var i = 0; i < fields.length; i++) {
	fields[i].addEventListener('click', clearInitialValue);
	}
	
	textarea[0].addEventListener('click', clearInitialValue);
});

function clearInitialValue() {
	if (this.value === this.defaultValue) {
	this.value = '';
	}
}

  // Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;

	if (name === '' || email === '') {
	alert('Name and email are required fields!');
	event.preventDefault();
	}
});



