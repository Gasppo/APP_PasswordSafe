import {useDispatch, useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';

export function newRequest(item) {
  console.log('hola');
  console.log(`Cuenta: Id: ${item.AccountId} Nombre: ${item.AccountName}`);
  RNFetchBlob.config({
    trusty: true,
  })
    .fetch(
      'POST',
      'https://demo.seguridadar.com:444/BeyondTrust/api/public/v3/Requests',
      {
        'Content-Type': 'application/json',
      },

      JSON.stringify({
        SystemID: item.SystemId,
        AccountID: item.AccountId,
        DurationMinutes: 60,
        TicketNumber: 1010,
      }),
    )
    .then(function (response) {
      console.info(`Request: ${JSON.stringify(response)}`);
      alert(`Request generado exitosamente!`);
    })
    .catch((err) => {
      console.error(err);
    });
}
