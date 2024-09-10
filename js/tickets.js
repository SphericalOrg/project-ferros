const origin = document.getElementById('origin');
const destination = document.getElementById('destination');

function updateOptions(select1, select2) {
    const selectedValue = select1.value;
    const options = select2.querySelectorAll('option');

    options.forEach(option => {
        if (option.value === selectedValue || option.value === "") {
            option.disabled = true;
        } else {
            option.disabled = false;
        }
    });
}

origin.addEventListener('change', function() {
    updateOptions(origin, destination);
});

destination.addEventListener('change', function() {
    updateOptions(destination, origin);
});
