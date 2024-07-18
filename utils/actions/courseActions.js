"use server";

import { Courses } from "@/models/courses";
import { connectToDb } from "../db";

export const getCourses = async () => {
    await connectToDb();
    try {
      const courses = await Courses.find({});
  
      const response = JSON.parse(JSON.stringify(courses));
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  export const getEachCourse = async (id) => {

    await connectToDb();
    try {
      const course = await Courses.findById(id);
  
      const response = JSON.parse(JSON.stringify(course));
      return response;
    } catch (error) {
      console.log(error);
    }
  };