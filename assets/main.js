$(document).ready(function() {

    // 1 - creare un oggetto che rappresenta uno studente:
    // ogni studente è caratterizzato da un nome, un cognome e un'età.
    // Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
    var student = {
        'name': 'Lorenzo',
        'surname': 'Magro',
        'age': 27
    }
    console.log(student);

    console.log("************* ES 1 *************");
    // Stampa a video i nomi degli attributi e i relativi valori
    for(var key in student){
        console.log(key + ": " + student[key]);
    }

    // 2 - creare un array di oggetti "studente".
    // Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome
    var students_array =[
        {
            'name': 'Marco',
            'surname': 'Rossi',
            'age': 23
        },
        {
            'name': 'Sara',
            'surname': 'Verdi',
            'age': 25
        },
        {
            'name': 'Anna',
            'surname': 'Bianchi',
            'age': 28
        }
    ];

    console.log("************* ES 2 *************");
    for (var i = 0; i < students_array.length; i++) {
        console.log("Studente " + (i+1));
        for(var key in students_array[i]){
            if(key == "name" || key == "surname" )
            console.log(key + ": " + students_array[i][key]);
        }
    }

    // 3 - tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente.
    // Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.
    var new_student = {};

    new_student.name = prompt("Inserisci un Nome");
    new_student.surname = prompt("Inserisci un Cognome");
    new_student.age = parseInt(prompt("Inserisci un' età"));

    students_array.push(new_student);

    console.log("************* ES 3 *************");
    console.log(students_array);










});
