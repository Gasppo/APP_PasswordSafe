import {useDispatch} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';

export function getMSYS() {
  const dispatch = useDispatch();
  return () => {
    console.log('hola');
    //fetchData();
    return RNFetchBlob.config({
      trusty: true,
    })
      .fetch(
        'GET',
        'https://demo.seguridadar.com:444/BeyondTrust/api/public/v3/ManagedSystems',
      )
      .then(function (response) {
        console.info(`Get Systems: ${response.respInfo.status}`);
        if (response.respInfo.status < 300) {
          const datos = JSON.parse(response.data);
          //datos.forEach(msys => console.log(msys.SystemName))
          dispatch(dispatchMSYS(datos));
          return datos;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

function dispatchMSYS(datos) {
  return {
    type: 'MSYS_GET',
    MSYS: datos,
  };
}
