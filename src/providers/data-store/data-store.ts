import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { GlobalVars } from "../common/global-vars";
import { GlobalFunction } from "../common/global-function";

/*
  Generated class for the DataStoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  npm install --save @ionic-native/sqlite@4.20.0
  ionic cordova plugin add cordova-sqlite-storage@5
*/
@Injectable()
export class DataStoreProvider {

  constructor(private sqlite: SQLite,
    public gv: GlobalVars,
    private gf: GlobalFunction) {
    console.log('Hello DataStoreProvider Provider');
  }

  /*
   * This function initialize database table
   * Create table not exist in database
   */
  initializeDB() {
    console.log("Inside initializeDB");
    this.sqlite.create({
      name: 'MMMSDB.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      //drop table
      /*
      db.executeSql('DROP TABLE IF EXISTS CRIMPLESS', {})
      .then(() => console.log('Executed SQL DROP CRIMPLESS'))
      .catch(e => console.log('Error : '+e));
      */
      /**
      create CRIMPLESS table
      1. ID
      2. SEALCODE
      3. SEALCATEGORY
      4. SEALSTATUS
      5. SEALCOLOR
      6. UTILITYMASTERID
      7. RESPONSIBLEPERSONID
      8. CREATEDDATE
      9. ISINSTALLED
      */
      db.executeSql('CREATE TABLE IF NOT EXISTS CRIMPLESS(ID INTEGER PRIMARY KEY, SEALCODE TEXT, SEALCATEGORY TEXT, SEALSTATUS TEXT, SEALCOLOR TEXT, UTILITYMASTERID TEXT, RESPONSIBLEPERSONID TEXT, CREATEDDATE TEXT, ISINSTALLED TEXT)', [])
        .then(() => console.log('Executed SQL CREATE CRIMPLESS successful'))
        .catch(e => console.log('Error : ' + JSON.stringify(e)));
    }).catch(e => console.log('Error : ' + JSON.stringify(e)));
  }

  insertCrimplesslData(crimplessData: any) {
    console.log("Access insertCrimplesslData");
    console.log("crimplessData : " + JSON.stringify(crimplessData));
    return new Promise((resolve) => {
      var respObj: any;
      var failSerialnum: string = "";
      var failCount: number = 0;
      console.log("insertCrimplesslData ---> Initialize Database MMMSDB.db");
      this.sqlite.create({
        name: 'MMMSDB.db',
        location: 'default'
      }).then(async (db: SQLiteObject) => {
        console.log("insertCrimplesslData ---> Insert records ");
        for (var i = 0; i < crimplessData.length; i++) {
          console.log(i + " : insertCrimplesslData ---> crimplessData " + JSON.stringify(crimplessData[i]));
          let sealCode = this.gf.returnValue('sealCode', crimplessData[i].sealCode);
          let sealCategory = this.gf.returnValue('sealCategory', crimplessData[i].sealCategory);
          let sealStatus = this.gf.returnValue('sealStatus', crimplessData[i].sealStatus);
          let sealColor = this.gf.returnValue('sealColor', crimplessData[i].sealColor)
          let utilityMasterID = this.gf.returnValue('utilityMasterID', crimplessData[i].utilityMasterID);
          let responsiblePersonID = this.gf.returnValue('responsiblePersonID', crimplessData[i].responsiblePersonID);
          db.executeSql('INSERT INTO CRIMPLESS VALUES(NULL,?,?,?,?,?,?,?,?)', [sealCode,sealCategory,sealStatus,sealColor,utilityMasterID,responsiblePersonID, new Date(),'N'])
            .then(res => {
              console.log('Success insertId : ' + res.insertId);              
            })
            .catch(e => {
              failSerialnum = failSerialnum + " , " + crimplessData.sealCode;
              failCount++;
              console.log('Error : ' + JSON.stringify(e));

            });
        }        
        if (failCount === 0) {         
          respObj = {
            statusCode: 'Success',
            statusText: 'All Crimpless Seal stored successfully'
          }
        } else {
          if (failCount === crimplessData.length) {
            respObj = {
              statusCode: 'Error',
              statusText: 'All Crimpless Seal stored failure'
            }
          } else {
            respObj = {
              statusCode: 'Partial',
              statusText: 'Partial Crimpless Seal stored successful, Failed Serial Number : ' + failSerialnum
            }
          }
        }
        resolve(respObj);
      })
        .catch(e => {
          console.log('insertCrimplesslData ---> Error : ' + JSON.stringify(e));
          this.gf.displayToast(e.message);
          respObj = {
            statusCode: 'Error',
            statusText: JSON.stringify(e)
          }
          resolve(respObj);
        });
    });
  }



