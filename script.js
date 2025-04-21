const certificates = [
    { name: 'AGUILAR VILLA JUAN FREDY ELMER', dni: '23871649', link: 'https://drive.google.com/file/d/1mPVFUehYXWkqZAp32E9wg7hNYkMCV9jx/view?usp=sharing'},
    { name: 'ALVAREZ LUNA NATIVIDAD', dni: '42418440', link: 'https://drive.google.com/file/d/1PD1jU2UqgwXI12xe0xXUvxckdDGU0m2g/view?usp=sharing'},
    { name: 'AVILA DAVILA DENNISSE PAOLA', dni: '46093707', link: 'https://drive.google.com/file/d/1mlWarn2VSHZkNBOXeopqPtLjAbMYJdbJ/view?usp=sharing'},
    { name: 'BACA ARRIOLA KUKULY NEMESIA', dni: '02858080', link: 'https://drive.google.com/file/d/1n3K7vW7f3ayiNgG-DhpT2W6C3xwYcw9P/view?usp=sharing'},
    { name: 'CARDENAS HOLGADO MANUEL JUAN', dni: '41765306', link: 'https://drive.google.com/file/d/1gg2gHZHWOLRWMEzKB0iyJ2NA2zAcg2H0/view?usp=sharing'},
    { name: 'VALENCIA VILLAFUERTE, JOSELYN VERITH  ', dni: '71597355', link: 'https://drive.google.com/file/d/1tfOLpyt5vOG_Vkb1OZ3T70Ql7gsEUKMT/view?usp=sharing'},
    { name: 'CHACON CHACON GABRIELA CASSANDRA', dni: '23979954', link: 'https://drive.google.com/file/d/1GtOtCiAZvckE63gbz9vfEPOQX3wqZSUE/view?usp=sharing'},
    { name: 'GALLARDO MIRANDA OLGA MARILYN', dni: '43377837', link: 'https://drive.google.com/file/d/12FgXDjZ09H985PM9SG5bl6PirueLx1eU/view?usp=sharing'},
    { name: 'GUZMÁN PACHECO ESTHER', dni: '23998314', link: 'https://drive.google.com/file/d/1Jrzaa_GsovG7zq2gxE6CKTFFDZKGYrfe/view?usp=sharing'},
    { name: 'HUMPIRE CASTRO ROY ANDY', dni: '72639015', link: 'https://drive.google.com/file/d/1NV1ST-1ERZUHEOvXNEEt2CgWlY6CuJEQ/view?usp=sharing'},
    { name: 'MANCILLA GUDIEL YURI EDISON', dni: '41060720', link: 'https://drive.google.com/file/d/1rohdOuugAPwN6cKkzH77pPC4uQb8eD1j/view?usp=sharing'},
    { name: 'MARTINEZ TRUJILLO YOHNY LUZ', dni: '23870561', link: 'https://drive.google.com/file/d/1Rw6NtB7zeM80wxR_YysG5gQ_vrHz8i97/view?usp=sharing'},
    { name: 'PILARES HUALLPA ROBERT PAUL', dni: '44751034', link: 'https://drive.google.com/file/d/1CkbrJmoz0MeY26foo_nZlXVJqkwMMohE/view?usp=sharing'},
    { name: 'PUENTE DE LA VEGA CACERES ABRAHAM', dni: '41206297', link: 'https://drive.google.com/file/d/17khgvTaQQ9ODEmcH-KQFlvp9eqghvQQr/view?usp=sharing'},
    { name: 'QUISPE MOLINA ROSALIN', dni: '41156062', link: 'https://drive.google.com/file/d/1UvtjHuh2LlkOQU9Wv9Wv6ykwKcOJnDXR/view?usp=sharing'},
    { name: 'RIVERA ALARCON.ELIANA LIA', dni: '23804533', link: 'https://drive.google.com/file/d/1M4TnM3z55UJElDFL0Z0DsPKPDT-fk3gC/view?usp=sharing'},
    { name: 'ROJAS SALAS GLADIS EDITH', dni: '07933864', link: 'https://drive.google.com/file/d/1swpaub3vVDVXPM7ZY50NB20g-xSELaEy/view?usp=sharing'},
    { name: 'SALAS OLIVERA CLEIDY GLORIA', dni: '45907329', link: 'https://drive.google.com/file/d/1B9IuzYcjYKo9CfzSNBrI7FnULt3KllFJ/view?usp=sharing'},
    { name: 'SILVA HURTADO JULIO ROMMEL', dni: '47774896', link: 'https://drive.google.com/file/d/1JvhSwkSptx-oWolrSVnhzZCfBoFwtA4p/view?usp=sharing'},
    { name: 'SOTO MERCADO LUZ AURORA', dni: '23837033', link: 'https://drive.google.com/file/d/1bWrjq0tSGVn7enx3o9tHcyLimGYoMbYp/view?usp=sharing'},
    { name: 'TOMAYLLA ZAMORA DEYSI VANESA', dni: '71429401', link: 'https://drive.google.com/file/d/10qo3NQlZ4A8n3cifj9y5JcCupHwMJRHP/view?usp=sharing'},
    { name: 'ATACO CARRION EMILDA', dni: '23864347', link: 'https://drive.google.com/file/d/18pwb9iJr5zSWm1OU2qr5QtyJP8lsNn6v/view?usp=sharing'},
    { name: 'CHAVEZ BERMUDEZ BITIA KURI', dni: '45026869', link: 'https://drive.google.com/file/d/1wq9q18Ws0ADNs036B-PpvkPqjnNwA-YP/view?usp=sharing'},
    { name: 'MAMANI CCALLACCASI GUIDO', dni: '45573724', link: 'https://drive.google.com/file/d/1qf_XYC_1dPPzop0CVjZuk-O57lUHGN1_/view?usp=sharing'},
    { name: 'MASIAS LUCERO CLAUDIA LUCIA', dni: '46480461', link: 'https://drive.google.com/file/d/1wTVaPdrZIDXnvW66WjTTeCQOFhnjDh_2/view?usp=sharing'},
    { name: 'URQUIZO VÁSQUEZ PORFIRIO', dni: '23863328', link: 'https://drive.google.com/file/d/1StJ13KBcSMTWBbyqQOUo2ETDh2Brl46p/view?usp=sharing'},
    { name: 'ZUNIGA VIZCARRA ERICK JOEL', dni: '45150991', link: 'https://drive.google.com/file/d/1C1GPCamJj3Mr3BSz5RqoOYi1BGQFjnEP/view?usp=sharing'},
    { name: 'PONCE FERNANDEZ BACA MANUEL ABRAHAM', dni: '72716682', link: 'https://drive.google.com/file/d/1NKjgLHl40MbK0qlYBGKGK2znMbfeY8yj/view?usp=sharing'},
    { name: 'GUZMÁN PACHECO ESTHER', dni: '23998314', link: 'https://drive.google.com/file/d/1HmXXl2VfjJv1uKqnzqW3YYbKkmVyx2fT/view?usp=sharing'},
    { name: 'HOLGUIN HERRERA MELISA BETYS', dni: '43109012', link: 'https://drive.google.com/file/d/1-CKXZN76q90NmOyuMX_kqM8LEuiXstYv/view?usp=sharing'},
    { name: 'SALAS OLIVERA CLEIDY GLORIA', dni: '45907329', link: 'https://drive.google.com/file/d/1oFFDHfhrPuVXBvUYnO5mnzh8zagieZnx/view?usp=sharing'},
    { name: 'CANAHUIRE MONTUFAR ABRAHAM EDGARD', dni: '23961090', link: 'https://drive.google.com/file/d/12VR42PjRsRMRFfzF6fQCxPaAqeV5-mmH/view?usp=sharing'},
    { name: 'ASTETE CALDERON GABRIELA', dni: '70458417', link: 'https://drive.google.com/file/d/1HaH5Zg5bsMwpi5r5szBFUhmPWr5H8zmr/view?usp=sharing'},
    { name: 'MAROCHO CAPA GABRIELA IRMA', dni: '76181199', link: 'https://drive.google.com/file/d/11HoogRzjgqtgF0AIQWS_X6IHeJfsDP-8/view?usp=sharing'},
];

function loadTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    certificates.forEach(cert => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = cert.name;
        row.appendChild(nameCell);

        const buttonCell = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = 'Descargar';
        button.dataset.dni = cert.dni;
        button.dataset.link = cert.link;
        button.onclick = function() {
            const inputDni = prompt('Ingrese su DNI para descargar el certificado:');
            if (inputDni === null) {
                return; // Si el usuario cancela, no hace nada
            }
            if (inputDni.trim() === '') {
                alert('El campo DNI no puede estar vacío.');
                return;
            }
            if (inputDni === this.dataset.dni) {
                window.open(this.dataset.link, '_blank');
            } else {
                alert('DNI incorrecto. No tienes permiso para descargar este certificado.');
            }
        };
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);

        tableBody.appendChild(row);
    });
}

document.getElementById('search').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCertificates = certificates.filter(cert => cert.name.toLowerCase().includes(searchTerm));
    
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    filteredCertificates.forEach(cert => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = cert.name;
        row.appendChild(nameCell);

        const buttonCell = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = 'Descargar';
        button.dataset.dni = cert.dni;
        button.dataset.link = cert.link;
        button.onclick = function() {
            const inputDni = prompt('Ingrese su DNI para descargar el certificado:');
            if (inputDni === null) {
                return; // Si el usuario cancela, no hace nada
            }
            if (inputDni.trim() === '') {
                alert('El campo DNI no puede estar vacío.');
                return;
            }
            if (inputDni === this.dataset.dni) {
                window.open(this.dataset.link, '_blank');
            } else {
                alert('DNI incorrecto. No tienes permiso para descargar este certificado.');
            }
        };
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);

        tableBody.appendChild(row);
    });
});

// Cargar la tabla al iniciar
loadTable();

