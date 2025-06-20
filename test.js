// ...existing code...

let countriesData = [];

function populateCountries() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            countriesData = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
            const select = document.getElementById('countrySelect');
            select.innerHTML = '<option value="">Select Country</option>';
            countriesData.forEach(country => {
                const option = document.createElement('option');
                option.value = country.cca2;
                option.textContent = country.name.common;
                select.appendChild(option);
            });
        });
}

document.addEventListener('DOMContentLoaded', function() {
    populateCountries();
    document.getElementById('countrySelect').addEventListener('change', function() {
        const selectedCode = this.value;
        const country = countriesData.find(c => c.cca2 === selectedCode);
        const numberCodeInput = document.getElementById('numberCode');
        if (country && country.idd && country.idd.root) {
            // Use the first suffix if available, otherwise just the root
            const code = country.idd.root + (country.idd.suffixes && country.idd.suffixes.length ? country.idd.suffixes[0] : "");
            numberCodeInput.value = code;
        } else {
            numberCodeInput.value = "";
        }
    });
});

// ...existing code...