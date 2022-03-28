import {getJsonResonse} from "./AuthenticateUtil"

export function deleteTaskRequest(id) {
  const promise = new Promise(function(resolve, reject){
    let h = new Headers();
      h.append('Content-Type', 'application/json');
      h.append('Authorization', 'Basic ' + window.btoa(sessionStorage.getItem("email") + ":" +sessionStorage.getItem("password")));
      let req = new Request('http://localhost:7000/taskReminder/task/'+id, {
          method: 'DELETE',
          headers: h
      });
    fetch(req)
    .then(data=>{
        if(data.ok){
          alert('Task Deleted Sucessfully');
            resolve("deleted");
        }
        else if(data.status === 500){
            reject("Something Went Wrong while Deleting Task");
        }
        else if(data.status === 401){
            reject("Unauthorized Error!");
        }
        else{
          getJsonResonse(data).then(resArg=>{
            resArg = JSON.parse(resArg)
          reject("There is an Error!" + resArg.message);
        })}})
    .catch(error => {
      reject("Something Error Occurred Wrong while Deleting Task!");
  });
})
return promise;
}
  