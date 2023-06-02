import { Injectable, style } from '@angular/core';
import { Http, Headers } from "@angular/http";


import { DataServiceProvider } from "../../../providers/data-service/data-service";

@Injectable()
export class TechnicalReview {
    constructor(
        public dataService: DataServiceProvider,
        public http: Http) {
    }

    generateTechnicalReview(item, locData, combineArry, correctiveArry) {
        return new Promise((resolve, reject) => {

            debugger;
            console.log(
                "came inside to complaint pdf form generation --- >>>."
            );
            var dd = null;
            var url = '../www/assets/data/libEnglish.json';;

            for (var i = 0; i < locData.length; i++) {
                var fullItems: any;
                debugger;
                dd = {
                    content: [
                        {
                            margin: [30, 20, 0, 0],
                            table: {
                                headerRows: 1,
                                body: [
                                    [{ text: 'Technical Review', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                    ['', '', ''],
                                ]
                            },
                            layout: 'lightHorizontalLines'
                        },
                        {
                            margin: [30, 10, 0, 0],
                            table: {
                                widths: ['auto', 'auto', 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto', 'auto'],
                                body: [
                                    [{ text: 'Account No.', style: ['textbold'] }, item.ta4accountno, { text: 'Customer Name', style: ['textbold'] }, item.ta4custname],
                                ]
                            },
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            table: {
                                body: [
                                    [
                                        [
                                            { text: 'Confirmation of Anomalies & Reason', style: ['textbold'] },
                                            {
                                                margin: [30, 0, 0, 0],
                                                table: {
                                                    headerRows: 1,
                                                    body: [
                                                        [combineArry]
                                                    ]
                                                },
                                            }

                                        ],
                                    ],
                                    [
                                        [
                                            { text: 'Corrective / Follow Up Action', style: ['textbold'] },
                                            {
                                                margin: [30, 10, 0, 0],
                                                table: {
                                                    body: [
                                                        [correctiveArry]
                                                    ],
                                                },
                                            },
                                        ]]
                                ]
                            }
                        },

                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            table: {
                                widths: [240, 'auto', 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto', 'auto'],
                                body: [
                                    [{ text: 'Other Notes', colSpan: 4, style: ['textbold'] }, {}, {}, {}],
                                    [{
                                        text: [
                                            { text: 'Report No. :', style: ['textbold'] }, item.ta4reportno
                                        ], colSpan: 4
                                    }, {}, {}, {}],
                                ]
                            },
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            table: {
                                widths: ['auto', 'auto', 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto', 'auto'],
                                body: [
                                    [{ text: 'Examination Team Member', colSpan: 4, style: ['textbold'] }, {}, {}, {}],
                                    [
                                        {
                                            text: [
                                                { text: 'Bil. :', style: ['textbold'] }
                                            ]
                                        },
                                        {
                                            text: [
                                                { text: 'Name :', style: ['textbold'] }
                                            ]
                                        },
                                        {
                                            text: [
                                                { text: 'Staff No. :', style: ['textbold'] }
                                            ]
                                        },
                                        {
                                            text: [
                                                { text: 'Position. :', style: ['textbold'] }
                                            ]
                                        }],
                                    [
                                        {
                                            text: [
                                                ' 1.',
                                            ]
                                        },
                                        {
                                            text: [
                                                ' Johari Mat Saad ',
                                            ]
                                        },
                                        {
                                            text: [
                                                ' 10096813 '
                                            ]
                                        },
                                        {
                                            text: [
                                                'Technician'
                                            ]
                                        }],
                                ]
                            },
                        },
                        {
                            margin: [30, 10, 0, 0],
                            table: {
                                widths: ['auto', 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto', 'auto'],
                                body: [

                                    [
                                        {
                                            text: [
                                                { text: 'Signature Executive :', style: ['textbold'] }
                                            ]
                                        },
                                        {
                                            text: [
                                                { text: 'Executive Name and Position :', style: ['textbold'] }
                                            ]
                                        },
                                        {
                                            text: [
                                                { text: 'Date :', style: ['textbold'] }
                                            ]
                                        },

                                    ],
                                    [
                                        {
                                            image: 'ExecutiveSign',
                                            width: 100,
                                            height: 50,
                                        },
                                        { text: [item.ta4executivename, ' ', item.ta4position] },
                                        { text: [item.ta4currentDate] },

                                    ],
                                ]
                            },
                        },
                    ],

                    images: {
                        ExecutiveSign: item.ta4executivesign
                    },
                    styles: {
                        textbold: {
                            bold: true
                        },
                        title: {
                            fontSize: 14,
                            bold: true
                        },
                        textMargin: {
                            margin: [30, 50, 80, 0]
                        }
                    }

                }

                /*    else if (locData[i].ta0testind === 'M') {
                      dd = {
                          content: [
                              {
                                  margin: [30, 20, 0, 0],
                                  table: {
                                      headerRows: 1,
                                      body: [
                                          [{ text: 'Technical Review', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                          ['', '', ''],
                                      ]
                                  },
                                  layout: 'lightHorizontalLines'
                              },
                              {
                                  margin: [30, 10, 0, 0],
                                  table: {
                                      widths: ['auto', 'auto', 'auto', 'auto'],
                                      heights: ['auto', 'auto', 'auto', 'auto'],
                                      body: [
                                          ['Account No.', item.ta4accountno, 'Customer Name', item.ta4custname],
                                      ]
                                  },
                              },
                              '\n',
                              {
                                  margin: [30, 10, 0, 0],
                                  table: {
                                      widths: [200, 'auto', 'auto', 'auto'],
                                      heights: ['auto', 'auto', 'auto', 'auto'],
                                      body: [
                                          [{ text: 'Confirmation of Anomalies & Reason', colSpan: 4 }, {}, {}, {}],
                                          [{
                                              text: [
                                                  { text: 'Meter ', style: ['textbold'] }, locData[i].ta0ts_meter, '\n', { text: ' Fuse ', style: ['textbold'] }, locData[i].ta0ts_fuse, '\n', { text: ' TTB :', style: ['textbold'] }, locData[i].ta0ts_ttb, '\n', { text: ' Wiring :', style: ['textbold'] }, locData[i].ta0ts_wiring,
                                                  '\n', { text: 'Form :', style: ['textbold'] }, locData[i].ta0ts_anamoly, '\n', { text: ' Average Error :', style: ['textbold'] }, locData[i].ta0at_avg, ' Portable Test Set :', locData[i].ta0at_pteserialnum
                                              ], colSpan: 4
                                          }, {}, {}, {}],
                                      ]
                                  },
                              },

                              {
                                  margin: [30, 10, 0, 0],
                                  table: {
                                      widths: [240, 'auto', 'auto', 'auto'],
                                      heights: ['auto', 'auto', 'auto', 'auto'],
                                      body: [
                                          [{ text: 'Corrective / Follow Up Action', colSpan: 4, style: ['textbold'] }, {}, {}, {}],
                                          [{
                                              text: [
                                                  { text: 'Corrective Action ', style: ['textbold'] }, locData[i].ta0at_corrective_action, { text: ' Corrective Action Description ', style: ['textbold'] }, locData[i].ta0at_corrective_action_desc,
                                                  '\n', { text: 'Meter Serial No : ', style: ['textbold'] }, locData[i].serialNum,
                                              ], colSpan: 4
                                          }, {}, {}, {}],
                                      ]
                                  },
                              },
                              '\n',
                              {
                                  margin: [30, 10, 0, 0],
                                  table: {
                                      widths: [240, 'auto', 'auto', 'auto'],
                                      heights: ['auto', 'auto', 'auto', 'auto'],
                                      body: [
                                          [{ text: 'Other Notes', colSpan: 4, style: ['textbold'] }, {}, {}, {}],
                                          [{
                                              text: [
                                                  { text: 'Report No. :', style: ['textbold'] }, item.ta4reportno
                                              ], colSpan: 4
                                          }, {}, {}, {}],
                                      ]
                                  },
                              },
                              '\n',
                              {
                                  margin: [30, 10, 0, 0],
                                  table: {
                                      widths: ['auto', 'auto', 'auto', 'auto'],
                                      heights: ['auto', 'auto', 'auto', 'auto'],
                                      body: [
                                          [{ text: 'Examination Team Member', colSpan: 4, style: ['textbold'] }, {}, {}, {}],
                                          [
                                              {
                                                  text: [
                                                      { text: 'Bil. :', style: ['textbold'] }
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      { text: 'Name :', style: ['textbold'] }
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      { text: 'Staff No. :', style: ['textbold'] }
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      { text: 'Position. :', style: ['textbold'] }
                                                  ]
                                              }],
                                          [
                                              {
                                                  text: [
                                                      ' 1.',
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      ' Johari Mat Saad ',
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      ' 10096813 '
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      'Technician'
                                                  ]
                                              }],
                                      ]
                                  },
                              },
                              {
                                  margin: [30, 10, 0, 0],
                                  table: {
                                      widths: ['auto', 'auto', 'auto'],
                                      heights: ['auto', 'auto', 'auto', 'auto'],
                                      body: [

                                          [
                                              {
                                                  text: [
                                                      { text: 'Signature Executive :', style: ['textbold'] }
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      { text: 'Executive Name and Position :', style: ['textbold'] }
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      { text: 'Date :', style: ['textbold'] }
                                                  ]
                                              },

                                          ],
                                          [
                                              {
                                                  image: 'ExecutiveSign',
                                                  width: 100,
                                                  height: 50,
                                              },
                                              { text: [item.ta4executivename, item.ta4position] },
                                              { text: [item.ta4currentDate] },

                                          ],
                                      ]
                                  },
                              },
                          ],

                          images: {
                              ExecutiveSign: item.ta4executivesign
                          },
                          styles: {
                              textbold: {
                                  bold: true
                              },
                              title: {
                                  fontSize: 14,
                                  bold: true
                              },
                              textMargin: {
                                  margin: [30, 50, 80, 0]
                              }
                          }

                      }
                  } */
            }

            resolve(dd);
            reject(dd);
        })
    }
}