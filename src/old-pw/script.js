/*
Name: Jiayi Li
Date: Date 23/03/01
Section: CST 8285 section 310
Lab: Assignment 1
File: script.js
Lab objective: a resume website
*/

const originalParent = document.querySelector("#parent");

/*The search bar components, composed of the search function and the clear function:*/
/*search function↓
notice that it can search words from course titles (h5 tag), levels(h6 tag), and course dscriptions(p tag)*/
const searchButton = document.querySelector("#search-button");

function searchOnPage() {
  var searchInput = document.querySelector("#Search");
  var lowerCase = searchInput.value.toLowerCase();
  var searchCourses = document.querySelectorAll(".courses");

  for (i = 0; i < searchCourses.length; i++) {
    if ( (searchCourses[i].querySelector(".card-body").querySelector("h5").innerText.toLowerCase().includes(lowerCase)) 
          || (searchCourses[i].querySelector(".card-body").querySelector("h6").innerText.toLowerCase().includes(lowerCase)) 
          || (searchCourses[i].querySelector(".card-body").querySelector("p").innerText.toLowerCase().includes(lowerCase)) ) {
      searchCourses[i].style.display = "block";
    } else {
      searchCourses[i].style.display = "none";
    }
  }
}

searchButton.addEventListener("click", searchOnPage);


/*function to clear search result↓*/
const clearButton = document.querySelector("#clear-button");

function restoreCourses() {

  var coursesRestored = document.querySelectorAll(".courses");
  for (i = 0; i < coursesRestored.length; i++) {
        coursesRestored[i].style.display = "block";
  }
}

clearButton.addEventListener("click", restoreCourses);



/*filter function to filter courses by levels*/
const filterButton = document.querySelector("#filter-button");
const level1Checkbox = document.querySelector("#level1");
const level2Checkbox = document.querySelector("#level2");
const level1Courses = document.querySelectorAll(".level1-course");
const level2Courses = document.querySelectorAll(".level2-course");

function filterByLevel() {

  if(level1Checkbox.checked){
    for (i = 0; i < level1Courses.length; i++) {
      level1Courses[i].style.display = "block";
    }
  } else{
    for (i = 0; i < level1Courses.length; i++) {
      level1Courses[i].style.display = "none";
    }
  }
  if(level2Checkbox.checked){
    for (i = 0; i < level2Courses.length; i++) {
      level2Courses[i].style.display = "block";
    }
  } else{
    for (i = 0; i < level2Courses.length; i++) {
      level2Courses[i].style.display = "none";
    }
  }
}

filterButton.addEventListener("click", filterByLevel);



/*sort courses by level function*/
const courses = document.querySelectorAll(".courses");
const sortButton = document.querySelector("#sort-button");

function sortCourses(option){
  let coursesArray = Array.from(courses);
  if(option == "lowest to highest"){
    coursesArray.sort(function(first, second) {
    let firstPosition = first.getAttribute("class");
    let secondPosition = second.getAttribute("class");
    return (firstPosition.localeCompare(secondPosition));
  });
  } else if(option == "highest to lowest"){
    coursesArray.sort(function(first, second) {
    let firstPosition = first.getAttribute("class");
    let secondPosition = second.getAttribute("class");
    return -(firstPosition.localeCompare(secondPosition));
  });
  }

  let parent = document.querySelector("#parent");
  parent.innerHTML = "";

  for(var i = 0, l = coursesArray.length; i < l; i++) {
    parent.appendChild(coursesArray[i]);
  }
  
}

sortButton.addEventListener("click", function(){
  sortCourses(document.querySelector("#sort").value);
});


