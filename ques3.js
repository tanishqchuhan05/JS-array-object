const schoolData = {
  schoolName: "Green Valley High",
  classes: [
    {
      className: "10A",
      teacher: { name: "Mr. Smith", subject: "Math" },
      students: [
        {
          name: "Alice",
          age: 15,
          parents: {
            father: { name: "John Doe", occupation: "Engineer" },
            mother: { name: "Jane Doe", occupation: "Doctor" }
          },
          siblings: [
            { name: "Tommy", age: 10 },
            { name: "Lily", age: 8 }
          ]
        },
        {
          name: "Bob",
          age: 15,
          parents: {
            father: { name: "David Roe", occupation: "Teacher" },
            mother: { name: "Sara Roe", occupation: "Nurse" }
          },
          siblings: []
        }
      ]
    },
    {
      className: "10B",
      teacher: { name: "Mrs. Clark", subject: "Science" },
      students: [
        {
          name: "Charlie",
          age: 16,
          parents: {
            father: { name: "Martin Hill", occupation: "Chef" },
            mother: { name: "Martha Hill", occupation: "Engineer" }
          },
          siblings: [
            { name: "Lucy", age: 14 }
          ]
        }
      ]
    },
    {
      className: "9A",
      teacher: { name: "Mr. Smith", subject: "Math" },
      students: [
        {
          name: "Nora",
          age: 14,
          parents: {
            father: { name: "Steve Nash", occupation: "Electrician" },
            mother: { name: "Anna Nash", occupation: "Teacher" }
          },
          siblings: []
        }
      ]
    },
    {
      className: "9C",
      teacher: { name: "Mrs. Clark", subject: "Science" },
      students: [
        {
          name: "Owen",
          age: 15,
          parents: {
            father: { name: "Tim Owens", occupation: "Technician" },
            mother: { name: "Pam Owens", occupation: "Pharmacist" }
          },
          siblings: []
        }
      ]
    },
    {
      className: "8A",
      teacher: { name: "Ms. Lee", subject: "Geography" },
      students: [
        {
          name: "Peter",
          age: 13,
          parents: {
            father: { name: "Chris Parker", occupation: "Taxi Driver" },
            mother: { name: "Wendy Parker", occupation: "Clerk" }
          },
          siblings: []
        }
      ]
    },
    {
      className: "8B",
      teacher: { name: "Ms. Bell", subject: "English" },
      students: [
        {
          name: "Quincy",
          age: 13,
          parents: {
            father: { name: "Dan Quinn", occupation: "Banker" },
            mother: { name: "Lisa Quinn", occupation: "Chef" }
          },
          siblings: []
        }
      ]
    },
    {
      className: "10A",
      teacher: { name: "Mr. Patel", subject: "Biology" },
      students: [
        {
          name: "Rita",
          age: 15,
          parents: {
            father: { name: "Raj Verma", occupation: "Lawyer" },
            mother: { name: "Nina Verma", occupation: "Engineer" }
          },
          siblings: []
        }
      ]
    },
    {
      className: "8B",
      teacher: { name: "Ms. Bell", subject: "English" },
      students: [
        {
          name: "Sam",
          age: 14,
          parents: {
            father: { name: "Mike Reed", occupation: "Barber" },
            mother: { name: "Julie Reed", occupation: "Designer" }
          },
          siblings: []
        }
      ]
    }
  ]
};


1. Print names of all teachers. (Use forEach, map, or loop)
for loop
for (let i = 0; i<schoolData.classes.length; i++){
    console.log(schoolData.classes[i].teacher.name);
}

forEach
schoolData.classes.forEach((cls) => {
    console.log(cls.teacher.name);
});

map
const teacherNames = schoolData.classes.map(cls => cls.teacher.name);
console.log(teacherNames);



2. Print all student names across all classes.
for(let i=0;i<schoolData.classes.length;i++){ // iterate classes
    for(let j=0;j<schoolData.classes[i].students.length;j++){   // iterate students in each class
        console.log(schoolData.classes[i].students[j].name); // print student name
    }
}


3. List all parents' occupations for every student.
for(let i =0;i<schoolData.classes.length;i++){ // iterate classes
    for (let j=0; j<schoolData.classes[i].students.length; j++){ // iterate students in each class
        const student = schoolData.classes[i].students[j]; // current student
        console.log(`Student: ${student.name}`); // print student name
        console.log(`  Father's Occupation: ${student.parents.father.occupation}`); // print father's occupation
        console.log(`  Mother's Occupation: ${student.parents.mother.occupation}`); // print mother's occupation
    }
}

4. Group students by age. Output should look like:
{
  "15": ["Alice", "Bob"],
  "16": ["Charlie"]
}


const studentsByAge = {}; // object to hold age groups
for (let i =0; i<schoolData.classes.length; i++){ // iterate classes
    for( let j=0; j<schoolData.classes[i].students.length; j++){ // iterate students in each class
        const student = schoolData.classes[i].students[j]; // current student}}
        const age = student.age; // student's age
        if (!studentsByAge[age]){ // if age group doesn't exist, create it
            studentsByAge[age] = [];
        }
        studentsByAge[age].push(student.name); // add student to age group
    }
}

console.log(studentsByAge)


5.  Find all teachers who teach more than one class (if data was larger).
const teacherCount = {}; // object to hold teacher class counts
const repeatedTeachers =[]; // array to hold teachers teaching multiple classes
for (let i=0; i<schoolData.classes.length;i++){ // iterate classes
    const teacherName = schoolData.classes[i].teacher.name; // current teacher's name
    if(!teacherCount[teacherName]){ // if teacher already exists, increment count
        teacherCount[teacherName]=0;
    }
    teacherCount[teacherName]++; // initialize count
}
    for( let teacher in teacherCount){ // iterate teacher count object
        if(teacherCount[teacher]>1){ // if teacher teaches more than one class
            repeatedTeachers[repeatedTeachers.length] = teacher; // add teacher to repeatedTeachers array
        }
    }
console.log(repeatedTeachers); // print teachers teaching multiple classes

7. List all siblings across all students in all classes.

const siblings = [];
for(let i=0;i<schoolData.classes.length;i++){ // iterate classes
    for(let j=0;j<schoolData.classes[i].students.length;j++){   // iterate students in each class
        const student = schoolData.classes[i].students[j]; // current student
        for(let k=0;k<student.siblings.length;k++){ // iterate siblings of each student
            siblings[siblings.length]=student.siblings[k].name; // add sibling name to siblings array
        }
    }
}

console.log(siblings);

8 Flatten all student names with their class and teacher in one array like:
[
  { student: "Alice", class: "10A", teacher: "Mr. Smith" },
  { student: "Bob", class: "10A", teacher: "Mr. Smith" },
  { student: "Charlie", class: "10B", teacher: "Mrs. Clark" }
]

const flattened = [];

for(let i=0 ;i<schoolData.classes.length;i++){ // iterate classes
    const cls = schoolData.classes[i]; // current class
    for(let j=0;j<cls.students.length;j++){
        const student = cls.students[j]; // current student
        flattened[flattened.length]= {
            student: student.name,
            class: cls.className,
            teacher: cls.teacher.name
        }
    }
}

console.log(flattened);
