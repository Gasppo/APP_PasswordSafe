import {useDispatch, useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';

export function checkinRequest(item) {
  console.log('hola');
  console.log(`Cuenta: Id: ${item.AccountId} Nombre: ${item.AccountName}`);
  RNFetchBlob.config({
    trusty: true,
  })
    .fetch(
      'PUT',
      `https://demo.seguridadar.com:444/BeyondTrust/api/public/v3/Requests/${item.RequestID}/Checkin`,
      {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },

      JSON.stringify({Reason: 'Cerrado via App'}),
    )
    .then(function (response) {
      console.info(`Checkin: ${response.data}`);
    })
    .catch((err) => {
      console.error(err);
    });
}
