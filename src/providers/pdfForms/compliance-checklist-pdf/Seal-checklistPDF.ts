import { Injectable, style } from '@angular/core';
import { Http, Headers } from "@angular/http";


import { DataServiceProvider } from "../../../providers/data-service/data-service";

@Injectable()
export class SealCheckList {
  constructor(
    public dataService: DataServiceProvider) {
  }


  generateCheckListPDF(item) {
    console.log(" --> called ()(()) ");
    return new Promise((resolve, reject) => {
      debugger;
      console.log(
        "came inside to complaint pdf form generation --- >>>."
      );
      var dd = null;
      dd = {
        content: [
          /*   {
              margin: [30, 20, 0, 0],
              image: item.tnbLogo,
            }, */
          {
            //margin: [280, 20, 10, 0],
            margin: [30, 20, 0, 0],
            table: {
              widths: [300, 'auto', 'auto'],
              body: [
                [
                  { image: item.tnbLogo }, 'Account No: ', item.ta4accountno
                ],
                [
                  '', 'Date Inspection: ', item.currentTime
                ],

              ],

            },
            layout: 'noBorders'
          },

          {
            margin: [60, 20, 10, 0],
            table: {
              headerRows: 1,
              body: [
                [{ text: 'DESSCRIPTION CHECKLIST TAMPERING METER CASE (KUPM) TNB', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                ['', '', ''],
              ]
            },
            layout: 'lightHorizontalLines'
          },
          {
            margin: [30, 10, 0, 0],
            table: {
              widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
              heights: [30, 30, 30, 30, 30, 30, 30, 30],
              body: [
                [{ text: 'User Details', style: 'tableHeader', colSpan: 8, alignment: 'center' }, {}, {}, {}, {}, {}, {}, {}],
                [{
                  stack: [
                    {
                      image: 'owner',
                      width: 70,
                      height: 20,
                    }
                  ]

                }, { text: 'Owner', style: 'tableHeader', alignment: 'center' },
                {
                  stack: [
                    {
                      image: 'tenant',
                      width: 70,
                      height: 20,
                    }
                  ]

                }, { text: 'Tenant', style: 'tableHeader', alignment: 'center' },
                {
                  stack: [
                    {
                      image: 'staff',
                      width: 70,
                      height: 20,
                    }
                  ]

                }, { text: 'Worker', style: 'tableHeader', alignment: 'center' },
                {
                  stack: [
                    {
                      image: 'heir',
                      width: 70,
                      height: 20,
                    }
                  ]

                }, { text: 'Heir', style: 'tableHeader', alignment: 'center' }],
              ]
            }
          },
          '\n\n',
          {
            margin: [30, 100, 0, 0],
            table: {
              widths: ['auto', 'auto'],
              heights: ['auto', 'auto'],
              body: [
                [{ text: '1) KUPM Description to user: ', style: 'tableHeader' },
                {
                  image: 'userDesc',
                  width: 70,
                  height: 20,
                }],
                [{ text: '2) Notice A description to user (Disconect) ', style: 'tableHeader' },
                {
                  image: 'noticeA',
                  width: 70,
                  height: 20,
                }],
                [{ text: '3) Claim calculation will be made as a result of a search case is found ', style: 'tableHeader' },
                {
                  image: 'claim',
                  width: 70,
                  height: 20,
                }],
              ]
            },
            layout: 'noBorders'
          },
          '\n\n',
          {
            margin: [30, 15, 0, 0],
            text: ['Remarks: ', '\n', item.remark1]
          },
          '\n\n',
          {
            margin: [30, 15, 0, 0],
            heights: [100, 50],
            table: {
              widths: ['auto', 180, 'auto', 'auto'],
              body: [
                [{ text: '' },
                {
                  stack: [
                    {
                      image: 'sign',
                      width: 70,
                      height: 20,
                    }
                  ]

                },
                { text: '' },
                {
                  stack: [
                    {
                      image: 'sign2',
                      width: 70,
                      height: 20,
                    }
                  ]

                },
                ],
                [
                  '', 'Client signature', '', 'TNB signature staff'

                ],
                [
                  'Name: ', item.customername, 'Name: ', item.staffname

                ],
                [
                  'Idetification No. ', item.nricWitness, 'Staff No: ', item.nriceStaff

                ],
              ]
            },
            layout: 'noBorders'
          },
          '\n\n',
          {
            margin: [30, 0, 0, 0],
            heights: [100, 50],
            table: {
              widths: [350, 'auto'],
              body: [
                [
                  'No Signature for client',
                  {
                    stack: [
                      {
                        image: 'notWilling',
                        width: 70,
                        height: 20,
                      }
                    ]

                  },
                ],
                [
                  'Client not available',
                  {
                    stack: [
                      {
                        image: 'noClient',
                        width: 70,
                        height: 20,
                      }
                    ]

                  },

                ],
              ],
            },
          },
        ],
        images: {
          claim: item.claiminform,
          noticeA: item.noticeA,
          userDesc: item.kupmUser,
          owner: item.owner,
          tenant: item.tenant,
          staff: item.staff,
          heir: item.heir,

          notWilling: item.notWillingSign,
          noClient: item.noClient,

          sign: item.ta4signcustomer,
          sign2: item.ta4signstaff
        },
        styles: {
          title: {
            fontSize: 14,
            bold: true
          },
          textMargin: {
            margin: [30, 50, 80, 0]
          }
        }

      }
      resolve(dd);
      reject(dd);

    });
  }
}