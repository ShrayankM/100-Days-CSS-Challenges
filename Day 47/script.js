const rows = document.querySelectorAll('.row');

let cnt = 0;

rows.forEach(function (row, index) {
    for (let i = 1; i <= 20; i++) {
        row.insertAdjacentHTML('beforeend', `
            <div class="pixel">
                <input type="checkbox" id="pixel-no-${cnt}" class="pixel__checkbox">
                <label for="pixel-no-${cnt}"class="pixel__label"></label>
            </div>
        `);
        cnt++;
    }
})