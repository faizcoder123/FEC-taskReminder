export function addTaskRequest(requestPayload) {
    let h = new Headers();
      h.append('Content-Type', 'application/json');
      h.append('Authorization', 'Basic ' + window.btoa(sessionStorage.getItem("email") + ":" +sessionStorage.getItem("password")));
      let req = new Request('http://localhost:7000/taskReminder/addTask', {
          method: 'POST',
          headers: h
      });
    fetch(req)
    .then(data=>{
        if(data.ok){
            alert('Task Added Sucessfully');
        }
        else if(data.status === 500){
            alert('Something Went Wrong while Adding Task');
        }
        else if(data.status === 401){
            alert('Unauthorized');
        }
        else{
          getJsonResonse(data).then(resArg=>{
            resArg = JSON.parse(resArg)
          alert('ERROR' + resArg.message);
        })}})
    .catch(error => {
      alert('Something Error Occurred Wrong while Adding Task');
  }
  );
}
  