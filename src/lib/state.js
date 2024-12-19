import { writable, derived } from 'svelte/store';

const fullname = '张三';
const bopomofo = 'Zhang SAN';
const idtp = '身份证'
const idno = '11010819920625574X';
const entry = '2022-09';
const grad = '2025-06';

const courses = [
    'chinese',
    'mathematics',
    'further-maths',
    'economics',
    'physics',
    'chemistry',
    'biology',
    'history',
    'geography',
    'politics',
    'pe',
]

const semestersToGenerate = writable(4)
const globalLowerLimit = writable(85)
const globalHigherLimit = 100

const studentInfo = writable(
    {
        fullname: fullname,
        bopomofo: bopomofo,
        idtp: idtp,
        idno: idno,
        entry: entry,
        grad: grad
    }
);

const goodCourses = writable(
    [
        'mathematics',
        'physics',
        'chemistry',
        'economics'
    ]
);

const gender = derived(studentInfo, ($studentInfo) => {
    return Number($studentInfo.idno.slice(-2, -1)) % 2 === 0
        ? { zh: '女', en: 'Female' }
        : { zh: '男', en: 'Male' };
});

const dob = derived(studentInfo, ($studentInfo) => {
    return {
        yob: $studentInfo.idno.slice(6, 10),
        mob: $studentInfo.idno.slice(10, 12),
        dob: $studentInfo.idno.slice(12, 14),
    };
});

const goodGrades = derived(goodCourses, ($goodCourses) => {
    const result = {};
    $goodCourses.forEach((course) => {
        // @ts-ignore
        result[course] = $goodGrades[course] ? $goodGrades[course] : 'A*';
    });
    return result;
})

const score = derived(goodCourses, ($goodCourses) => {
    courses.forEach(element => {

    });
})

export { studentInfo, goodCourses, gender, dob, goodGrades };