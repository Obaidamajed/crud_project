import React, { Component } from 'react'

class CourseList extends Component {

  state = {
    isEdit : false
  }


  // render Course Item
  renderCourse = () => {
    return(
      <li>
        <span>{this.props.details.name}</span>
        <button onClick={() => {this.toggleState()}}>Edit Course</button>
        {/* بجيب النايم اللي في الستايت اللي في ملف ال آب */}
        <button onClick={() => {this.props.deleteCourse(this.props.i)}}>Delete Course</button>
        {/* this.props.i هذا براميتر الفنكشن ديليت كورس لحتى أقدر أحدد أي لغة ضغطت عليها  */}
      </li>
    )
  }

  // toggleState
  toggleState = () => {
    let {isEdit} = this.state;
    this.setState({
      isEdit: !isEdit // بخلي الإز إيديت من فالس الى ترو
    })
  }


  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.i , this.input.value); // this.input.value قيمة الفاليو الجديدة
    this.toggleState();
  }


  // render Update Form 
  renderUpdateForm = () => {
    return(
      <form onSubmit={this.updateCourseItem}>
        <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
        <button>Update Course</button>
      </form>
    )
  }



  render() {
    let {isEdit} = this.state;
    return (
      <>
        { isEdit ? this.renderUpdateForm() : this.renderCourse() } 
        {/* لو الإز إيديت ترو حيعرضلي الفنكشن اللي بعد اشارة السؤال ولو الإز إيديت فالس حيعرض الفنكشن اللي بعد النقطتين الرأسيتين */}
      </>
    )
  }
}

export default CourseList