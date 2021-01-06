import {useDispatch, useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';

export function getCreds(item) {
  console.log('hola');
  console.log(`Cuenta: Id: ${item.AccountId} Nombre: ${item.AccountName}`);
  RNFetchBlob.config({
    trusty: true,
  })
    .fetch(
      'GET',
      `https://demo.seguridadar.com:444/BeyondTrust/api/public/v3/Credentials/${item.RequestID}`,
      {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    )
    .then(function (response) {
      console.info(`Checkin: ${response.data}`);
    })
    .catch((err) => {
      console.error(err);
    });
}
