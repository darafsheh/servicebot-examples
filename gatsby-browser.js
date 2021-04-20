exports.onInitialClientRender = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('nochat');
    if(!myParam){
        window.Intercom('boot', {
            app_id: window.IntercomAppId
        })
    }
  
}

exports.onRouteUpdate = function ({ location }) {
  window.Intercom('update')
}