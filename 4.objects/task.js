function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  	if (this.hasOwnProperty('marks') === true) {
		this.marks.push(...marks);
	} else {	
        return console.log("Студент отчислен");
	}
}


Student.prototype.getAverage = function (Average) {
    if (this.hasOwnProperty('marks') === false || this.marks.length === 0) {
		return this.Average = 0;
	} else {	
        return this.Average = this.marks.reduce(((acc, amount) => acc + amount / this.marks.length),0);
	}
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
