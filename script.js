// Déclaration d'une variable pour stocker le numéro de la tâche
let taskCounter = 1;

document.getElementById('monFormulaire').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupération des valeurs des champs du formulaire
    let libelleTacheValue = document.getElementById("libelleTache").value;
    let dateTacheValue = document.getElementById("echeanceTache").value;
    let prioriteTacheValue = document.getElementById("prioriteTache").value;
    console.log(libelleTacheValue,dateTacheValue,prioriteTacheValue);

    // Création d'une nouvelle ligne pour le tableau
    let newRow = document.createElement('tr');
    
    // Création des cellules pour la nouvelle ligne
    let idCell = document.createElement('td');
    let libelleTacheCell = document.createElement('td');
    let prioriteTacheCell = document.createElement('td');
    let dateTacheCell = document.createElement('td');
    let statutCell = document.createElement('td');
    let actionCell = document.createElement('td');

    // Attribution des valeurs aux cellules
    idCell.textContent = taskCounter++; // Numéro de la tâche et incrémentation
    libelleTacheCell.textContent = libelleTacheValue;
    prioriteTacheCell.textContent = prioriteTacheValue;
    dateTacheCell.textContent = dateTacheValue;

    // Création d'une liste déroulante pour le statut avec attribut ARIA
    let selectStatus = document.createElement('select');
    selectStatus.setAttribute('aria-label', 'Statut de la tâche');
    selectStatus.innerHTML = '<option value="En cours">En cours</option><option value="Terminée">Terminée</option>';
    selectStatus.onchange = function() { toggleTaskStatus(this); }; // Appel de la fonction pour modifier le statut

    // Ajout de la liste déroulante à la cellule de statut
    statutCell.appendChild(selectStatus);

    // Bouton de suppression de la tâche avec attribut ARIA
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.setAttribute('aria-label', 'Supprimer la tâche');
    deleteButton.onclick = function() { deleteRow(this); };

    // Ajout du bouton de suppression à la cellule d'action
    actionCell.appendChild(deleteButton);

    // Ajout des cellules à la nouvelle ligne
    newRow.appendChild(idCell);
    newRow.appendChild(libelleTacheCell);
    newRow.appendChild(prioriteTacheCell);
    newRow.appendChild(dateTacheCell);
    newRow.appendChild(statutCell);
    newRow.appendChild(actionCell);

    // Ajout de la nouvelle ligne au tableau
    document.getElementById('taskTableBody').appendChild(newRow);

    // Réinitialisation des champs du formulaire
    document.getElementById("monFormulaire").reset();
});

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function toggleTaskStatus(select) {
    // Récupération de la ligne parente de la liste déroulante
    var row = select.parentNode.parentNode;
    // Récupération de la cellule de statut
    var statusCell = row.cells[4]; // La cellule de statut est la cinquième cellule (index 4)
    // Mise à jour du statut avec la valeur sélectionnée dans la liste déroulante
    statusCell.textContent = select.value;
}
