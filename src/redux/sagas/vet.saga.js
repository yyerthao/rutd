import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// gets all account types for users
function* fetchVet() {
    console.log('Fetch vets from DB');
    try{
        const response = yield axios.get('/api/vet')
        yield put({type: 'SET_VET', payload: response.data});
        console.log('response.data from db get vet:', response.data);
    } catch(error){
        console.log('error with vet fetch request', error);
    }        
}

function* vet() {
    yield takeLatest('FETCH_VET', fetchVet);
}

export default vet;