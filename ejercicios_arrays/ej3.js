let data = [
{name: "Nacho", telephone: "966112233", age: 40},
{name: "Ana", telephone: "911223344", age: 35},
{name: "Mario", phone: "611998877", age: 15},
{name: "Laura", telephone: "633663366", age: 17}
];


data.push({name:"Pedro", telephone:"611944444", age: 25});
data.push({name:"Julia", telephone:"633232323", age: 37});

console.log(data);

data.sort((user1, user2)=> user1.age -user2.age);

console.log(data);

data.sort((user1, user2)=> user1.name.localeCompare(user2.name));

console.log(data);

let newData=new Array();

for(let i=0; i<data.length; i++){
    if(data[i].age>=30){
        newData.push(data[i]);
    }
}

console.log(newData);