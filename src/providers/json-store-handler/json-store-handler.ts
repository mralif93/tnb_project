/// <reference path="../../../plugins/cordova-plugin-mfp-jsonstore/typings/jsonstore.d.ts" />

import { Injectable } from '@angular/core';
import { GlobalVars } from "./../../providers/common/global-vars";
import { Domains } from '../../pojo/commonEnum/Domains';
import { JsonStoreStructureProvider } from "./../../providers/common/json-store/json-store-structure";

declare var WL;

@Injectable()
export class JsonStoreHandlerProvider {

  isCollectionInitialized = {};
  constructor(public gv: GlobalVars, public jsonStoreStructure: JsonStoreStructureProvider) { }

  initCollections(username, password, isOnline: boolean) {

    return new Promise((resolve, reject) => {

      let encodedUsername = this.convertToJsonStoreCompatibleUsername(username);
      this.gv.setLoginUserId(encodedUsername);
      this.gv.setUsername(username);
      this.gv.setPassword(password);
      WL.JSONStore.closeAll({});
      this.jsonStoreStructure.initUserDetails().then((success) => {
        this.isCollectionInitialized[username] = true;
        if (isOnline) {
          this.initCollectionForOfflineLogin();
        }
        resolve();
      },
        (failure) => {
          if (isOnline) {
            WL.JSONStore.destroy(encodedUsername).then(() => {
              return resolve(this.initCollections(username, password, isOnline));
            });
          }
          else {
            reject(failure);
          }
        });
    });
  }

  initCollectionForOfflineLogin() {

    this.jsonStoreStructure.initUserDetails().then((success) => {

      let collectionInstance: WL.JSONStore.JSONStoreInstance = WL.JSONStore.get(Domains.UserDetails);
      collectionInstance.count({}, {}).then((countResult) => {
        if (countResult == 0) {
          collectionInstance.add({ name: Domains.UserDetails }, {})
            .then(function (numberOfDocumentsAdded) {
              // Add was successful.
              console.log("--> numberOfDocumentsAdded : " + numberOfDocumentsAdded);
            })
            .fail(function (errorObject) {
              // Handle failure.
              console.log("--> errorObject : " + JSON.stringify(errorObject));
            });
        }
      })
    });
  }

  previousLoginExists() {

    return new Promise((resolve, reject) => {
      this.jsonStoreStructure.initUserDetails().then((success) => {
        let collectionInstance: WL.JSONStore.JSONStoreInstance = WL.JSONStore.get(Domains.UserDetails);
        collectionInstance.count({}, {}).then((countResult) => {
          if (countResult == 0) {
            reject();
          }
          else {
            resolve();
          }
        });
      });
    });
  }

  destroyCollections(username) {
    WL.JSONStore.destroy(username);
  }

  convertToJsonStoreCompatibleUsername(str: String) {

    let result = "U";
    for (let i = 0; i < str.length; i++) {
      let hex = str.charCodeAt(i).toString(16);
      result += ("0" + hex).slice(-4);
    }
    return result;
  }

  // Get Dirty Datas
  getUnSyncedData() {
    debugger;
    return new Promise((resolve, reject) => {
      let collectionInstance: WL.JSONStore.JSONStoreInstance = WL.JSONStore.get(Domains.LPCWORKORDER);
      if (collectionInstance != null) {
        collectionInstance.getAllDirty('{}').then((data) => {
          if (data.length > 0) {
            data.forEach(element => {
              if (element.json.assignment !== 'undefined' && element.json.assignment !== null && element.json.assignment !== "") {
                element.json.assignment = [];
              }
            });
            resolve(data);
          } else {
            // No data to sync with maximo, to allow download SO from maximo.
            // Edited : Alif (21.08.2019)
            resolve({});
          }
        });
      }
      else {
        resolve({});
      }
    });
  }

  // Get Dirty Datas
  // Edited: Alif (18.08.2019)
  getUnSyncedDataLength() {
    return new Promise((resolve, reject) => {
      let collectionInstance: WL.JSONStore.JSONStoreInstance = WL.JSONStore.get(Domains.LPCWORKORDER);
      if (collectionInstance != null) {
        collectionInstance.getAllDirty('{}').then((data) => {
          if (data.length > 0) {
            resolve(data.length);
          } else {
            resolve(0);
          }
        });
      } else {
        resolve({});
      }
    });
  }

  // Get Dirty Datas
  checkSyncUpDataAvailablity() {

    debugger;
    return new Promise((resolve, reject) => {
      let collectionInstance: WL.JSONStore.JSONStoreInstance = WL.JSONStore.get(Domains.LPCWORKORDER);
      if (collectionInstance != null) {
        collectionInstance.getAllDirty('{}').then((data) => {
          resolve(data.length);
        });
      }
      else {
        resolve({});
      }
    });
  }
}