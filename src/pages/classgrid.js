import React from 'react'
import ReactDOM from 'react-dom'
import XLSX from 'xlsx';

function handleFile(e) {
  var files = e.target.files, f = files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var data = new Uint8Array(e.target.result);
    var workbook = XLSX.read(data, {type: 'array'});

    var first_sheet_name = workbook.SheetNames[0];
    var address_of_cell = 'A1';

    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];
    /* Convert worksheet to JSON objects */
    var data = XLSX.utils.sheet_to_json(worksheet);

    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    
    const unique_periods = [...new Set(data.map(item => item['Cycle Day']+' '+item['Period Abbreviation']))]
    const unique_classrooms = [...new Set(data.map(item => item['Class Room Number']))]

    const unique_periods_sorted = unique_periods.sort( (a,b) => { 
      let sort_a = a
      let sort_b = b
      days.forEach( (d,i) => {
        
        sort_a = sort_a.replace(d,i.toString())
        sort_b = sort_b.replace(d,i.toString())
      } )
      console.log(sort_a, sort_b)
      console.log(sort_a > sort_b)
      return sort_a < sort_b ? -1 : ( sort_a > sort_b ? 1 : 0 )
    })
    console.log(unique_periods_sorted)
    console.log(data[0])

    var render_this = []

    var tr = document.createElement('tr')
      var td = document.createElement('th')
      td.innerHTML = "Classroom"
      tr.appendChild(td)

    unique_periods.forEach( (p) => {
      var td = document.createElement('th')
      td.innerHTML = p
      tr.appendChild(td)
    })
    render_this.push(tr)

    unique_classrooms.forEach( (c) => {
      var tr = document.createElement('tr')
      var td = document.createElement('td')
      td.innerHTML = c
      tr.appendChild(td)
      
      unique_periods.forEach( (p) => {
        var td = document.createElement('td')
        var filtered = data.filter(item=>item['Cycle Day']+' '+item['Period Abbreviation'] === p && item['Class Room Number'] === c)[0]
        if(filtered) {
          td.innerHTML = filtered['Last Name']+'<br />'+filtered['Class Name']
        }
        tr.appendChild(td)
      }
      
      )
      render_this.push(tr)

    } )

    var table = document.getElementById('results_table')
    render_this.forEach(e=> table.appendChild(e))
    var workbook2 = XLSX.utils.table_to_book(document.getElementById('results_table'));
    XLSX.writeFile(workbook2, 'classgrid.xlsx');



  };
  reader.readAsArrayBuffer(f);
}

export default () => (
  <div>
    <h3>Class Grid Maker</h3>
    <p>Another simple tool for Alma by Ryan Meyers</p>
    <pre>(Uses the "TEACHER SCHEDULES BY PERIOD/DAY" report)</pre>
    <label htmlFor="csvfile" draggable="true" onDrop={handleFile}>Choose XLSX file</label><input name="csvfile" type="file" onChange={handleFile}></input>
    
    <table id="results_table"></table>
  </div>
)
