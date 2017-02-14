$(document).ready(function(){
  //listen for submit click
  $('#submit').on('click', function(){
    //creates variables that take inputs and get concatenated into table rows
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var salary = $('#salary').val();

    //appends entered employee to the table
    $('#employeeTable').append(
      '<tr>' +
      '<td>' + firstName + '</td>' +
      '<td>' + lastName + '</td>' +
      '<td>' + idNumber + '</td>' +
      '<td>' + jobTitle + '</td>' +
      '<td>' + salary + '</td>' +
      '<td class=deleteButton><button class=deleteButtons data-salary="'+ salary +'">Delete</button></td>' +
      '</tr>'
    );

    //add monthly salary expenses to the DOM
    var newEmployeeMonthlyExpenses = salary/12;
    var previousMonthlyExpenses = $('#monthlySalary').text();
    var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + newEmployeeMonthlyExpenses;
    $('#monthlySalary').text(totalMonthlyExpenses);

    //clears out the entered information from the inputs
    $('.employeeInputForm').val('');
  });

  //removes the row of the delete button that is clicked
  $('#employeeTable').on('click', '.deleteButtons', function(){
    console.log('I heard the delete click!');
    var deletedEmployeeSalary = $(this).data('salary');
    var deletedEmployeeMonthlyExpenses = deletedEmployeeSalary/12;
    var previousMonthlyExpenses = $('#monthlySalary').text();
    var newTotalMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeMonthlyExpenses;
    $('#monthlySalary').text(newTotalMonthlyExpenses);

    $(this).closest('tr').remove(); //removes row of the clicked delete button
  });

});
