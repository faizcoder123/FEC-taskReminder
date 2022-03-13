export function checkAuth(req) {
    fetch(req)
    .then(data=>{
        if(data.ok){
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
          const res = getJsonResonse(data).then(resArg=>{
          alert('ERROR' + resArg);
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
  