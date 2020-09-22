const estados = ["ac", "al", "am", "ap", "ba", "ce", "df", "es", "go", "ma", "mt", "ms", "mg", "pa", "pb", "pr", "pe", "pi", "rj", "rn", "ro", "rs", "rr", "sc", "se", "sp", "to"];
const select = document.getElementById('estados');

function todosOsEstados () {
    for (let i = 0; i < estados.length; i +=1) {
        optionsEl = document.createElement('option');
        optionsEl.innerHTML = estados[i];
        select.appendChild(optionsEl);
    }
}
todosOsEstados(select);


// const clearBtn = document.querySelector('.delete-all');
// const toBeDeleted = document.querySelectorAll('.to-be-deleted');
// const nome = document.querySelector('.nome').

// clearBtn.addEventListener('click', function () {
//     nome.innerHTML = '';
// })


