import Realm from 'realm';
import { LOADING } from '../actions/globalActionTypes';
import { RealmSchemas } from '../store';

export default class RealmDB {
	static save(schemaName, item) {
		return Realm.open({ schema: [RealmSchemas.find(schema => schema.name === schemaName)] })
			.then(realm => {
				realm.write(() => realm.create(schemaName, item));
				
				return item;
			})
			.catch(error => { throw new Error(error) });
	}

	static edit(schemaName, id, propName, newValue) {
		return Realm.open({ schema: [RealmSchemas.find(schema => schema.name === schemaName)] })
			.then(realm => {
				realm.write(() => realm.objectForPrimaryKey(schemaName, id)[propName] = newValue);

				return id;
			})
			.catch(error => { throw new Error(error) });
	}

	static find(schemaName, id) {
		return Realm.open({ schema: [RealmSchemas.find(schema => schema.name === schemaName)] })
			.then(realm => realm.objectForPrimaryKey(schemaName, id))
			.catch(error => { throw new Error(error) });
	}

	static findAll(schemaName) {
		return Realm.open({ schema: [RealmSchemas.find(schema => schema.name === schemaName)] })
			.then(realm => {
				return realm.objects(schemaName);
			})
			.catch(error => { throw new Error(error) });
	}

	static remove(schemaName, id) {
		return Realm.open({ schema: [RealmSchemas.find(schema => schema.name === schemaName)] })
			.then(realm => {
				realm.write(() => realm.delete(realm.objectForPrimaryKey(schemaName, id)));

				return id;
			})
			.catch(error => { throw new Error(error) });
	}
}

// loader will appear by default on any async dispatching, you can hide it by giving argument useLoader false
export const asyncDispatcher = (callback, useLoader = true) => {
	return dispatch => {
		useLoader && dispatch({ type: LOADING });
		setTimeout(() => callback(dispatch));
	}
}