var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+918600765857'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>8600765857</label></div> </a> <a href='mailto:patilvinu777@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/918600765857'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/vinayak_09'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/vinayak_patil_09'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/vinayak-patil-793bb5206/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Vinayak Resume.pdf</label></div><a href='assets/Vinayak Patil&#39;s Resume.pdf' download='Vinayak_Patil_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

// function setLastSeen() {
//     var date = new Date();
//     var lastSeen = document.getElementById("lastseen");
//     lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
// }
function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    var hours = date.getHours();
    var minutes = date.getMinutes().toString().padStart(2, '0'); // Adding leading zero if necessary
    lastSeen.innerText = "last seen today at " + hours + ":" + minutes;
}

function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                // sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Serla Vamshi Krishna</a>.</span><br><br>I'm a Backend Engineer at Novamodule product team, with over 9 months of experience, specializing in web development.<br><br>Former Teaching Assistant at Coding Ninjas, focusing on Data Structures and Algorithms, and active content creator on Instagram and YouTube, sharing engaging web development content.<br><br>Send <span class='bold'>'ask'</span> to know more about me.<br>");
              //  sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Serla Vamshi Krishna</a>.</span><br><br>I'm a Backend Engineer at Novamodule product team, with over 9 months of experience, specializing in web development.<br><br>Former Teaching Assistant at Coding Ninjas, focusing on Data Structures and Algorithms, and active content creator on Instagram and YouTube, sharing engaging web development content.<br><br>Send <span class='bold' style='color: darkpurple;'>ask</span> to know more about me.<be>");
              sendTextMessage("Hi there 👋🏻,<br><br>I'm <span class='bold'><a class='alink' style='color: #00c1ff;'>Vamshi Krishna</a></span>.<br><br>I'm a Backend Engineer at Novamodule's product team, with over 9 months of experience, specializing in technologies such as C++, Next.js, JavaScript, and Blitz.<br><br>And also a Teaching Assistant at Coding Ninjas, having resolved more than 687+ inquiries on Data Structures and Algorithms.<br><br>Additionally an active content creator on Instagram and YouTube, sharing engaging web development content.<br><br>If you want to know more about me, just type <span class='bold' style='color: #00c1ff;'>ask</span>!");
            }, 2000);        
            break;
        case "ask":
           // sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
           sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold' style='color: #00c1ff;'>skills</span> - to know my skills<br><span class='bold' style='color: #00c1ff;'>resume</span> - to get my resume<br><span class='bold' style='color: #00c1ff;'>education</span> - to get my education details<br><span class='bold' style='color: #00c1ff;'>address</span> - to get my address<br><span class='bold' style='color: #00c1ff;'>contact</span> - to get ways to connect with me<br><span class='bold' style='color: #00c1ff;'>projects</span> - to get details of my projects<br><span class='bold' style='color: #00c1ff;'>clear</span> - to clear conversation<br><span class='bold' style='color: #00c1ff;'>about</span> - to know about this site</span>");
 
           
           break;
        // case "resume":
           // sendTextMessage(resumeString);
           case "resume":
    //sendTextMessage("You can directly ping me here, and I'll share my resume with you. Additionally, you can connect with me on LinkedIn for more details: [My LinkedIn Profile](https://www.linkedin.com/in/serla-vamshi-krishna/)");
  //  sendTextMessage("You can directly ping me here, and I'll share my resume with you. Additionally, you can connect with me on <a href='https://www.linkedin.com/in/serla-vamshi-krishna/'>LinkedIn</a> for more details.");
 // sendTextMessage("You can directly ping me on <a href='https://www.linkedin.com/in/serla-vamshi-krishna/' style='color: #00c1ff;'>LinkedIn</a>, and I'll share my resume with you. Additionally, you can connect with me on LinkedIn for more details.");
 sendTextMessage("You can directly ping me on <a href='https://www.linkedin.com/in/serla-vamshi-krishna/' style='color: #00c1ff;'>LinkedIn</a> for my resume and more details.");
   break;

            
           break;
        case "skills":
         // sendTextMessage("<span class='sk'>I am currently pursuing B.Tech degree in Computer Science Engineering.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>C++<br>C<br>PHP<br>Kotlin<br>Dart<br>Python<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Android<br>Flutter<br>ReactJs<br>GTK</span><br><br>I use <span class='bold'>Arch Linux</span> as daily driver on my HP Pavilion 15-ec0xxx<br>OS:Arch Linux<br>DE:Gnome(More often) Kde(often)<br>Favourite IDE:VSCode</span>");
         //  sendTextMessage("<span class='sk'>C++, Data Structures, Algorithms, NextJS 13, Prisma, Blitz Netsuite, Celigo, Postman</span>");
       // sendTextMessage("<span class='sk'><span style='color: yellow;'>Technical skills:</span><br><span class='bold'><br>C++ <br>Data<br> Structures<br>Algorithms13,<br> Prisma<br>Blitz<br>Netsuite<br>Celigo<br>Postman</span></span>");
       


       sendTextMessage("<span class='sk'><span class='bold' style='color: #00c1ff;'>Technical skills:</span><br><span class='bold'><br><span class='white'>C++<br>Data Structures<br>Algorithms<br>NextJS 13<br>Prisma<br>Blitz<br>Netsuite<br>Celigo<br>Postman</span></span></span>");
      sendTextMessage("<span class='sk'><span class='bold' style='color: #00c1ff;'>Communication skills:</span><br><span class='bold'><br><span class='white'>Good communication<br>Problem Solving<br>Team collaboration<br>Decision making<br>Time management</span></span></span>");

       
       
     //  sendTextMessage("<span class='sk'>Technical skills:<br><span class='bold'><br>C++<br>Data Structures<br>Algorithms<br>NextJS 13<br>Prisma<br>Blitz<br>Netsuite<br>Celigo<br>Postman</span></span>");
      // sendTextMessage("<span class='sk'>Communication skills:<br><span class='bold'><br>Good communication<br>Problem Solving<br>Team collaboration<br>Decision making<br>Time management</span></span>");
         //sendTextMessage("<span class='sk'><span style='color: yellow;'>Technical skills:</span><br>C++, Data Structures, Algorithms, NextJS 13, Prisma, Blitz Netsuite, Celigo, Postman</span>");

        // sendTextMessage("<span class='sk'><span style='color: yellow;'>Communication skills:</span><br>Good communication, Problem Solving, Team collaboration, Decision making, Time management</span>");
         
           break;

        case "education":
          //  sendTextMessage("I completed my Bachelor of Technology in Computer Science at St. Martin's Engineering College in Hyderabad <br> CGPA : 8.30 <br>  2019 to 2023<br>Passing Year : 2023<br><br>I have completed my Diploma from Government Polytechnic Karad<br>Passing Year:2020<br>Result:86.06%<br><br>I have completed my Secondary school from local school known as SWV<br>Passout Year:2023");
          sendTextMessage("I completed my Bachelor of Technology in Computer Science at St. Martin's Engineering College in Hyderabad <br> CGPA : 8.30 <br> From : 2019 - 2023<br> <br> Intermediate from Narayana Junior College<br>Passing Year:2019<br>Result:95.00%<br><br>School from St. Alban's High school <br>Passout Year:2017");
          break;

        case "address":
            // sendTextMessage(addressString);
            sendTextMessage("I lives in Hyderabad");
            break;
        case "clear":
            clearChat();
            break;
        // case "about":
        //     // sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https:\/\/instagram.com/vinayak_patil_09/'><span class='bold'>Vinayak Patil</a> with ❤️</span>");
        //     sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/codewithvamshi'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
        //     break;
        case "contact":
           // sendTextMessage(contactString);
           // sendTextMessage("You can contact me on email: svamshikrish02@gmail.com<br><br>instagram: thevamshi_krishna");
       // sendTextMessage("You can contact me via email: <a href='mailto:svamshikrish02@gmail.com'>svamshikrish02@gmail.com</a><br><br>Linkedin: <a href='https://www.linkedin.com/in/serla-vamshi-krishna/'>thevamshi_krishna</a><br>Instagram: <a href='https://www.instagram.com/thevamshi_krishna/'>thevamshi_krishna</a>s");
       sendTextMessage("You can contact me via email: <a href='mailto:svamshikrish02@gmail.com' style='color: #00c1ff;'>svamshikrish02@gmail.com</a><br><br>Linkedin: <a href='https://www.linkedin.com/in/serla-vamshi-krishna/' style='color: #00c1ff;'>Vamshi_krihna</a><br>Instagram: <a href='https://www.instagram.com/thevamshi_krishna/' style='color: #00c1ff;'>thevamshi_krishna</a>");

           break;
        case "projects":
           // sendTextMessage("You want to check my projeacts? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
          // sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/codewithvamshi'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
          //sendTextMessage("Paypack Web Ap p:<br>Live on Stripe Marketplace, Paypack simplifies exporting and updating customer and product data via CSV files.<br>Tech Stack: Next.js, JavaScript, MySQL, Blitz, TypeScript, React.<br><br><a target='_blank' href='https://app.paypack.ai/auth/login'>Check out Paypack</a>");
       //https://github.com/vamshi99145

       sendTextMessage("Paypack Web App: <a target='_blank' href='https://app.paypack.ai/auth/login' style='color: #00c1ff;'>Link</a><br><br>Live on stripemarketplace helps users to export stripe directly for customers, products, invoice, voidinvoice and updated customers,products thorugh csv file. Added Google captcha & Email verification to make it more secure.<br><br>Tech Stack: Next.js, JavaScript, MySQL, Blitz, TypeScript, React.");
       sendTextMessage("Thread App: <a href='https://threads-app-jade.vercel.app/' style='color: #00c1ff;'>Link</a><br><br>A social media thread app featuring user authentication, allowing users to create and engage in threads. Secure authentication is implemented with Google and GitHub via Clerk.<br><br>Tech Stack: MongoDB, JavaScript, Next.js 13, React JS, TypeScript.");
       
       //  sendTextMessage("Paypack Web App:<a target='_blank' href='https://app.paypack.ai/auth/login'>  Link</a><br>Live on stripemarketplace helps users to export stripe directly for customers, products, invoice, voidinvoice and updated customers,products thorugh csv file.Added Google captcha & Email verfiication to make it more secure<ubr><br>Tech Stack: Next.js, JavaScript, MySQL, Blitz, TypeScript, React.<br>");    
          
         // sendTextMessage("Thread App: <a href='https://threads-app-jade.vercel.app/'>Link</a><br>A social media thread app featuring user authentication, allowing users to create and engage in threads. Secure authentication is implemented with Google and GitHub via Clerk.<br><br>Tech Stack: MongoDB, JavaScript, Next.js 13, React JS, TypeScript.");
          sendTextMessage("If you want to know more projects, feel free to check out my GitHub profile: <a target='_blank' href='https://github.com/vamshi99145' style='color: #00c1ff;'>GitHub Profile</a>");
//#1016c9
          break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Type 'ask' to know more about usage.");
            }, 2000);
            break;
    }

}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
