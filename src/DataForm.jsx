import React from 'react'

 
let studentData = {};

export const setStudentData = (data) => {
  studentData = data;
};

export const getStudentData = () => {
  return studentData;
};

