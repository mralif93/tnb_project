import { Injectable, style } from '@angular/core';
import { Http, Headers } from "@angular/http";


import { DataServiceProvider } from "../../../providers/data-service/data-service";

@Injectable()
export class NoticeLetter {
    constructor(
        public dataService: DataServiceProvider,
    ) {
    }


    generateNoticePdf(item, formSelect) {
        return new Promise((resolve, reject) => {

            debugger;
            console.log(
                "came inside to complaint pdf form generation --- >>>."
            );
            var dd = null;
            var fullItems: any;
            debugger;
            if (formSelect === 'UserCopperate') {
                dd = {
                    content: [
                        {
                            margin: [30, 20, 0, 0],
                            table: {
                                headerRows: 1,
                                body: [
                                    [{ text: 'Letter Notice (Customer Cooperate)', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                    ['', '', ''],
                                ]
                            },
                            layout: 'lightHorizontalLines'
                        },
                        {
                            margin: [30, 0, 0, 0],
                            table: {
                                widths: [350, 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto'],
                                body: [
                                    ['Our Reference: TNB B/SJH/../', 'Time ', item.ta4datetime],
                                ]
                            },
                            layout: 'noBorders'
                        },

                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                item.ta4accountno, '\n', item.customername
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Dear valued TNB customer',
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 20, 0, 0],
                            table: {
                                headerRows: 1,
                                body: [
                                    [{ text: 'Inspection Notice Meter Installation by TNB', colSpan: 3, style: 'tableHeader', alignment: 'center' }, {}, {}],
                                    ['', '', ''],
                                ]
                            },
                            layout: 'lightHorizontalLines'
                        },
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Informed that examination and testing has been made on installation metres that record use of electric to premise that addressed ', item.customeraddress, ' in ', item.ta4datetime, item.currentTime, ' hour. ',
                                '\n', 'Testing result show metres does not record real electric usage reading and this was explained the customers. We want to inform that total reduced claim charge will be made by TNB parties and will be forwarded to the customers.'
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                ' Testing result show metres does not record real electric usage reading and this was explained the customers. We want to inform that total reduced claim charge will be made by TNB parties and will be forwarded to the customers.']
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'For your information, evidence bag serial number is ', item.serialNum]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Sir/madame, you are invited to attend to Seksyen Jaminan Hasil (Zon Utara), Aras 2, Wisma TNB, No. 1 Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang (No. tel: 04-5380108) and please state evidence bag serial number for further information after 14 days from case date above. ']
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'If there are any inquiries, sir/madame please contact ', item.ta4officeaddress, item.ta4officephone, ' for further action.']
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Thank you.'
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 0, 0, 0],
                            table: {
                                widths: ['auto', 130, 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto', 'auto'],
                                body: [
                                    [{ text: 'Staff Sign', style: 'tableHeader' },
                                    {
                                        image: 'signStaff',
                                        width: 70,
                                        height: 20,
                                    }, { text: 'Witness Sign', style: 'tableHeader' },
                                    {
                                        image: 'signCust',
                                        width: 70,
                                        height: 20,
                                    }],
                                    [
                                        { text: ['Examinar Name: '] },
                                        { text: [item.staffname] },
                                        { text: ['Name: '] },
                                        { text: [item.customername] }
                                    ],
                                    [
                                        { text: ['Staff No.: '] },
                                        { text: [item.staffno] },
                                        { text: ['Telephone no.'] },
                                        { text: [item.officePhoneNo] }

                                    ],
                                    [
                                        { text: ['Departmnet.: '] },
                                        { text: [item.department] },
                                        { text: ['Date/Time'] },
                                        { text: [item.date1] }

                                    ]
                                ]
                            },
                            layout: 'noBorders'
                        },

                    ],
                    images: {
                        signStaff: item.ta4signstaff,
                        signCust: item.ta4signcustomer
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
            } else {
                dd = {
                    content: [
                        {
                            margin: [30, 20, 0, 0],
                            table: {
                                headerRows: 1,
                                body: [
                                    [{ text: 'Letter Notice (Customer not Cooperate)', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                    ['', '', ''],
                                ]
                            },
                            layout: 'lightHorizontalLines'
                        },
                        {
                            margin: [30, 0, 0, 0],
                            table: {
                                widths: [350, 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto'],
                                body: [
                                    ['Our Reference: TNB B/SJH/../', 'Time ', item.ta4datetime],
                                ]
                            },
                            layout: 'noBorders'
                        },

                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                item.ta4accountno, '\n', item.customername
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Dear valued TNB customer',
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 20, 0, 0],
                            table: {
                                headerRows: 1,
                                body: [
                                    [{ text: 'Inspection Notice Meter Installation by TNB', colSpan: 3, style: 'tableHeader', alignment: 'center' }, {}, {}],
                                    ['', '', ''],
                                ]
                            },
                            layout: 'lightHorizontalLines'
                        },
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Informed that examination and testing has been made on installation metres that record use of electric to premise that addressed ', item.customeraddress, ' in ', item.ta4datetime, item.currentTime, ' hour. ',
                                '\n', 'Testing result show metres does not record real electric usage reading and this was explained the customers. We want to inform that total reduced claim charge will be made by TNB parties and will be forwarded to the customers.'
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                ' Testing result show metres does not record real electric usage reading and this was explained the customers. We want to inform that total reduced claim charge will be made by TNB parties and will be forwarded to the customers.']
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'For your information, evidence bag serial number is ', item.serialNum]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Sir/madame, you are invited to attend to Seksyen Jaminan Hasil (Zon Utara), Aras 2, Wisma TNB, No. 1 Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang (No. tel: 04-5380108) and please state evidence bag serial number for further information after 14 days from case date above. ']
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'If there are any inquiries, sir/madame please contact ', item.ta4officeaddress, item.ta4officephone, ' for further action.']
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Thank you.'
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 0, 0, 0],
                            table: {
                                widths: ['auto', 120],
                                heights: ['auto', 'auto'],
                                body: [
                                    [{ text: 'Staff Sign', style: 'tableHeader' },

                                    {
                                        image: 'signStaff',
                                        width: 70,
                                        height: 20,
                                    }],
                                    [
                                        { text: ['Examinar Name: '] },
                                        { text: [item.staffname] },

                                    ],
                                    [
                                        { text: ['Staff No.: '] },
                                        { text: [item.staffno] },

                                    ],
                                    [
                                        { text: ['Departmnet.: '] },
                                        { text: [item.department] },

                                    ]
                                ]
                            },
                            layout: 'noBorders'
                        },

                    ],
                    images: {
                        signStaff: item.ta4signstaff
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
            }
            resolve(dd);
            reject(dd);

        });
    }
}