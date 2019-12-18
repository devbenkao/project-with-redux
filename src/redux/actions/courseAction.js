import * as types from "./actionTypes";

export function createCourse(course) {
  // object shorthand syntax so no need for course: course
  return { type: types.CREATE_COURSE, course };
}
