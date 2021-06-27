//Load the dialog on page load
(function (){
    var getDocument = document.getElementById('employee-dialog');
    getDocument.style.display = 'block';

    //Function to close the dialog when user clicks close button

    var span  = document.getElementById('close');
    span.onclick = function() {
      getDocument.style.display = 'none';
    } 

})();


//Static JSON

const data = [{
  team: 'Engineering',
  employees: [
    'Lawana Fan',
    'Larry Rainer',
    'Rahul Malik',
    'Leah Shumway',
  ],
},
{
  team: 'Executive',
  employees: [
    'Rohan Gupta',
    'Ronda Dean',
    'Robby Maharaj',
  ]
},
{
  team: 'Finance',
  employees: [
    'Caleb Brown',
    'Carol Smithson',
    'Carl Sorensen',
  ],
},
{
  team: 'Sales',
  employees: [
    'Ankit Jain',
    'Anjali Maulingkar',
  ],
},
]


const getData= () => {
    let teamData = [];
    data.forEach((item)=> {
        teamData.push(item['team']);

    });
    const parent = document.getElementById('predictionList');
    const ul = document.createElement('ul');
   
    teamData.forEach((data)=>{
      const li = document.createElement('li');
      li.innerHTML = data;
      ul.appendChild(li);
    })
    parent.appendChild(ul);
   
    
}

const debounce = function(fn,d) {

  let timer;
  return function() {
   
    let context = this;
        args = arguments;
    clearTimeout(timer);
    timer = setTimeout(()=> {
      
      fn.apply(context,args)

    },d)
  }
}


const getList = debounce(getData,300); 






