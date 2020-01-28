$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var person1Input = $("input#userList").val();
    var person2Input = $("input#userList2").val();
    var person3Input = $("input#userList3").val();
 console.log(person1Input, person2Input, person3Input);
    agenda.addTask([person1Input, person2Input, person3Input]); 
    console.log(agenda)   
  });
});

// BACK END


function agenda() {
  this.tasks = [];
  this.currentId = 0;
}

agenda.prototype.addTask = function(task) {
  task.id = this.assignId();
  // this.item = person1Input;
  this.tasks.push(task);

}

agenda.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

agenda.prototype.findTask = function(id) {
  for (var i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  };
  return false;
}

agenda.prototype.deleteTask = function(id) {
  for (var i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        delete this.tasks[i];
        return true;
      }
    }
  };
  return false;
}

// agenda.prototype.updateTask = function(id) {
//   for (var i=0; i< this.tasks.length; i++) {
//     if (this.tasks[i]) {
//       if (this.tasks[i].id == id) {
//         return this.tasks[i].location = "310-353- 2322";
//       }
//     }
//   };
//   return false;
// }

function Task(item, due, location) {
  this.item = item;
  this.due = due;
  this.location = location;
}

var agenda = new agenda();
var task = new Task("Take out the garbage", "Tuesday", "Home");
