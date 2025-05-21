function showCourses(){
    fetch("http://localhost:8080/courses")
    .then((response) => response.json())
    .then((courses) => {
        const dtable = document.getElementById("coursetable")
        courses.forEach(course => {
            var row = `<tr>
            <td>${course.courseId}</td>
            <td>${course.courseName}</td>
            <td>${course.trainer}</td>
            <td>${course.durationInWeeks}</td>
            </tr>`


            dtable.innerHTML+=row;
        });
    })
}

function showEnrolledStudents(){
     fetch("http://localhost:8080/courses/enrolled")
    .then((response) => response.json())
    .then((Stds) => {
        const dtable = document.getElementById("enrolledtable")
        Stds.forEach(Std => {
            var row = `<tr>
            <td>${Std.name}</td>
            <td>${Std.emailId}</td>
            <td>${Std.courseName}</td>
            </tr>`


            dtable.innerHTML+=row;
        });
    })
}