courseRoster.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams, CoursesFactory, UtilitiesFactory) {
  $scope.course = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId);
  console.log($stateParams.courseId);
  console.log($scope.course);
  $scope.addStudent = function() {
    $scope.course.students.push({ name: $scope.studentName});
    $scope.studentName = null;
  }
});
