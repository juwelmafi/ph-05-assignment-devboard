const completedBtn = document.querySelectorAll(".completed_btn");
const assignedTask = document.getElementById("assigned_task");
const assignTaskNum = parseInt(assignedTask.innerText);
const completedTask = document.getElementById("completed_task");
const completedTaskNum = parseInt(completedTask.innerText);
const messages = document.getElementById('messages');
const cardTitle = document.getElementById("card_title");
const currentDate = document.getElementById('current_date');
const currentDay = document.getElementById('current_day');

// Current Date
const date = new Date();
const dateView = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}
const finalDate = date.toLocaleDateString('en-US', dateView).replace(',', '');
currentDate.innerText = finalDate;

// Current Day

const day = new Date();
const dayOfWeek = day.getDay();
const arrayOfDay = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const finalDay = arrayOfDay[dayOfWeek];
currentDay.innerText = finalDay;



// Complete Button

decrement = assignTaskNum;
increment = completedTaskNum;

for (button of completedBtn) {
  button.addEventListener("click", function (event) {
    alert('Board Updated Successfully');
    // Increment and Decrement
    if (decrement > 0) {
      decrement = decrement - 1;
      assignedTask.innerText = "0" + decrement;
    }
    increment = increment + 1;
    completedTask.innerText = increment;

    // last alert

    if(decrement === 0){
      alert('Congrats! You have completed all current task;')
    }

    // Message Section
    let message = document.createElement('p');
    let cardTitle = event.target.parentElement.parentElement.children[1].innerText;
    message.classList = 'text-xs text-gray-500 activities_message global_bg p-2 rounded-xl mt-5 activities_message';
    message.innerText = `You have Complete The Task ${cardTitle} at ${new Date().toLocaleTimeString()}`;
    messages.appendChild(message);
    
    event.target.disabled = true;
  });
}




// Clear Button //

const activitiesMessage = document.querySelectorAll('.activities_message');
const clearBtn = document.getElementById('clear_btn').addEventListener('click', function(){
  messages.classList.add('hidden');

})
  


// Back button

document.getElementById('blog_card').addEventListener('click', function(){
  window.location = 'blog.html';
  
});


// Theme change button


document.getElementById('change_theme_btn').addEventListener('click', function(){
  hexColor = 'abcdef0123456789';
  let themeColor = '#';
  for(i = 0; i<6; i++){
    themeColor = themeColor + hexColor[Math.floor(Math.random() * 16)];
  }
  document.getElementById('body_theme').style.backgroundColor = `${themeColor}`;
  console.log(themeColor);
  
});