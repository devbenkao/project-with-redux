import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  // object shorthand syntax so no need for course: course
  return { type: types.CREATE_COURSE, course };
}

export function loadCourses() {
  return function (dispatch) {
    
  }
}
