ab  = document.querySelector(".ask");
abse = document.querySelector(".welcome")
ab.style.display = "none";
display = 0;
llamr = localStorage.getItem("name");

if (llamr == null) {
    llamr = "User";
    localStorage.setItem('name',"user");
}
abse.innerHTML = `<h1 class="welcome">${llamr}'s To Do List</h1>`;


 function ask1() {
    ab.innerHTML = "<h3 style = 'font-size: 30px; display: inline; margin-right: 30vw;'>What is Your Name?</h3>    <input type='text' id='input' placeholder='Enter text' style = 'border: none; display: inline; width: 30vw; height: 5vh'> <button onclick='submit()'>Submit</button>";

    if (display == 1) {
        ab.style.display = 'block';
        display = 0;
    }
    else {
        ab.style.display = 'none';
        display =1;
    }
 }

 function submit() { 
    let hi = document.getElementById("input"); 
    let llamarse = hi.value; 
  
    ask1();
    localStorage.setItem('name',llamarse);
    abse.innerHTML = `<h1 class="welcome">${llamarse}'s To Do List</h1>`;

 }







 working = document.querySelector(".go");
 working.innerHTML = localStorage.getItem("code");
 localStorage.setItem("code", working.innerHTML);
 working.innerHTML = localStorage.getItem("code");
 
 var i = localStorage.length-2;
 

 function ask2() {
    ab.innerHTML = "<h3 style = 'font-size: 30px; display: inline; margin-right: 30vw;'>What is the task?</h3>    <input type='text' id='input2' placeholder='Enter text' style = 'border: none; display: inline; width: 30vw; height: 5vh'> <button onclick='submit2()'>Submit</button>";

    if (display == 1) {
        ab.style.display = 'block';
        display = 0;
    }
    else {
        ab.style.display = 'none';
        display =1;
    }
 }

 function submit2() {
    ansbox = document.getElementById("input2") ;
    ans = ansbox.value;
    localStorage.setItem(i,ans);
    i++;

    dandi = "<input type='checkbox' class='danda'>";
    imagi = "<img src='cross.png' class='imagine'>";


    box = document.createElement('li');   


    box.classList.add("many");
    box.innerHTML = `${dandi} ${ans} ${imagi}` ;
    working.appendChild(box);
    ask1();
    
    
    
    working.querySelector(".imagine").addEventListener(
        "click",
        function() {
            console.log("where");
            box.remove();
            localStorage.setItem("code", working.innerHTML)
        }
    )

    localStorage.setItem("code", working.innerHTML)

 }

  
    working.addEventListener(
        "click",
        function() {
            if (event.target.classList.contains("imagine")) {
                    console.log("where");
                    targeting = event.target.closest('li')
                    targeting.remove();
                    localStorage.setItem("code", working.innerHTML)
            }

            else if (event.target.classList.contains("danda")) {
                console.log("hti")
                targeting = event.target.closest('li')
                if(event.target.checked) {
                    targeting.classList.add("upar")
                }
                else{
                    targeting.classList.remove("upar")
                }
            }
        }
    )
 
