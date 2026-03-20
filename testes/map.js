
const students = [
    { name: 'Rodolfo', TextGrade: 7 },
    { name: 'Maria', TextGrade: 5 },
    { name: 'João', TextGrade: 8 },
    { name: 'Bruno', TextGrade: 9 },
    { name: 'Carla', TextGrade: 3 },
    { name: 'Ana', TextGrade: 2 },
    { name: 'Julio', TextGrade: 10 },
]

const studentsWidthGrades = students.map(students => {
    
        return {
            name: students.name,
            TextGrade: students.TextGrade >= 7 ? { status: 'Aprovado' } : { status: 'Reprovado' }
           
        }
    
    }
)

console.log(studentsWidthGrades)