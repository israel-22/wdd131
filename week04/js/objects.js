let aCouse= {
  code: "WDD131",
title: "Dynamic Web Fundamentals",
credits:2,
sections:[
    {section:"001", enrolled:95, instructor:"Roberto Dias"},
    {section:"002", enrolled:95, instructor:"Saha Hossain"},
    {section:"003", enrolled:95, instructor:"Maria Garcia"},
    {section:"004", enrolled:95, instructor:"John Smith"},
   ]};

   //view the information about the course
   function setCouseInInformation(){
    document.querySelector("#courseName").innerHTML=
   `${course.code}- ${course.title}`;
   }

   //template for rows sections
   function sectionYemplate(section){
    return`<tr>
     <td>${section.section}</td>
     <td>${section.enrolled}</td>
     <td>${section.instructor}</td>    
    </tr>`;
   }

   //render sections in the table
   function renderSections(section){
    const html= sections.map(sectionTemplate);
    document.querySelector("#sectionsTable tbody").innerHTML=html.join(""); 
   }

   //call the functions to set the information and render the sections
   setCourseInformation(aCouse);
   renderSections(aCourse.sections);
    