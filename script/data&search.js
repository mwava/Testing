var myArray = [
    {'name':'Michael', 'age':'30', 'birthdate':'11/10/1989'},
    {'name':'Mila', 'age':'32', 'birthdate':'10/1/1989'},
    {'name':'Paul', 'age':'29', 'birthdate':'10/14/1990'},
    {'name':'Dennis', 'age':'25', 'birthdate':'11/29/1993'},
    {'name':'Tim', 'age':'27', 'birthdate':'3/12/1991'},
    {'name':'Erik', 'age':'24', 'birthdate':'10/31/1995'},
]


$('#search-input').on('keyup',function(){
  const value=$(this).val()
  console.log('Value:',value)
  const data=searchTable(value,myArray)
  buildTable(data)

})

buildTable(myArray)
 
function searchTable(value,data){
const filterData=[]
for(let i=0;i <data.length;i++)
  {
    value=value.toLowerCase()
    let name=data[i].name.toLowerCase()
    if(name.includes(value)){
      filterData.push(data[i])
    }
  }
  return filterData
}




function buildTable(data){
    const table = document.getElementById('myTable')
    table.innerHTML = ''
    for (let i = 0; i < data.length; i++){
        const colname = `name-${i}`
        const colage = `age-${i}`
        const colbirth = `birth-${i}`

        const row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].birthdate}</td>
                   </tr>`
        table.innerHTML += row
    }
}