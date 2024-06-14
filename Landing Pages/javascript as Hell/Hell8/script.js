var input = document.querySelector("input");

var data = [
  {
    name: "ramina",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "shyam",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "abhiraj",
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "ram",
    src: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var pers ="";

data.forEach(function (elem) {
    pers += `<div class="person">
      <div class="img">
        <img
          src="${elem.src}"
          alt=""
        />
      </div>
      <h4>${elem.name}</h4>
    </div>`;
  });
  
  document.querySelector(".people").innerHTML = pers;



input.addEventListener("input",function(){
     var matching = data.filter(function(e){
        return e.name.startsWith(input.value);
    })

    var newUsers = "";
    matching.forEach(function (elem) {
        newUsers += `<div class="person">
          <div class="img">
            <img
              src="${elem.src}"
              alt=""
            />
          </div>
          <h4>${elem.name}</h4>
        </div>`;
      });
      
      document.querySelector(".people").innerHTML = newUsers;

    
})