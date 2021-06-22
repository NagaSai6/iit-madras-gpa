
document.getElementById('submitButton').addEventListener("click",function(){
    if(document.getElementById('output').innerHTML){
        document.getElementById('output').innerHTML =""
    }
   let element = document.getElementById('dynamicForm');
   while(element.firstChild){
       element.removeChild(element.firstChild) ;
   }
    validateInput();
})

var noOfCourses = document.getElementById('inputCoursesNumber').value;

function validateInput(){
    var  inputValue = document.getElementById('inputCoursesNumber').value;
    if(isNaN(inputValue)){
        document.getElementById('inputCoursesNumber').value = null;
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "4000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          } ;

        return toastr["error"]("Don't you know how to type a number properly ?", "WTF");
    }
    if(inputValue>7){
        document.getElementById('inputCoursesNumber').value = null;
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          } ;
          return toastr["error"]("Are you studying in IITM ? HowTF you can do more than 10 courses in one semester ?", "LOL");
    }
    if(inputValue==0 || inputValue==''){
        document.getElementById('inputCoursesNumber').value = null;
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          } ;
         return toastr["error"]("Focus ", "Hey Insti Gawd") ;
    }
    if(inputValue<0){
        document.getElementById('inputCoursesNumber').value = null;
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          } ;
       return  toastr["error"]("HowTF , number of courses can be negative ?", "Genius") ;

    }
    generateInputs(inputValue);
}

function generateInputs(inputValue){
    var container = document.getElementById("dynamicForm") ;
    let button = document.createElement('button');
    let div3 = document.createElement('div');
    div3.className="findGrade"
    button.innerHTML ="Find Grade";
    button.setAttribute("type","submit")
    button.className ="btn btn-lg btn-outline-primary align-items-center";
    button.id ="submit-button";
    div3.appendChild(button) ;
  for (let i=1 ;i <=inputValue;i++){
      
      let div1 = document.createElement('div') ;
      let div2 = document.createElement('div');
     

      var select = document.createElement('select') ;

      select.name ="course"+i+"gpa";

      select.className="grade-gpa";

      select.id = "course" + i ;

      let option = document.createElement('option') ;

      option.innerHTML = "Choose Grade";

      select.appendChild(option)

      grades.forEach(element => {
          let option = document.createElement('option');
          option.value = element.value;
          option.innerHTML = element.grade ;

          select.appendChild(option)
      });

      div2.appendChild(select)

      let input = document.createElement('input');
      input.className ="form-control form-data";
      input.name = "Course"+" " +i;
      input.placeholder = "Course" + " " + i + " "+ "Credits";

      div1.className = "col-sm-3 my-1 dynamicallyGeneratedDivs" ;

      div2.className = "col-auto my-1 dselect" ;

      
      div1.appendChild(input)

     container.appendChild(div1)

     container.appendChild(div2) 
  }
  container.appendChild(div3)
}





 function validateFormData(){
   let inputData = document.getElementsByClassName('form-data');
   var credits = [] ;
   var totalCredits = 0;
   let lengthOfInputData = inputData.length;
   for(let a=0;a<lengthOfInputData;a++){
       if(!inputData[a].value){
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          } ;
          return toastr["error"]("you have not entered credits for some course(s)", "Invalid Credits");
       }
       if(isNaN(inputData[a].value)){
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
          return toastr["error"]("course credit should be a positive number", "Namaskar") ;
       }
       if (inputData[a]<=0){
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
          return toastr["error"]("course credit should not be a negative or zero", "Die") ;
       }
       credits.push(inputData[a].value)
   }
   for (let b=0;b<credits.length;b++){
       totalCredits += parseInt(credits[b])
   }
   
   if(totalCredits>66){
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      return toastr["error"]("bruh , Credit limit for one semester is 66", "IITM's senate hurts") ;
   }


   getGpa(credits,lengthOfInputData,totalCredits); 
  
 }

 function getGpa(credits,lengthOfInputData,totalCredits){
     var gpa =[]
   for (let e=1;e<=lengthOfInputData;e++){
       let courseId = "course"+e;
       let gpa_value = document.getElementById(courseId).value ;
       gpa.push(gpa_value);
       variable=""
       gpa_value=""
   }
  var sum = 0;
  for (let f=0;f<credits.length;f++){
       sum += credits[f]*parseInt(gpa[f])
  }
  
  let cgpa = sum / totalCredits ;
 let roundedgpa = roundToTwo(cgpa);
 if(roundedgpa>=9){
     document.getElementById('output').style.color='green'
 }else if (roundedgpa>=8 && roundedgpa<9){
    document.getElementById('output').style.color='yellow'
 }else if(roundedgpa>=7&& roundedgpa<8){
    document.getElementById('output').style.color='orange'
 }else{
    document.getElementById('output').style.color='red'
 }
 document.getElementById('output').innerHTML="Your GPA :"+ " "+roundedgpa
 
 }

 function roundToTwo(cgpa){
    return +(Math.round(cgpa + "e+2")  + "e-2");
 }