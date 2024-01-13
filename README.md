# Clinica de Consultas Agil
 Desafio para o processo seletivo da Aceleradora Ágil, turma 25

A Clínica de Consultas Ágil é uma aplicação web que permite o cadastro de pacientes, agendamento de consultas e o gerenciamento dos agendamentos. 

Código in a nutshell:

O armazenamento local foi realizado por meio do  localStorage. Ele fornece uma interface de armazenamento simples por meio de pares de chave-valor e é útil para armazenar dados pequenos e simples no lado do cliente. 
No início do script, os dados dos usuários e agendamentos são recuperados do localStorage. A função JSON.parse converte os dados armazenados em formato JSON de volta para objetos JavaScript. Se não houver dados armazenados, são utilizados arrays vazios como padrão.

showUserForm()
Exibe o formulário de cadastro de usuário e oculta os formulários de agendamento e lista de agendamentos. Atualiza a lista de usuários cadastrados.

showAppointmentForm()
Exibe o formulário de agendamento de consultas e oculta os formulários de cadastro de usuário e lista de agendamentos. Atualiza o dropdown com a lista de usuários cadastrados.

showAppointments()
Exibe a lista de agendamentos e oculta os formulários de cadastro de usuário e agendamento de consultas. Atualiza a lista de agendamentos.

saveUser()
Salva as informações do paciente no armazenamento local, verificando se o número de telefone já está cadastrado. Exibe alertas de sucesso ou erro.

saveAppointment()
Salva as informações da consulta no armazenamento local, verificando a disponibilidade de data e horário. Exibe alertas de sucesso ou erro.

updateUsersList()
Atualiza a lista de usuários na interface.

updateUsersDropdown()
Atualiza o dropdown de usuários no formulário de agendamento de consultas.

updateAppointmentsList()
Atualiza a lista de agendamentos na interface, incluindo botões para exclusão de consultas.

deleteAppointment(appointment)
Exclui uma consulta da lista de agendamentos e atualiza o armazenamento local.

sair()
Encerra a execução do programa, fechando a janela do navegador.

