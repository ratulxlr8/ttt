var counter = 1;

var est_gpa;
var est_cgpa;

$(document).ready(function () {
    $("#current_semester").hide();
    $("#course_selector").hide();
    $("#course_1").hide();
    $("#course_2").hide();
    $("#course_3").hide();
    $("#course_4").hide();
    $("#course_5").hide();
    $("#course_6").hide();
    $("#calculate_btn").hide();
    $("#result").hide();
    $("#again_btn").hide();

    $("#semstr01").hide();
});
$("#next_btn").click(function () {
    //alert($("#completed_semester").val());
    
    
    var compl_semstr= document.getElementById('completed_semester').value;
    for (let i=1; i<=compl_semstr; i++)
    {
        
        if (i==1)
        {
            document.getElementById('semester_number').innerHTML=i;
            $("#completed_semesterr").hide();
            $("#semstr01").show();
             var get_sem_val= document.getElementById('semstr01_courses').value;
                if(get_sem_val==3){
                    $("#semstr01").hide();
                    $("#course_1").show();
                    $("#course_2").show();
                    $("#course_3").show();
                    
                   
                }
        }
        var c1_credit1 =  document.getElementById('course01_credit_1').value; 
    var c1_gpa1 = document.getElementById('gpa_01').value;
   
    var c1_credit2 =  document.getElementById('course01_credit_2').value;
    var c1_gpa2 = document.getElementById('gpa_02').value;

    var c1_credit3 =  document.getElementById('course01_credit_3').value;
    var c1_gpa3 = document.getElementById('gpa_03').value;
  /*  var c1_credit1 = $("#course01_credit_1").val();
    var c1_gpa1 = $("#gpa_01").val();

    var c1_credit2 = $("#course01_credit_2").val();
    var c1_gpa2 = $("#gpa_02").val();

    var c1_credit3 = $("#course01_credit_3").val();
    var c1_gpa3 = $("#gpa_03").val();
    */
   /* c1_credit1 = parseFloat(c1_credit1);
    c1_gpa1 = parseFloat(c1_gpa1);

    c1_credit2 = parseFloat(c1_credit2);
    c1_gpa2 = parseFloat(c1_gpa2);

    c1_credit3 = parseFloat(c1_credit3);
    c1_gpa3 = parseFloat(c1_gpa3);*/
    var c1_credit1_con1= parseFloat(c1_credit1);
    var c1_gpa1_con=parseFloat(c1_gpa1);

    var c1_credit1_con2= parseFloat(c1_credit2);
    var c1_gpa1_con2=parseFloat(c1_gpa2);

    var c1_credit1_con3= parseFloat(c1_credit3);
    var c1_gpa1_con3=parseFloat(c1_gpa3);

    var sumOfCredit = c1_credit1_con1+c1_credit1_con2+c1_credit1_con3;
    var sumOfGpa =(c1_credit1*c1_gpa1_con)+(c1_credit2*c1_gpa1_con2)+(c1_credit3*c1_gpa1_con3);
    var cgpa=sumOfGpa/sumOfCredit;

    document.getElementById('final_cg').innerHTML=cgpa; 
       // console.log('fuck you',i);
    }
   
    

})