  /*
   * This function will query CRIMPLESS table 
   * This function will call when user install new crimpless seal
   */
  queryCrimplessData(serialnum: string) {
    console.log('Inside queryCrimplessData');
    var respObj: any;
    var data: any;
    return new Promise(resolve => {
      var _respObj: any;
      this.sqlite.create({
        name: 'MMMSDB.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM CRIMPLESS WHERE SEALCODE = ?', [serialnum])
          .then((res) => {
            console.log('queryCrimplessData ---> Success total : ' + res.rows.length);
            if (res.rows.length === 0) {
              respObj = {
                statusCode: 'E',
                count: res.rows.length
              }
            } else {
              respObj = {
                statusCode: 'S',
                count: res.rows.length
              }
            }
            resolve(respObj);
          }).catch(e => {
            console.log('queryCrimplessData ---> Error : ' + JSON.stringify(e));
            respObj = {
              statusCode: 'E',
              statusText: JSON.stringify(e)
            }
            resolve(respObj);
          });
      }).catch(e => {
        console.log('queryCrimplessData ---> Error : ' + JSON.stringify(e));
        respObj = {
          statusCode: 'E',
          statusText: JSON.stringify(e)
        }
        resolve(respObj);
      });
    });
  }

  /*
   * This function will query CRIMPLESS table and display all data
   */
  queryAllCrimplessData() {
      console.log('Inside queryAllCrimplessData');
      var respObj: any;
      var data: any;
      return new Promise(resolve => {
        var _respObj: any;
        this.sqlite.create({
          name: 'MMMSDB.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          db.executeSql('SELECT * FROM CRIMPLESS', [])
            .then((res) => {
              console.log('queryAllCrimplessData ---> Success total : ' + res.rows.length);
              let crimplessData = [] ;
              if (res.rows.length === 0) {
                respObj = {
                  statusCode: 'S',
                  count: res.rows.length
                }
              } else {
                for (let i = 0; i < res.rows.length; i++) {
                  crimplessData.push(res.rows.item(i));
                }                
                respObj = {
                  statusCode: 'S',
                  count: res.rows.length,
                  data: crimplessData
                }
              }
              resolve(respObj);
            }).catch(e => {
              console.log('queryAllCrimplessData ---> Error : ' + JSON.stringify(e));
              respObj = {
                statusCode: 'E',
                statusText: JSON.stringify(e)
              }
              resolve(respObj);
            });
        }).catch(e => {
          console.log('queryCrimplessData ---> Error : ' + JSON.stringify(e));
          respObj = {
            statusCode: 'E',
            statusText: JSON.stringify(e)
          }
          resolve(respObj);
        });
      });
    }

  /*
   * This function delete existing record in CRIMPLESS table
   * This function will call when user install new crimpless seal
   */
  deleteCrimplessData(serialnum: string) {
    console.log('Inside deleteCrimplessData');
    var respObj: any;
    return new Promise((resolve) => {
      this.sqlite.create({
        name: 'MMMSDB.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('DELETE FROM CRIMPLESS WHERE SERIALNUM = ?', [serialnum])
          .then((res) => {
            console.log('deleteCrimplessData ---> Success delete ' + serialnum);
            respObj = { statusCode: 'S' };
            resolve(respObj);
          },
            (error) => {
              console.log('deleteCrimplessData ---> Delete Error : ' + JSON.stringify(error));
              respObj = error;
              console.log('deleteCrimplessData ---> Error Code : ' + respObj.code);
              if (respObj.code === 5) {
                respObj = { statusCode: 'S' }
                resolve(respObj);
              } else {
                respObj = {
                  statusCode: 'E',
                  statusText: JSON.stringify(error)
                }
                resolve(respObj);
              }
            })
          .catch(e => {
            console.log('deleteCrimplessData ---> Fail delete ' + serialnum);
            console.log('deleteCrimplessData ---> Delete Error : ' + JSON.stringify(e));
            respObj = {
              statusCode: 'E',
              statusText: JSON.stringify(e)
            }
            resolve(respObj);
          });
      });
    })
  }
}
