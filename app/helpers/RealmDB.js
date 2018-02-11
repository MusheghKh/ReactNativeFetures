import Realm from 'realm';
import { RealmSchemas } from '../store';

export default class RealmDB {
	static save(schemaName, item) {
		return Promise.all([Realm.open({ schema: [RealmSchemas.find(schema => schema.name === schemaName)] })
			.then(realm => {
				realm.write(() => realm.create(schemaName, item));
				
				return item;
			})
			.catch(error => { throw new Error(error) })
		]);
	}

	static edit(schemaName, id, propName, newValue) {
		return Promise.all([Realm.open({ schema: [RealmSchemas.find(schema => schema.name === schemaName)] })
			.then(realm => {
				realm.write(() => realm.objectForPrimaryKey(schemaName, id)[propName] = newValue);

				return id;
			})
			.catch(error => { throw new Error(error) })
		]);
	}

	static findAll(schemaName) {
		return Promise.all([Realm.open({ schema: [RealmSchemas.find(schema => schema.name === schemaName)] })
			.then(realm => {
				return realm.objects(schemaName);
			})
			.catch(error => { throw new Error(error) })
		]);
	}

	static remove(schemaName, id) {
		return Promise.all([Realm.open({ schema: [RealmSchemas.find(schema => schema.name === schemaName)] })
			.then(realm => {
				realm.write(() => realm.delete(realm.objectForPrimaryKey('id', id)));

				return id;
			})
			.catch(error => { throw new Error(error) })
		]);
	}
}