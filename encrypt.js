document.querySelector('#encrypt').onclick = function() {
    document.querySelector('#encrypted').value =
        ',"' + cryptico.encrypt(encode(document.querySelector('#raw').value), "btxvX3WK050SzT+UoGwvOPf+ZM0qnI8kGYdmHv4ah3uaWvwsCKVEV/Iwm2YNK9T3ZwM2nbKBEdJn34WEHtcBRI90r7CkCQSwtEibseu2+aZakZtcJC4T4mEm5WgqcoymvL9JgJyE8hvnMdKbtnk4qKVaVuixnieSwPybafW04ck=").cipher + '"'
}