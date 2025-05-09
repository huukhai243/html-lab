var courses = [
    { id: 1, name: 'Javascript', coin: 0 },
    { id: 2, name: 'HTML, CSS', coin: 0 },
    { id: 3, name: 'ReactJS', coin: 100 }
];

var courseNames = courses.map(function(course) {
    return course.name;
});

console.log(courseNames);