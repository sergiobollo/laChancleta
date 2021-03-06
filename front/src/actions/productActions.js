 const addProduct = payload => ({
    type: 'ADD_PROD',
    payload:payload
  })


   const deleteProduct = payload=>({
    type:'DELETE_PROD',
    payload:payload
  })

function getProducts() {
  return (dispatch,getState) => {
    console.log("getState()")
    console.log(getState())
    if(getState().productReducer.length>0) return;
   return fetch('http://localhost:8080/stock/products/',{
     headers:{
       Authorization:'bearer ' + getState().loginReducer.token
     }
   }).then((res)=>{
      return res.json()
    }).then((data)=>{
      dispatch({
        type:'GET_PROD',
        payload:data
      });
    })
  };
}


  export   {
addProduct,deleteProduct,getProducts
  }