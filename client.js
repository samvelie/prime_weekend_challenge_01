$(document).ready(function(){
//have to set this var outside the function because otherwise it resets each click and doesn't total
  var salaryAdder = 0;
//listen for submit click
  $('#submit').on('click', function(){
    //creates variables that take inputs and get concatenated into table rows
      var firstName = $('#firstName').val();
      var lastName = $('#lastName').val();
      var idNumber = $('#idNumber').val();
      var jobTitle = $('#jobTitle').val();
      var salary = $('#salary').val();
      var fullEmployeeInfo = '<tr><td>' + firstName +'</td><td>' + lastName + '</td><td>' + idNumber + '</td><td>' + jobTitle + '</td><td class= salary>' + salary + '</td><td class="deleteButtons"><button type="button" name="deleteButton" class="deleteButton">Delete</button></td></tr>';

    //appends entered employee to the table
      $('#employeeTable').append(fullEmployeeInfo);


    //clears out the entered information from the inputs
      $('#firstName').val('');
      $('#lastName').val('');
      $('#idNumber').val('');
      $('#jobTitle').val('');
      $('#salary').val('');

    //updates the salaryAdder variable with each click
      salaryAdder += parseFloat(salary);
      var monthlySalary = salaryAdder/12;
    $('#monthlySalary').find('p').text('Monthly Salary: ' + monthlySalary);
  });

//removes the row of the delete button that is clicked
  $('#employeeTable').on('click', '.deleteButton', function(){
    console.log('I heard the delete click!');
    $(this).closest('tr').remove();
  });

});
