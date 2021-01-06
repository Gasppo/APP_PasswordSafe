import {useDispatch, useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';

export function getREQs() {
  const dispatch = useDispatch();
  return () => {
    console.log('hola');
    //fetchData();
    return RNFetchBlob.config({
      trusty: true,
    })
      .fetch(
        'GET',
        'https://demo.seguridadar.com:444/BeyondTrust/api/public/v3/Requests',
      )
      .then(function (response) {
        console.info(
          `Get Requests: ${response.respInfo.status} Valor: ${response.text()}`,
        );
        if (response.respInfo.status < 300) {
          const datos = JSON.parse(response.data);
          //datos.forEach(msys => console.log(msys.SystemName))
          dispatch(dispatchREQs(datos));
          return datos;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

function dispatchREQs(datos) {
  return {
    type: 'REQS_GET',
    REQs: datos,
  };
}
