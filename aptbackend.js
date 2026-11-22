
      
      
  
      
      
      
      function bookapt() {


        let aptname = document.getElementById("aname").value;
        let aptemail = document.getElementById("aemail").value;
        let aptnum = document.getElementById("anum").value;
        let service = document.getElementById("service").value;
        let date = document.getElementById("adate").value;

       

     



    
        if (localStorage.getItem("isLoggedIn") !== "true") {
          alert("Please Login First");
          window.location.href = "login.html";
          return;
        }
          if(aptname =="" || aptemail=="" || aptnum =="" || service==""  || date==""){
                  alert("please fill all field")
                  return
        }

        if (aptnum.length !== 10) {
          alert("must contain exact only 10 digit")
          return
        }

        if (!/^[6-9][0-9]{9}$/.test(aptnum)) {
          alert("number is invalid")
          return

        }
       

        // Step 2: Get Current Login Email
        let loginemail = localStorage.getItem("email");



        //  Check Email
        if (aptemail != loginemail) {
          alert("Please Enter Your Login Email");
          return;
        }

       
        let info = JSON.parse(localStorage.getItem("fetchdata")) ?? [];

        // Step 6: Add New Appointment
        info.push({
          username: aptname,
          usermail: aptemail,
          usernum: aptnum,
          userservice: service,
          userdate: date
        });

   
        localStorage.setItem("fetchdata", JSON.stringify(info));

        alert("Appointment Booked Successfully");

       
        window.location.href = "showaptDetails.html";
      }
