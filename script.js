let users = JSON.parse(localStorage.getItem('users')) || [];
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

function showUserForm() {
    document.getElementById('userForm').style.display = 'block';
    document.getElementById('appointmentForm').style.display = 'none';
    document.getElementById('appointmentList').style.display = 'none';
    updateUsersList();
}

function showAppointmentForm() {
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('appointmentForm').style.display = 'block';
    document.getElementById('appointmentList').style.display = 'none';
    updateUsersDropdown();
}

function showAppointments() {
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('appointmentForm').style.display = 'none';
    document.getElementById('appointmentList').style.display = 'block';
    updateAppointmentsList();
}

function saveUser() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const isDuplicate = users.some(user => user.phone === phone);

    if (isDuplicate) {
        alert('Paciente já cadastrado!');
        return;
    }
    else {
       alert('Paciente cadastrado com sucesso');
    }

    users.push({ name, phone });
    localStorage.setItem('users', JSON.stringify(users));
    updateUsersList();
    document.getElementById('userDataForm').reset();
}

function saveAppointment() {
    const selectedUserName = document.getElementById('userSelect').value;
    const selectedUser = users.find(user => user.name === selectedUserName);

    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const specialty = document.getElementById('specialty').value;

    const currentDate = new Date();
    const selectedDate = new Date(`${day} ${time}`);

    if (selectedDate < currentDate) {
        alert('Não é possível agendar consultas anteriores ao dia de hoje.');
        return;
    }

    const isDuplicateAppointment = appointments.some(appointment =>
        appointment.day === day && appointment.time === time
    );

    if (isDuplicateAppointment) {
        alert('Data e horário já agendados. Escolha outra data ou horário.');
        return;
    }
    else {
      alert('Consulta agendada com sucesso!')
    }

    appointments.push({ ...selectedUser, day, time, specialty });
    localStorage.setItem('appointments', JSON.stringify(appointments));
    updateAppointmentsList();
    document.getElementById('appointmentDataForm').reset();
}

function updateUsersList() {
    const userListElement = document.getElementById('userList');
    userListElement.innerHTML = '';

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} - ${user.phone}`;
        userListElement.appendChild(listItem);
    });
}

function updateUsersDropdown() {
    const userSelectElement = document.getElementById('userSelect');
    userSelectElement.innerHTML = '';

    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.name;
        option.textContent = `${user.name} - ${user.phone}`;
        userSelectElement.appendChild(option);
    });
}

function updateAppointmentsList() {
    const appointmentListElement = document.getElementById('appointmentList');
    appointmentListElement.innerHTML = '';

    appointments.forEach(appointment => {
        const listItem = document.createElement('li');
        listItem.textContent = `${appointment.name} - ${appointment.phone} - ${appointment.day} - ${appointment.time} - ${appointment.specialty}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('confirmation');
        deleteButton.onclick = () => deleteAppointment(appointment);

        listItem.appendChild(deleteButton);
        appointmentListElement.appendChild(listItem);
    });
}

function deleteAppointment(appointment) {
    const index = appointments.indexOf(appointment);
    appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    updateAppointmentsList();
}

function sair() {
  console.log("Sair do programa");
  window.close(); 
}