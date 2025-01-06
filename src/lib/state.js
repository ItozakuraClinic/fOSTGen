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

const gradeRange = {
    'A*': [95, 100],
    'A': [90, 95],
    'B':[80, 90],
    'C':[70, 80]
}

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

const goodGrades = writable(
    courses.reduce((acc, course) => ({...acc, [course]:'A*'}), {})
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

/**
 * Generates a random integer between the specified minimum and maximum values, inclusive.
 *
 * @param {number} min - The minimum integer value (inclusive).
 * @param {number} max - The maximum integer value (inclusive).
 * @returns {number} A random integer between min and max.
 */

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Generates an array of 4 random scores for a course.
 *
 * @param {string} course - The course to generate scores for.
 * @returns {number[]} An array of 4 random scores for the course.
 *
 * If the course is considered a "good course", the scores will be generated
 * between the 'A*' range. Otherwise, the scores will be generated between
 * the global lower limit and 100.
 */
const genRandomScores = (course) => {
    const result = Array(4).fill(0)
    // @ts-ignore
    if ($goodCourses.includes(course)) {
        return result.map(() => getRandomInt(gradeRange['A*'][0], gradeRange['A*'][1]))
    } else {
        // @ts-ignore
        return result.map(() => getRandomInt($globalLowerLimit, globalHigherLimit))
    }
}

const scoresObj = derived(goodCourses, () => {
    courses.map(elem => {
        return {
            [elem]: genRandomScores(elem)
        }
    })
})

export { studentInfo, goodCourses, gender, dob, goodGrades, scoresObj };