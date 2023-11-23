       // Assignment 49 - 52
       // ----------------Q 1 -------------------------------------
       document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let email = document.getElementById('email').value;
        
        
        // firstName.value = ''
        // lastName.value = ''
        // email.value = ''
        
        let submittedDataDiv = document.getElementById('submittedData');
        submittedDataDiv.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        `;
    });

    // --------------Q 2----------------------

    function read(button) {
        let item = button.parentNode;
        let fullPara = item.querySelector('.fullPara');
    
        if (fullPara.style.display === 'none') {
            fullPara.style.display = '';
            button.textContent = 'Read less';
        } else {
            fullPara.style.display = 'none';
            button.textContent = 'Read more';
        }
    }


    // ----------------------- Q 3 -------------- 


document.getElementById('studentForm').addEventListener('submit', addStudent);

let students = [];

function addStudent(event) {
event.preventDefault();

const name = document.getElementById('name').value;
const age = document.getElementById('age').value;
const grade = document.getElementById('grade').value;

if (name && age && grade) {
  const student = {
    name,
    age,
    grade
  };
  
  students.push(student);
  displayStudents();
  document.getElementById('studentForm').reset();
} else {
  alert('Please fill in all fields');
}
}

function displayStudents() {
const studentList = document.getElementById('studentList');
studentList.innerHTML = '';

students.forEach((student, index) => {
  const row = document.createElement('tr');
  
  const nameCell = document.createElement('td');
  nameCell.textContent = student.name;
  row.appendChild(nameCell);
  
  const ageCell = document.createElement('td');
  ageCell.textContent = student.age;
  row.appendChild(ageCell);
  
  const gradeCell = document.createElement('td');
  gradeCell.textContent = student.grade;
  row.appendChild(gradeCell);
  
  const actionsCell = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => deleteStudent(index));
  actionsCell.appendChild(deleteBtn);
  
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => showEditForm(index));
  actionsCell.appendChild(editBtn);
  
  row.appendChild(actionsCell);
  studentList.appendChild(row);
});
}

function deleteStudent(index) {
students.splice(index, 1);
displayStudents();
}

function showEditForm(index) {
const editForm = document.getElementById('editForm');
const student = students[index];

document.getElementById('editName').value = student.name;
document.getElementById('editAge').value = student.age;
document.getElementById('editGrade').value = student.grade;

editForm.classList.remove('hidden');

document.getElementById('updateBtn').addEventListener('click', () => {
  updateStudent(index);
  editForm.classList.add('hidden');
});

document.getElementById('cancelBtn').addEventListener('click', () => {
  editForm.classList.add('hidden');
});
}

function updateStudent(index) {
const updatedName = document.getElementById('editName').value;
const updatedAge = document.getElementById('editAge').value;
const updatedGrade = document.getElementById('editGrade').value;

if (updatedName && updatedAge && updatedGrade) {
  students[index].name = updatedName;
  students[index].age = updatedAge;
  students[index].grade = updatedGrade;
  displayStudents();
} else {
  alert('Please fill in all fields');
}
}
