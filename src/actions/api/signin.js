import {useDispatch, useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import {getMSYS} from './getAssets';

const apiKey =
  '8dab201a8dba20038c4ec3d22e34469ecc67b2e010a83b6286183a0cee90fbcb676c3a0c3d5cb3a4e90d0a1f4a1a8d5d324e2a80ab6ce6024b0106a406c41959';
const user = 'api-user';

export function signinAPI() {
  const dispatch = useDispatch();
  return () => {
    console.log('hola');
    //fetchData();
    const auth_head =
      'PS-Auth key=f48b08723b035e45b65c97bc1264a595f2f5f05a6855a184a202ace9f9a3c06159e266343407c4b97a19e863ec22e792a1eef511e9383914d012c281b7c3d356; runas=api-user;';
    return RNFetchBlob.config({
      trusty: true,
    })
      .fetch(
        'POST',
        'https://demo.seguridadar.com:444/BeyondTrust/api/public/v3/Auth/SignAppin',
        {
          Accept: '*/*',
          'Content-Type': 'application/json',
          Authorization: auth_head,
          Connection: 'keep-alive',
        },
        '',
      )
      .then(function (response) {
        console.info(`Login: ${response.respInfo.status}`);
        dispatch(signinSuccess(response.json().UserName));
      })
      .catch((err) => {
        console.error(err);
        dispatch(signinFailure());
      });
  };
}

function signinStart() {
  return {
    type: 'LOADING',
  };
}

function signinSuccess(user) {
  return {
    type: 'LOGIN_EXITOSO',
    userName: user,
  };
}
function signinFailure() {
  return {
    type: 'LOGIN_FALLIDO',
  };
}
