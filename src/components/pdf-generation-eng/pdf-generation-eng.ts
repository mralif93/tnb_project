/* 
 * Modification History :
 * Date         version     Modified By   Method            Description
 * 2021-03-23   008         Andy Chang    pdfDocumentEng    update compliance form
 * 
 */

import { Component } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

/**
 * Generated class for the PdfGenerationEngComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pdf-generation-eng',
  templateUrl: 'pdf-generation-eng.html'
})
export class PdfGenerationEngComponent {

  public formType: any;
  constructor() {
    console.log('Hello PdfGenerationEngComponent Component');
  }

  pdfDocumentEng(item, soTypes, formType, langType, optItem1, optItem2, optItem3) {
    debugger;
    var dd = null;
    return new Promise((resolve, reject) => {
      switch (formType) {
        // English Language select
        case 'prejudiceForm': {
          dd = {
            content: [
              {
                margin: [0, 20, 0, 0],
                alignment: 'right',
                image: 'building',
                width: 90
              },
              '\n',
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
                  { text: item.ta4officeaddress, decoration: 'underline', decorationStyle: 'dotted' },
                  " after three (3) working days from the inspection date for explanation session without prejudice regarding to the actions will be taken by TNB. You are also encouraged to bring any proof and supporting documents for this session."
                ]
              },
              '\n\n',
              {
                margin: [30, 0, 0, 20],
                text: [
                  "For any enquiries, you may contact TNB at ",
                  { text: item.ta4officephone, decoration: 'underline', decorationStyle: 'dotted' }
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
                fontSize: 9,
                decoration: 'underline',
                text: "This notice is computer generated and does not require a signature "
              },
            ],

            images: {
              building: 'data:image/png;base64,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'
            },

            styles: {
              title: {
                fontSize: 10,
                bold: true
              },
              textMargin: {
                margin: [0, 50, 80, 0]
              }
            },
            defaultStyle: {
              fontSize: 9,
            }


          }
          break;
        }
        case "tempCeassation": {
          dd = {
            content: [
              {
                margin: [0, 20, 0, 0],
                alignment: 'right',
                image: 'building',
                width: 90
              },
              '\n',
              {
                margin: [30, 20, 30, 0],
                columns: [
                  {
                    text: ['Date: ', item.ta4datetime]
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
                    [{ text: "NOTIFICATION NOTICE OF CESSATION, TEMPORARY INTERRUPTION OF ELECTRICITY SUPPLY FOR THE PURPOSE OF TESTING AND INSPECTIONS OF TNB'S METER INSTALLATION", style: 'tableHeader' }],
                    [''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              {
                margin: [30, 10, 0, 0],
                text: ["Please be informed that TNB is conducting testing and inspection of TNB's meter installation at your premises to ensure that it works properly. ",
                  '\n\n',
                  , "In view of the same, please be informed that the electricity supply at your premises will be cessationed/temporarily interupted on ",
                  { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, //008
                  ' from ',
                  { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, //008
                  ' until ',
                  { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, //008
                ]
              },
              {
                margin: [30, 20, 0, 0],
                text: [" Your kind cooperation is much appreciated.",
                  '\nThank you.\n']
              },

              {
                margin: [30, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: [
                  //'\n“POWERING THE NATION”\n' , //008
                  //'\n“BETTER BRIGHTER”' //008
                  '\n“BETTER WORLD. BRIGHTER LIVES”\n' //008
                ]
                
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
                table: {
                  widths: ['*'],
                  body: [[" "], [" "]]
                },
                layout: {
                  hLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 0 : 1;
                  },
                  vLineWidth: function (i, node) {
                    return 0;
                  },
                }
              },
              {
                margin: [30, 10, 0, 0],
                text: [" I hereby fully understand the contents of this notice and agree that the electricity supply  to be  cessationed /temporarily interrupted for the above said purposes."]
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
                  "Identification Card No: ",
                  item.ta4witnessidenkard,
                  '\n\n',
                  "Date/Time: ",
                  item.date1
                ]
              },
            ],


            images: {
              sign1: item.ta4signstaff,
              sign2: item.ta4signwitness,
              building: 'data:image/png;base64,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'

            },
            styles: {
              title: {
                fontSize: 10,
                bold: true,
                alignment: 'center',
              },
              textMargin: {
                margin: [30, 50, 80, 0]
              }, tableHeader: {
                fontSize: 10,
                bold: true,
                alignment: 'center'
              }, custData: {
                bold:true
              }
            },
            defaultStyle: {
              fontSize: 9,
            }

          } // End Notice Cessation Temporary
          break;
        }
        case "formACust": {
          dd = {
            content: [
              {
                margin: [0, 20, 0, 0],
                alignment: 'right',
                image: 'building',
                width: 90
              },
              '\n',
              {
                margin: [0, 0, 0, 15],
                alignment: 'center',
                text: ['SCHEDULE – Form A\n\n', '(subregulation 6A(1))\n\n', 'MALAYSIA', '\n\nSTATE  ', { text: item.ta4statename, decoration: 'underline', decorationStyle: 'dotted' }, '\n\nELECTRICITY SUPPLY ACT 1990']
              },
              {
                style: 'textMargin',
                text: ['To: ', item.ta4custname, '\n\n', item.ta4custaddress, '\n', item.station, ' - ', item.ta4accountno, '\n\n\n', { text: 'Sir/Madam/Messrs', bold: true }]
              },
              '\n',
              {
                style: 'title',
                margin: [0, 0, 0, 0],
                text: ['NOTICE OF DISCONNECTION OF ELECTRICITY SUPPLY UNDER SUBSECTION 38(1) ELECTRICITY SUPPLY ACT 1990.']
              },

              {
                margin: [0, 10, 15, 0],
                text: ['Please be informed that on  ', { text: item.datetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, ' an inspection has been done to our installations at your premise. From the inspection, we noticed that the system had been tampered or modified in the following circumstances below:'
                  , '\n\n'
                  , { text: item.ta4anamoly, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                  '\n\n Based on the evidence above, we are of the opinion that an offence had been committed under the Electricity Supply Act 1990 ("Act") as follows:']
              },

              {
                margin: [0, 0, 15, 0],
                text: '•	Subsection 37(1)*'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase2
                    }, {
                      text: 'tampers with or adjusts any installation or part thereof or manufactures or imports or sells any ', border: [false, false, false, false]
                    }],
                    [{
                      border: [false, false, false, false],
                      text: ''
                    }, {
                      text: 'equipment so as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other property:.', border: [false, false, false, false]
                    }],


                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subsection 37(1)*'
              },
              {
                margin: [0, 0, 15, 0],
                text: '- in any manner dishonestly:-'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase3
                    }, {
                      text: '(a)	abstracts energy;', border: [false, false, false, false]
                    }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase4
                      },
                      {
                        border: [false, false, false, false],
                        text: '(b)	consumes energy;'
                      }
                    ], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase5
                      },
                      {
                        border: [false, false, false, false],
                        text: '(c)	uses energy;'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase6
                      },
                      {
                        border: [false, false, false, false],
                        text: '(d)  alters the index of any meter or other instrument used on or in connection with any installation '
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'of any supply authority or any licensed installation for recording the output or consumption of energy; or'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase7
                      },
                      {
                        border: [false, false, false, false],
                        text: '(e)  prevents any such meter or instrument from duly recording the output or consumption of'
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'energy.'
                      }],

                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subsection 37(14)*'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase8
                      },
                      {
                        border: [false, false, false, false],
                        text: 'damages any meter or other instrument used on or in connection with any licensed installation, for'
                      }],
                    [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'recording the output or consumption of energy.'
                      }]
                  ]
                }
              },
              {
                pageBreak: 'before',
                margin: [0, 0, 0, 0],
                text: ''
              },
              {
                margin: [0, 0, 0, 0],
                text: ['Please note that under subsection 38 (1) of the Act, you are notified you are hereby given a notice that the  electricity in the above premise shall  be disconnected on '
                  , { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }
                  , '\n\n Please also take note that we will claim any loss and expenses incurred by us due to the offences  done as above-mentioned. We will issue a statement of claims to your goodselves in due course.']
              },
              '\n\n',
              {
                margin: [0, 0, 15, 0],
                text: ['Name of License Holder: TENAGA NASIONAL BERHAD ',
                  '\n\n',
                  'Address: ',
                  '\n\n',
                  item.ta4officeaddress,
                  '\n\n',
                  , 'Date: ',
                  { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }
                ],

              },
              {
                table: {
                  widths: ['*'],
                  body: [[" "], [" "]]
                },
                layout: {
                  hLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 0 : 1;
                  },
                  vLineWidth: function (i, node) {
                    return 0;
                  },
                }
              },
              {
                text: ['*  Please tick / for the relevant offence/offences.']
              },
              {
                margin: [0, 30, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['Delivery Notice of Form A\n\n'
                ],
              },
              {
                margin: [30, 0, 0, 0],
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
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
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
                  body: [
                    /*   [
                        'Name & Notice Deliver Signature',
                        optItem1.deliverName
                      ] */

                    [
                      {
                        border: [true, false, true, true],
                        text: ['Delivery Name']
                      }, {
                        border: [true, false, true, true],
                        text: [optItem1.ta4staffname]
                      }
                    ],
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
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
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
                /*   pageBreak: 'before',
                  margin: [50, 10, 0, 0], */
                margin: [50, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['Supply Reconnection A\n\n']
              },
              {
                margin: [30, 0, 0, 0],
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
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
              sign4: optItem3.ta4signstaff,
              building: 'data:image/png;base64,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'

            },
            styles: {
              title: {
                fontSize: 10,
                bold: true
              },
              textMargin: {
                margin: [0, 50, 80, 0]
              },
              tableStyle: {
                fontSize: 5
              },
              custData: {
                bold: true
              }
            },
            defaultStyle: {
              fontSize: 9
            }

          } // end case for Form A staff
          break;
        }
        case "formCustCopy": {
          dd = {
            content: [
              {
                table: {
                  widths: [200, 170, '*'],
                  body: [
                    [{
                      border: [false, false, false, false],
                      image: 'building',
                      width: 90
                    }, {
                      text: [{ text: 'Tenaga Nasional Berhad,', bold: true, fontSize: 9 }, { text: '(200866-w) ', fontSize: 6 }, { text: '\n No 19 129,Jalan Bangsar,59200 Kuala Lumpur', fontSize: 8 },], border: [false, false, false, false],
                    }, {
                      text: [{ text: 'Tel:+6 03 2296 5566 \n Fax:+6 03 2283 3686 ', fontSize: 6 }, { text: '\n www.tnb.com.my', bold: true, fontSize: 6 }], border: [true, false, false, false],
                    }],
                  ]
                }
                /*    margin: [30, 20, 0, 0],
                   image: 'building',
                   width: 90 */
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                alignment: 'center',
                text: ['SCHEDULE – Form A\n\n', '(subregulation 6A(1))\n\n', 'MALAYSIA', '\n\nState  ', { text: item.ta4statename, decoration: 'underline', decorationStyle: 'dotted' }, '\n\nELECTRICITY SUPPLY ACT 1990']
              },
              {
                style: 'textMargin',
                text: ['To: ', item.ta4custname, '\n\n', item.ta4custaddress, '\n', item.station, ' - ', item.ta4accountno, '\n\n\n', { text: 'Sir/Madam/Messrs,', bold: true }]
              },
              {
                style: 'title',
                margin: [0, 0, 0, 0],
                text: ['NOTICE OF DISCONNECTION OF ELECTRICITY SUPPLY UNDER SUBSECTION 38(1) ELECTRICITY SUPPLY ACT 1990.']
              },

              {
                margin: [0, 10, 15, 0],
                text: ['Please be informed that on  ', { text: item.datetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, ' an inspection has been done to our installations at your premise. From the inspection, we noticed that the system had been tampered or modified in the following circumstances below:'
                  , '\n\n'
                  , { text: item.ta4anamoly, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, 
                  '\n\n Based on the evidence above, we are of the opinion that an offence had been committed under the Electricity Supply Act 1990 ("Act") as follows:']
              },

              {
                margin: [0, 0, 15, 0],
                text: '•	Subsection 37(1)*'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase2
                    }, {
                      text: 'tampers with or adjusts any installation or part thereof or manufactures or imports or sells any ', border: [false, false, false, false]
                    }],
                    [{
                      border: [false, false, false, false],
                      text: ''
                    }, {
                      text: 'equipment so as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other property:.', border: [false, false, false, false]
                    }],


                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subsection 37(1)*'
              },
              {
                margin: [0, 0, 15, 0],
                text: '- in any manner dishonestly:-'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase3
                    }, {
                      text: '(a)	abstracts energy;', border: [false, false, false, false]
                    }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase4
                      },
                      {
                        border: [false, false, false, false],
                        text: '(b)	consumes energy;'
                      }
                    ], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase5
                      },
                      {
                        border: [false, false, false, false],
                        text: '(c)	uses energy;'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase6
                      },
                      {
                        border: [false, false, false, false],
                        text: '(d)  alters the index of any meter or other instrument used on or in connection with any installation '
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'of any supply authority or any licensed installation for recording the output or consumption of energy; or'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase7
                      },
                      {
                        border: [false, false, false, false],
                        text: '(e)  prevents any such meter or instrument from duly recording the output or consumption of'
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'energy.'
                      }],

                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subsection 37(14)*'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase8
                      },
                      {
                        border: [false, false, false, false],
                        text: 'damages any meter or other instrument used on or in connection with any licensed installation, for'
                      }],
                    [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'recording the output or consumption of energy.'
                      }]
                  ]
                }
              },
              /*               {
                              margin: [0, 0, 15, 0],
                              text: '•	Subsection 37(1)*'
                            },
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase2
                                },
                                {
                                  text: 'tampers with or adjusts any installation or part thereof or manufactures or imports orsells any equipment so as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other property:.'
                                }
                              ]
                            },
                            '\n',
                            {
                              margin: [0, 0, 15, 0],
                              text: '•	Subsection 37(3)*'
                            },
                            '\n',
                            {
                              margin: [20, 0, 15, 0],
                              text: '- in any manner dishonestly:-'
                            },
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase3
                                },
                                {
                                  text: '(a)	abstracts energy;'
                                }
                              ]
                            },
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase4
                                },
                                {
                                  text: '(b)	consumes energy;'
                                }
                              ]
                            },
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase5
                                },
                                {
                                  text: '(c)	uses energy;'
                                }
                              ]
                            },
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase6
                                },
                                {
                                  text: '(d)  alters the index of any meter or other instrument used on or in connection with any installation of any supply authority or any licensed installation for recording the output or consumption of energy; or'
                                }
                              ]
                            },
              
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase7
                                },
                                {
                                  text: '(e)  prevents any such meter or instrument from duly recording the output or consumption of energy.'
                                }
                              ]
                            },
                            '\n',
                            {
                              margin: [0, 0, 15, 0],
                              text: '•	Subsection 37(14)*'
                            },
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase8
                                },
                                {
                                  text: 'damages any meter or other instrument used on or in connection with any licensed installation, for recording the output or consumption of energy.'
                                }
                              ]
                            },
               */
              {
                pageBreak: 'before',
                margin: [0, 0, 0, 0],
                text: ''
              },
              {
                margin: [0, 50, 0, 0],
                text: ['Please note that under subsection 38 (1) of the Act, you are notified you are hereby given a notice that the  electricity in the above premise shall  be disconnected on '
                  , { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, '.' //008
                  , '\n\n Please also take note that we will claim any loss and expenses incurred by us due to the offences  done as above-mentioned. We will issue a statement of claims to your goodselves in due course.']
              },
              '\n\n',
              {
                margin: [0, 0, 15, 0],
                text: ['Name of License Holder: TENAGA NASIONAL BERHAD ',
                  '\n\n',
                  'Address: ',
                  '\n\n',
                  item.ta4officeaddress,
                  '\n\n',
                  , 'Date: ',
                  { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }
                ],

              },
              {
                table: {
                  widths: ['*'],
                  body: [[" "], [" "]]
                },
                layout: {
                  hLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 0 : 1;
                  },
                  vLineWidth: function (i, node) {
                    return 0;
                  },
                }
              },
              {
                text: ['*  Please tick / for the relevant offence/offences.']
              },

            ],
            images: {
              building: 'data:image/png;base64,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'
            },
            styles: {
              title: {
                fontSize: 10,
                bold: true
              },
              textMargin: {
                margin: [0, 50, 80, 0]
              },
              custData: {
                bold: true
              }
            },
            defaultStyle: {
              fontSize: 9
            }

          }
          break;
        }
        //METER INSTALLATION INSPECTION
        case "installationInspection": {
          if (optItem1 === 'Copperate') {
            dd = {
              content: [
                {
                  margin: [0, 20, 0, 0],
                  alignment: 'right',
                  image: 'building',
                  width: 90
                },
                '\n',
                {
                  margin: [30, 20, 30, 0],
                  columns: [
                    {
                      width: 350,
                      //text: 'Our Ref. : TNB (B) DNET/METER/SEAL', //008
                      text: ['Our Ref. : TNB (B) DNET/METER/SEAL/', item.ta4accountno ] //008
                    },
                    {
                      width: '*',
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
                    widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                    headerRows: 1,
                    body: [
                      [{}, {}, { text: 'NOTICE OF TNB METER INSTALLATION INSPECTION', style: 'tableHeader' }, {}, {}, {}],
                      ['', '', '', '', '', ''],
                    ]
                  },
                  layout: 'lightHorizontalLines'
                },
                {
                  margin: [30, 20, 20, 0],
                  text: ["Please be informed we have conducted inspections and testing of meter installation that records the usage of electricity to the  premises at  ",
                    { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    ' with Contract Account No. ', { text: item.ta4accountno, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, , { text: ' on ' },
                    { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    ' at ',
                    { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted' },
                    '\n\n For your information, evidence bag serial number is ', { text: item.ta4serialNum, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    '\n\n The inspection results show that the meter does not record actual electricity consumption readings as has been explained previously to you. Please be informed that TNB will claim the underbill charge from you.',
                    '\n\n You are invited to come to the ',{ text: 'nearest Kedai Tenaga', style:'custData' },', and please state the serial number of evidence bag for further information, after ',{ text: '14 days',style:'custData' },' from the date of the above case.',
                    '\n\n For any enquiries, you may contact us at ',
                    '',                    
                    {text: 'TNB Careline One Stop Enquiry Centre', style: 'custData' },', (No. Tel : ', 
                    { text: item.ta4officephone, style: 'custData' },
                    ') for further action.',
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
                      text: 'Accepted By (T/T):',

                    },
                  ]
                },
                '\n',
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      margin: [0, 0, 15, 0],
                      image: 'sign1',
                      width: 200,
                      height: 50,
                    },

                    {
                      margin: [30, 0, 0, 0],
                      image: 'sign2',
                      width: 200,
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
                      //text: 'Unit: SEAL UNIT METERING', //008
                      text: 'Unit : SEAL, SBU METERING', //008
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
                  //margin: [100, 0, 0, 0], //008
                  margin: [30, 0, 0, 0], //008                  
                  text: [
                    'Cc:',
                    item.ta4department
                  ]
                }

              ],

              images: {
                sign1: item.ta4signstaff,
                sign2: item.ta4signwitness,
                building: 'data:image/png;base64,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'

              },
              styles: {
                tableHeader: {
                  fontSize: 10,
                  margin: [30, 30, 0, 0],
                  bold: true,
                  alignment: 'center',
                },
                custData: {
                  bold: true,
                }
              },
              defaultStyle: {
                fontSize: 9
              }
            }
            break;
          } else if (optItem1 === 'NotCopperate') {
            dd = {
              content: [
                {
                  margin: [0, 20, 0, 0],
                  alignment: 'right',
                  image: 'building',
                  width: 90
                },
                '\n',
                {
                  margin: [30, 20, 30, 0],
                  columns: [
                    {
                      width: 350,
                      //text: 'Our Ref. : TNB (B) DNET/METER/SEAL', //008
                      text: ['Our Ref. : TNB (B) DNET/METER/SEAL/', item.ta4accountno ] //008
                    },
                    {
                      width: '*',
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
                    widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                    headerRows: 1,
                    body: [
                      [{}, {}, { text: 'NOTICE OF TNB METER INSTALLATION INSPECTION', style: 'tableHeader' }, {}, {}, {}],
                      ['', '', '', '', '', ''],
                    ]
                  },
                  layout: 'lightHorizontalLines'
                },
                {
                  margin: [30, 20, 20, 0],
                  text: ["Please be informed we have conducted inspections and testing of meter installation that records the usage of electricity to the  premises at  ",
                    { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    ' with Contract Account No. ', { text: item.ta4accountno, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, , { text: ' on ' },
                    { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    ' at ',
                    { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    '\n\n',
                    "The inspection results show that the meter does not record actual electricity consumption readings as has been explained previously to you. Please be informed that TNB will claim the underbill charge from you.",
                    '\n\n For your information, evidence bag serial number is ', { text: item.ta4serialNum, decoration: 'underline', decorationStyle: 'dotted' },
                    //'\n\n For any enquiries, you may contact us at ',
                    //'',
                    //item.ta4officeaddress,
                    //',',
                    //'(',
                    '\n\n You are invited to come to the ',{ text: 'nearest Kedai Tenaga', style:'custData' },', and please state the serial number of evidence bag for further information, after ',{ text: '14 days',style:'custData' },' from the date of the above case.',
                    '\n\n For any enquiries, you may contact us at ',
                    '',                    
                    { text: 'TNB Careline One Stop Enquiry Centre', style: 'custData' },', (No. Tel : ', 
                    { text: item.ta4officephone, style: 'custData' },
                    ') for further action.',
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
                    }
                  ]
                },
                '\n',
                {
                  margin: [30, 0, 30, 0],
                  columns: [
                    {
                      image: 'sign1',
                      width: 100,
                      height: 50,
                    }
                  ]
                },
                '\n',
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      text: ['Examiner Name: ', item.ta4staffname]
                    },

                  ],
                },
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      text: ['Staff no. : ', item.ta4staffno]
                    },

                  ],
                },
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      //text: 'Unit: Seal Unit Metering', //008
                      text: 'Unit : SEAL, SBU METERING', //008
                    },

                  ],
                },
                '\n',
                {
                  //margin: [100, 0, 0, 0], //008
                  margin: [30, 0, 0, 0], //008                  
                  text: [
                    'Cc:',
                    item.ta4department
                  ]
                }

              ],

              images: {
                sign1: item.ta4signstaff,
                building: 'data:image/png;base64,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'

              },
              styles: {
                tableHeader: {
                  fontSize: 10,
                  margin: [30, 30, 0, 0],
                  bold: true,
                  alignment: 'center',
                },

                custData: {
                  bold: true,
                }
              },
              defaultStyle: {
                fontSize: 9
              }
            }
            break;
          }
          break;
        }
        case "formEvidenceCollect": {
          dd = {
            content: [
              {
                margin: [0, 20, 0, 0],
                alignment: 'right',
                image: 'building',
                width: 90
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: 'NOTIFICATION LETTER OF EVIDENCE COLLECTION', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', '', '', '', '', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Contract Account .: ', { text: item.ta4accountno, decoration: 'underline', decorationStyle: 'dotted' }],
                  },
                  {
                    text: ['Station Code: ', { text: item.station, decoration: 'underline', decorationStyle: 'dotted' }]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: [
                  'Customer Name: ', { text: item.ta4custname, decoration: 'underline', decorationStyle: 'dotted' }, '\n\n',
                  'I: ', { text: item.ta4staffname, decoration: 'underline', decorationStyle: 'dotted' }, '\n\n',
                  'Staff No.: ', { text: item.ta4staffno, decoration: 'underline', decorationStyle: 'dotted' }, ' claiming to have taken the following items:-\n',
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
                  'from the premises located at ',
                  { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted' }
                ]
              },
              {
                margin: [30, 0, 0, 0],

                columns: [
                  {
                    text: 'Staff Signature:\n',
                  },
                  {
                    text: 'Witness Signature:',
                  },
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    margin: [0, 0, 15, 0],
                    image: 'sign1',
                    width: 200,
                    height: 50,
                  },

                  {
                    margin: [30, 0, 0, 0],
                    image: 'sign2',
                    width: 200,
                    height: 50,
                  },

                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Name: ', '\n', { text: item.ta4staffname, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Name: ', '\n', { text: item.ta4witnessname, decoration: 'underline', decorationStyle: 'dotted' }]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Staff No.: ', { text: item.ta4staffno, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Address:', '\n', { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted' }]

                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: [
                  'Identification Card No: ', { text: item.ta4staffindenkard, decoration: 'underline', decorationStyle: 'dotted' }
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
                    text: ['Identification Card No: ', { text: item.ta4witnessidenkard, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                ]
              },
              '\n',

              {
                margin: [30, 0, 0, 0],
                text: [
                  ' Station: ', { text: item.ta4officezone, decoration: 'underline', decorationStyle: 'dotted' }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Date: ', { text: item.ta4datetime, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Date: ', { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted' }]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Time: ', { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Time: ', { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted' }],
                  }
                ]
              },

            ],

            images: {
              sign1: item.ta4signstaff,
              sign2: item.ta4signwitness,
              building: 'data:image/png;base64,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'

            },
            styles: {
              tableHeader: {
                fontSize: 10,
                margin: [30, 30, 0, 0],
                bold: true,
                alignment: 'center',
              },
            },
            defaultStyle: {
              fontSize: 9,
            }

          }

          break;
        }
        case "inspect&Test": {
          dd = {

            content: [
              {
                margin: [0, 20, 0, 0],
                alignment: 'right',
                image: 'building',
                width: 90
              },
              '\n',
              {
                margin: [30, 10, 0, 0],
                style: 'normalText',
                text: [
                  "Date ", { text: item.ta4datetime, decoration: 'underline', decorationStyle: 'dashed' },
                  '\n\n',
                  'To: ', item.ta4custname, '\n',
                ]
              },
              {
                margin: [30, 0, 0, 0],
                style: 'normalText',
                table: {
                  widths: ['*'],
                  headerRows: 1,
                  body:
                    item.tempAddress
                },
                layout: 'noBorders'
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                style: 'normalText',
                text: ['Dear valued TNB customer,']
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
                margin: [30, 0, 0, 0],
                style: 'normalText',
                text: [
                  'Please be informed that TNB is conducting inspections and testing of TNB meter installation at your premises to ensure it is working in good condition.\n\n Your kind cooperation during the inspection and testing process is much appreciated. For any enquiries, you may contact us at 1300-88-5454',
                  '\n\nThank you.'
                ],
              },
              {
                margin: [30, 20, 0, 0],
                alignment: 'center',
                style: 'normalText',
                bold: true,
                text: [
                  //'"POWERING THE NATION"\n',//008
                  //'\n“BETTER. BRIGHTER”\n' //008
                  '\n“BETTER WORLD. BRIGHTER LIVES”\n' //008

                ]
              },
              {
                alignment: 'justify',
                margin: [30, 0, 0, 0],
                style: 'normalText',
                text: ' Yours Sincerely,\n\n\n',
              },             
              {
                margin: [30, 0, 0, 0],
                image: 'sign1',
                width: 100,
                height: 50,
              },
              {
                margin: [30, 0, 0, 0],
                style: 'italicStyle',
                text: "This is an electronic-generated document. No signature is required."
              },
              '\n',
              /* 008
              {
                margin: [30, 0, 0, 0],
                style: 'normalText',
                text: "(o/b General manager/manager)"
              },
              */
              {
                alignment: 'justify',
                margin: [30, 0, 0, 0],
                style: 'normalText',
                text: [
                  item.staffNameCheck,
                  '\n',
                  item.ta4position,
                  //'\n',//008
                  // item.ta4department,
                  //{ text: 'SEAL Section', fontSize: 8 },//008
                  '\n',
                  //{ text: 'Metering Unit, Distribution Network Department', fontSize: 8 },
                  { text: 'SEAL, SBU Metering', fontSize: 8 }, //008
                  '\n',
                  //{ text: 'Distribution Division, TNB', fontSize: 8 }, //008
                  { text: 'Distribution Network Division, TNB', fontSize: 8 }, //008

                ]
              },
              {
                table: {
                  margin: [0, 0, 0, 0],
                  headerRows: 1,
                  body: [
                    [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' },
                    { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', '', '', '', '', '', '', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              {
                text: 'For TNB use', bold: true, decoration: 'underline', margin: [30, 0, 0, 0], style: 'normalText'
              },

              {
                margin: [30, 0, 0, 0],
                heights: [100, 50],
                style: 'normalText',
                table: {
                  body: [
                    [{
                      border: [true, true, true, true],
                      text: item.present,
                    },

                    {
                      border: [false, false, false, false],
                      text: 'Customer Present'
                    }
                    ],
                    [
                      {
                        border: [false, false, false, false],
                        text: '', colSpan: 2
                      }
                    ],
                    [
                      {
                        border: [true, true, true, true],
                        text: item.absent,
                      },

                      {
                        border: [false, false, false, false],
                        text: 'Customer Absent'
                      }
                    ],
                  ]
                }
              }, {
                margin: [30, 15, 0, 0],
                style: 'normalText',
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
                style: 'normalText',
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
              building: 'data:image/png;base64,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'
            },
            styles: {
              italicStyle: {
                //fontSize: 5, //008
                fontSize: 8, //008
                italics: true
              },
              normalText: {
                fontSize: 9,
              },
              tableHeader: {
                fontSize: 10,
                margin: [50, 30, 0, 0],
                bold: true,
                alignment: 'center',
              },
              defaultStyle: {
                fontSize: 9
              }
            }

          }
          break;
        }
        case "formB": {
          dd = {
            content: [
              {
                margin: [0, 20, 0, 0],
                alignment: 'right',
                image: 'building',
                width: 90
              },
              '\n',
              {
                margin: [30, 20, 30, 0],
                columns: [
                  {
                    text: ['Date: ', item.ta4datetime]
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
                    [{ text: "NOTIFICATION NOTICE OF CESSATION TEMPORARY INTERRUPTION OF ELECTRICITY SUPPLY FOR THE PURPOSE OF TESTING AND INSPECTIONS OF TNB'S METER INSTALLATION", style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
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
                text: [
                  '\n“BETTER BRIGHTER”\n',
                  '“TNB PRACTISES A NO GIFT POLICY”'
                ]
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
                table: {
                  widths: ['*'],
                  body: [[" "], [" "]]
                },
                layout: {
                  hLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 0 : 1;
                  },
                  vLineWidth: function (i, node) {
                    return 0;
                  },
                }
              },

              {
                margin: [30, 10, 0, 0],
                text: [" I hereby fully understand the contents of this notice and disagree that the electricity supply  to be  cessationed /temporarily interrupted for the above said purposes."]
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
                  "Identification Card No: ",
                  item.ta4witnessidenkard,
                  '\n\n',
                  "Date/Time: ",
                  item.date1
                ]
              },
              '\n',
              {
                pageBreak: 'before',
                margin: [100, 0, 0, 0],
                alignment: 'center',
                text: [
                  "LICENSEE SUPPLY REGULATIONS 1990\n\n",
                  "Form B\n\n",
                  "[sub-regulations 6A(2)]\n\n",
                  "MALAYSIA\n\n",
                  "STATE OF ",
                  optItem1.ta4statename,
                  '\n',
                  "ELECTRICITY SUPPLY ACT 1990"
                ]
              },
              {
                margin: [30, 20, 10, 0],
                lineHeight: 2,
                text: ["To: ", optItem1.ta4custname, '\n',
                ]
              },
              {
                margin: [30, 0, 0, 0],
                table: {
                  widths: ['*'],
                  headerRows: 1,
                  body:
                    optItem1.tempAddress
                },
                layout: 'noBorders'
              },
              '\n\n',
              {
                margin: [30, 0, 0, 0],
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
                  optItem1.ta4custaddress,
                  " shall be temporarily ceased/interrupted on ",
                  optItem1.ta4datetime,
                  ' from ',
                  optItem1.ta4starttime,
                  ' to ',
                  optItem1.ta4endtime,
                  ' for the purpose of ',
                  optItem1.ta4purpose
                ]
              },
              {
                margin: [30, 10, 20, 0],
                text: ['\nName of Licensee: TNB\n\n',
                  'Address: ',
                  optItem1.ta4officeaddress,
                  '\n\n',
                  'Telephone Number: ',
                  optItem1.ta4officephone,
                  '\n\n',
                  'Dated: ',
                  optItem1.ta4indatetime
                ]
              },
            ],
            images: {
              sign1: item.ta4signstaff,
              sign2: item.ta4signwitness,
              building: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAmCAYAAACMJGZuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH4gcZFjgjpTrGZwAAFMVJREFUaN7dmnm0XVWV7n/fXHufc/s03IQ0kEBAIBHQSIJi34uIVUonWkiplBRPn++N955N2SuUOsSWenZlL9giUthCaYmKlgVIT6IIhiYJ6fvc7py915zvj33SDfCfyBhV480x7r37jLvO2nN9azbfnGtpzbJRCunZdcS7Ax4XUALBnxf1/j5ijEHX4BOV7DKP0BAeu0IcfesW/n+QwuCvuhFX5qCtBgAd7GQ1eIJPFvg2E1dUoTRV5/yfvcjHDKwM78tB2+B+E58F/FEAC8CAHEGWaAN5v3EOtAVv8OBwhzdtMl1x/fQyn7m5+5+9xscQrOA4ASa+Dnw0oCiCev5+rrPzybMoDQSt7XU8ed7vtvz6DSNt/vdRQ7QtQKkA6kRYwAdycOQh3Tx61mbfEg2gcZD6/ZeSIqAQEMGkJEQULlizbBQAgXZnrAx1POKzBj/fdPIsKo+2Q4bmO0nUOdhKg4wCFBGEDtqr/8tJsedBPZcKVJdR19kSiVA3zKpQJfdPBSwV6YIcoUx0SyxyBFLgzTTWm6uHGXRVwFlXiNjPuJSisbdohkogC3IlZM0eFgF17oXRPeNdhDfjJ7YGw3PBM3jdzGMpGhV6kaR5Z0+dKvY+XvW3Bw3WI7a+Q0Ergi6ybngekD5YwxsNXgqZAGvJXISSFNU+IA5wtyzjvvJQ4bXv/beAqPeMDEL7VOhOBgseD9vWiU0TwYyRoL0LqnazaAmkIDKMLIQ8KRRGamUiQ2CNTZsTGSQREURA2GNnWfvLIQVsrGWG8oDFxV2Ptwuqwtgw5jC3wAb78WaxwbrxPzN5ZJ4ycU8w44jExA4jXJQDTnd3s6AZR4ncyizrgxtuTFjbGBuHgTk187eIaBdUIeqJinoMpi003BM+6UxtzJQjsHNdZnjuCHjJtGO2UU8F174CnvqPYnQJDMw0dq4XK76S2XIvHPWCgwZL9580WgmKBO9A+lBA0bJwgdfOO+rgAxmmBK0EO0ysA/oEGxO8XGJzDkpEFcFFVfBZYOsu+pZ8ZsYLNn192jPmj1v7BiISYhKYj9IXgZmEP7cxKw0h+x9EvhBYDPpriIeBm0AroP0iYheo9SMilmN2M63Wi+nWs4l8GeF/DdGP7C6wtyGuwwrw/AnCz0VaB/ZSpHWEi6oO/uXVB2VZe1xHza9IBLUHSxwuccCgDSjDzBzMCFAhhoueT+5Hzva6dMcKPVweQqU0CyITeT5BG9kW8A1EfikRhyP7V2RrGjfKJxPRQukCpKvwPBupQJM1tF5N+IsI7+D+dCo7hKi/hPvpSD8F3U7ERYhTQdeR6xOI/N+IHMjmIDua0DoijLI+KO631w0Dcm+lXhDUYotC7zDoB1xN5rzIYdSABJfUaFsQLcCtN0dvLmbVu/yHD3wUvSDuYOO3n4L8HmAWlk4hcNCHIRylGrNf4nVF0OqpcCqk3b3tW0FkwN4DrMSKe4h8Jp7PxP1UpI1Y6yK8O4fgZqJ6oEkSeivgqPgi+JuAY4EbkEQ+uPhlBuMBSBw76cFwUTA8UmjO9Pamw6a3PlyI9w8YFw8Yn5ToAEri5kHj86uGX0QVUQUihwiYS2OJUy2pyz3Alp9A+EJgFmg7rYH7IRb3MtUYkZ9L+BMIDm9sU78A+vH8qp6Od6DiucDRoG8ScXezu3EKRAFajVk/Sj+A+B5K78SKBRDnAT/F0i9745c07wwIPyiwiiT+w4MX18ErB4yTx+rM2M7oiPw/E/zGUX9XMRHOO3NwWM+q3jcVVMeOXbe0kt6ZI46QqD04LoAk7syynS897S0leXcFHNPz1QeY2u2gxU1m1EYsfRbZjZAvQIDSNwmfAH8JITBtIPxtDWWwt0IYEWAaAttM+HJydxbE54F3ANcT+Q298c/F62cSAdJiwiHkWHFwYBXircAJdXBYFSyJhvxYIb5QKE4qg4lwju8Gr6cB4soM1yqYXcEP6uAwwIkmsRdibQu9WYKQ1NvF43tc6h4kiFhKCIIFeP44ik8DC3rcaAWy7RAvAW0DPR14IdIGwr+KdCLSaUQ4li7F80cIvx4wZNux5Hj9RlAm/HKkQaTXgBaTWv2ETxLZOOvre+hgRgnCDRBmjqyhG1e+8gCwtGH5KCbmdZ0zcjANcX4OjjGgEKeAbgziyio4O4mdBTzNYaUHL3H4UY/BPJjErwV3tcTlHrG5K9OCx10O9Y6AOBL3GaRiLZ43Ef5E3IeBQAwBf0Q2QsQ0iJtJpcj5ORBbkO3A8zwsbQXdjdkIuToJokuyf4fiGCKW9xZ9A14XhB+HtJEYvJOialN3TyI8E9Wt5G5NOSRkQWsAHrgJ5p/QEN098t2/eXTLymCg9Zn4rIkM3O7wYxrv3mWKp9bO2b1Y9E8hrazdaQK+MFBpvE7wyxykkNzBWoTPnbyf9eVMCNZjaYDwUbpjWxg49D586kjQDqxYS3SN0BGEZ6w8hLLvYSa2/4SitRDPTySVDzL24N0MH3ko7sdiaTXjsYpDjxDjqztEfRfl8CqICTqCshLSbKwzl7PPXc93vr0F6CcNtImo8Tyf8KPoTkww//jbsaLG68VIc5Hdwyu+sw5CfOfcA0i2JeTuQYLUFhisFmQHPHhXHXzZG/e7ryU+trrr0n6kX6Kb0MYWQpBqDwy8IrG+mJ56gfx5eL0C95W0ho6iHn8lub4bry8hdyDHc8j1KjzfTe5+gs4YWHEmuXqQyN8j/A6GjvgE4S8C/xURn2a4b5ixh36M5wdBd1GNbyZ3zqCVQVxD+M2Ev5dvfa1F1LcS+Va8GiV3AP8G5F8Cv8bSIqIG+CrhP4d4dhPbPD0iG8aYM5ly5KDqzxXzuhMrTdwGkOGcOji6F9QvrYKdh5cayPtXNYEisLr5VOdQTHpw+IIPQROEAD+qUSAD8VoiFvUUWoFnCH87+G4idhN+PLkC4gVNvLNPIr2wIZ9xYi8G3oF3Po3nFwPXgN5D+ABefwxYSPihDW/z00nt50EMQawldx9CdhrhzyTiXsLbhC9kYifgC5uyKP5EOLgH53wTzrx8H1hz/7CVo27azmSZYyy1bFPfYLRN55biWsHaBA8V4u1djy9O5BDQaUkkqd3rvexFTsCCWzdz5K1baWq+XqpuOA5Al4hzkJb3ONSdKC2BeB6yzyC7GziO1F8AP2n4kl8AnEdq7YY4sSH86sPzGUibKPpew/qVlyD9EWIe0nJgOqgiYi6eL+y9+0G8hoj3Aaux8vO9ZLOIwUNmAYciJpEebpIRwZWvgu+dvy9m7Xnor41V3TEvDB1eDB5aiKuTuAmYFKzpS3p9Dw8BU3Xwdz3mPh7E1gjIsZ/JWaIhnwENRwKzrxD+GrxegAzMVuP+rp6rru6lexHdpRT9v8W7zyDXH8Lz+UALmNPrVmwABoAuuZrJvBNOwetjkVb2slo/sp8BQ0R+WQ/gWykHl+HVcuA6wpuMJzuayEc01EarKQe20J5hbP59s5aXXw7/cv6BYBmyRe1Bj+D4DL/tes/JDswTe8VpeHAS3whpQ4B1su9jexGiKJyiVdIZX9TjUF8mYin4yRAPESwBP6/XiP1U47UOstdRT7yCiM8BDyCeDkwRcRiiQ0rfJ3MekR8PsQIoetTk/URM62l9B9IfCD+lt2Gr8fodPYCeD/GCnuUfD1rV6Oxz6Y5voJr4EP3TL+WcbyXyvtJoL+8PiIjAiXsMvpLEA0msTOJGid/u/2Pit4W4qRT/Z9D8f81JNQXu2h9WFeAB3c50ZDWyPzI5dgeWPo8VHVTcBDwbWRdLnyJiIWafxtI4qAv8O8TbgfNQ+r/IvoFZoPQfpKE/YMUrseJ60E6wu7DiXKTvIluAWQB/IPgWVqzE0hqs6EdpMVbcgezpWHEqVj6EUgYtxGwLso0QLdDaxkQE39tXcB9gNPHsUeg3tu10zZwRrN8Y00z2V6B2Y0x7EiAR4T8S2hiSdXL4nubxwtt67ehzr2rSQrghb+G187ufd3nWGUY12aI7FUROlH0Z6hprZTwnIlpkr/juq2rOumIWMmd8+1YGR0uMAlnNVKemBbQeB3lDi+kzu4QHW9aIol1iZpTDXXatd4ZGW3R3i+yi3Z8ZPNSZ3J6ZdiJM/Klg7GGR+m3v8qwMulMVKTVuuG0n/PT1B4K1Ztnovs6BKAm6AZfm4C0BtXou2yu4UxLfFToHSPP7lNdOOR2vOPq2nQf661lf7c1qkCsoB8UtXwtOPJte3OrpYUbgpBTIhHeFtb2XQZs6PSKoujA0E7rj1nNZJ0ICmz++Pu8uBxnrn0le/Xs4fLFoDwXlAOxcA6lkQDUT0WfHTjzE1Ss+4TtaAzztbz5Ofu/LsHB0U5A+djm5YfUwPARfOuNAsFY9aSZtM/oLMVmT1MTrC2v4TAQT+411wUghLpb0XiDlOvKC2/cdcNx/0kwWPf56aB3Gy9Z+kFv6FmpKJa+P38SHW6dR5q46g8vjPQ9frKHo6C3X/8BjaanrBk7QaUd/LQ7ddUNsTNOaNrIEVgTuNL1XyNeeH4zD9accbxPWtiPyDkaqHbQUMXf51jyw6cuqVMYrxm/mttYCtb3L7QMnhOWdEqK+6tUx9QRx/BO/wKrJQeEVBS2Ujosq37mHbzdt6avOe3Q33CPbnjLKjJGAYVi3WnO9aZ3sTxHy9CI25CDXIQ65uQFq7bJRIhqDLo3kIfUZnozoZtQSXppY3ynwSIQcSIzoYboxvPf9R9y+g8dCVj9x9gGf63bQ50GSyBGDSQyU0uYNVc2gWastLc5hd0FEjmCzd7EeRIWKR4J1/5NmMq+vjRPs6NbqSxYB1B7MSiV2yzqeMx2+c+Rsre5MhSFGi5IFtx146nzjkunkaDZoR9cZKEQARw6UFCaSwGG4FNOBNTmYEzAiuBfQZPZYdPu2RwDw0LJR/jTWZaRMmttOiwJOLMTsKWd6IbZJfEHIIsL7zciQuhG0pdx1V5KSoHb4O2DA4J9yBAEnm3hb23SmwDoeeOCVgnYTKx79nGr1stG9adJBHvsG7uESInwv7ZwaZOGK1axdNipBeNCfjBfVwfKWNFVHzDexPknvF6TefHUm3mRovuAfMvEeoDb0wSAKoTyWm8OG4cKSE2HIM2HW5NmFoI/UEU9I8BHEqRG6KolvC0oJt6ZseyawqBBfjebdEYFn4rIcfAm4q5TIxGsFGPoKoqydSs0pkfaQxUdt7Cy45QAr2UvD/7xsBcAECeHiUOB5RizPEZ8pTYs84hoD6kBJih73n+9wTa8IG4ngi1lBQl6IKBUqk8juTa1qUIV7lU2GHkoWf5/ENQ4XtNCtWXHfxm6djKhmDJg9MNZlYbvvN4V0y0TttE39c0bmjq3bvXFRgqnBwu4iKOuIyoPDPfiWE4hQS3ZYjTbkrDolTgpY+pefD+0n8363JSY9VEU82I34UMA0wbtqj205eMJEeJ/L61nzZuRJ936B/Xxz96YqmCbozmm179nVrakjBnMwZ0F/GZeP12Gms8y0NCH6lGwgYX0pSOIZggUBV3QiPufw8RllsWxOu3Wy1cWVC1r9pxeyd48O5Iky2VMzevjhXRteYnBMhqUTtb95Ikc16czwYEkhnpak+aCPVHDtlDPNUnxdxNkRcX76yyHaJ2tOHqWUkklhcA6wKMNrux6/KKV3CdYb+uddu6Z+bTBd4qULB9K9giUSz5ryvKM/JSF+EmjuWO2dJ5T2XsQymlbSjUBqmWisU39v4v1JuqYQLwfuBJ4vODqgI+hIjE5V6X6Dd2coI+KDDv8dOAu4qm1aD/wwYKIQ387wRqGXQbyeJoaeHPBxk9Y8ZpZ1/9JRdlViyIh+A5NONLigFHcPF3ZBEr9OsosjGC/EUhNXe7C5JS4QXBbBKocdOeLLCY3vyv6+gDMyXG/oC0I/FpAjfNIjdzxmeMRAJ7PS4B8kpk3m+KZJsyvnozn4sEkFcEvAWTm4L4nv7nZNGixO4gqJW7oe6w2uLKQvrNydf5+DlwVxSUtaV4jTJa6WWAVx9cE1ox9F6mKK4ejTWMaBwxzaJqKQLiP4fje4KBGr29Kbm5qbn5n43Djp3gF5bcSlneB5wJwEF05LOj7QDCK+nyN2J+mwgNlDyTaNNyXoQg+eM1DozcCvIvSLduLUIDYXpi0DBpPOvCq4O4lzgOO7zusOKXS6E/9maCLgwmRcR1CE2PTsJ49W63+//RsJjqmDBwxNh1jhoREUl/7FYK04bjrT2876yYLBPixEjuBxgtMLtCqCjxbSmkRcZOhBF2dXzj+3TLny2Ci8FQpm3Xz12PqTz3hQ6FcmlnnwMMTO0ZbtHquDHJwGbOhE/KAbUfRJr5G4POCykRlpbMuWTJImA34GMOEMJOIbCb9X2L2SLk4RqxLcq+DaiQj1mZ6v4JeT7v86Javq32+n33ivgTnR7UvpF9srj1AUCt7zF11x+eNJM5hdNAX/RA6zlGKiU/f1F/aBIK67d6L+6QlDpWb2l2ybqAYdluzOfteRI62p9burmXNK27YpYzsrL44Z7utum5rCZK3CqLd1ukEolUZNwLzbtnPfSTMoGxKTSmxaq4htpcG2KbHoti2sWz4qQxGwsBAnCn5YRSB0DPDiUlwmsI1d98V3NBn8thNGWDp/IXjm/q0bWyNJ7YByMjMEDJTGRJ9pdfw5nvVYy5al05lMZe8+TLTClNqSFxbtHGFNL0xl9E7IA4rsYVmEB+2IMBNlAmubNddDhEMMC4UgBaQ6aNfBBMTpuSnR7jAxbtKFbfGg4M4qYnrHKeugNZAo2pKHsMkcRcexoUJVS9QTOXIdeMu4vmW6szroA7T9LOuQVEgiuhFPqpxn1Q5tw9qmlgn3QN5cMiqm3MsavAi8BuRkmsVSCu9dsXEHyQgFVE1hnwNwVOWmkM/WHNllQe4RUO91bbfVwWyJ7lSO64YKvQ1irdDXAqYnacIUFRGdOjQloltI3SR1CU3t6MrbBgU1C2/buv9y/S+yrPuWzmC0XUoQE9mP8GBGxxkvRKdlVIZqU1Qm1R7KuyrPXfP6hs2T+Rlz27S6xtGPUtIcrKxbPrqn/J1doHcDycQDo+2hj/yus5vDQ8z93eZHfC9eeDhs3t1c6xtuU025NnddNagtomVyD/h/r/vtgBLQtOUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDctMjVUMjI6NTY6MzUtMDQ6MDBflk64AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA3LTI1VDIyOjU2OjM1LTA0OjAwLsv2BAAAAABJRU5ErkJggg=='

            },
            styles: {
              title: {
                fontSize: 10,
                bold: true
              },
              textMargin: {
                margin: [30, 50, 80, 0]
              }, tableHeader: {
                fontSize: 10,
                bold: true,
                alignment: 'center'
              }
            }, defaultStyle: {
              fontSize: 9,
            }

          }// End for Form B 
          break;
        }

        //Bahasa Language select
        case 'tanpa_prejudis': {
          dd = {
            content: [
              {
                margin: [0, 20, 0, 0],
                alignment: 'right',
                image: 'building',
                width: 90
              },
              '\n',
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
                  { text: item.ta4officeaddress, decoration: 'underline', decorationStyle: 'dotted' },
                  " after three (3) working days from the inspection date for explanation session without prejudice regarding to the actions will be taken by TNB. You are also encouraged to bring any proof and supporting documents for this session."
                ]
              },
              '\n\n',
              {
                margin: [30, 0, 0, 20],
                text: [
                  "For any enquiries, you may contact TNB at ",
                  { text: item.ta4officephone, decoration: 'underline', decorationStyle: 'dotted' }
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
                fontSize: 9,
                decoration: 'underline',
                text: "This notice is computer generated and does not require a signature "
              },
            ],

            images: {
              building: 'data:image/png;base64,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'
            },

            styles: {
              title: {
                fontSize: 10,
                bold: true
              },
              textMargin: {
                margin: [0, 50, 80, 0]
              }
            },
            defaultStyle: {
              fontSize: 9,
            }


          }
          break;
        }
        case "notisGanggungan": {
          dd = {
            content: [
              {
                margin: [0, 20, 0, 0],
                alignment: 'right',
                image: 'building',
                width: 90
              },
              '\n',
              {
                margin: [30, 20, 30, 0],
                columns: [
                  {
                    text: ['Date: ', item.ta4datetime]
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
                    [{ text: "NOTIFICATION NOTICE OF CESSATION, TEMPORARY INTERRUPTION OF ELECTRICITY SUPPLY FOR THE PURPOSE OF TESTING AND INSPECTIONS OF TNB'S METER INSTALLATION", style: 'tableHeader' }],
                    [''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              {
                margin: [30, 10, 0, 0],
                text: ["Please be informed that TNB is conducting testing and inspection of TNB's meter installation at your premises to ensure that it works properly. ",
                  '\n\n',
                  , "In view of the same, please be informed that the electricity supply at your premises will be cessationed/temporarily interupted on ",
                  { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData'  }, //008
                  ' from ',
                  { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData'  }, //008
                  ' until ',
                  { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData'  }, //008
                ]
              },
              {
                margin: [30, 20, 0, 0],
                text: [" Your kind cooperation is much appreciated.",
                  '\nThank you.\n']
              },

              {
                margin: [30, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: [
                  //'\n“POWERING THE NATION”\n',  //008
                  //'\n“BETTER BRIGHTER”' //008
                  '\n“BETTER WORLD. BRIGHTER LIVES”\n' //008
                ]
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
                table: {
                  widths: ['*'],
                  body: [[" "], [" "]]
                },
                layout: {
                  hLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 0 : 1;
                  },
                  vLineWidth: function (i, node) {
                    return 0;
                  },
                }
              },
              {
                margin: [30, 10, 0, 0],
                text: [" I hereby fully understand the contents of this notice and agree that the electricity supply  to be  cessationed /temporarily interrupted for the above said purposes."]
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
                  "Identification Card No: ",
                  item.ta4witnessidenkard,
                  '\n\n',
                  "Date/Time: ",
                  item.date1
                ]
              },
            ],


            images: {
              sign1: item.ta4signstaff,
              sign2: item.ta4signwitness,
              building: 'data:image/png;base64,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'

            },
            styles: {
              title: {
                fontSize: 10,
                bold: true,
                alignment: 'center',
              },
              textMargin: {
                margin: [30, 50, 80, 0]
              }, tableHeader: {
                fontSize: 10,
                bold: true,
                alignment: 'center'
              }, custData: {
                bold: true
              }
            },
            defaultStyle: {
              fontSize: 9,
            }

          } // End Notice Cessation Temporary
          break;
        }
        case "borangA": {
          dd = {
            content: [
              {
                margin: [0, 20, 0, 0],
                alignment: 'right',
                image: 'building',
                width: 90
              },
              '\n',
              {
                margin: [0, 0, 0, 15],
                alignment: 'center',
                text: ['SCHEDULE – Form A\n\n', '(subregulation 6A(1))\n\n', 'MALAYSIA', '\n\nState  ', { text: item.ta4statename, decoration: 'underline', decorationStyle: 'dotted' }, '\n\nELECTRICITY SUPPLY ACT 1990']
              },
              {
                style: 'textMargin',
                text: ['To: ', item.ta4custname, '\n\n', item.ta4custaddress, '\n', item.station, ' - ', item.ta4accountno, '\n\n\n', { text: 'Sir/Madam/Messrs', bold: true }]
              },
              '\n',
              {
                style: 'title',
                margin: [0, 0, 0, 0],
                text: ['NOTICE OF DISCONNECTION OF ELECTRICITY SUPPLY UNDER SUBSECTION 38(1) ELECTRICITY SUPPLY ACT 1990.']
              },

              {
                margin: [0, 10, 15, 0],
                text: ['Please be informed that on  ', { text: item.datetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, ' an inspection has been done to our installations at your premise. From the inspection, we noticed that the system had been tampered or modified in the following circumstances below:'
                  , '\n\n'
                  , { text: item.ta4anamoly, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                  '\n\n Based on the evidence above, we are of the opinion that an offence had been committed under the Electricity Supply Act 1990 ("Act") as follows:']
              },

              {
                margin: [0, 0, 15, 0],
                text: '•	Subsection 37(1)*'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase2
                    }, {
                      text: 'tampers with or adjusts any installation or part thereof or manufactures or imports or sells any ', border: [false, false, false, false]
                    }],
                    [{
                      border: [false, false, false, false],
                      text: ''
                    }, {
                      text: 'equipment so as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other property:.', border: [false, false, false, false]
                    }],


                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subsection 37(1)*'
              },
              {
                margin: [0, 0, 15, 0],
                text: '- in any manner dishonestly:-'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase3
                    }, {
                      text: '(a)	abstracts energy;', border: [false, false, false, false]
                    }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase4
                      },
                      {
                        border: [false, false, false, false],
                        text: '(b)	consumes energy;'
                      }
                    ], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase5
                      },
                      {
                        border: [false, false, false, false],
                        text: '(c)	uses energy;'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase6
                      },
                      {
                        border: [false, false, false, false],
                        text: '(d)  alters the index of any meter or other instrument used on or in connection with any installation '
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'of any supply authority or any licensed installation for recording the output or consumption of energy; or'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase7
                      },
                      {
                        border: [false, false, false, false],
                        text: '(e)  prevents any such meter or instrument from duly recording the output or consumption of'
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'energy.'
                      }],

                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subsection 37(14)*'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase8
                      },
                      {
                        border: [false, false, false, false],
                        text: 'damages any meter or other instrument used on or in connection with any licensed installation, for'
                      }],
                    [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'recording the output or consumption of energy.'
                      }]
                  ]
                }
              },
              {
                pageBreak: 'before',
                margin: [0, 0, 0, 0],
                text: ''
              },
              {
                margin: [0, 0, 0, 0],
                text: ['Please note that under subsection 38 (1) of the Act, you are notified you are hereby given a notice that the  electricity in the above premise shall  be disconnected on '
                  , { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }
                  , '\n\n Please also take note that we will claim any loss and expenses incurred by us due to the offences  done as above-mentioned. We will issue a statement of claims to your goodselves in due course.']
              },
              '\n\n',
              {
                margin: [0, 0, 15, 0],
                text: ['Name of License Holder: TENAGA NASIONAL BERHAD ',
                  '\n\n',
                  'Address: ',
                  '\n\n',
                  item.ta4officeaddress,
                  '\n\n',
                  , 'Date: ',
                  { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }
                ],

              },
              {
                table: {
                  widths: ['*'],
                  body: [[" "], [" "]]
                },
                layout: {
                  hLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 0 : 1;
                  },
                  vLineWidth: function (i, node) {
                    return 0;
                  },
                }
              },
              {
                text: ['*  Please tick / for the relevant offence/offences.']
              },
              {
                margin: [0, 30, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['Delivery Notice of Form A\n\n'
                ],
              },
              {
                margin: [30, 0, 0, 0],
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
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
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
                  body: [
                    /*   [
                        'Name & Notice Deliver Signature',
                        optItem1.deliverName
                      ] */

                    [
                      {
                        border: [true, false, true, true],
                        text: ['Delivery Name']
                      }, {
                        border: [true, false, true, true],
                        text: [optItem1.ta4staffname]
                      }
                    ],
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
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
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
                /*   pageBreak: 'before',
                  margin: [50, 10, 0, 0], */
                margin: [50, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['Supply Reconnection A\n\n']
              },
              {
                margin: [30, 0, 0, 0],
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
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
              sign4: optItem3.ta4signstaff,
              building: 'data:image/png;base64,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'

            },
            styles: {
              title: {
                fontSize: 10,
                bold: true
              },
              textMargin: {
                margin: [0, 50, 80, 0]
              },
              tableStyle: {
                fontSize: 5
              },
              custData: {
                bold: true
              }
            },
            defaultStyle: {
              fontSize: 9
            }

          } // end case for Form A staff
          break;
        }
        case "borangACopy": {
          dd = {
            content: [
              {
                table: {
                  widths: [200, 170, '*'],
                  body: [
                    [{
                      border: [false, false, false, false],
                      image: 'building',
                      width: 90
                    }, {
                      text: [{ text: 'Tenaga Nasional Berhad,', bold: true, fontSize: 9 }, { text: '(200866-w) ', fontSize: 6 }, { text: '\n No 19 129,Jalan Bangsar,59200 Kuala Lumpur', fontSize: 8 },], border: [false, false, false, false],
                    }, {
                      text: [{ text: 'Tel:+6 03 2296 5566 \n Fax:+6 03 2283 3686 ', fontSize: 6 }, { text: '\n www.tnb.com.my', bold: true, fontSize: 6 }], border: [true, false, false, false],
                    }],
                  ]
                }
                /*    margin: [30, 20, 0, 0],
                   image: 'building',
                   width: 90 */
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                alignment: 'center',
                text: ['SCHEDULE – Form A\n\n', '(subregulation 6A(1))\n\n', 'MALAYSIA', '\n\nState  ', { text: item.ta4statename, decoration: 'underline', decorationStyle: 'dotted' }, '\n\nELECTRICITY SUPPLY ACT 1990']
              },
              {
                style: 'textMargin',
                text: ['To: ', item.ta4custname, '\n\n', item.ta4custaddress, '\n', item.station, ' - ', item.ta4accountno, '\n\n\n', { text: 'Sir/Madam/Messrs,', bold: true }]
              },
              {
                style: 'title',
                margin: [0, 0, 0, 0],
                text: ['NOTICE OF DISCONNECTION OF ELECTRICITY SUPPLY UNDER SUBSECTION 38(1) ELECTRICITY SUPPLY ACT 1990.']
              },

              {
                margin: [0, 10, 15, 0],
                text: ['Please be informed that on  ', { text: item.datetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, ' an inspection has been done to our installations at your premise. From the inspection, we noticed that the system had been tampered or modified in the following circumstances below:'
                  , '\n\n'
                  , { text: item.ta4anamoly, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                  '\n\n Based on the evidence above, we are of the opinion that an offence had been committed under the Electricity Supply Act 1990 ("Act") as follows:']
              },
              {
                margin: [0, 0, 15, 0],
                text: '•	Subsection 37(1)*'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase2
                    }, {
                      text: 'tampers with or adjusts any installation or part thereof or manufactures or imports or sells any ', border: [false, false, false, false]
                    }],
                    [{
                      border: [false, false, false, false],
                      text: ''
                    }, {
                      text: 'equipment so as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other property:.', border: [false, false, false, false]
                    }],


                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subsection 37(1)*'
              },
              {
                margin: [0, 0, 15, 0],
                text: '- in any manner dishonestly:-'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase3
                    }, {
                      text: '(a)	abstracts energy;', border: [false, false, false, false]
                    }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase4
                      },
                      {
                        border: [false, false, false, false],
                        text: '(b)	consumes energy;'
                      }
                    ], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase5
                      },
                      {
                        border: [false, false, false, false],
                        text: '(c)	uses energy;'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase6
                      },
                      {
                        border: [false, false, false, false],
                        text: '(d)  alters the index of any meter or other instrument used on or in connection with any installation '
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'of any supply authority or any licensed installation for recording the output or consumption of energy; or'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase7
                      },
                      {
                        border: [false, false, false, false],
                        text: '(e)  prevents any such meter or instrument from duly recording the output or consumption of'
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'energy.'
                      }],

                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subsection 37(14)*'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase8
                      },
                      {
                        border: [false, false, false, false],
                        text: 'damages any meter or other instrument used on or in connection with any licensed installation, for'
                      }],
                    [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'recording the output or consumption of energy.'
                      }]
                  ]
                }
              },
              /*               {
                              margin: [0, 0, 15, 0],
                              text: '•	Subsection 37(1)*'
                            },
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase2
                                },
                                {
                                  text: 'tampers with or adjusts any installation or part thereof or manufactures or imports orsells any equipment so as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other property:.'
                                }
                              ]
                            },
                            '\n',
                            {
                              margin: [0, 0, 15, 0],
                              text: '•	Subsection 37(3)*'
                            },
                            '\n',
                            {
                              margin: [20, 0, 15, 0],
                              text: '- in any manner dishonestly:-'
                            },
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase3
                                },
                                {
                                  text: '(a)	abstracts energy;'
                                }
                              ]
                            },
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase4
                                },
                                {
                                  text: '(b)	consumes energy;'
                                }
                              ]
                            },
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase5
                                },
                                {
                                  text: '(c)	uses energy;'
                                }
                              ]
                            },
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase6
                                },
                                {
                                  text: '(d)  alters the index of any meter or other instrument used on or in connection with any installation of any supply authority or any licensed installation for recording the output or consumption of energy; or'
                                }
                              ]
                            },
              
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase7
                                },
                                {
                                  text: '(e)  prevents any such meter or instrument from duly recording the output or consumption of energy.'
                                }
                              ]
                            },
                            '\n',
                            {
                              margin: [0, 0, 15, 0],
                              text: '•	Subsection 37(14)*'
                            },
                            '\n',
                            {
                              columns: [
                                {
                                  width: 30,
                                  text: item.subsectionBase8
                                },
                                {
                                  text: 'damages any meter or other instrument used on or in connection with any licensed installation, for recording the output or consumption of energy.'
                                }
                              ]
                            },
               */
              {
                pageBreak: 'before',
                margin: [0, 0, 0, 0],
                text: ''
              },
              {
                margin: [0, 50, 0, 0],
                text: ['Please note that under subsection 38 (1) of the Act, you are notified you are hereby given a notice that the  electricity in the above premise shall  be disconnected on '                  
                  , { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, '.'
                  , '\n\n Please also take note that we will claim any loss and expenses incurred by us due to the offences  done as above-mentioned. We will issue a statement of claims to your goodselves in due course.']
              },
              '\n\n',
              {
                margin: [0, 0, 15, 0],
                text: ['Name of License Holder: TENAGA NASIONAL BERHAD ',
                  '\n\n',
                  'Address: ',
                  '\n\n',
                  item.ta4officeaddress,
                  '\n\n',
                  , 'Date: ',
                  { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }
                ],

              },
              {
                table: {
                  widths: ['*'],
                  body: [[" "], [" "]]
                },
                layout: {
                  hLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 0 : 1;
                  },
                  vLineWidth: function (i, node) {
                    return 0;
                  },
                }
              },
              {
                text: ['*  Please tick / for the relevant offence/offences.']
              },

            ],
            images: {
              building: 'data:image/png;base64,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'
            },
            styles: {
              title: {
                fontSize: 10,
                bold: true
              },
              textMargin: {
                margin: [0, 50, 80, 0]
              },
              custData: {
                bold: true
              }
            },
            defaultStyle: {
              fontSize: 9
            }

          }
          break;
        }
        case "pepasanganMeter": {
          if (optItem1 === 'Copperate') {
            dd = {
              content: [
                {
                  margin: [0, 20, 0, 0],
                  alignment: 'right',
                  image: 'building',
                  width: 90
                },
                '\n',
                {
                  margin: [30, 20, 30, 0],
                  columns: [
                    {
                      width: 350,
                      //text: 'Our Ref. : TNB (B) DNET/METER/SEAL', //008
                      text: ['Our Ref. : TNB (B) DNET/METER/SEAL/', item.ta4accountno ] //008
                    },
                    {
                      width: '*',
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
                    widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                    headerRows: 1,
                    body: [
                      [{}, {}, { text: 'NOTICE OF TNB METER INSTALLATION INSPECTION', style: 'tableHeader' }, {}, {}, {}],
                      ['', '', '', '', '', ''],
                    ]
                  },
                  layout: 'lightHorizontalLines'
                },
                {
                  margin: [30, 20, 20, 0],
                  text: ["Please be informed we have conducted inspections and testing of meter installation that records the usage of electricity to the  premises at  ",
                    { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    ' with Contract Account No. ', { text: item.ta4accountno, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, , { text: ' on ' },
                    { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    ' at ',
                    { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    '\n\n For your information, evidence bag serial number is ', { text: item.ta4serialNum, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    '\n\n',
                    "The inspection results show that the meter does not record actual electricity consumption readings as has been explained previously to you. Please be informed that TNB will claim the underbill charge from you.",
                    //'\n\n For any enquiries, you may contact us at ',
                    //'',
                    //item.ta4officeaddress,
                    //',',
                    //'(Tel No :',
                    '\n\n You are invited to come to the ',{ text: 'nearest Kedai Tenaga', style:'custData' },', and please state the serial number of evidence bag for further information, after ',{ text: '14 days',style:'custData' },' from the date of the above case.',
                    '\n\n For any enquiries, you may contact us at ',
                    '',                    
                    {text: 'TNB Careline One Stop Enquiry Centre', style: 'custData' },', (No. Tel : ', 
                    { text: item.ta4officephone, style: 'custData' },
                    ') for further action.',
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
                      text: 'Accepted By (T/T):',

                    },
                  ]
                },
                '\n',
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      margin: [0, 0, 15, 0],
                      image: 'sign1',
                      width: 200,
                      height: 50,
                    },

                    {
                      margin: [30, 0, 0, 0],
                      image: 'sign2',
                      width: 200,
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
                      //text: 'Unit: Seal Unit Metering', //008
                      text: 'Unit : SEAL, SBU METERING', //008
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
                  //margin: [100, 0, 0, 0], //008
                  margin: [30, 0, 0, 0], //008                  
                  text: [
                    'Cc:',
                    item.ta4department
                  ]
                }

              ],

              images: {
                sign1: item.ta4signstaff,
                sign2: item.ta4signwitness,
                building: 'data:image/png;base64,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'

              },
              styles: {
                tableHeader: {
                  fontSize: 10,
                  margin: [30, 30, 0, 0],
                  bold: true,
                  alignment: 'center',
                },
                custData: {
                  bold: true,
                }
              },
              defaultStyle: {
                fontSize: 9
              }
            }
            break;
          } else if (optItem1 === 'NotCopperate') {
            dd = {
              content: [
                {
                  margin: [0, 20, 0, 0],
                  alignment: 'right',
                  image: 'building',
                  width: 90
                },
                '\n',
                {
                  margin: [30, 20, 30, 0],
                  columns: [
                    {
                      width: 350,
                      //text: 'Our Ref. : TNB (B) DNET/METER/SEAL', //008
                      text: ['Our Ref. : TNB (B) DNET/METER/SEAL/', item.ta4accountno ] //008
                    },
                    {
                      width: '*',
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
                    widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                    headerRows: 1,
                    body: [
                      [{}, {}, { text: 'NOTICE OF TNB METER INSTALLATION INSPECTION', style: 'tableHeader' }, {}, {}, {}],
                      ['', '', '', '', '', ''],
                    ]
                  },
                  layout: 'lightHorizontalLines'
                },
                {
                  margin: [30, 20, 20, 0],
                  text: ["Please be informed we have conducted inspections and testing of meter installation that records the usage of electricity to the  premises at  ",
                    { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    ' with Contract Account No. ', { text: item.ta4accountno, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, { text: ' on ' },
                    { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    ' at ',
                    { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    '\n\n',
                    "The inspection results show that the meter does not record actual electricity consumption readings as has been explained previously to you. Please be informed that TNB will claim the underbill charge from you.",
                    '\n\n For your information, evidence bag serial number is ', { text: item.ta4serialNum, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    '\n\n You are invited to come to the ',{ text: 'nearest Kedai Tenaga', style:'custData' },', and please state the serial number of evidence bag for further information, after ',{ text: '14 days',style:'custData' },' from the date of the above case.',
                    '\n\n For any enquiries, you may contact us at ',
                    '',                    
                    {text: 'TNB Careline One Stop Enquiry Centre', style: 'custData' },', (No. Tel : ', 
                    { text: item.ta4officephone, style: 'custData' },
                    ') for further action.',
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
                    }
                  ]
                },
                '\n',
                {
                  margin: [30, 0, 30, 0],
                  columns: [
                    {
                      image: 'sign1',
                      width: 100,
                      height: 50,
                    }
                  ]
                },
                '\n',
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      text: ['Examiner Name: ', item.ta4staffname]
                    },

                  ],
                },
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      text: ['Staff no. : ', item.ta4staffno]
                    },

                  ],
                },
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      //text: 'Unit: Seal Unit Metering', //008
                      text: 'Unit : SEAL, SBU METERING', //008
                    },

                  ],
                },
                '\n',
                {
                  //margin: [100, 0, 0, 0], //008
                  margin: [30, 0, 0, 0],//008
                  text: [
                    'Cc:',
                    item.ta4department
                  ]
                }

              ],

              images: {
                sign1: item.ta4signstaff,
                building: 'data:image/png;base64,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'

              },
              styles: {
                tableHeader: {
                  fontSize: 10,
                  margin: [30, 30, 0, 0],
                  bold: true,
                  alignment: 'center',
                },
                custData: {
                  bold: true,
                }
              },
              defaultStyle: {
                fontSize: 9
              }
            }
            break;
          }
        }
        case "borangBukit": {
          dd = {
            content: [
              {
                margin: [0, 20, 0, 0],
                alignment: 'right',
                image: 'building',
                width: 90
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: 'NOTIFICATION LETTER OF EVIDENCE COLLECTION', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', '', '', '', '', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Contract Account .: ', { text: item.ta4accountno, decoration: 'underline', decorationStyle: 'dotted' }],
                  },
                  {
                    text: ['Station Code: ', { text: item.station, decoration: 'underline', decorationStyle: 'dotted' }]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: [
                  'Customer Name: ', { text: item.ta4custname, decoration: 'underline', decorationStyle: 'dotted' }, '\n\n',
                  'I: ', { text: item.ta4staffname, decoration: 'underline', decorationStyle: 'dotted' }, '\n\n',
                  'Staff No.: ', { text: item.ta4staffno, decoration: 'underline', decorationStyle: 'dotted' }, ' claiming to have taken the following items:-\n',
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
                  'from the premises located at ',
                  { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted' }
                ]
              },
              {
                margin: [30, 0, 0, 0],

                columns: [
                  {
                    text: 'Staff Signature:\n',
                  },
                  {
                    text: 'Witness Signature:',
                  },
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    margin: [0, 0, 15, 0],
                    image: 'sign1',
                    width: 200,
                    height: 50,
                  },

                  {
                    margin: [30, 0, 0, 0],
                    image: 'sign2',
                    width: 200,
                    height: 50,
                  },

                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Name: ', '\n', { text: item.ta4staffname, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Name: ', '\n', { text: item.ta4witnessname, decoration: 'underline', decorationStyle: 'dotted' }]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Staff No.: ', { text: item.ta4staffno, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Address:', '\n', { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted' }]

                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: [
                  'Identification Card No: ', { text: item.ta4staffindenkard, decoration: 'underline', decorationStyle: 'dotted' }
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
                    text: ['Identification Card No: ', { text: item.ta4witnessidenkard, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                ]
              },
              '\n',

              {
                margin: [30, 0, 0, 0],
                text: [
                  ' Station: ', { text: item.ta4officezone, decoration: 'underline', decorationStyle: 'dotted' }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Date: ', { text: item.ta4datetime, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Date: ', { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted' }]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Time: ', { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Time: ', { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted' }],
                  }
                ]
              },

            ],

            images: {
              sign1: item.ta4signstaff,
              sign2: item.ta4signwitness,
              building: 'data:image/png;base64,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'

            },
            styles: {
              tableHeader: {
                fontSize: 10,
                margin: [30, 30, 0, 0],
                bold: true,
                alignment: 'center',
              },
            },
            defaultStyle: {
              fontSize: 9,
            }

          }

          break;
        }
        case "pengujian_pemeriksaan": {
          dd = {

            content: [
              {
                margin: [0, 20, 0, 0],
                alignment: 'right',
                image: 'building',
                width: 90
              },
              '\n',
              {
                margin: [30, 10, 0, 0],
                style: 'normalText',
                text: [
                  "Date ", { text: item.ta4datetime, decoration: 'underline', decorationStyle: 'dashed' },
                  '\n\n',
                  'To: ', item.ta4custname, '\n',
                ]
              },
              {
                margin: [30, 0, 0, 0],
                style: 'normalText',
                table: {
                  widths: ['*'],
                  headerRows: 1,
                  body:
                    item.tempAddress
                },
                layout: 'noBorders'
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                style: 'normalText',
                text: ['Dear valued TNB customer,']
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
                margin: [30, 0, 0, 0],
                style: 'normalText',
                text: [
                  'Please be informed that TNB is conducting inspections and testing of TNB meter installation at your premises to ensure it is working in good condition.\n\n Your kind cooperation during the inspection and testing process is much appreciated. For any enquiries, you may contact us at 1300-88-5454',
                  '\n\nThank you.'
                ],
              },
              {
                margin: [30, 20, 0, 0],
                alignment: 'center',
                style: 'normalText',
                bold: true,
                text: [
                  //'"POWERING THE NATION"\n', //008
                  //'\n“BETTER. BRIGHTER”\n' //008
                  '\n“BETTER WORLD. BRIGHTER LIVES”\n' //008

                ]
              },
              {
                alignment: 'justify',
                margin: [30, 0, 0, 0],
                style: 'normalText',
                text: ' Yours Sincerely,\n\n\n',
              },          
              {
                margin: [30, 0, 0, 0],
                image: 'sign1',
                width: 100,
                height: 50,
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                style: 'italicStyle',
                text: "This is an electronic-generated document. No signature is required."
              },
              /* 008
              {
                margin: [30, 0, 0, 0],
                style: 'normalText',
                text: "(o/b General manager/manager)"
              },
              */
              {
                alignment: 'justify',
                margin: [30, 0, 0, 0],
                style: 'normalText',
                text: [
                  item.staffNameCheck,
                  '\n',
                  item.ta4position,
                  //'\n',//008
                  // item.ta4department,
                  //{ text: 'SEAL Section', fontSize: 8 },//008
                  '\n',
                  //{ text: 'Metering Unit, Distribution Network Department', fontSize: 8 },
                  { text: 'SEAL, SBU Metering', fontSize: 8 }, //008
                  '\n',
                  //{ text: 'Distribution Division, TNB', fontSize: 8 }, //008
                  { text: 'Distribution Network Division, TNB', fontSize: 8 }, //008

                ]
              },
              {
                table: {
                  margin: [0, 0, 0, 0],
                  headerRows: 1,
                  body: [
                    [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' },
                    { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', '', '', '', '', '', '', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              {
                text: 'For TNB use', bold: true, decoration: 'underline', margin: [30, 0, 0, 0], style: 'normalText'
              },

              {
                margin: [30, 0, 0, 0],
                heights: [100, 50],
                style: 'normalText',
                table: {
                  body: [
                    [{
                      border: [true, true, true, true],
                      text: item.present,
                    },

                    {
                      border: [false, false, false, false],
                      text: 'Customer Present'
                    }
                    ],
                    [
                      {
                        border: [false, false, false, false],
                        text: '', colSpan: 2
                      }
                    ],
                    [
                      {
                        border: [true, true, true, true],
                        text: item.absent,
                      },

                      {
                        border: [false, false, false, false],
                        text: 'Customer Absent'
                      }
                    ],
                  ]
                }
              }, {
                margin: [30, 15, 0, 0],
                style: 'normalText',
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
                style: 'normalText',
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
              building: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAmCAYAAACMJGZuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH4gcZFjgjpTrGZwAAFMVJREFUaN7dmnm0XVWV7n/fXHufc/s03IQ0kEBAIBHQSIJi34uIVUonWkiplBRPn++N955N2SuUOsSWenZlL9giUthCaYmKlgVIT6IIhiYJ6fvc7py915zvj33SDfCfyBhV480x7r37jLvO2nN9azbfnGtpzbJRCunZdcS7Ax4XUALBnxf1/j5ijEHX4BOV7DKP0BAeu0IcfesW/n+QwuCvuhFX5qCtBgAd7GQ1eIJPFvg2E1dUoTRV5/yfvcjHDKwM78tB2+B+E58F/FEAC8CAHEGWaAN5v3EOtAVv8OBwhzdtMl1x/fQyn7m5+5+9xscQrOA4ASa+Dnw0oCiCev5+rrPzybMoDQSt7XU8ed7vtvz6DSNt/vdRQ7QtQKkA6kRYwAdycOQh3Tx61mbfEg2gcZD6/ZeSIqAQEMGkJEQULlizbBQAgXZnrAx1POKzBj/fdPIsKo+2Q4bmO0nUOdhKg4wCFBGEDtqr/8tJsedBPZcKVJdR19kSiVA3zKpQJfdPBSwV6YIcoUx0SyxyBFLgzTTWm6uHGXRVwFlXiNjPuJSisbdohkogC3IlZM0eFgF17oXRPeNdhDfjJ7YGw3PBM3jdzGMpGhV6kaR5Z0+dKvY+XvW3Bw3WI7a+Q0Ergi6ybngekD5YwxsNXgqZAGvJXISSFNU+IA5wtyzjvvJQ4bXv/beAqPeMDEL7VOhOBgseD9vWiU0TwYyRoL0LqnazaAmkIDKMLIQ8KRRGamUiQ2CNTZsTGSQREURA2GNnWfvLIQVsrGWG8oDFxV2Ptwuqwtgw5jC3wAb78WaxwbrxPzN5ZJ4ycU8w44jExA4jXJQDTnd3s6AZR4ncyizrgxtuTFjbGBuHgTk187eIaBdUIeqJinoMpi003BM+6UxtzJQjsHNdZnjuCHjJtGO2UU8F174CnvqPYnQJDMw0dq4XK76S2XIvHPWCgwZL9580WgmKBO9A+lBA0bJwgdfOO+rgAxmmBK0EO0ysA/oEGxO8XGJzDkpEFcFFVfBZYOsu+pZ8ZsYLNn192jPmj1v7BiISYhKYj9IXgZmEP7cxKw0h+x9EvhBYDPpriIeBm0AroP0iYheo9SMilmN2M63Wi+nWs4l8GeF/DdGP7C6wtyGuwwrw/AnCz0VaB/ZSpHWEi6oO/uXVB2VZe1xHza9IBLUHSxwuccCgDSjDzBzMCFAhhoueT+5Hzva6dMcKPVweQqU0CyITeT5BG9kW8A1EfikRhyP7V2RrGjfKJxPRQukCpKvwPBupQJM1tF5N+IsI7+D+dCo7hKi/hPvpSD8F3U7ERYhTQdeR6xOI/N+IHMjmIDua0DoijLI+KO631w0Dcm+lXhDUYotC7zDoB1xN5rzIYdSABJfUaFsQLcCtN0dvLmbVu/yHD3wUvSDuYOO3n4L8HmAWlk4hcNCHIRylGrNf4nVF0OqpcCqk3b3tW0FkwN4DrMSKe4h8Jp7PxP1UpI1Y6yK8O4fgZqJ6oEkSeivgqPgi+JuAY4EbkEQ+uPhlBuMBSBw76cFwUTA8UmjO9Pamw6a3PlyI9w8YFw8Yn5ToAEri5kHj86uGX0QVUQUihwiYS2OJUy2pyz3Alp9A+EJgFmg7rYH7IRb3MtUYkZ9L+BMIDm9sU78A+vH8qp6Od6DiucDRoG8ScXezu3EKRAFajVk/Sj+A+B5K78SKBRDnAT/F0i9745c07wwIPyiwiiT+w4MX18ErB4yTx+rM2M7oiPw/E/zGUX9XMRHOO3NwWM+q3jcVVMeOXbe0kt6ZI46QqD04LoAk7syynS897S0leXcFHNPz1QeY2u2gxU1m1EYsfRbZjZAvQIDSNwmfAH8JITBtIPxtDWWwt0IYEWAaAttM+HJydxbE54F3ANcT+Q298c/F62cSAdJiwiHkWHFwYBXircAJdXBYFSyJhvxYIb5QKE4qg4lwju8Gr6cB4soM1yqYXcEP6uAwwIkmsRdibQu9WYKQ1NvF43tc6h4kiFhKCIIFeP44ik8DC3rcaAWy7RAvAW0DPR14IdIGwr+KdCLSaUQ4li7F80cIvx4wZNux5Hj9RlAm/HKkQaTXgBaTWv2ETxLZOOvre+hgRgnCDRBmjqyhG1e+8gCwtGH5KCbmdZ0zcjANcX4OjjGgEKeAbgziyio4O4mdBTzNYaUHL3H4UY/BPJjErwV3tcTlHrG5K9OCx10O9Y6AOBL3GaRiLZ43Ef5E3IeBQAwBf0Q2QsQ0iJtJpcj5ORBbkO3A8zwsbQXdjdkIuToJokuyf4fiGCKW9xZ9A14XhB+HtJEYvJOialN3TyI8E9Wt5G5NOSRkQWsAHrgJ5p/QEN098t2/eXTLymCg9Zn4rIkM3O7wYxrv3mWKp9bO2b1Y9E8hrazdaQK+MFBpvE7wyxykkNzBWoTPnbyf9eVMCNZjaYDwUbpjWxg49D586kjQDqxYS3SN0BGEZ6w8hLLvYSa2/4SitRDPTySVDzL24N0MH3ko7sdiaTXjsYpDjxDjqztEfRfl8CqICTqCshLSbKwzl7PPXc93vr0F6CcNtImo8Tyf8KPoTkww//jbsaLG68VIc5Hdwyu+sw5CfOfcA0i2JeTuQYLUFhisFmQHPHhXHXzZG/e7ryU+trrr0n6kX6Kb0MYWQpBqDwy8IrG+mJ56gfx5eL0C95W0ho6iHn8lub4bry8hdyDHc8j1KjzfTe5+gs4YWHEmuXqQyN8j/A6GjvgE4S8C/xURn2a4b5ixh36M5wdBd1GNbyZ3zqCVQVxD+M2Ev5dvfa1F1LcS+Va8GiV3AP8G5F8Cv8bSIqIG+CrhP4d4dhPbPD0iG8aYM5ly5KDqzxXzuhMrTdwGkOGcOji6F9QvrYKdh5cayPtXNYEisLr5VOdQTHpw+IIPQROEAD+qUSAD8VoiFvUUWoFnCH87+G4idhN+PLkC4gVNvLNPIr2wIZ9xYi8G3oF3Po3nFwPXgN5D+ABefwxYSPihDW/z00nt50EMQawldx9CdhrhzyTiXsLbhC9kYifgC5uyKP5EOLgH53wTzrx8H1hz/7CVo27azmSZYyy1bFPfYLRN55biWsHaBA8V4u1djy9O5BDQaUkkqd3rvexFTsCCWzdz5K1baWq+XqpuOA5Al4hzkJb3ONSdKC2BeB6yzyC7GziO1F8AP2n4kl8AnEdq7YY4sSH86sPzGUibKPpew/qVlyD9EWIe0nJgOqgiYi6eL+y9+0G8hoj3Aaux8vO9ZLOIwUNmAYciJpEebpIRwZWvgu+dvy9m7Xnor41V3TEvDB1eDB5aiKuTuAmYFKzpS3p9Dw8BU3Xwdz3mPh7E1gjIsZ/JWaIhnwENRwKzrxD+GrxegAzMVuP+rp6rru6lexHdpRT9v8W7zyDXH8Lz+UALmNPrVmwABoAuuZrJvBNOwetjkVb2slo/sp8BQ0R+WQ/gWykHl+HVcuA6wpuMJzuayEc01EarKQe20J5hbP59s5aXXw7/cv6BYBmyRe1Bj+D4DL/tes/JDswTe8VpeHAS3whpQ4B1su9jexGiKJyiVdIZX9TjUF8mYin4yRAPESwBP6/XiP1U47UOstdRT7yCiM8BDyCeDkwRcRiiQ0rfJ3MekR8PsQIoetTk/URM62l9B9IfCD+lt2Gr8fodPYCeD/GCnuUfD1rV6Oxz6Y5voJr4EP3TL+WcbyXyvtJoL+8PiIjAiXsMvpLEA0msTOJGid/u/2Pit4W4qRT/Z9D8f81JNQXu2h9WFeAB3c50ZDWyPzI5dgeWPo8VHVTcBDwbWRdLnyJiIWafxtI4qAv8O8TbgfNQ+r/IvoFZoPQfpKE/YMUrseJ60E6wu7DiXKTvIluAWQB/IPgWVqzE0hqs6EdpMVbcgezpWHEqVj6EUgYtxGwLso0QLdDaxkQE39tXcB9gNPHsUeg3tu10zZwRrN8Y00z2V6B2Y0x7EiAR4T8S2hiSdXL4nubxwtt67ehzr2rSQrghb+G187ufd3nWGUY12aI7FUROlH0Z6hprZTwnIlpkr/juq2rOumIWMmd8+1YGR0uMAlnNVKemBbQeB3lDi+kzu4QHW9aIol1iZpTDXXatd4ZGW3R3i+yi3Z8ZPNSZ3J6ZdiJM/Klg7GGR+m3v8qwMulMVKTVuuG0n/PT1B4K1Ztnovs6BKAm6AZfm4C0BtXou2yu4UxLfFToHSPP7lNdOOR2vOPq2nQf661lf7c1qkCsoB8UtXwtOPJte3OrpYUbgpBTIhHeFtb2XQZs6PSKoujA0E7rj1nNZJ0ICmz++Pu8uBxnrn0le/Xs4fLFoDwXlAOxcA6lkQDUT0WfHTjzE1Ss+4TtaAzztbz5Ofu/LsHB0U5A+djm5YfUwPARfOuNAsFY9aSZtM/oLMVmT1MTrC2v4TAQT+411wUghLpb0XiDlOvKC2/cdcNx/0kwWPf56aB3Gy9Z+kFv6FmpKJa+P38SHW6dR5q46g8vjPQ9frKHo6C3X/8BjaanrBk7QaUd/LQ7ddUNsTNOaNrIEVgTuNL1XyNeeH4zD9accbxPWtiPyDkaqHbQUMXf51jyw6cuqVMYrxm/mttYCtb3L7QMnhOWdEqK+6tUx9QRx/BO/wKrJQeEVBS2Ujosq37mHbzdt6avOe3Q33CPbnjLKjJGAYVi3WnO9aZ3sTxHy9CI25CDXIQ65uQFq7bJRIhqDLo3kIfUZnozoZtQSXppY3ynwSIQcSIzoYboxvPf9R9y+g8dCVj9x9gGf63bQ50GSyBGDSQyU0uYNVc2gWastLc5hd0FEjmCzd7EeRIWKR4J1/5NmMq+vjRPs6NbqSxYB1B7MSiV2yzqeMx2+c+Rsre5MhSFGi5IFtx146nzjkunkaDZoR9cZKEQARw6UFCaSwGG4FNOBNTmYEzAiuBfQZPZYdPu2RwDw0LJR/jTWZaRMmttOiwJOLMTsKWd6IbZJfEHIIsL7zciQuhG0pdx1V5KSoHb4O2DA4J9yBAEnm3hb23SmwDoeeOCVgnYTKx79nGr1stG9adJBHvsG7uESInwv7ZwaZOGK1axdNipBeNCfjBfVwfKWNFVHzDexPknvF6TefHUm3mRovuAfMvEeoDb0wSAKoTyWm8OG4cKSE2HIM2HW5NmFoI/UEU9I8BHEqRG6KolvC0oJt6ZseyawqBBfjebdEYFn4rIcfAm4q5TIxGsFGPoKoqydSs0pkfaQxUdt7Cy45QAr2UvD/7xsBcAECeHiUOB5RizPEZ8pTYs84hoD6kBJih73n+9wTa8IG4ngi1lBQl6IKBUqk8juTa1qUIV7lU2GHkoWf5/ENQ4XtNCtWXHfxm6djKhmDJg9MNZlYbvvN4V0y0TttE39c0bmjq3bvXFRgqnBwu4iKOuIyoPDPfiWE4hQS3ZYjTbkrDolTgpY+pefD+0n8363JSY9VEU82I34UMA0wbtqj205eMJEeJ/L61nzZuRJ936B/Xxz96YqmCbozmm179nVrakjBnMwZ0F/GZeP12Gms8y0NCH6lGwgYX0pSOIZggUBV3QiPufw8RllsWxOu3Wy1cWVC1r9pxeyd48O5Iky2VMzevjhXRteYnBMhqUTtb95Ikc16czwYEkhnpak+aCPVHDtlDPNUnxdxNkRcX76yyHaJ2tOHqWUkklhcA6wKMNrux6/KKV3CdYb+uddu6Z+bTBd4qULB9K9giUSz5ryvKM/JSF+EmjuWO2dJ5T2XsQymlbSjUBqmWisU39v4v1JuqYQLwfuBJ4vODqgI+hIjE5V6X6Dd2coI+KDDv8dOAu4qm1aD/wwYKIQ387wRqGXQbyeJoaeHPBxk9Y8ZpZ1/9JRdlViyIh+A5NONLigFHcPF3ZBEr9OsosjGC/EUhNXe7C5JS4QXBbBKocdOeLLCY3vyv6+gDMyXG/oC0I/FpAjfNIjdzxmeMRAJ7PS4B8kpk3m+KZJsyvnozn4sEkFcEvAWTm4L4nv7nZNGixO4gqJW7oe6w2uLKQvrNydf5+DlwVxSUtaV4jTJa6WWAVx9cE1ox9F6mKK4ejTWMaBwxzaJqKQLiP4fje4KBGr29Kbm5qbn5n43Djp3gF5bcSlneB5wJwEF05LOj7QDCK+nyN2J+mwgNlDyTaNNyXoQg+eM1DozcCvIvSLduLUIDYXpi0DBpPOvCq4O4lzgOO7zusOKXS6E/9maCLgwmRcR1CE2PTsJ49W63+//RsJjqmDBwxNh1jhoREUl/7FYK04bjrT2876yYLBPixEjuBxgtMLtCqCjxbSmkRcZOhBF2dXzj+3TLny2Ci8FQpm3Xz12PqTz3hQ6FcmlnnwMMTO0ZbtHquDHJwGbOhE/KAbUfRJr5G4POCykRlpbMuWTJImA34GMOEMJOIbCb9X2L2SLk4RqxLcq+DaiQj1mZ6v4JeT7v86Javq32+n33ivgTnR7UvpF9srj1AUCt7zF11x+eNJM5hdNAX/RA6zlGKiU/f1F/aBIK67d6L+6QlDpWb2l2ybqAYdluzOfteRI62p9burmXNK27YpYzsrL44Z7utum5rCZK3CqLd1ukEolUZNwLzbtnPfSTMoGxKTSmxaq4htpcG2KbHoti2sWz4qQxGwsBAnCn5YRSB0DPDiUlwmsI1d98V3NBn8thNGWDp/IXjm/q0bWyNJ7YByMjMEDJTGRJ9pdfw5nvVYy5al05lMZe8+TLTClNqSFxbtHGFNL0xl9E7IA4rsYVmEB+2IMBNlAmubNddDhEMMC4UgBaQ6aNfBBMTpuSnR7jAxbtKFbfGg4M4qYnrHKeugNZAo2pKHsMkcRcexoUJVS9QTOXIdeMu4vmW6szroA7T9LOuQVEgiuhFPqpxn1Q5tw9qmlgn3QN5cMiqm3MsavAi8BuRkmsVSCu9dsXEHyQgFVE1hnwNwVOWmkM/WHNllQe4RUO91bbfVwWyJ7lSO64YKvQ1irdDXAqYnacIUFRGdOjQloltI3SR1CU3t6MrbBgU1C2/buv9y/S+yrPuWzmC0XUoQE9mP8GBGxxkvRKdlVIZqU1Qm1R7KuyrPXfP6hs2T+Rlz27S6xtGPUtIcrKxbPrqn/J1doHcDycQDo+2hj/yus5vDQ8z93eZHfC9eeDhs3t1c6xtuU025NnddNagtomVyD/h/r/vtgBLQtOUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDctMjVUMjI6NTY6MzUtMDQ6MDBflk64AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA3LTI1VDIyOjU2OjM1LTA0OjAwLsv2BAAAAABJRU5ErkJggg=='
            },
            styles: {
              italicStyle: {
                //fontSize: 5, //008
                fontSize: 8, //008
                italics: true
              },
              normalText: {
                fontSize: 9,
              },
              tableHeader: {
                fontSize: 10,
                margin: [50, 30, 0, 0],
                bold: true,
                alignment: 'center',
              },
              defaultStyle: {
                fontSize: 9
              }
            }

          }
          break;
        }
        case "borang_b": {
          dd = {
            content: [
              {
                margin: [0, 20, 0, 0],
                alignment: 'right',
                image: 'building',
                width: 90
              },
              '\n',
              {
                margin: [30, 20, 30, 0],
                columns: [
                  {
                    text: ['Date: ', item.ta4datetime]
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
                    [{ text: "NOTIFICATION NOTICE OF CESSATION TEMPORARY INTERRUPTION OF ELECTRICITY SUPPLY FOR THE PURPOSE OF TESTING AND INSPECTIONS OF TNB'S METER INSTALLATION", style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
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
                text: [
                  '\n“BETTER BRIGHTER”\n',
                  '“TNB PRACTISES A NO GIFT POLICY”'
                ]
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
                table: {
                  widths: ['*'],
                  body: [[" "], [" "]]
                },
                layout: {
                  hLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 0 : 1;
                  },
                  vLineWidth: function (i, node) {
                    return 0;
                  },
                }
              },

              {
                margin: [30, 10, 0, 0],
                text: [" I hereby fully understand the contents of this notice and disagree that the electricity supply  to be  cessationed /temporarily interrupted for the above said purposes."]
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
                  "Identification Card No: ",
                  item.ta4witnessidenkard,
                  '\n\n',
                  "Date/Time: ",
                  item.date1
                ]
              },
              '\n',
              {
                pageBreak: 'before',
                margin: [100, 0, 0, 0],
                alignment: 'center',
                text: [
                  "LICENSEE SUPPLY REGULATIONS 1990\n\n",
                  "Form B\n\n",
                  "[sub-regulations 6A(2)]\n\n",
                  "MALAYSIA\n\n",
                  "STATE OF ",
                  optItem1.ta4statename,
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
                    optItem1.tempAddress
                },
                layout: 'noBorders'
              },
              '\n\n',
              {
                margin: [30, 0, 0, 0],
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
                  optItem1.ta4custaddress,
                  " shall be temporarily ceased/interrupted on ",
                  optItem1.ta4datetime,
                  ' from ',
                  optItem1.ta4starttime,
                  ' to ',
                  optItem1.ta4endtime,
                  ' for the purpose of ',
                  optItem1.ta4purpose
                ]
              },
              {
                margin: [30, 10, 20, 0],
                text: ['\nName of Licensee: TNB\n\n',
                  'Address: ',
                  optItem1.ta4officeaddress,
                  '\n\n',
                  'Telephone Number: ',
                  optItem1.ta4officephone,
                  '\n\n',
                  'Dated: ',
                  optItem1.ta4indatetime
                ]
              },
            ],
            images: {
              sign1: item.ta4signstaff,
              sign2: item.ta4signwitness,
              building: 'data:image/png;base64,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'

            },
            styles: {
              title: {
                fontSize: 10,
                bold: true
              },
              textMargin: {
                margin: [30, 50, 80, 0]
              }, tableHeader: {
                fontSize: 10,
                bold: true,
                alignment: 'center'
              }
            }, defaultStyle: {
              fontSize: 9,
            }

          }// End for Form B 
        }
      }

      resolve(dd);

    })

  }

}
