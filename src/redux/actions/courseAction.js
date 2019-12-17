export function createCourse(course) {
  // object shorthand syntax so no need for course: course
  return { type: "CREATE_COURSE", course };
}
