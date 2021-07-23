import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import message from '@react-native-firebase/messaging';

export default () => {
    return {firebase, auth, database, storage, message};
};