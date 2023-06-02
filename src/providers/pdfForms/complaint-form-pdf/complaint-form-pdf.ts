import { HttpClient } from '@angular/common/http';
import { Injectable, style } from '@angular/core';
import { Http, Headers } from "@angular/http";

import { DataServiceProvider } from "../../../providers/data-service/data-service";

/*
  Generated class for the ComplaintFormPdfProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

/**
 * Create by Ameer 
 * All of PDF form is available here
 */
@Injectable()
export class ComplaintFormPdfProvider {

  public logo: string;

  constructor(
    public dataService: DataServiceProvider,
    public http: Http) {
    console.log('Hello ComplaintFormPdfProvider Provider');
  }

  generateComplaintFormPdf(item, soTypes, formType, langType, optItem1, optItem2, optItem3) {
    console.log(" --> called work order service adapter calling ()(()) ");
    return new Promise((resolve, reject) => {
      debugger;
      console.log(
        "came inside to complaint pdf form generation --- >>>."
      );
      var dd = null;
     
      switch (formType) {
        case "inspectionNinstallingMeter":
          dd = {

            content: [
              {
                margin: [30, 20, 0, 0],
                image: item.tnbLogo,
              },

              {
                margin: [30, 20, 0, 0],
                text: [
                  "Date ", item.ta4datetime,
                  '\n\n',
                  'To: ', item.ta4custname, '\n',
                ]
              },
              {
                margin: [30, 0, 0, 0],
                table: {
                  widths: ['*'],
                  headerRows: 1,
                  body:
                    item.tempAddress
                },
                layout: 'noBorders'
              },
              '\n\n',
              {
                text: ['Dear valued TNB customer']
              },
              {
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: 'NOTIFICATION LETTER OF TNB METER INSTALLATION INSPECTION AND TESTING', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },
              {
                margin: [30, 15, 0, 0],
                text: [
                  'Please be informed that TNB is conducting inspections and testing of TNB meter installation at your premises to ensure it is working in good condition. Your kind cooperation during the inspection and testing process is much appreciated. For any enquiries, you may contact us at 1300-88-5454',
                  '\n\nThank you'
                ],
              },
              {
                margin: [30, 20, 0, 0],
                alignment: 'center',
                bold: true,
                text: [
                  '"BETTER. BRIGHTER"\n\n',
                  '"TNB PRACTISES A NO GIFT POLICY"',

                ]
              },
              {
                alignment: 'justify',
                margin: [30, 20, 0, 0],
                text: ' Yours Sincerely,\n\n\n',
              },
              /*      {
                     margin: [30, 20, 0, 0],
                     image: 'sign1',
                     witdth: 200
                   }, */
              {
                margin: [30, 0, 0, 0],
                image: 'sign1',
                width: 100,
                height: 50,
              },
              {
                alignment: 'justify',
                margin: [30, 20, 0, 0],
                text: [
                  item.ta4staffname,
                  '\n',
                  item.ta4position,
                  '\n',
                  item.ta4department,

                ]
              },
              {
                table: {
                  margin: [0, 50, 0, 0],
                  headerRows: 1,
                  body: [
                    [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' },
                    { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', '', '', '', '', '', '', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              { text: 'For TNB usage', decoration: 'underline', margin: [30, 200, 0, 0], },


              {
                margin: [30, 0, 80, 10],
                text: '\nPlease tick which is suitable\n'
              },
              {
                margin: [30, 0, 0, 0],
                heights: [100, 50],
                table: {
                  body: [
                    [
                      {
                        stack: [
                          {
                            image: 'present',
                            width: 70,
                            height: 20,
                          }
                        ]

                      },
                      'Customer attend'
                    ],
                    [
                      {
                        stack: [
                          {
                            image: 'absent',
                            width: 70,
                            height: 20,
                          }
                        ]

                      },
                      'Customer absent'
                    ],
                  ]
                }
              }, {
                margin: [30, 15, 0, 0],
                text:
                  'Verified by :\n\n',
              },
              {
                margin: [30, 0, 0, 0],
                image: 'sign2',
                width: 100,
                height: 50,
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: [
                  'Staff Name: ', item.ta4staffname,
                  '\n',
                  'Staff No.: ', item.ta4staffno,
                ]
              }

            ],
            images: {
              sign1: item.ta4signmanger,
              sign2: item.ta4signstaff,
              present: item.present,
              absent: item.absent
            },
            styles: {
              header: {
                fontSize: 18,
                bold: true,
                alignment: 'center',
                margin: [30, 50, 60, 80],
                decoration: 'underline',
              },
              subheader: {
                fontSize: 14
              },
              tableHeader: {
                fontSize: 16,
                margin: [50, 30, 0, 0],
                bold: true,
                alignment: 'center',
              },
              superMargin: {
                margin: [30, 0, 40, 0],
                fontSize: 15
              }
            }

          }
          break;
        case "collectionEvidence":
          dd = {
            content: [
              {
                margin: [30, 20, 0, 0],
                image: item.tnbLogo,
              },
              {
                margin: [30, 0, 0, 0],
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: 'NOTIFICATION LETTER OF EVIDENCE COLLECTION', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', '', '', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Contract Account .: ', item.ta4accountno],
                  },
                  {
                    text: ['Station Code: ', item.station]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: [
                  'Customer Name: ', item.ta4custname, '\n\n',
                  'Hereby I: ', item.ta4staffname, '\n\n',
                  'Staff No.: ', item.ta4staffno, ' claiming to have taken the following items:-\n',
                ]
              },
              '\n\n',
              {
                margin: [30, 0, 0, 0],
                table: {
                  widths: [30, '*', '*', 0],
                  headerRows: 1,
                  body:
                    soTypes
                }
              },

              // {
              //   margin: [30, 5, 0, 0],

              //     text: [soTypes]

              // },
              '\n',
              {
                margin: [30, 0, 0, 10],
                text: [
                  'from the premises located at: ',
                  item.ta4custaddress
                ]
              },
              {
                margin: [30, 0, 0, 0],

                columns: [
                  {
                    text: 'Staff Signature:\n',
                  },
                  {
                    image: 'sign1',
                    width: 100,
                    height: 50,
                  },
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],

                columns: [
                  {
                    text: 'Witness Signature:',
                  },
                  {
                    image: 'sign2',
                    width: 100,
                    height: 50,
                  },
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Examiner Name: ', '\n', item.ta4staffname]
                  },
                  {
                    text: ['Witness Name: ', '\n', item.ta4witnessname]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Staff No.: ', item.ta4staffno]
                  },
                  {
                    text: ['Address:', '\n', item.ta4custaddress]

                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: [
                  'Identification Card No: ', item.ta4witnessidenkard
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: 'Designation: Technician',
                  },
                  {
                    text: ['Identification Card No: ', item.ta4staffindenkard]
                  },
                ]
              },
              '\n',

              {
                margin: [30, 0, 0, 0],
                text: [
                  ' Station: ', item.ta4officezone
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Date: ', item.ta4datetime]
                  },
                  {
                    text: ['Date: ', item.ta4indatetime]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Time: ', item.ta4starttime]
                  },
                  {
                    text: ['Time: ', item.ta4endtime],
                  }
                ]
              },

            ],

            images: {
              sign1: item.ta4signstaff,
              sign2: item.ta4signwitness
            },
            styles: {
              tableHeader: {
                fontSize: 16,
                margin: [30, 30, 0, 0],
                bold: true,
                alignment: 'center',
              },
            }

          }

          break;
        // Tnb Inspection 
        case "inspecInstallingTnbMeter":

          dd = {
            content: [
              {
                margin: [30, 20, 0, 0],
                image: item.tnbLogo,
              },

              {
                margin: [30, 20, 30, 0],
                columns: [
                  {
                    text: 'Our Ref. : TNB (B) DNET/METER/SEAL',
                  },
                  {
                    text: ['Date: ', item.ta4indatetime]

                  }
                ],
              },
              {
                margin: [30, 20, 0, 0],
                text: [item.ta4custname]
              },

              {
                margin: [30, 0, 0, 0],
                table: {
                  widths: ['*'],
                  headerRows: 1,
                  body:
                    item.tempAddress
                },
                layout: 'noBorders'
              },
              {
                margin: [30, 20, 0, 0],
                text: 'Dear valued TNB customer,'
              },

              {
                margin: [50, 0, 0, 0],
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: 'NOTICE OF TNB METER INSTALLATION INSPECTION', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },
              {
                margin: [30, 20, 20, 0],
                text: ["Please be informed we have conducted inspections and testing of meter installation that records the usage of electricity to the  premises at  ",
                  item.ta4custaddress,
                  ' with Contract Account No. ',
                  item.ta4indatetime,
                  ' at ',
                  item.ta4endtime,
                  '\n\n',
                  "The inspection results show that the meter does not record actual electricity consumption readings as has been explained previously to you. Please be informed that TNB will claim the underbill charges from you.",
                  '\n\n For any enquiries, you may contact us at ',
                  '',
                  item.ta4officeaddress,
                  ',',
                  item.ta4officephone,
                  '\n\n Thank You.'
                ]
              },

              {
                margin: [30, 0, 0, 0],
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', '', '', '', '', '', '', '', '', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              {
                margin: [30, 0, 30, 0],
                width: 200,
                columns: [
                  {
                    text: 'Examiner Signature:',
                  },
                  {
                    image: 'sign1',
                    width: 100,
                    height: 50,
                  },
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                width: 200,
                columns: [
                  {
                    text: 'Accepted By (T/T):',
                  },
                  {
                    image: 'sign2',
                    width: 100,
                    height: 50,
                  },
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Examiner Name: ', item.ta4staffname]
                  },
                  {
                    text: [
                      'Name: ',
                      item.ta4witnessname
                    ]
                  }
                ],
              },
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Staff no. : ', item.ta4staffno]
                  },
                  {
                    text: [
                      'Tel. No.: ',
                      item.ta4witnessphone
                    ]

                  }
                ],
              },
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: 'Unit: Seal Unit Metering',
                  },
                  {
                    text: [
                      'Date/Time:',
                      item.datetime
                    ]

                  }
                ],
              },
              '\n',
              {
                margin: [100, 0, 0, 0],
                text: [
                  'Cc:',
                  item.ta4department
                ]
              }

            ],

            images: {
              sign1: item.ta4signstaff,
              sign2: item.ta4signwitness
            },
            styles: {
              tableHeader: {
                fontSize: 14,
                margin: [30, 30, 0, 0],
                bold: true,
                alignment: 'center',
              },
            }
          }
          break;
        // Customer Copy
        case "electricCut":
          dd = {
            content: [
              {
                margin: [30, 20, 0, 0],
                image: item.tnbLogo,
              },

              {
                margin: [30, 0, 0, 0],
                alignment: 'center',
                text: ['SCHEDULE – Form A\n\n', '(subregulation 6A(1))\n\n', 'MALAYSIA', '\n\nState  ', item.ta4statename, '\n\nELECTRICITY SUPPLY ACT 1990']
              },
              {
                style: 'textMargin',
                text: ['To:', '\n\n', item.ta4custname, '\n\n', item.ta4custaddress, '\n\n\n Sir/Madam/Messrs, ']
              },
              {
                style: 'title',
                margin: [30, 0, 0, 0],
                text: ['NOTICE OF DISCONNECTION OF ELECTRICITY SUPPLY UNDER SUBSECTION 38(1) ELECTRICITY SUPPLY ACT 1990.']
              },

              {
                margin: [30, 10, 0, 0],
                text: ['Please be informed that on  ', item.ta4starttime, ' an inspection has been done to our installations at your premise. From the inspection, we noticed that the system had been tampered or modified in the following circumstances below:'
                  , '\n\n'
                  , item.ta4anamoly,
                  '\n\n Based on the evidence above, we are of the opinion that an offence had been committed under the Electricity Supply Act 1990 ("Act") as follows:']
              },
              {
                margin: [30, 0, 0, 0],
                pageBreak: 'before',
                text: '\nPlease tick which is suitable\n'
              },
              {
                margin: [30, 0, 0, 0],
                table: {
                  widths: [50, 100, 300],
                  heights: [30, 30, 30],
                  body: [
                    [
                      '', 'Subsection 37(1)', 'Description'],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase2,
                            width: 70,
                            height: 20,
                          }
                        ]

                      },
                      'Subsection 37(1)', 'tampers with or adjusts any installation or part thereof or manufactures or imports orsells any equipment so as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other property:'],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase3,
                            width: 70,
                            height: 20,
                          }
                        ]

                      },
                      'Subsection 37(3)', '(a)	abstracts energy;'],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase4,
                            width: 70,
                            height: 20,
                          }
                        ]

                      },
                      'Subsection 37(3)', '(b)	consumes energy;'],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase5,
                            width: 70,
                            height: 20,
                          }
                        ]

                      }, 'Subsection 37(3)', '(c)	uses energy;'],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase6,
                            width: 70,
                            height: 20,
                          }
                        ]

                      }, 'Subsection 37(3)', '(d)	alters the index of any meter or other instrument used on or in connection with any installation of any supply authority or any licensed installation for recording the output or consumption of energy; or '],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase7,
                            width: 70,
                            height: 20,
                          }
                        ]

                      }, 'Subsection 37(3)', '(e)	prevents any such meter or instrument from duly recording the output or consumption of energy.'],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase8,
                            width: 70,
                            height: 20,
                          }
                        ]

                      }, 'Subsection 37(14)', 'damages any meter or other instrument used on or in connection with any licensed installation, for recording the output or consumption of energy.'],

                  ]
                }
              },
              {
                margin: [30, 50, 0, 0],
                text: ['Please note that under subsection 38 (1) of the Act, you are notified you are hereby given a notice that the  electricity in the above premise shall  be disconnected on '
                  , item.datetime
                  , '\n\n Please also take note that we will claim any loss and expenses incurred by us due to the offences  done as above-mentioned. We will issue a statement of claims to your goodselves in due course.']
              },
              '\n\n',

              {
                margin: [30, 0, 0, 0],
                text: ['Name of License Holder: TENAGA NASIONAL BERHAD ',
                  '\n\n',
                  'Address: ',
                  '\n\n',
                  item.ta4officeaddress,
                  '\n\n',
                  , 'Date: ',
                  item.ta4indatetime
                ]
              }
            ],
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
          break;
        // Staff Copy
        case "electricCutStaff":
          dd = {
            content: [
              {
                margin: [30, 20, 0, 0],
                image: item.tnbLogo,
              },

              {
                margin: [30, 0, 0, 15],
                alignment: 'center',
                text: ['SCHEDULE – Form A\n\n', '(subregulation 6A(1))\n\n', 'MALAYSIA', '\n\nState  ', item.ta4statename, '\n\nELECTRICITY SUPPLY ACT 1990']
              },
              {
                style: 'textMargin',
                text: ['To:', '\n\n', item.ta4custname, '\n\n', item.ta4custaddress, '\n\n\n Sir/Madam/Messrs, ']
              },
              {
                style: 'title',
                margin: [30, 0, 0, 0],
                text: ['NOTICE OF DISCONNECTION OF ELECTRICITY SUPPLY UNDER SUBSECTION 38(1) ELECTRICITY SUPPLY ACT 1990.']
              },

              {
                margin: [30, 10, 0, 0],
                text: ['Please be informed that on  ', item.ta4starttime, ' an inspection has been done to our installations at your premise. From the inspection, we noticed that the system had been tampered or modified in the following circumstances below:'
                  , '\n\n'
                  , item.ta4anamoly,
                  '\n\n Based on the evidence above, we are of the opinion that an offence had been committed under the Electricity Supply Act 1990 ("Act") as follows:']
              },
              {
                margin: [30, 200, 0, 0],
                text: '\nPlease tick which is suitable\n'
              },
              {
                margin: [30, 0, 0, 0],
                table: {
                  widths: [50, 100, 300],
                  heights: [30, 30, 30],
                  body: [
                    [
                      '', 'Subsection 37(1)', 'Description'],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase2,
                            width: 70,
                            height: 20,
                          }
                        ]

                      },
                      'Subsection 37(1)', 'tampers with or adjusts any installation or part thereof or manufactures or imports orsells any equipment so as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other property:'],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase3,
                            width: 70,
                            height: 20,
                          }
                        ]

                      },
                      'Subsection 37(3)', '(a)	abstracts energy;'],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase4,
                            width: 70,
                            height: 20,
                          }
                        ]

                      },
                      'Subsection 37(3)', '(b)	consumes energy;'],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase5,
                            width: 70,
                            height: 20,
                          }
                        ]

                      }, 'Subsection 37(3)', '(c)	uses energy;'],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase6,
                            width: 70,
                            height: 20,
                          }
                        ]

                      }, 'Subsection 37(3)', '(d)	alters the index of any meter or other instrument used on or in connection with any installation of any supply authority or any licensed installation for recording the output or consumption of energy; or '],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase7,
                            width: 70,
                            height: 20,
                          }
                        ]

                      }, 'Subsection 37(3)', '(e)	prevents any such meter or instrument from duly recording the output or consumption of energy.'],
                    [
                      {
                        stack: [
                          {
                            image: item.subsectionBase8,
                            width: 70,
                            height: 20,
                          }
                        ]

                      }, 'Subsection 37(14)', 'damages any meter or other instrument used on or in connection with any licensed installation, for recording the output or consumption of energy.'],

                  ]
                }
              },
              {
                margin: [30, 50, 0, 0],
                text: ['Please note that under subsection 38 (1) of the Act, you are notified you are hereby given a notice that the  electricity in the above premise shall  be disconnected on '
                  , item.datetime
                  , '\n\n Please also take note that we will claim any loss and expenses incurred by us due to the offences  done as above-mentioned. We will issue a statement of claims to your goodselves in due course.']
              },
              '\n\n',
              {
                margin: [30, 0, 0, 0],
                text: ['Name of License Holder: TENAGA NASIONAL BERHAD ',
                  '\n\n',
                  'Address: ',
                  '\n\n',
                  item.ta4officeaddress,
                  '\n\n',
                  , 'Date: ',
                  item.ta4indatetime
                ],

              },
              {
                pageBreak: 'before',
                margin: [50, 30, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['Delivery Notice of Form A\n\n'
                ],
              },
              {
                margin: [30, 0, 0, 0],
                table: {
                  widths: [150, 300],
                  heights: [30, 30, 30],
                  body: [
                    ['Date', optItem1.ta4indatetime],
                    ['Time', optItem1.ta4starttime],
                    ['Name Receiver ', optItem1.ta4witnessname],
                    ['Signature Receiver', {
                      stack: [
                        {
                          image: 'sign1',
                          width: 100,
                          height: 50,
                        }
                      ]

                    },
                    ],
                    /*   [
                        'Name & Notice Deliver Signature',
                        optItem1.deliverName
                      ] */
                    /* ['Deliver Signature ', {
                      stack: [
                        {
                          image: 'sign2'
                        }
                      ]

                    },
                    ], */

                    /* [
                      'Remarks (if any)',
                      optItem1.ta4describe
                    ] */
                  ]
                }
              },
              {
                margin: [30, 0, 0, 0],
                table: {
                  widths: [150, 300],
                  heights: [30, 30, 30],
                  body: [
                    /*   [
                        'Name & Notice Deliver Signature',
                        optItem1.deliverName
                      ] */
                    ['Deliver Signature ', {
                      stack: [
                        {
                          image: 'sign2',
                          width: 100,
                          height: 50,
                        }
                      ]

                    },
                    ],
                    [
                      'Delivery Name',
                      optItem1.ta4staffname
                    ],

                    [
                      'Remarks (if any)',
                      optItem1.ta4describe
                    ]
                  ]
                }
              },

              {
                margin: [50, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['Supply Disconnection \n\n']
              },
              {
                margin: [30, 0, 0, 0],
                table: {
                  widths: [150, 300],
                  heights: [30, 30, 30],
                  body: [
                    ['Date', optItem2.ta4datetime],
                    ['Time', optItem2.ta4starttime],
                    ['Name Disconnector ', optItem2.ta4staffname],
                    ['Disconnector Signature ', {
                      stack: [
                        {
                          image: 'sign3',
                          width: 100,
                          height: 50,
                        }
                      ]

                    },
                    ],
                    [
                      'Remarks (if any)',
                      optItem2.ta4describe
                    ]
                  ]
                }
              },

              {
                pageBreak: 'before',
                margin: [50, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['Supply Reconnection A\n\n']
              },
              {
                margin: [30, 0, 0, 0],
                table: {
                  widths: [150, 300],
                  heights: [30, 30, '*'],
                  body: [
                    ['Date ', optItem3.ta4datetime],
                    ['Time', optItem3.ta4starttime],
                    ['Name Reconnector ', optItem3.ta4staffname],
                    ['Reconnector Signature ', {
                      stack: [
                        {
                          image: 'sign4',
                          width: 100,
                          height: 50,
                        }
                      ]

                    },
                    ],
                    [
                      'Remarks (if any)',
                      optItem3.ta4describe
                    ]
                  ]
                }
              },
            ],
            images: {
              sign1: optItem1.ta4signcustomer,
              sign2: optItem1.ta4signstaff,
              sign3: optItem2.ta4signstaff,
              sign4: optItem3.ta4signstaff
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

          } // end case for Form A staff
          break;
        case "elctCessInterupt":
          dd = {
            content: [
              {
                margin: [30, 20, 0, 0],
                image: item.tnbLogo,
              },
              {
                margin: [30, 20, 30, 0],
                columns: [
                  {
                    text: ['Date :', item.ta4datetime]
                  },

                ],
              },
              {
                margin: [30, 20, 10, 0],
                text: ['To: ', item.ta4custname]
              },
              {
                margin: [30, 20, 10, 0],
                text: 'Dear valued TNB customer,\n'
              },

              {
                margin: [30, 20, 0, 0],
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: "NOTIFICATION NOTIE OF CESSATION TEMPORARY INTERRUPTION OF ELECTRICITY SUPPLY FOR THE PURPOSE OF TESTING AND INSPECTIONS OF TNB'S METER INSTALLATION", style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', '', '', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              {
                margin: [30, 10, 0, 0],
                text: ["Please be informed that TNB is conducting testing and inspection of TNB's meter installation at your premises to ensure that it works properly ",
                  '\n\n',
                  , "In view of the same please be informed that the electricity supply at your premises will be cessationed/temporarily interupted on ",
                  item.ta4indatetime,
                  ' from time ',
                  item.ta4starttime,
                  ' until inspection time ',
                  item.ta4endtime,
                ]
              },
              {
                margin: [30, 20, 0, 0],
                text: [" Your kind cooperation is much appreciated",
                  '\nThank You\n']
              },

              {
                margin: [30, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['\n“BETTER BRIGHTER”\n'
                  , '“TNB PRACTISES A NO GIFT POLICY”']
              },

              {
                margin: [30, 10, 0, 0],
                image: 'sign1',
                width: 100,
                height: 50,
              },
              {
                margin: [30, 0, 0, 0],
                text: ['Staff Name: ', item.ta4staffname, '\n'
                  , 'Staff No. ', item.ta4staffno]
              },
              '\n',
              {
                margin: [30, 10, 0, 0],
                text: [" I hereby fully understand the contents of this notice and  that the electricity supply  to be  cessationed /temporarily interrupted for the above said purposes."]
              },
              {
                margin: [30, 0, 0, 0],
                image: 'sign2',
                width: 100,
                height: 50,
              },
              {
                margin: [30, 10, 0, 0],
                text: [
                  "Name(Customer/Owner/Representative): ",
                  item.ta4witnessname,
                  '\n\n',
                  "Identification Card No.: ",
                  item.ta4witnessidenkard,
                  '\n\n',
                  "Date/Time: ",
                  item.date1
                ]
              },
            ],
            images: {
              sign1: item.ta4signstaff,
              sign2: item.ta4signwitness
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

          } // End Notice Cessation Temporary
          break;
        case "formB":
          dd = {
            content: [
              {
                margin: [30, 20, 0, 0],
                image: item.tnbLogo,
              },
              {
                margin: [100, 0, 0, 0],
                alignment: 'center',
                text: [
                  "LICENSEE SUPPLY REGULATIONS 1990\n\n",
                  "Form B\n\n",
                  "sub-regulations 6A(2)\n\n",
                  "MALAYSIA\n\n",
                  "STATE OF ",
                  item.ta4statename,
                  '\n',
                  "ELECTRICITY SUPPLY ACT 1990"
                ]
              },
              {
                margin: [30, 20, 10, 0],
                lineHeight: 2,
                text: ["To: ", item.ta4custname, '\n',
                ]
              },
              {
                margin: [30, 0, 0, 0],
                table: {
                  widths: ['*'],
                  headerRows: 1,
                  body:
                    item.tempAddress
                },
                layout: 'noBorders'
              },
              '\n\n',
              {
                text: ["Sir/Madam/Mr/Messrs,"]
              },
              {
                margin: [30, 10, 20, 0],
                bold: true,
                text: ["NOTICE OF TEMPORARY CESSATION / INTERUPTION OF ELECTRICITY SUPPLY."]
                /*  table: {
                   headerRows: 1,
                   body: [
                     [{ text: data.language[5].complianceFormType6.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                     ['', '', '', ''],
                   ]
                 },
                 layout: 'lightHorizontalLines' */
              },

              {
                margin: [30, 10, 20, 0],
                lineHeight: 1,
                text: [
                  "Please be informed that the supply of electricity at ",
                  item.ta4custaddress,
                  " shall be temporarily ceased/interrupted on ",
                  item.ta4datetime,
                  ' from ',
                  item.ta4starttime,
                  ' to ',
                  item.ta4endtime,
                  ' for the purpose of ',
                  item.ta4purpose
                ]
              },
              {
                margin: [30, 10, 20, 0],
                text: ['\nName of Licensee: TNB\n\n',
                  'Address: ',
                  item.ta4officeaddress,
                  '\n\n',
                  'Telephone Number: ',
                  item.ta4officephone,
                  '\n\n',
                  'Dated: ',
                  item.ta4indatetime
                ]
              },
            ],
            styles: {
              title: {
                fontSize: 14,
                bold: true
              },
              textMargin: {
                margin: [30, 50, 80, 0]
              }
            }

          }// End for Form B 
          break;

        //prejudice
        case "prejudice":
          dd = {
            content: [
              {
                margin: [30, 20, 0, 0],
                image: item.tnbLogo,
              },
              {
                margin: [30, 20, 10, 0],
                columns: [
                  {
                    text: ['To: ', item.ta4custname]
                  },
                ],
              },
              {
                margin: [30, 0, 0, 0],
                table: {
                  widths: ['*'],
                  headerRows: 1,
                  body:
                    item.tempAddress
                },
                layout: 'noBorders'
              },
              {
                margin: [30, 20, 10, 0],
                text: 'Dear valued TNB customer\n'
              },

              {
                margin: [30, 20, 0, 0],
                bold: true,
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: "NOTIFICATION LETTER (EXPLANATION SESSION WITHOUT PREJUDICE) REGARDING TO ELECTRICITY DISCONNECTION AND CLAIMS OF LOSS OF REVENUE AND EXPENSES AND RELATED CHARGES.", style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              {
                margin: [30, 10, 0, 0],
                text: ["Please be informed that TNB is conducting inspections and testing of TNB meter installation at your premises to ensure it is working in good condition. The inspection results show that the meter does not record actual electricity consumption readings. ",
                  '\n\n',
                  "Please note that under subsection 38 (1) of the Electricity Supply Act 1990, TNB will perform electricity disconnection at your premise as mentioned in disconnection notice (Form A) that will be given together with this letter and will claim any loss of revenue and expenses and related charges.",
                  '\n\n',
                  "Therefore, you are invited to the office of REVENUE ASSURANCE which is addressed at ",
                  item.ta4officeaddress,
                  " after three (3) working days from the inspection date for explanation session without prejudice regarding to the actions will be taken by TNB. You are also encouraged to bring any proof and supporting documents for this session."
                ]
              },
              '\n\n',
              {
                margin: [30, 0, 0, 20],
                text: [
                  "For any enquiries, you may contact TNB at ",
                  item.ta4officephone
                ]

              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: "Thank you."
              },
              '\n\n',
              {
                margin: [30, 10, 0, 0],
                bold: true,
                text: "REVENUE ASSURANCE"
              },

              {
                margin: [30, 10, 0, 0],
                bold: true,
                text: "REVENUE MANAGEMENT "
              },

              {
                margin: [30, 10, 0, 0],
                bold: true,
                text: "CUSTOMER SERVICE"
              },

              {
                margin: [30, 10, 0, 0],
                bold: true,
                text: "DISTRIBUTION NETWORK, TNB"
              },
              '\n\n',
              {
                margin: [100, 0, 0, 0],
                italics: true,
                fontSize: 10,
                decoration: 'underline',
                text: "This notice is computer generated and does not require a signature "
              },
            ],
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
          break;
      } // End of Swtich Case 
      resolve(dd);

    });
  }
}
