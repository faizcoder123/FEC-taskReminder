export function checkAuth(req, password) {
    fetch(req)
    .then(data=>{
        if(data.ok){
          getJsonResonse(data).then(res=>{
            res = JSON.parse(res)
            sessionStorage.setItem("email", res.email);
          })
          sessionStorage.setItem("password", password);
          sessionStorage.setItem("AuthenticationState", true);
          window.location = "http://localhost:3000/dashboard"
        }
        else if(data.status === 500){
          alert('Something Went Wrong');
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
      alert('Some ERROR OCCURRED');
  }
  );
}

async function getJsonResonse(response) {
    try {
      var res = await response.text();
      return res
    } catch (error) {
      alert('Something Went Wrong');
    }
  }
  