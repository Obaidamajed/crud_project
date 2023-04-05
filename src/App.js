import React, { Component } from 'react'
import CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'

class App extends Component {
  state = {
    courses : [
      {name : "HTML"},
      {name : "CSS"},
      {name : "jQuery"}
    ],
    current : ""
  }

  // ** Start UpdateCourse
  updateCourse = (e) => {
    this.setState ({
      current : e.target.value // بحط في الكورينت قيمة الإنبوت اللي بكتبها 
    })
  }
  // ** End UpdateCourse

  // ** Start addCourse
  addCourse = (e) => {
    e.preventDefault(); // بتمنع حدوث الريلود للصفحة بعد ما تضغط على زر ال آد
    let theCurrent = this.state.current;
    let theCourses = this.state.courses;
    if (theCurrent !== ""){
      theCourses.push({name: theCurrent})
      this.setState({
        course: theCourses, // هيك بعمل أبدايت للكورسيز
        current: ""
      })

    }
  }
  // ** End addCourse

  // ** Start deleteCourse
  deleteCourse = (index) => {
    // console.log(index);
    let theCourses = this.state.courses;
    theCourses.splice(index, 1) // بحذف الكورس اللي انا ضغطت عليه
    this.setState({
      courses : theCourses 
    })
  }

  // editCourse
  editCourse = (index, value) => { // index رقم الإندكس الخاص بالعنصر اللي بدي أعمل عليه تعديل
    // value القيمة الجديدة اللي دخلتها
    let courses = this.state.courses;
    let course = courses[index]; // هون الكورس بمثل أوبجيكت واحد واللي هو الأوبجيكت اللي بحمل رقم الإندكس اللي ضغطت عليه
    course['name'] = value; // النايم الخاص بالأوبجيكت اللي ضغطت عليه إعملو بنفس قيمة الفاليو الجديدة بعد التعديل
    this.setState({
      courses // بعمل أبدايت للكورس
    })

  }

  render() {
    const {courses} = this.state
    const courseList = courses.map( (course, index) => {
      return <CourseList details={course} key={index} i={index}deleteCourse={this.deleteCourse} editCourse={this.editCourse}/> // i={index} هذا بروبس بساوي الإندكس اللي انا باعتو , عملت هاي الحركة عشان أبعت الإندكس ك براميتر لفنكشن الديليت لحتى أحذف العنصر اللي بضغط عليه
    }) // index هوالرقم لكل آيتيم
    return (
      <section className='App'>
        
        <h2>Add Courses</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
        <ul>{courseList}</ul>
        
      </section>
    )
  }
}

export default App