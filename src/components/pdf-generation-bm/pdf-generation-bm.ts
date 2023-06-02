/* 
 * Modification History :
 * Date         version     Modified By   Method            Description
 * 2021-03-23   008         Andy Chang    pdfDocumentBhs    update compliance form
 * 
 */

import { Component } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

/**
 * Generated class for the PdfGenerationBmComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pdf-generation-bm',
  templateUrl: 'pdf-generation-bm.html'
})
export class PdfGenerationBmComponent {

  public formType: any;

  constructor() {
    console.log('Hello PdfGenerationBmComponent Component');
  }
  pdfDocumentBhs(item, soTypes, formType, langType, optItem1, optItem2, optItem3) {
    debugger;
    var dd = null;
    return new Promise((resolve, reject) => {
      switch (formType) {

        // English language selected 
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
                    text: ['Kepada: ', item.ta4custname]
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
                text: 'Pelanggan TNB Yang Dihormati\n'
              },

              {
                margin: [30, 20, 0, 0],
                bold: true,
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: "SURAT PEMAKLUMAN (SESI PENJELASAN TANPA PREJUDIS) BERHUBUNG TINDAKAN PEMOTONGAN BEKALAN ELEKTRIK DAN TUNTUTAN KERUGIAN HASIL DAN PERBELANJAAN SERTA CAJ BERKAITAN.", style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              {
                margin: [30, 10, 0, 0],
                text: ["Ingin dimaklumkan bahawa pihak TNB telah menjalankan pemeriksaan dan pengujian terhadap pepasangan meter TNB di premis tuan/puan bagi memastikan ia berfungsi dalam keadaan yang baik. Hasil pemeriksaan tersebut mendapati pepasangan meter TNB tidak merekodkan bacaan penggunaan elektrik yang sebenar. ",
                  '\n\n',
                  "Berdasarkan peruntukan Seksyen 38 Akta Bekalan Elektrik 1990, pihak TNB akan melakukan pemotongan bekalan elektrik ke premis tuan/puan seperti notis pemotongan (Borang A) yang diserahkan bersama dengan notis ini dan juga akan membuat tuntutan kerugian hasil dan perbelanjaan serta caj berkaitan.",
                  '\n\n',
                  "Oleh itu, tuan/puan dijemput hadir ke pejabat SEKSYEN JAMINAN HASIL yang beralamat di ",
                  { text: item.ta4officeaddress, decoration: 'underline', decorationStyle: 'dotted' },
                  " selepas 3 hari bekerja daripada tarikh pemeriksaan bagi sesi penjelasan tanpa prejudis berhubung tindakan yang akan TNB lakukan. Tuan/puan juga digalakkan membawa bukti dan dokumen-dokumen sokongan untuk tujuan sesi penjelasan."
                ]
              },
              '\n\n',
              {
                margin: [30, 0, 0, 20],
                text: [
                  "Sekiranya terdapat sebarang pertanyaan, sila hubungi pihak TNB di talian ",
                  { text: item.ta4officephone, decoration: 'underline', decorationStyle: 'dotted' }
                ]

              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: "Sekian, terima kasih."
              },
              '\n\n',
              {
                margin: [30, 10, 0, 0],
                bold: true,
                text: "SEKSYEN JAMINAN HASIL"
              },

              {
                margin: [30, 10, 0, 0],
                bold: true,
                text: "UNIT PENGURUSAN HASIL "
              },

              {
                margin: [30, 10, 0, 0],
                bold: true,
                text: "JABATAN PERKHIDMATAN PENGGUNA"
              },

              {
                margin: [30, 10, 0, 0],
                bold: true,
                text: "BAHAGIAN PEMBAHAGIAN, TNB"
              },
              '\n\n',
              {
                margin: [100, 0, 0, 0],
                italics: true,
                fontSize: 9,
                decoration: 'underline',
                text: "Notis ini merupakan cetakan computer dan tidak memerlukan tandatangan "
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
                margin: [30, 50, 80, 0]
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
                    text: ['Tarikh: ', item.ta4datetime]
                  },

                ],
              },
              {
                margin: [30, 20, 10, 0],
                text: ['Kepada: ', item.ta4custname]
              },
              {
                margin: [30, 20, 10, 0],
                text: 'Pelanggan TNB Yang Dihormati,\n'
              },

              {
                margin: [30, 20, 0, 0],
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: "NOTIS PEMBERITAHUAN PEMBERHENTIAN/GANGGUAN SEMENTARA BEKALAN ELEKTRIK BAGI TUJUAN PEMERIKSAAN DAN PENGUJIAN PEPASANGAN METER TNB", style: 'tableHeader' }],
                    [''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              {
                margin: [30, 10, 0, 0],
                text: ["Ingin dimaklumkan bahawa pihak TNB sedang menjalankan pemeriksaan dan pengujian terhadap pepasangan meter TNB di premis tuan/puan bagi memastikan ia berfungsi dalam keadaan yang baik. ",
                  '\n\n',
                  , "Untuk tujuan tersebut, adalah dimaklumkan bahawa bekalan elektrik di premis tuan/puan akan diberhentikan/diganggu sementara pada ",
                  { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, //008
                  ' dari ',
                  { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, //008
                  ' hingga ',
                  { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, //008ß
                ]
              },
              {
                margin: [30, 20, 0, 0],
                text: [" Kerjasama tuan/puan adalah sangat diperlukan.",
                  '\nSekian dimaklumkan, terima kasih.\n']
              },

              {
                margin: [30, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: [
                  //'\n“PENGGERAK KEMAJUAN NEGARA”\n',//008
                  //'\n“BETTER. BRIGHTER”\n' //008
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
                text: ['Nama Pekerja: ', item.ta4staffname, '\n'
                  , 'No. Pekerja:', item.ta4staffno]
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
                text: [" Adalah dengan ini saya memahami kandungan notis ini dan bersetuju bekalan elektrik diberhentikan/diganggu sementara bagi tujuan seperti dinyatakan di atas."]
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
                  "Nama (Pengguna/Pemilik/Wakil): ",
                  item.ta4witnessname,
                  '\n\n',
                  "No. Kad Pengenalan: ",
                  item.ta4witnessidenkard,
                  '\n\n',
                  "Tarikh/Masa: ",
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
                fontSize: 14,
                bold: true
              },
              textMargin: {
                margin: [30, 50, 80, 0]
              }, tableHeader: {
                fontSize: 10,
                bold: true,
                alignment: 'center'
              }, custData: { //008
                bold: true
              }
            }, defaultStyle: {
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
                text: ['JADUAL – BORANG A\n\n', '(subperaturan 6A(1))\n\n', 'MALAYSIA', '\n\nNEGERI  ', { text: item.ta4statename, decoration: 'underline', decorationStyle: 'dotted' }, '\n\nAKTA BEKALAN ELEKTRIK 1990']
              },
              {
                style: 'textMargin',
                text: ['Kepada: ', item.ta4custname, '\n\n', item.ta4custaddress, '\n', item.station, ' - ', item.ta4accountno, '\n\n\n', { text: 'Tuan/Puan/Cik/Tetuan', bold: true }]
              },
              {
                style: 'title',
                margin: [0, 0, 0, 0],
                text: ['NOTIS PEMOTONGAN BEKALAN ELEKTRIK DI BAWAH SUBSEKSYEN 38(1) AKTA BEKALAN ELEKTRIK 1990.']
              },

              {
                margin: [0, 10, 15, 0],
                text: ['Sila ambil perhatian pada  ', { text: item.datetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, ' satu pemeriksaan telah dilakukan terhadap pepasangan kami di premis tuan. Hasil pemeriksaan, kami mendapati bahawa pepasangan tersebut telah diusik atau diubahsuai dalam keadaan yang dinyatakan berikut di bawah:'
                  , '\n\n'
                  , { text: item.ta4anamoly, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                  '\n\n Berdasarkan keterangan di atas, pihak kami berpendapat bahawa suatu kesalahan telah dilakukan di bawah Akta Bekalan Elektrik 1990 (”Akta”) seperti berikut:']
              },

              {
                margin: [0, 0, 15, 0],
                text: '•	Subseksyen 37(1)*'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase2
                    }, {
                      text: 'mengganggu  atau  melaraskan  apa-apa  pepasangan  atau bahagiannya atau mengilang atau  mengimport ', border: [false, false, false, false]
                    }],
                    [{
                      border: [false, false, false, false],
                      text: ''
                    }, {
                      text: 'atau  menjual  apa-apa kelengkapan  sehingga  menyebabkan  atau mungkin  menyebabkan  bahaya  kepada  nyawa  atau  anggota  badan  manusia  atau kerosakan pada mana-mana kelengkapan atau harta lain:', border: [false, false, false, false]
                    }],


                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subseksyen 37(3)*'
              },
              {
                margin: [0, 0, 15, 0],
                text: '- mengikut apa-apa cara dengan curang:-'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase3
                    }, {
                      text: '(a)	mengambil tenaga;', border: [false, false, false, false]
                    }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase4
                      },
                      {
                        border: [false, false, false, false],
                        text: '(b)	mengguna habis tenaga;'
                      }
                    ], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase5
                      },
                      {
                        border: [false, false, false, false],
                        text: '(c)	mengguna tenaga;'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase6
                      },
                      {
                        border: [false, false, false, false],
                        text: '(d)  mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan'
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'mana-mana pepasangan berlesen untuk merekodkan keluaran atau penggunahabisan tenaga; atau'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase7
                      },
                      {
                        border: [false, false, false, false],
                        text: ' (e)  menghalang apa-apa meter atau alat sedemikian daripada merekodkan dengan sempurnanya keluaran'
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'atau penggunahabisan tenaga.'
                      }],

                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subseksyen 37(14)*'
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
                        text: 'mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan '
                      }],
                    [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'mana-mana pepasangan berlesen bagi merekodkan keluaran atau penggunahabisan tenaga.'
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
                text: ['Sila ambil perhatian bahawa di bawah subseksyen 38(1) Akta, tuan adalah diberi notis bahawa bekalan elektrik di premis seperti di atas akan dipotong pada '
                  , { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }
                  , '\n\n Sila ambil perhatian juga bahawa pihak kami akan membuat tuntutan apa-apa kerugian dan perbelanjaan oleh pihak kami berikutan kesalahan yang dilakukan seperti di atas. Pihak kami akan mengemukakan pernyataan tuntutan kepada tuan dalam masa terdekat.']
              },
              '\n\n',
              {
                margin: [0, 0, 15, 0],
                text: ['Nama Pemegang Lesen: TENAGA NASIONAL BERHAD ',
                  '\n\n',
                  'Alamat: ',
                  '\n\n',
                  item.ta4officeaddress,
                  '\n\n',
                  , 'Tarikh: ',
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
              '\n',
              {
                text: ['*  Tandakan / bagi kesalahan yang berkenaan.']
              },
              {
                margin: [0, 30, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['Penyerahan Notis Borang A\n\n'
                ],
              },
              {
                margin: [30, 0, 0, 0],
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
                  body: [
                    ['Tarikh', optItem1.ta4indatetime],
                    ['Masa', optItem1.ta4starttime],
                    ['Nama Penerima ', optItem1.ta4witnessname],
                    ['T/Tangan Penerima', {
                      stack: [
                        {
                          image: 'sign1',
                          width: 100,
                          height: 50,
                        }
                      ]

                    },
                    ],
                  ]
                }
              },
              {
                margin: [30, 0, 0, 0],
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
                  body: [

                    [
                      {
                        border: [true, false, true, true],
                        text: 'Nama Penyerah Notis'
                      },
                      {
                        border: [true, false, true, true],
                        text: optItem1.ta4staffname
                      }
                    ],

                    ['T/Tangan Penyerah ', {
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
                      'Catatan (jika ada)',
                      optItem1.ta4describe
                    ]
                  ]
                }
              },

              {
                margin: [50, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['Pemotongan Bekalan \n\n']
              },
              {
                margin: [30, 0, 0, 0],
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
                  body: [
                    ['Tarikh', optItem2.ta4datetime],
                    ['Masa', optItem2.ta4starttime],
                    ['Nama Pemotong Bekalan ', optItem2.ta4staffname],
                    ['T/Tangan Pemotong Bekalan ', {
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
                      'Catatan (jika ada)',
                      optItem2.ta4describe
                    ]
                  ]
                }
              },

              {
                // pageBreak: 'before',
                margin: [50, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['Penyambungan Semula Bekalan\n\n']
              },
              {
                margin: [30, 0, 0, 0],
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
                  body: [
                    ['Tarikh ', optItem3.ta4datetime],
                    ['Masa', optItem3.ta4starttime],
                    ['Nama Penyambung Bekalan ', optItem3.ta4staffname],
                    ['T/Tangan Penyambung Bekalan ', {
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
                      'Catatan (jika ada)',
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
              building: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAmCAYAAACMJGZuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH4gcZFjgjpTrGZwAAFMVJREFUaN7dmnm0XVWV7n/fXHufc/s03IQ0kEBAIBHQSIJi34uIVUonWkiplBRPn++N955N2SuUOsSWenZlL9giUthCaYmKlgVIT6IIhiYJ6fvc7py915zvj33SDfCfyBhV480x7r37jLvO2nN9azbfnGtpzbJRCunZdcS7Ax4XUALBnxf1/j5ijEHX4BOV7DKP0BAeu0IcfesW/n+QwuCvuhFX5qCtBgAd7GQ1eIJPFvg2E1dUoTRV5/yfvcjHDKwM78tB2+B+E58F/FEAC8CAHEGWaAN5v3EOtAVv8OBwhzdtMl1x/fQyn7m5+5+9xscQrOA4ASa+Dnw0oCiCev5+rrPzybMoDQSt7XU8ed7vtvz6DSNt/vdRQ7QtQKkA6kRYwAdycOQh3Tx61mbfEg2gcZD6/ZeSIqAQEMGkJEQULlizbBQAgXZnrAx1POKzBj/fdPIsKo+2Q4bmO0nUOdhKg4wCFBGEDtqr/8tJsedBPZcKVJdR19kSiVA3zKpQJfdPBSwV6YIcoUx0SyxyBFLgzTTWm6uHGXRVwFlXiNjPuJSisbdohkogC3IlZM0eFgF17oXRPeNdhDfjJ7YGw3PBM3jdzGMpGhV6kaR5Z0+dKvY+XvW3Bw3WI7a+Q0Ergi6ybngekD5YwxsNXgqZAGvJXISSFNU+IA5wtyzjvvJQ4bXv/beAqPeMDEL7VOhOBgseD9vWiU0TwYyRoL0LqnazaAmkIDKMLIQ8KRRGamUiQ2CNTZsTGSQREURA2GNnWfvLIQVsrGWG8oDFxV2Ptwuqwtgw5jC3wAb78WaxwbrxPzN5ZJ4ycU8w44jExA4jXJQDTnd3s6AZR4ncyizrgxtuTFjbGBuHgTk187eIaBdUIeqJinoMpi003BM+6UxtzJQjsHNdZnjuCHjJtGO2UU8F174CnvqPYnQJDMw0dq4XK76S2XIvHPWCgwZL9580WgmKBO9A+lBA0bJwgdfOO+rgAxmmBK0EO0ysA/oEGxO8XGJzDkpEFcFFVfBZYOsu+pZ8ZsYLNn192jPmj1v7BiISYhKYj9IXgZmEP7cxKw0h+x9EvhBYDPpriIeBm0AroP0iYheo9SMilmN2M63Wi+nWs4l8GeF/DdGP7C6wtyGuwwrw/AnCz0VaB/ZSpHWEi6oO/uXVB2VZe1xHza9IBLUHSxwuccCgDSjDzBzMCFAhhoueT+5Hzva6dMcKPVweQqU0CyITeT5BG9kW8A1EfikRhyP7V2RrGjfKJxPRQukCpKvwPBupQJM1tF5N+IsI7+D+dCo7hKi/hPvpSD8F3U7ERYhTQdeR6xOI/N+IHMjmIDua0DoijLI+KO631w0Dcm+lXhDUYotC7zDoB1xN5rzIYdSABJfUaFsQLcCtN0dvLmbVu/yHD3wUvSDuYOO3n4L8HmAWlk4hcNCHIRylGrNf4nVF0OqpcCqk3b3tW0FkwN4DrMSKe4h8Jp7PxP1UpI1Y6yK8O4fgZqJ6oEkSeivgqPgi+JuAY4EbkEQ+uPhlBuMBSBw76cFwUTA8UmjO9Pamw6a3PlyI9w8YFw8Yn5ToAEri5kHj86uGX0QVUQUihwiYS2OJUy2pyz3Alp9A+EJgFmg7rYH7IRb3MtUYkZ9L+BMIDm9sU78A+vH8qp6Od6DiucDRoG8ScXezu3EKRAFajVk/Sj+A+B5K78SKBRDnAT/F0i9745c07wwIPyiwiiT+w4MX18ErB4yTx+rM2M7oiPw/E/zGUX9XMRHOO3NwWM+q3jcVVMeOXbe0kt6ZI46QqD04LoAk7syynS897S0leXcFHNPz1QeY2u2gxU1m1EYsfRbZjZAvQIDSNwmfAH8JITBtIPxtDWWwt0IYEWAaAttM+HJydxbE54F3ANcT+Q298c/F62cSAdJiwiHkWHFwYBXircAJdXBYFSyJhvxYIb5QKE4qg4lwju8Gr6cB4soM1yqYXcEP6uAwwIkmsRdibQu9WYKQ1NvF43tc6h4kiFhKCIIFeP44ik8DC3rcaAWy7RAvAW0DPR14IdIGwr+KdCLSaUQ4li7F80cIvx4wZNux5Hj9RlAm/HKkQaTXgBaTWv2ETxLZOOvre+hgRgnCDRBmjqyhG1e+8gCwtGH5KCbmdZ0zcjANcX4OjjGgEKeAbgziyio4O4mdBTzNYaUHL3H4UY/BPJjErwV3tcTlHrG5K9OCx10O9Y6AOBL3GaRiLZ43Ef5E3IeBQAwBf0Q2QsQ0iJtJpcj5ORBbkO3A8zwsbQXdjdkIuToJokuyf4fiGCKW9xZ9A14XhB+HtJEYvJOialN3TyI8E9Wt5G5NOSRkQWsAHrgJ5p/QEN098t2/eXTLymCg9Zn4rIkM3O7wYxrv3mWKp9bO2b1Y9E8hrazdaQK+MFBpvE7wyxykkNzBWoTPnbyf9eVMCNZjaYDwUbpjWxg49D586kjQDqxYS3SN0BGEZ6w8hLLvYSa2/4SitRDPTySVDzL24N0MH3ko7sdiaTXjsYpDjxDjqztEfRfl8CqICTqCshLSbKwzl7PPXc93vr0F6CcNtImo8Tyf8KPoTkww//jbsaLG68VIc5Hdwyu+sw5CfOfcA0i2JeTuQYLUFhisFmQHPHhXHXzZG/e7ryU+trrr0n6kX6Kb0MYWQpBqDwy8IrG+mJ56gfx5eL0C95W0ho6iHn8lub4bry8hdyDHc8j1KjzfTe5+gs4YWHEmuXqQyN8j/A6GjvgE4S8C/xURn2a4b5ixh36M5wdBd1GNbyZ3zqCVQVxD+M2Ev5dvfa1F1LcS+Va8GiV3AP8G5F8Cv8bSIqIG+CrhP4d4dhPbPD0iG8aYM5ly5KDqzxXzuhMrTdwGkOGcOji6F9QvrYKdh5cayPtXNYEisLr5VOdQTHpw+IIPQROEAD+qUSAD8VoiFvUUWoFnCH87+G4idhN+PLkC4gVNvLNPIr2wIZ9xYi8G3oF3Po3nFwPXgN5D+ABefwxYSPihDW/z00nt50EMQawldx9CdhrhzyTiXsLbhC9kYifgC5uyKP5EOLgH53wTzrx8H1hz/7CVo27azmSZYyy1bFPfYLRN55biWsHaBA8V4u1djy9O5BDQaUkkqd3rvexFTsCCWzdz5K1baWq+XqpuOA5Al4hzkJb3ONSdKC2BeB6yzyC7GziO1F8AP2n4kl8AnEdq7YY4sSH86sPzGUibKPpew/qVlyD9EWIe0nJgOqgiYi6eL+y9+0G8hoj3Aaux8vO9ZLOIwUNmAYciJpEebpIRwZWvgu+dvy9m7Xnor41V3TEvDB1eDB5aiKuTuAmYFKzpS3p9Dw8BU3Xwdz3mPh7E1gjIsZ/JWaIhnwENRwKzrxD+GrxegAzMVuP+rp6rru6lexHdpRT9v8W7zyDXH8Lz+UALmNPrVmwABoAuuZrJvBNOwetjkVb2slo/sp8BQ0R+WQ/gWykHl+HVcuA6wpuMJzuayEc01EarKQe20J5hbP59s5aXXw7/cv6BYBmyRe1Bj+D4DL/tes/JDswTe8VpeHAS3whpQ4B1su9jexGiKJyiVdIZX9TjUF8mYin4yRAPESwBP6/XiP1U47UOstdRT7yCiM8BDyCeDkwRcRiiQ0rfJ3MekR8PsQIoetTk/URM62l9B9IfCD+lt2Gr8fodPYCeD/GCnuUfD1rV6Oxz6Y5voJr4EP3TL+WcbyXyvtJoL+8PiIjAiXsMvpLEA0msTOJGid/u/2Pit4W4qRT/Z9D8f81JNQXu2h9WFeAB3c50ZDWyPzI5dgeWPo8VHVTcBDwbWRdLnyJiIWafxtI4qAv8O8TbgfNQ+r/IvoFZoPQfpKE/YMUrseJ60E6wu7DiXKTvIluAWQB/IPgWVqzE0hqs6EdpMVbcgezpWHEqVj6EUgYtxGwLso0QLdDaxkQE39tXcB9gNPHsUeg3tu10zZwRrN8Y00z2V6B2Y0x7EiAR4T8S2hiSdXL4nubxwtt67ehzr2rSQrghb+G187ufd3nWGUY12aI7FUROlH0Z6hprZTwnIlpkr/juq2rOumIWMmd8+1YGR0uMAlnNVKemBbQeB3lDi+kzu4QHW9aIol1iZpTDXXatd4ZGW3R3i+yi3Z8ZPNSZ3J6ZdiJM/Klg7GGR+m3v8qwMulMVKTVuuG0n/PT1B4K1Ztnovs6BKAm6AZfm4C0BtXou2yu4UxLfFToHSPP7lNdOOR2vOPq2nQf661lf7c1qkCsoB8UtXwtOPJte3OrpYUbgpBTIhHeFtb2XQZs6PSKoujA0E7rj1nNZJ0ICmz++Pu8uBxnrn0le/Xs4fLFoDwXlAOxcA6lkQDUT0WfHTjzE1Ss+4TtaAzztbz5Ofu/LsHB0U5A+djm5YfUwPARfOuNAsFY9aSZtM/oLMVmT1MTrC2v4TAQT+411wUghLpb0XiDlOvKC2/cdcNx/0kwWPf56aB3Gy9Z+kFv6FmpKJa+P38SHW6dR5q46g8vjPQ9frKHo6C3X/8BjaanrBk7QaUd/LQ7ddUNsTNOaNrIEVgTuNL1XyNeeH4zD9accbxPWtiPyDkaqHbQUMXf51jyw6cuqVMYrxm/mttYCtb3L7QMnhOWdEqK+6tUx9QRx/BO/wKrJQeEVBS2Ujosq37mHbzdt6avOe3Q33CPbnjLKjJGAYVi3WnO9aZ3sTxHy9CI25CDXIQ65uQFq7bJRIhqDLo3kIfUZnozoZtQSXppY3ynwSIQcSIzoYboxvPf9R9y+g8dCVj9x9gGf63bQ50GSyBGDSQyU0uYNVc2gWastLc5hd0FEjmCzd7EeRIWKR4J1/5NmMq+vjRPs6NbqSxYB1B7MSiV2yzqeMx2+c+Rsre5MhSFGi5IFtx146nzjkunkaDZoR9cZKEQARw6UFCaSwGG4FNOBNTmYEzAiuBfQZPZYdPu2RwDw0LJR/jTWZaRMmttOiwJOLMTsKWd6IbZJfEHIIsL7zciQuhG0pdx1V5KSoHb4O2DA4J9yBAEnm3hb23SmwDoeeOCVgnYTKx79nGr1stG9adJBHvsG7uESInwv7ZwaZOGK1axdNipBeNCfjBfVwfKWNFVHzDexPknvF6TefHUm3mRovuAfMvEeoDb0wSAKoTyWm8OG4cKSE2HIM2HW5NmFoI/UEU9I8BHEqRG6KolvC0oJt6ZseyawqBBfjebdEYFn4rIcfAm4q5TIxGsFGPoKoqydSs0pkfaQxUdt7Cy45QAr2UvD/7xsBcAECeHiUOB5RizPEZ8pTYs84hoD6kBJih73n+9wTa8IG4ngi1lBQl6IKBUqk8juTa1qUIV7lU2GHkoWf5/ENQ4XtNCtWXHfxm6djKhmDJg9MNZlYbvvN4V0y0TttE39c0bmjq3bvXFRgqnBwu4iKOuIyoPDPfiWE4hQS3ZYjTbkrDolTgpY+pefD+0n8363JSY9VEU82I34UMA0wbtqj205eMJEeJ/L61nzZuRJ936B/Xxz96YqmCbozmm179nVrakjBnMwZ0F/GZeP12Gms8y0NCH6lGwgYX0pSOIZggUBV3QiPufw8RllsWxOu3Wy1cWVC1r9pxeyd48O5Iky2VMzevjhXRteYnBMhqUTtb95Ikc16czwYEkhnpak+aCPVHDtlDPNUnxdxNkRcX76yyHaJ2tOHqWUkklhcA6wKMNrux6/KKV3CdYb+uddu6Z+bTBd4qULB9K9giUSz5ryvKM/JSF+EmjuWO2dJ5T2XsQymlbSjUBqmWisU39v4v1JuqYQLwfuBJ4vODqgI+hIjE5V6X6Dd2coI+KDDv8dOAu4qm1aD/wwYKIQ387wRqGXQbyeJoaeHPBxk9Y8ZpZ1/9JRdlViyIh+A5NONLigFHcPF3ZBEr9OsosjGC/EUhNXe7C5JS4QXBbBKocdOeLLCY3vyv6+gDMyXG/oC0I/FpAjfNIjdzxmeMRAJ7PS4B8kpk3m+KZJsyvnozn4sEkFcEvAWTm4L4nv7nZNGixO4gqJW7oe6w2uLKQvrNydf5+DlwVxSUtaV4jTJa6WWAVx9cE1ox9F6mKK4ejTWMaBwxzaJqKQLiP4fje4KBGr29Kbm5qbn5n43Djp3gF5bcSlneB5wJwEF05LOj7QDCK+nyN2J+mwgNlDyTaNNyXoQg+eM1DozcCvIvSLduLUIDYXpi0DBpPOvCq4O4lzgOO7zusOKXS6E/9maCLgwmRcR1CE2PTsJ49W63+//RsJjqmDBwxNh1jhoREUl/7FYK04bjrT2876yYLBPixEjuBxgtMLtCqCjxbSmkRcZOhBF2dXzj+3TLny2Ci8FQpm3Xz12PqTz3hQ6FcmlnnwMMTO0ZbtHquDHJwGbOhE/KAbUfRJr5G4POCykRlpbMuWTJImA34GMOEMJOIbCb9X2L2SLk4RqxLcq+DaiQj1mZ6v4JeT7v86Javq32+n33ivgTnR7UvpF9srj1AUCt7zF11x+eNJM5hdNAX/RA6zlGKiU/f1F/aBIK67d6L+6QlDpWb2l2ybqAYdluzOfteRI62p9burmXNK27YpYzsrL44Z7utum5rCZK3CqLd1ukEolUZNwLzbtnPfSTMoGxKTSmxaq4htpcG2KbHoti2sWz4qQxGwsBAnCn5YRSB0DPDiUlwmsI1d98V3NBn8thNGWDp/IXjm/q0bWyNJ7YByMjMEDJTGRJ9pdfw5nvVYy5al05lMZe8+TLTClNqSFxbtHGFNL0xl9E7IA4rsYVmEB+2IMBNlAmubNddDhEMMC4UgBaQ6aNfBBMTpuSnR7jAxbtKFbfGg4M4qYnrHKeugNZAo2pKHsMkcRcexoUJVS9QTOXIdeMu4vmW6szroA7T9LOuQVEgiuhFPqpxn1Q5tw9qmlgn3QN5cMiqm3MsavAi8BuRkmsVSCu9dsXEHyQgFVE1hnwNwVOWmkM/WHNllQe4RUO91bbfVwWyJ7lSO64YKvQ1irdDXAqYnacIUFRGdOjQloltI3SR1CU3t6MrbBgU1C2/buv9y/S+yrPuWzmC0XUoQE9mP8GBGxxkvRKdlVIZqU1Qm1R7KuyrPXfP6hs2T+Rlz27S6xtGPUtIcrKxbPrqn/J1doHcDycQDo+2hj/yus5vDQ8z93eZHfC9eeDhs3t1c6xtuU025NnddNagtomVyD/h/r/vtgBLQtOUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDctMjVUMjI6NTY6MzUtMDQ6MDBflk64AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA3LTI1VDIyOjU2OjM1LTA0OjAwLsv2BAAAAABJRU5ErkJggg=='

            },
            styles: {
              title: {
                fontSize: 10,
                bold: true
              },
              textMargin: {
                margin: [0, 50, 80, 0]
              }, tableStyle: {
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
                /*   margin: [30, 20, 0, 0],
                  image: 'building',
                  width: 90 */
              },
              '\n',
              {
                margin: [0, 0, 0, 15],
                alignment: 'center',
                text: ['JADUAL – BORANG A\n\n', '(subperaturan 6A(1))\n\n', 'MALAYSIA', '\n\n(Zone)  ', { text: item.ta4statename, decoration: 'underline', decorationStyle: 'dotted' }, '\n\nAKTA BEKALAN ELEKTRIK 1990']
              },
              {
                style: 'textMargin',
                text: ['Kepada: ', item.ta4custname, '\n\n', item.ta4custaddress, '\n', item.station, ' - ', item.ta4accountno, '\n\n\n', { text: 'Tuan/Puan/Cik/Tetuan', bold: true }]
              },
              {
                style: 'title',
                margin: [0, 0, 0, 0],
                text: ['NOTIS PEMOTONGAN BEKALAN ELEKTRIK DI BAWAH SUBSEKSYEN 38(1) AKTA BEKALAN ELEKTRIK 1990.']
              },

              {
                margin: [0, 10, 15, 0],
                text: ['Sila ambil perhatian pada  ', { text: item.datetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, ' satu pemeriksaan telah dilakukan terhadap pepasangan kami di premis tuan. Hasil pemeriksaan, kami mendapati bahawa pepasangan tersebut telah diusik atau diubahsuai dalam keadaan yang dinyatakan berikut di bawah:'
                  , '\n\n'
                  , { text: item.ta4anamoly, decoration: 'underline', decorationStyle: 'dotted', style: 'custData'  },
                  '\n\n Berdasarkan keterangan di atas, pihak kami berpendapat bahawa suatu kesalahan telah dilakukan di bawah Akta Bekalan Elektrik 1990 (”Akta”) seperti berikut:']
              },
              {
                margin: [0, 0, 15, 0],
                text: '•	Subseksyen 37(1)*'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase2
                    }, {
                      text: 'mengganggu  atau  melaraskan  apa-apa  pepasangan  atau bahagiannya atau mengilang atau  mengimport  atau  menjual  apa-apa ', border: [false, false, false, false]
                    }],
                    [{
                      border: [false, false, false, false],
                      text: ''
                    }, {
                      text: 'kelengkapan  sehingga  menyebabkan  atau mungkin  menyebabkan  bahaya  kepada  nyawa  atau  anggota  badan  manusia  atau kerosakan pada mana-mana kelengkapan atau harta lain:.', border: [false, false, false, false]
                    }],


                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subseksyen 37(3)*'
              },
              {
                margin: [0, 0, 15, 0],
                text: '- mengikut apa-apa cara dengan curang:-'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase3
                    }, {
                      text: '(a)	mengambil tenaga;', border: [false, false, false, false]
                    }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase4
                      },
                      {
                        border: [false, false, false, false],
                        text: '(b)	mengguna habis tenaga;'
                      }
                    ], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase5
                      },
                      {
                        border: [false, false, false, false],
                        text: '(c)	mengguna tenaga;'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase6
                      },
                      {
                        border: [false, false, false, false],
                        text: '(d)  mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan'
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'mana-mana pepasangan berlesen untuk merekodkan keluaran atau penggunahabisan tenaga; atau'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase7
                      },
                      {
                        border: [false, false, false, false],
                        text: ' (e)  menghalang apa-apa meter atau alat sedemikian daripada merekodkan dengan sempurnanya keluaran'
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'atau penggunahabisan tenaga.'
                      }],

                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subseksyen 37(14)*'
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
                        text: 'mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan mana-mana pepasangan berlesen'
                      }],
                    [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'bagi merekodkan keluaran atau penggunahabisan tenaga.'
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
                margin: [0, 50, 0, 0],
                text: ['Sila ambil perhatian bahawa di bawah subseksyen 38(1) Akta, tuan adalah diberi notis bahawa bekalan elektrik di premis seperti di atas akan dipotong pada '
                  , { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted',style: 'custData' }
                  , '\n\n Sila ambil perhatian juga bahawa pihak kami akan membuat tuntutan apa-apa kerugian dan perbelanjaan oleh pihak kami berikutan kesalahan yang dilakukan seperti di atas. Pihak kami akan mengemukakan pernyataan tuntutan kepada tuan dalam masa terdekat.']
              },
              '\n\n',
              {
                margin: [0, 0, 15, 0],
                text: ['Nama Pemegang Lesen: TENAGA NASIONAL BERHAD ',
                  '\n\n',
                  'Alamat: ',
                  '\n\n',
                  item.ta4officeaddress,
                  '\n\n',
                  , 'Tarikh: ',
                  { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData'  }
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
              '\n',
              {
                text: ['*  Tandakan / bagi kesalahan yang berkenaan.']
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
            }, defaultStyle: {
              fontSize: 9
            }

          }
          break;
        }
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
                      //text: 'Rujukan Kami : TNB (B) DNET/METER/SEAL/' //008
                      text: ['Rujukan Kami : TNB (B) DNET/METER/SEAL/', item.ta4accountno ] //008
                    },
                    {
                      witdh: '*',
                      text: ['Tarikh: ', item.ta4indatetime]
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
                  text: 'Pelanggan TNB Yang Dihormati,'
                },

                {
                  margin: [50, 0, 0, 0],
                  table: {
                    headerRows: 1,
                    body: [
                      [{ text: 'PEMAKLUMAN SEMAKAN PEPASANGAN METER ELEKTRIK OLEH TNB', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                      ['', ''],
                    ]
                  },
                  layout: 'lightHorizontalLines'
                },
                {
                  margin: [30, 20, 20, 0],
                  text: ["Dimaklumkan bahawa pemeriksaan dan pengujian telah dibuat ke atas pepasangan meter yang merekodkan penggunaan elektrik ke premis yang beralamat  ",
                    { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    ' dengan No. Akaun  ', { text: item.ta4accountno, decoration: 'underline', decorationStyle: 'dotted' }, , { text: ' pada ' },
                    { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted' },
                    ' jam ',
                    { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted' },
                    '\n\n Hasil pengujian menunjukkan meter berkenaan tidak merekodkan bacaan penggunaan elektrik yang sebenar dan ini telah diterangkan kepada tuan/puan. Ingin dimaklumkan bahawa tuntutan amaun terkurang caj akan dibuat oleh TNB dan akan dimajukan kepada tuan/puan.',
                    '\n\n Untuk makluman tuan/puan, nombor siri beg eviden adalah ', { text: item.ta4serialNum, decoration: 'underline', decorationStyle: 'dotted' },                                        
                    //'\n\n Sekiranya terdapat sebarang pertanyaan, tuan/puan boleh menghubungi ',
                    //'',
                    //item.ta4officeaddress,
                    //', ',
                    //'(No Tel :',
                    '\n\n Tuan/puan dijemput hadir ke ', { text: 'Kedai Tenaga yang berdekatan',style: 'custData' }, ', dan sila nyatakan nombor siri beg eviden untuk penerangan lanjut, selepas ', { text: '14 hari', style: 'custData' }, ' dari tarikh kes di atas.',
                    '\n\n Sekiranya terdapat sebarang pertanyaan, tuan/puan boleh menghubungi ', {text: 'TNB Careline One Stop Enquiry Centre', style: 'custData' } ,', (No. Tel : ',
                    { text: item.ta4officephone, style: 'custData' },
                    //').',
                    ') untuk tindakan selanjutnya.',
                    '\n\n Sekian, terima kasih.'
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
                      text: 'T/T Pemeriksa:',
                    },
                    {
                      text: 'Diterima Oleh (T/T):',

                    },
                  ]
                },
                '\n',
                {
                  margin: [30, 0, 0, 0],
                  width: 200,
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
                      text: ['Nama Pemeriksa: ', item.ta4staffname]
                    },
                    {
                      text: [
                        'Nama: ',
                        item.ta4witnessname
                      ]
                    }
                  ],
                },
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      text: ['No. Pekerja: ', item.ta4staffno]
                    },
                    {
                      text: [
                        'No.Tel: ',
                        item.ta4witnessphone
                      ]

                    }
                  ],
                },
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      //text: 'Jabatan : SEAL UNIT METERING', //008
                      text: 'Jabatan : SEAL, SBU METERING', //008
                    },
                    {
                      text: [
                        'Tarikh/Masa : ',
                        item.datetime
                      ]

                    }
                  ],
                },
                '\n',
                {
                  //margin: [100, 0, 0, 0],//008
                  margin: [30, 0, 0, 0],//008
                  text: [
                    //'Sk: Pengurus Kawasan/Cawangan: ', //008
                    'Sk: Billing Performance & Revenue Assurance (', //008
                    item.ta4department,
                    ')'
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
                custData:{
                  bold:true,
                }
              },
              defaultStyle: {
                fontSize: 9,
              }
            }
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
                      //text: 'Rujukan Kami : TNB (B) DNET/METER/SEAL', //008
                      text: ['Rujukan Kami : TNB (B) DNET/METER/SEAL/', item.ta4accountno ] //008
                    },
                    {
                      width: '*',
                      text: ['Tarikh: ', item.ta4indatetime]
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
                  text: 'Pelanggan TNB Yang Dihormati,'
                },

                {
                  margin: [50, 0, 0, 0],
                  table: {
                    headerRows: 1,
                    body: [
                      [{ text: 'PEMAKLUMAN SEMAKAN PEPASANGAN METER ELEKTRIK OLEH TNB', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                      ['', ''],
                    ]
                  },
                  layout: 'lightHorizontalLines'
                },
                {
                  margin: [30, 20, 20, 0],
                  text: ["Dimaklumkan bahawa pemeriksaan dan pengujian telah dibuat ke atas pepasangan meter yang merekodkan penggunaan elektrik ke premis yang beralamat  ",
                    { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    ' dengan No. Akaun  ', { text: item.ta4accountno, decoration: 'underline', decorationStyle: 'dotted' }, , { text: ' pada ' },
                    { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted' },
                    ' jam ',
                    { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted' },
                    '\n\n Hasil pengujian menunjukkan meter berkenaan tidak merekodkan bacaan penggunaan elektrik yang sebenar dan ini telah diterangkan kepada tuan/puan. Ingin dimaklumkan bahawa tuntutan amaun terkurang caj akan dibuat oleh TNB dan akan dimajukan kepada tuan/puan.',
                    '\n\n Untuk makluman tuan/puan, nombor siri beg eviden adalah ', { text: item.ta4serialNum, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    '\n\n Tuan/puan dijemput hadir ke ', { text: 'Kedai Tenaga yang Berdekatan',style: 'custData' }, ', dan sila nyatakan nombor siri beg eviden untuk penerangan lanjut, selepas ', { text: '14 hari', style: 'custData' }, ' dari tarikh kes di atas.',
                    //'\n\n Sekiranya terdapat sebarang pertanyaan, tuan/puan boleh menghubungi ',
                    //'',
                    //item.ta4officeaddress,
                    //', ',
                    //'(No Tel ',
                    '\n\n Sekiranya terdapat sebarang pertanyaan, tuan/puan boleh menghubungi ', {text: 'TNB Careline One Stop Enquiry Centre', style: 'custData' } ,', (No. Tel : ',
                    { text: item.ta4officephone, style: 'custData' },
                    //')',
                    ') untuk tindakan selanjutnya.',
                    '\n\n Sekian, terima kasih.'
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
                      text: 'T/T Pemeriksa:',
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
                      text: ['Nama Pemeriksa: ', item.ta4staffname]
                    }
                  ],
                },
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      text: ['No. Pekerja: ', item.ta4staffno]
                    }
                  ],
                },
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      //text: 'Jabatan : SEAL UNIT METERING', //008
                      text: 'Jabatan : SEAL, SBU METERING', //008
                    }
                  ],
                },
                '\n',
                {
                  //margin: [100, 0, 0, 0], //008
                  margin: [30, 0, 0, 0],//008
                  text: [
                    //'Sk: Pengurus Kawasan/Cawangan: ', //008
                    'Sk: Billing Performance & Revenue Assurance (', //008
                    item.ta4department,
                    ')'
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
              }, defaultStyle: {
                fontSize: 9,
              }
            }
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
                    [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: 'SURAT PEMBERITAHUAN PENGAMBILAN BAHAN-BAHAN BUKTI', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', '', '', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['No Akaun:', { text: item.ta4accountno, decoration: 'underline', decorationStyle: 'dotted' }],
                  },
                  {
                    text: ['Kod Stesen: ', { text: item.station, decoration: 'underline', decorationStyle: 'dotted' }]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: [
                  'Nama Pengguna: ', { text: item.ta4custname, decoration: 'underline', decorationStyle: 'dotted' }, '\n\n',
                  'Adalah saya: ', { text: item.ta4staffname, decoration: 'underline', decorationStyle: 'dotted' }, '\n\n',
                  'No Pekerja: ', { text: item.ta4staffno, decoration: 'underline', decorationStyle: 'dotted' }, ' mengaku telah mengambil  perkara-perkara tersebut di bawah ini:-\n',
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
                  'daripada premis yang beralamat ',
                  { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted' }
                ]
              },
              {
                margin: [30, 0, 0, 0],

                columns: [
                  {
                    text: 'T/Tangan Pengambil:\n',
                  },
                  {
                    text: 'T/Tangan Saksi: ',
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
                    text: ['Nama: ', '\n', { text: item.ta4staffname, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Nama: ', '\n', { text: item.ta4witnessname, decoration: 'underline', decorationStyle: 'dotted' }]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['No Pekerja: ', { text: item.ta4staffno, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Alamat:', '\n', { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted' }]

                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: [
                  'No Kad Pengenalan: ', { text: item.ta4staffindenkard, decoration: 'underline', decorationStyle: 'dotted' }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: 'Jawatan: Juruteknik',
                  },
                  {
                    text: ['No Kad Pengenalan: ', { text: item.ta4witnessidenkard, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                ]
              },
              '\n',

              {
                margin: [30, 0, 0, 0],
                text: [
                  ' Stesen: ', { text: item.ta4officezone, decoration: 'underline', decorationStyle: 'dotted' }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Tarikh: ', { text: item.ta4datetime, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Tarikh: ', { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted' }]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Masa: ', { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Masa: ', { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted' }],
                  }
                ]
              },

            ],

            images: {
              sign1: item.ta4signstaff,
              sign2: item.ta4signwitness,
              building: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAmCAYAAACMJGZuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH4gcZFjgjpTrGZwAAFMVJREFUaN7dmnm0XVWV7n/fXHufc/s03IQ0kEBAIBHQSIJi34uIVUonWkiplBRPn++N955N2SuUOsSWenZlL9giUthCaYmKlgVIT6IIhiYJ6fvc7py915zvj33SDfCfyBhV480x7r37jLvO2nN9azbfnGtpzbJRCunZdcS7Ax4XUALBnxf1/j5ijEHX4BOV7DKP0BAeu0IcfesW/n+QwuCvuhFX5qCtBgAd7GQ1eIJPFvg2E1dUoTRV5/yfvcjHDKwM78tB2+B+E58F/FEAC8CAHEGWaAN5v3EOtAVv8OBwhzdtMl1x/fQyn7m5+5+9xscQrOA4ASa+Dnw0oCiCev5+rrPzybMoDQSt7XU8ed7vtvz6DSNt/vdRQ7QtQKkA6kRYwAdycOQh3Tx61mbfEg2gcZD6/ZeSIqAQEMGkJEQULlizbBQAgXZnrAx1POKzBj/fdPIsKo+2Q4bmO0nUOdhKg4wCFBGEDtqr/8tJsedBPZcKVJdR19kSiVA3zKpQJfdPBSwV6YIcoUx0SyxyBFLgzTTWm6uHGXRVwFlXiNjPuJSisbdohkogC3IlZM0eFgF17oXRPeNdhDfjJ7YGw3PBM3jdzGMpGhV6kaR5Z0+dKvY+XvW3Bw3WI7a+Q0Ergi6ybngekD5YwxsNXgqZAGvJXISSFNU+IA5wtyzjvvJQ4bXv/beAqPeMDEL7VOhOBgseD9vWiU0TwYyRoL0LqnazaAmkIDKMLIQ8KRRGamUiQ2CNTZsTGSQREURA2GNnWfvLIQVsrGWG8oDFxV2Ptwuqwtgw5jC3wAb78WaxwbrxPzN5ZJ4ycU8w44jExA4jXJQDTnd3s6AZR4ncyizrgxtuTFjbGBuHgTk187eIaBdUIeqJinoMpi003BM+6UxtzJQjsHNdZnjuCHjJtGO2UU8F174CnvqPYnQJDMw0dq4XK76S2XIvHPWCgwZL9580WgmKBO9A+lBA0bJwgdfOO+rgAxmmBK0EO0ysA/oEGxO8XGJzDkpEFcFFVfBZYOsu+pZ8ZsYLNn192jPmj1v7BiISYhKYj9IXgZmEP7cxKw0h+x9EvhBYDPpriIeBm0AroP0iYheo9SMilmN2M63Wi+nWs4l8GeF/DdGP7C6wtyGuwwrw/AnCz0VaB/ZSpHWEi6oO/uXVB2VZe1xHza9IBLUHSxwuccCgDSjDzBzMCFAhhoueT+5Hzva6dMcKPVweQqU0CyITeT5BG9kW8A1EfikRhyP7V2RrGjfKJxPRQukCpKvwPBupQJM1tF5N+IsI7+D+dCo7hKi/hPvpSD8F3U7ERYhTQdeR6xOI/N+IHMjmIDua0DoijLI+KO631w0Dcm+lXhDUYotC7zDoB1xN5rzIYdSABJfUaFsQLcCtN0dvLmbVu/yHD3wUvSDuYOO3n4L8HmAWlk4hcNCHIRylGrNf4nVF0OqpcCqk3b3tW0FkwN4DrMSKe4h8Jp7PxP1UpI1Y6yK8O4fgZqJ6oEkSeivgqPgi+JuAY4EbkEQ+uPhlBuMBSBw76cFwUTA8UmjO9Pamw6a3PlyI9w8YFw8Yn5ToAEri5kHj86uGX0QVUQUihwiYS2OJUy2pyz3Alp9A+EJgFmg7rYH7IRb3MtUYkZ9L+BMIDm9sU78A+vH8qp6Od6DiucDRoG8ScXezu3EKRAFajVk/Sj+A+B5K78SKBRDnAT/F0i9745c07wwIPyiwiiT+w4MX18ErB4yTx+rM2M7oiPw/E/zGUX9XMRHOO3NwWM+q3jcVVMeOXbe0kt6ZI46QqD04LoAk7syynS897S0leXcFHNPz1QeY2u2gxU1m1EYsfRbZjZAvQIDSNwmfAH8JITBtIPxtDWWwt0IYEWAaAttM+HJydxbE54F3ANcT+Q298c/F62cSAdJiwiHkWHFwYBXircAJdXBYFSyJhvxYIb5QKE4qg4lwju8Gr6cB4soM1yqYXcEP6uAwwIkmsRdibQu9WYKQ1NvF43tc6h4kiFhKCIIFeP44ik8DC3rcaAWy7RAvAW0DPR14IdIGwr+KdCLSaUQ4li7F80cIvx4wZNux5Hj9RlAm/HKkQaTXgBaTWv2ETxLZOOvre+hgRgnCDRBmjqyhG1e+8gCwtGH5KCbmdZ0zcjANcX4OjjGgEKeAbgziyio4O4mdBTzNYaUHL3H4UY/BPJjErwV3tcTlHrG5K9OCx10O9Y6AOBL3GaRiLZ43Ef5E3IeBQAwBf0Q2QsQ0iJtJpcj5ORBbkO3A8zwsbQXdjdkIuToJokuyf4fiGCKW9xZ9A14XhB+HtJEYvJOialN3TyI8E9Wt5G5NOSRkQWsAHrgJ5p/QEN098t2/eXTLymCg9Zn4rIkM3O7wYxrv3mWKp9bO2b1Y9E8hrazdaQK+MFBpvE7wyxykkNzBWoTPnbyf9eVMCNZjaYDwUbpjWxg49D586kjQDqxYS3SN0BGEZ6w8hLLvYSa2/4SitRDPTySVDzL24N0MH3ko7sdiaTXjsYpDjxDjqztEfRfl8CqICTqCshLSbKwzl7PPXc93vr0F6CcNtImo8Tyf8KPoTkww//jbsaLG68VIc5Hdwyu+sw5CfOfcA0i2JeTuQYLUFhisFmQHPHhXHXzZG/e7ryU+trrr0n6kX6Kb0MYWQpBqDwy8IrG+mJ56gfx5eL0C95W0ho6iHn8lub4bry8hdyDHc8j1KjzfTe5+gs4YWHEmuXqQyN8j/A6GjvgE4S8C/xURn2a4b5ixh36M5wdBd1GNbyZ3zqCVQVxD+M2Ev5dvfa1F1LcS+Va8GiV3AP8G5F8Cv8bSIqIG+CrhP4d4dhPbPD0iG8aYM5ly5KDqzxXzuhMrTdwGkOGcOji6F9QvrYKdh5cayPtXNYEisLr5VOdQTHpw+IIPQROEAD+qUSAD8VoiFvUUWoFnCH87+G4idhN+PLkC4gVNvLNPIr2wIZ9xYi8G3oF3Po3nFwPXgN5D+ABefwxYSPihDW/z00nt50EMQawldx9CdhrhzyTiXsLbhC9kYifgC5uyKP5EOLgH53wTzrx8H1hz/7CVo27azmSZYyy1bFPfYLRN55biWsHaBA8V4u1djy9O5BDQaUkkqd3rvexFTsCCWzdz5K1baWq+XqpuOA5Al4hzkJb3ONSdKC2BeB6yzyC7GziO1F8AP2n4kl8AnEdq7YY4sSH86sPzGUibKPpew/qVlyD9EWIe0nJgOqgiYi6eL+y9+0G8hoj3Aaux8vO9ZLOIwUNmAYciJpEebpIRwZWvgu+dvy9m7Xnor41V3TEvDB1eDB5aiKuTuAmYFKzpS3p9Dw8BU3Xwdz3mPh7E1gjIsZ/JWaIhnwENRwKzrxD+GrxegAzMVuP+rp6rru6lexHdpRT9v8W7zyDXH8Lz+UALmNPrVmwABoAuuZrJvBNOwetjkVb2slo/sp8BQ0R+WQ/gWykHl+HVcuA6wpuMJzuayEc01EarKQe20J5hbP59s5aXXw7/cv6BYBmyRe1Bj+D4DL/tes/JDswTe8VpeHAS3whpQ4B1su9jexGiKJyiVdIZX9TjUF8mYin4yRAPESwBP6/XiP1U47UOstdRT7yCiM8BDyCeDkwRcRiiQ0rfJ3MekR8PsQIoetTk/URM62l9B9IfCD+lt2Gr8fodPYCeD/GCnuUfD1rV6Oxz6Y5voJr4EP3TL+WcbyXyvtJoL+8PiIjAiXsMvpLEA0msTOJGid/u/2Pit4W4qRT/Z9D8f81JNQXu2h9WFeAB3c50ZDWyPzI5dgeWPo8VHVTcBDwbWRdLnyJiIWafxtI4qAv8O8TbgfNQ+r/IvoFZoPQfpKE/YMUrseJ60E6wu7DiXKTvIluAWQB/IPgWVqzE0hqs6EdpMVbcgezpWHEqVj6EUgYtxGwLso0QLdDaxkQE39tXcB9gNPHsUeg3tu10zZwRrN8Y00z2V6B2Y0x7EiAR4T8S2hiSdXL4nubxwtt67ehzr2rSQrghb+G187ufd3nWGUY12aI7FUROlH0Z6hprZTwnIlpkr/juq2rOumIWMmd8+1YGR0uMAlnNVKemBbQeB3lDi+kzu4QHW9aIol1iZpTDXXatd4ZGW3R3i+yi3Z8ZPNSZ3J6ZdiJM/Klg7GGR+m3v8qwMulMVKTVuuG0n/PT1B4K1Ztnovs6BKAm6AZfm4C0BtXou2yu4UxLfFToHSPP7lNdOOR2vOPq2nQf661lf7c1qkCsoB8UtXwtOPJte3OrpYUbgpBTIhHeFtb2XQZs6PSKoujA0E7rj1nNZJ0ICmz++Pu8uBxnrn0le/Xs4fLFoDwXlAOxcA6lkQDUT0WfHTjzE1Ss+4TtaAzztbz5Ofu/LsHB0U5A+djm5YfUwPARfOuNAsFY9aSZtM/oLMVmT1MTrC2v4TAQT+411wUghLpb0XiDlOvKC2/cdcNx/0kwWPf56aB3Gy9Z+kFv6FmpKJa+P38SHW6dR5q46g8vjPQ9frKHo6C3X/8BjaanrBk7QaUd/LQ7ddUNsTNOaNrIEVgTuNL1XyNeeH4zD9accbxPWtiPyDkaqHbQUMXf51jyw6cuqVMYrxm/mttYCtb3L7QMnhOWdEqK+6tUx9QRx/BO/wKrJQeEVBS2Ujosq37mHbzdt6avOe3Q33CPbnjLKjJGAYVi3WnO9aZ3sTxHy9CI25CDXIQ65uQFq7bJRIhqDLo3kIfUZnozoZtQSXppY3ynwSIQcSIzoYboxvPf9R9y+g8dCVj9x9gGf63bQ50GSyBGDSQyU0uYNVc2gWastLc5hd0FEjmCzd7EeRIWKR4J1/5NmMq+vjRPs6NbqSxYB1B7MSiV2yzqeMx2+c+Rsre5MhSFGi5IFtx146nzjkunkaDZoR9cZKEQARw6UFCaSwGG4FNOBNTmYEzAiuBfQZPZYdPu2RwDw0LJR/jTWZaRMmttOiwJOLMTsKWd6IbZJfEHIIsL7zciQuhG0pdx1V5KSoHb4O2DA4J9yBAEnm3hb23SmwDoeeOCVgnYTKx79nGr1stG9adJBHvsG7uESInwv7ZwaZOGK1axdNipBeNCfjBfVwfKWNFVHzDexPknvF6TefHUm3mRovuAfMvEeoDb0wSAKoTyWm8OG4cKSE2HIM2HW5NmFoI/UEU9I8BHEqRG6KolvC0oJt6ZseyawqBBfjebdEYFn4rIcfAm4q5TIxGsFGPoKoqydSs0pkfaQxUdt7Cy45QAr2UvD/7xsBcAECeHiUOB5RizPEZ8pTYs84hoD6kBJih73n+9wTa8IG4ngi1lBQl6IKBUqk8juTa1qUIV7lU2GHkoWf5/ENQ4XtNCtWXHfxm6djKhmDJg9MNZlYbvvN4V0y0TttE39c0bmjq3bvXFRgqnBwu4iKOuIyoPDPfiWE4hQS3ZYjTbkrDolTgpY+pefD+0n8363JSY9VEU82I34UMA0wbtqj205eMJEeJ/L61nzZuRJ936B/Xxz96YqmCbozmm179nVrakjBnMwZ0F/GZeP12Gms8y0NCH6lGwgYX0pSOIZggUBV3QiPufw8RllsWxOu3Wy1cWVC1r9pxeyd48O5Iky2VMzevjhXRteYnBMhqUTtb95Ikc16czwYEkhnpak+aCPVHDtlDPNUnxdxNkRcX76yyHaJ2tOHqWUkklhcA6wKMNrux6/KKV3CdYb+uddu6Z+bTBd4qULB9K9giUSz5ryvKM/JSF+EmjuWO2dJ5T2XsQymlbSjUBqmWisU39v4v1JuqYQLwfuBJ4vODqgI+hIjE5V6X6Dd2coI+KDDv8dOAu4qm1aD/wwYKIQ387wRqGXQbyeJoaeHPBxk9Y8ZpZ1/9JRdlViyIh+A5NONLigFHcPF3ZBEr9OsosjGC/EUhNXe7C5JS4QXBbBKocdOeLLCY3vyv6+gDMyXG/oC0I/FpAjfNIjdzxmeMRAJ7PS4B8kpk3m+KZJsyvnozn4sEkFcEvAWTm4L4nv7nZNGixO4gqJW7oe6w2uLKQvrNydf5+DlwVxSUtaV4jTJa6WWAVx9cE1ox9F6mKK4ejTWMaBwxzaJqKQLiP4fje4KBGr29Kbm5qbn5n43Djp3gF5bcSlneB5wJwEF05LOj7QDCK+nyN2J+mwgNlDyTaNNyXoQg+eM1DozcCvIvSLduLUIDYXpi0DBpPOvCq4O4lzgOO7zusOKXS6E/9maCLgwmRcR1CE2PTsJ49W63+//RsJjqmDBwxNh1jhoREUl/7FYK04bjrT2876yYLBPixEjuBxgtMLtCqCjxbSmkRcZOhBF2dXzj+3TLny2Ci8FQpm3Xz12PqTz3hQ6FcmlnnwMMTO0ZbtHquDHJwGbOhE/KAbUfRJr5G4POCykRlpbMuWTJImA34GMOEMJOIbCb9X2L2SLk4RqxLcq+DaiQj1mZ6v4JeT7v86Javq32+n33ivgTnR7UvpF9srj1AUCt7zF11x+eNJM5hdNAX/RA6zlGKiU/f1F/aBIK67d6L+6QlDpWb2l2ybqAYdluzOfteRI62p9burmXNK27YpYzsrL44Z7utum5rCZK3CqLd1ukEolUZNwLzbtnPfSTMoGxKTSmxaq4htpcG2KbHoti2sWz4qQxGwsBAnCn5YRSB0DPDiUlwmsI1d98V3NBn8thNGWDp/IXjm/q0bWyNJ7YByMjMEDJTGRJ9pdfw5nvVYy5al05lMZe8+TLTClNqSFxbtHGFNL0xl9E7IA4rsYVmEB+2IMBNlAmubNddDhEMMC4UgBaQ6aNfBBMTpuSnR7jAxbtKFbfGg4M4qYnrHKeugNZAo2pKHsMkcRcexoUJVS9QTOXIdeMu4vmW6szroA7T9LOuQVEgiuhFPqpxn1Q5tw9qmlgn3QN5cMiqm3MsavAi8BuRkmsVSCu9dsXEHyQgFVE1hnwNwVOWmkM/WHNllQe4RUO91bbfVwWyJ7lSO64YKvQ1irdDXAqYnacIUFRGdOjQloltI3SR1CU3t6MrbBgU1C2/buv9y/S+yrPuWzmC0XUoQE9mP8GBGxxkvRKdlVIZqU1Qm1R7KuyrPXfP6hs2T+Rlz27S6xtGPUtIcrKxbPrqn/J1doHcDycQDo+2hj/yus5vDQ8z93eZHfC9eeDhs3t1c6xtuU025NnddNagtomVyD/h/r/vtgBLQtOUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDctMjVUMjI6NTY6MzUtMDQ6MDBflk64AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA3LTI1VDIyOjU2OjM1LTA0OjAwLsv2BAAAAABJRU5ErkJggg=='

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

              {
                margin: [30, 10, 0, 0],
                style: 'normalText',
                text: [
                  "Tarikh ", { text: item.ta4datetime, decoration: 'underline', decorationStyle: 'dashed' },
                  '\n\n',
                  'Kepada: ', item.ta4custname, '\n',
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
                margin: [30, 0, 0, 0],
                text: ['Pelanggan TNB Yang Dihormati,']
              },
              {
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: 'SURAT PEMBERITAHUAN PEMERIKSAAN DAN PENGUJIAN PEPASANGAN METER TNB', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },
              {
                margin: [30, 0, 0, 0],
                text: [
                  'Ingin dimaklumkan bahawa pihak TNB sedang menjalankan pemeriksaan dan pengujian terhadap pepasangan meter TNB di premis tuan/puan bagi memastikan ia berfungsi dalam keadaan yang baik.\n\nKerjasama tuan/puan adalah sangat diperlukan semasa proses pemeriksaan dan pengujian dilakukan. Sekiranya terdapat sebarang pertanyaan, sila hubungi pihak TNB di talian 1300-88-5454',
                  '\n\nSekian dimaklumkan, terima kasih.'
                ],
              },
              {
                margin: [30, 20, 0, 0],
                alignment: 'center',
                bold: true,
                text: [
                  //'"PENGGERAK KEMAJUAN NEGARA"\n', //008
                  //'\n“BETTER. BRIGHTER”\n' //008
                  '\n“BETTER WORLD. BRIGHTER LIVES”\n' //008
                ]
              },
              {
                alignment: 'justify',
                margin: [30, 0, 0, 0],
                style: 'normalText',
                text: ' Yang Benar,\n\n\n',
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
                  //'\n', //008
                  // item.ta4department,
                  //{ text: 'SEAL Section', fontSize: 8 }, //008
                  '\n',
                  //{ text: 'Metering Unit, Distribution Network Department', fontSize: 8 }, //008
                  { text: 'SEAL, SBU Metering', fontSize: 8 }, //008
                  '\n',
                  //{ text: 'Distribution Division, TNB', fontSize: 8 },
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

              { text: 'Untuk Kegunaan TNB', bold: true, decoration: 'underline', margin: [30, 0, 0, 0], },


              {
                margin: [30, 0, 0, 0],
                text: '\nSila tanda yang berkenaan\n'
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
                      text: 'Pengguna Hadir'
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
                        text: 'Pengguna Tidak Hadir'
                      }
                    ],
                  ]
                }
              }, {
                margin: [30, 15, 0, 0],
                text:
                  'Disahkan oleh :\n\n',
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
                  'Nama Pekerja: ', item.ta4staffname,
                  '\n',
                  'No.Pekerja: ', item.ta4staffno,
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
              header: {
                fontSize: 10,
                bold: true,
                alignment: 'center',
                margin: [30, 50, 60, 80],
                decoration: 'underline',
              },
              normalText: {
                fontSize: 9,
              },
              subheader: {
                fontSize: 14
              },
              tableHeader: {
                fontSize: 10,
                margin: [50, 30, 0, 0],
                bold: true,
                alignment: 'center',
              },
              superMargin: {
                margin: [30, 0, 40, 0],
                fontSize: 15
              }
            }, defaultStyle: {
              fontSize: 9
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
                    text: ['Tarikh: ', item.ta4datetime]
                  },

                ],
              },
              {
                margin: [30, 20, 10, 0],
                text: ['Kepada: ', item.ta4custname]
              },
              {
                margin: [30, 20, 10, 0],
                text: 'Pelanggan TNB Yang Dihormati,\n'
              },

              {
                margin: [30, 20, 0, 0],
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: "NOTIS PEMBERITAHUAN PEMBERHENTIAN/GANGGUAN SEMENTARA BEKALAN ELEKTRIK BAGI TUJUAN PEMERIKSAAN DAN PENGUJIAN PEPASANGAN METER TNB", style: 'tableHeader' }],
                    [''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              {
                margin: [30, 10, 0, 0],
                text: ["Ingin dimaklumkan bahawa pihak TNB sedang menjalankan pemeriksaan dan pengujian terhadap pepasangan meter TNB di premis tuan/puan bagi memastikan ia berfungsi dalam keadaan yang baik. ",
                  '\n\n',
                  , "Untuk tujuan tersebut, adalah dimaklumkan bahawa bekalan elektrik di premis tuan/puan akan diberhentikan/diganggu sementara pada ",
                  { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },//008
                  ' dari ',
                  { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },//008
                  ' hingga ',
                  { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },//008
                ]
              },
              {
                margin: [30, 20, 0, 0],
                text: [" Kerjasama tuan/puan adalah sangat diperlukan.",
                  '\nSekian dimaklumkan, terima kasih.\n']
              },

              {
                margin: [30, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: [
                  //'\n“PENGGERAK KEMAJUAN NEGARA”\n', //008
                  //'\n“BETTER. BRIGHTER”\n' //008
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
                text: ['Nama Pekerja: ', item.ta4staffname, '\n'
                  , 'No. Pekerja. ', item.ta4staffno]
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
                text: [" Adalah dengan ini saya memahami kandungan notis ini dan tidak bersetuju bekalan elektrik diberhentikan/diganggu sementara bagi tujuan seperti dinyatakan di atas."]
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
                  "Nama (Pengguna/Pemilik/Wakil): ",
                  item.ta4witnessname,
                  '\n\n',
                  "No. Kad Pengenalan: ",
                  item.ta4witnessidenkard,
                  '\n\n',
                  "Tarikh/Masa: ",
                  item.date1
                ]
              },
              '\n',
              {
                pageBreak: 'before',
                margin: [100, 0, 0, 0],
                alignment: 'center',
                text: [
                  "PERATURAN-PERATURAN BEKALAN PEMEGANG LESEN\n\n",
                  "Borang B\n\n",
                  "[subperaturan 6A(2)]\n\n",
                  "MALAYSIA\n\n",
                  "STATE OF ",
                  optItem1.ta4statename,
                  '\n',
                  "AKTA BEKALAN ELEKTRIK 1990"
                ]
              },
              {
                margin: [30, 20, 10, 0],
                lineHeight: 2,
                text: ["Kepada: ", optItem1.ta4custname, '\n',
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
                text: ["Tuan/Puan/Cik/Tetuan,"]
              },
              {
                margin: [30, 10, 20, 0],
                style: 'tableHeader',
                text: ["NOTIS PEMBERHENTIAN/GANGGUAN SEMENTARA BEKALAN ELEKTRIK."]
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
                  "Dimaklumkan bahawa bekalan elektrik di ",
                  optItem1.ta4custaddress,
                  " akan diberhentikan/diganggu sementara pada ",
                  optItem1.ta4datetime,
                  ' dari ',
                  optItem1.ta4starttime,
                  ' hingga ',
                  optItem1.ta4endtime,
                  ' bagi tujuan ',
                  optItem1.ta4purpose
                ]
              },

              {
                margin: [30, 10, 20, 0],
                text: ['\nName of Licensee: TNB\n\n',
                  'Alamat: ',
                  optItem1.ta4officeaddress,
                  '\n\n',
                  'Nomber telefon: ',
                  optItem1.ta4officephone,
                  '\n\n',
                  'Tarikh: ',
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
              },
              tableHeader: {
                fontSize: 10,
                bold: true,
                alignment: 'center'
              },
              custData: {//008
                bold: true
              }
            },
            defaultStyle: {
              fontSize: 9,
            }

          }// End for Form B 
          break;
        }


        // Bahasa Language selected
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
                    text: ['Kepada: ', item.ta4custname]
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
                text: 'Pelanggan TNB Yang Dihormati\n'
              },

              {
                margin: [30, 20, 0, 0],
                bold: true,
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: "SURAT PEMAKLUMAN (SESI PENJELASAN TANPA PREJUDIS) BERHUBUNG TINDAKAN PEMOTONGAN BEKALAN ELEKTRIK DAN TUNTUTAN KERUGIAN HASIL DAN PERBELANJAAN SERTA CAJ BERKAITAN.", style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              {
                margin: [30, 10, 0, 0],
                text: ["Ingin dimaklumkan bahawa pihak TNB telah menjalankan pemeriksaan dan pengujian terhadap pepasangan meter TNB di premis tuan/puan bagi memastikan ia berfungsi dalam keadaan yang baik. Hasil pemeriksaan tersebut mendapati pepasangan meter TNB tidak merekodkan bacaan penggunaan elektrik yang sebenar. ",
                  '\n\n',
                  "Berdasarkan peruntukan Seksyen 38 Akta Bekalan Elektrik 1990, pihak TNB akan melakukan pemotongan bekalan elektrik ke premis tuan/puan seperti notis pemotongan (Borang A) yang diserahkan bersama dengan notis ini dan juga akan membuat tuntutan kerugian hasil dan perbelanjaan serta caj berkaitan.",
                  '\n\n',
                  "Oleh itu, tuan/puan dijemput hadir ke pejabat SEKSYEN JAMINAN HASIL yang beralamat di ",
                  { text: item.ta4officeaddress, decoration: 'underline', decorationStyle: 'dotted' },
                  " selepas 3 hari bekerja daripada tarikh pemeriksaan bagi sesi penjelasan tanpa prejudis berhubung tindakan yang akan TNB lakukan. Tuan/puan juga digalakkan membawa bukti dan dokumen-dokumen sokongan untuk tujuan sesi penjelasan."
                ]
              },
              '\n\n',
              {
                margin: [30, 0, 0, 20],
                text: [
                  "Sekiranya terdapat sebarang pertanyaan, sila hubungi pihak TNB di talian ",
                  { text: item.ta4officephone, decoration: 'underline', decorationStyle: 'dotted' }
                ]

              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: "Sekian, terima kasih."
              },
              '\n\n',
              {
                margin: [30, 10, 0, 0],
                bold: true,
                text: "SEKSYEN JAMINAN HASIL"
              },

              {
                margin: [30, 10, 0, 0],
                bold: true,
                text: "UNIT PENGURUSAN HASIL "
              },

              {
                margin: [30, 10, 0, 0],
                bold: true,
                text: "JABATAN PERKHIDMATAN PENGGUNA"
              },

              {
                margin: [30, 10, 0, 0],
                bold: true,
                text: "BAHAGIAN PEMBAHAGIAN, TNB"
              },
              '\n\n',
              {
                margin: [100, 0, 0, 0],
                italics: true,
                fontSize: 9,
                decoration: 'underline',
                text: "Notis ini merupakan cetakan computer dan tidak memerlukan tandatangan "
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
                margin: [30, 50, 80, 0]
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
                    text: ['Tarikh: ', item.ta4datetime]
                  },

                ],
              },
              {
                margin: [30, 20, 10, 0],
                text: ['Kepada: ', item.ta4custname]
              },
              {
                margin: [30, 20, 10, 0],
                text: 'Pelanggan TNB Yang Dihormati,\n'
              },

              {
                margin: [30, 20, 0, 0],
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: "NOTIS PEMBERITAHUAN PEMBERHENTIAN/GANGGUAN SEMENTARA BEKALAN ELEKTRIK BAGI TUJUAN PEMERIKSAAN DAN PENGUJIAN PEPASANGAN METER TNB", style: 'tableHeader' }],
                    [''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              {
                margin: [30, 10, 0, 0],
                text: ["Ingin dimaklumkan bahawa pihak TNB sedang menjalankan pemeriksaan dan pengujian terhadap pepasangan meter TNB di premis tuan/puan bagi memastikan ia berfungsi dalam keadaan yang baik. ",
                  '\n\n',
                  , "Untuk tujuan tersebut, adalah dimaklumkan bahawa bekalan elektrik di premis tuan/puan akan diberhentikan/diganggu sementara pada ",
                  { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },//008
                  ' dari ',
                  { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },//008
                  ' hingga ',
                  { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },//008
                ]
              },
              {
                margin: [30, 20, 0, 0],
                text: [" Kerjasama tuan/puan adalah sangat diperlukan.",
                  '\nSekian dimaklumkan, terima kasih.\n']
              },

              {
                margin: [30, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: [
                  //'\n“PENGGERAK KEMAJUAN NEGARA”\n', //008
                  //'\n“BETTER. BRIGHTER”\n' //008
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
                text: ['Nama Pekerja: ', item.ta4staffname, '\n'
                  , 'No. Pekerja: ', item.ta4staffno]
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
                text: [" Adalah dengan ini saya memahami kandungan notis ini dan bersetuju bekalan elektrik diberhentikan/diganggu sementara bagi tujuan seperti dinyatakan di atas."]
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
                  "Nama (Pengguna/Pemilik/Wakil): ",
                  item.ta4witnessname,
                  '\n\n',
                  "No. Kad Pengenalan: ",
                  item.ta4witnessidenkard,
                  '\n\n',
                  "Tarikh/Masa: ",
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
                fontSize: 14,
                bold: true
              },
              textMargin: {
                margin: [30, 50, 80, 0]
              }, tableHeader: {
                fontSize: 10,
                bold: true,
                alignment: 'center'
              }, custData: { //008
                bold: true
              }
            }, defaultStyle: {
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
                text: ['JADUAL – BORANG A\n\n', '(subperaturan 6A(1))\n\n', 'MALAYSIA', '\n\n(Zone)  ', { text: item.ta4statename, decoration: 'underline', decorationStyle: 'dotted' }, '\n\nAKTA BEKALAN ELEKTRIK 1990']
              },
              {
                style: 'textMargin',
                text: ['Kepada: ', item.ta4custname, '\n\n', item.ta4custaddress, '\n', item.station, ' - ', item.ta4accountno, '\n\n\n', { text: 'Tuan/Puan/Cik/Tetuan', bold: true }]
              },
              {
                style: 'title',
                margin: [0, 0, 0, 0],
                text: ['NOTIS PEMOTONGAN BEKALAN ELEKTRIK DI BAWAH SUBSEKSYEN 38(1) AKTA BEKALAN ELEKTRIK 1990.']
              },

              {
                margin: [0, 10, 15, 0],
                text: ['Sila ambil perhatian pada  ', { text: item.datetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, ' satu pemeriksaan telah dilakukan terhadap pepasangan kami di premis tuan. Hasil pemeriksaan, kami mendapati bahawa pepasangan tersebut telah diusik atau diubahsuai dalam keadaan yang dinyatakan berikut di bawah:'
                  , '\n\n'
                  , { text: item.ta4anamoly, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                  '\n\n Berdasarkan keterangan di atas, pihak kami berpendapat bahawa suatu kesalahan telah dilakukan di bawah Akta Bekalan Elektrik 1990 (”Akta”) seperti berikut:']
              },

              {
                margin: [0, 0, 15, 0],
                text: '•	Subseksyen 37(1)*'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase2
                    }, {
                      text: 'mengganggu  atau  melaraskan  apa-apa  pepasangan  atau bahagiannya atau mengilang atau  mengimport ', border: [false, false, false, false]
                    }],
                    [{
                      border: [false, false, false, false],
                      text: ''
                    }, {
                      text: 'atau  menjual  apa-apa kelengkapan  sehingga  menyebabkan  atau mungkin  menyebabkan  bahaya  kepada  nyawa  atau  anggota  badan  manusia  atau kerosakan pada mana-mana kelengkapan atau harta lain:.', border: [false, false, false, false]
                    }],


                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subseksyen 37(3)*'
              },
              {
                margin: [0, 0, 15, 0],
                text: '- mengikut apa-apa cara dengan curang:-'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase3
                    }, {
                      text: '(a)	mengambil tenaga;', border: [false, false, false, false]
                    }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase4
                      },
                      {
                        border: [false, false, false, false],
                        text: '(b)	mengguna habis tenaga;'
                      }
                    ], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase5
                      },
                      {
                        border: [false, false, false, false],
                        text: '(c)	mengguna tenaga;'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase6
                      },
                      {
                        border: [false, false, false, false],
                        text: '(d)  mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan'
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'mana-mana pepasangan berlesen untuk merekodkan keluaran atau penggunahabisan tenaga; atau'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase7
                      },
                      {
                        border: [false, false, false, false],
                        text: ' (e)  menghalang apa-apa meter atau alat sedemikian daripada merekodkan dengan sempurnanya keluaran'
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'atau penggunahabisan tenaga.'
                      }],

                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subseksyen 37(14)*'
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
                        text: 'mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan '
                      }],
                    [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'mana-mana pepasangan berlesen bagi merekodkan keluaran atau penggunahabisan tenaga.'
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
                text: ['Sila ambil perhatian bahawa di bawah subseksyen 38(1) Akta, tuan adalah diberi notis bahawa bekalan elektrik di premis seperti di atas akan dipotong pada '
                  , { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }
                  , '\n\n Sila ambil perhatian juga bahawa pihak kami akan membuat tuntutan apa-apa kerugian dan perbelanjaan oleh pihak kami berikutan kesalahan yang dilakukan seperti di atas. Pihak kami akan mengemukakan pernyataan tuntutan kepada tuan dalam masa terdekat.']
              },
              '\n\n',
              {
                margin: [0, 0, 15, 0],
                text: ['Nama Pemegang Lesen: TENAGA NASIONAL BERHAD ',
                  '\n\n',
                  'Alamat: ',
                  '\n\n',
                  item.ta4officeaddress,
                  '\n\n',
                  , 'Tarikh: ',
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
              '\n',
              {
                text: ['*  Tandakan / bagi kesalahan yang berkenaan.']
              },
              {
                margin: [0, 30, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['Penyerahan Notis Borang A\n\n'
                ],
              },
              {
                margin: [30, 0, 0, 0],
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
                  body: [
                    ['Tarikh', optItem1.ta4indatetime],
                    ['Masa', optItem1.ta4starttime],
                    ['Nama Penerima ', optItem1.ta4witnessname],
                    ['T/Tangan Penerima', {
                      stack: [
                        {
                          image: 'sign1',
                          width: 100,
                          height: 50,
                        }
                      ]

                    },
                    ],
                  ]
                }
              },
              {
                margin: [30, 0, 0, 0],
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
                  body: [

                    [
                      {
                        border: [true, false, true, true],
                        text: 'Nama Penyerah Notis'
                      },
                      {
                        border: [true, false, true, true],
                        text: optItem1.ta4staffname
                      }
                    ],

                    ['T/Tangan Penyerah ', {
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
                      'Catatan (jika ada)',
                      optItem1.ta4describe
                    ]
                  ]
                }
              },

              {
                margin: [50, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['Pemotongan Bekalan \n\n']
              },
              {
                margin: [30, 0, 0, 0],
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
                  body: [
                    ['Tarikh', optItem2.ta4datetime],
                    ['Masa', optItem2.ta4starttime],
                    ['Nama Pemotong Bekalan ', optItem2.ta4staffname],
                    ['T/Tangan Pemotong Bekalan ', {
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
                      'Catatan (jika ada)',
                      optItem2.ta4describe
                    ]
                  ]
                }
              },

              {
                // pageBreak: 'before',
                margin: [50, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: ['Penyambungan Semula Bekalan\n\n']
              },
              {
                margin: [30, 0, 0, 0],
                style: 'tableStyle',
                table: {
                  widths: [150, 300],
                  body: [
                    ['Tarikh ', optItem3.ta4datetime],
                    ['Masa', optItem3.ta4starttime],
                    ['Nama Penyambung Bekalan ', optItem3.ta4staffname],
                    ['T/Tangan Penyambung Bekalan ', {
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
                      'Catatan (jika ada)',
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
              }, tableStyle: {
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
                /*   margin: [30, 20, 0, 0],
                  image: 'building',
                  width: 90 */
              },
              '\n',
              {
                margin: [0, 0, 0, 15],
                alignment: 'center',
                text: ['JADUAL – BORANG A\n\n', '(subperaturan 6A(1))\n\n', 'MALAYSIA', '\n\n(Zone)  ', { text: item.ta4statename, decoration: 'underline', decorationStyle: 'dotted' }, '\n\nAKTA BEKALAN ELEKTRIK 1990']
              },
              {
                style: 'textMargin',
                text: ['Kepada: ', item.ta4custname, '\n\n', item.ta4custaddress, '\n', item.station, ' - ', item.ta4accountno, '\n\n\n', { text: 'Tuan/Puan/Cik/Tetuan', bold: true }]
              },
              {
                style: 'title',
                margin: [0, 0, 0, 0],
                text: ['NOTIS PEMOTONGAN BEKALAN ELEKTRIK DI BAWAH SUBSEKSYEN 38(1) AKTA BEKALAN ELEKTRIK 1990.']
              },

              {
                margin: [0, 10, 15, 0],
                text: ['Sila ambil perhatian pada  ', { text: item.datetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData'  }, ' satu pemeriksaan telah dilakukan terhadap pepasangan kami di premis tuan. Hasil pemeriksaan, kami mendapati bahawa pepasangan tersebut telah diusik atau diubahsuai dalam keadaan yang dinyatakan berikut di bawah:'
                  , '\n\n'
                  , { text: item.ta4anamoly, decoration: 'underline', decorationStyle: 'dotted', style: 'custData'  },
                  '\n\n Berdasarkan keterangan di atas, pihak kami berpendapat bahawa suatu kesalahan telah dilakukan di bawah Akta Bekalan Elektrik 1990 (”Akta”) seperti berikut:']
              },

              {
                margin: [0, 0, 15, 0],
                text: '•	Subseksyen 37(1)*'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase2
                    }, {
                      text: 'mengganggu  atau  melaraskan  apa-apa  pepasangan  atau bahagiannya atau mengilang atau  mengimport  atau  menjual  apa-apa ', border: [false, false, false, false]
                    }],
                    [{
                      border: [false, false, false, false],
                      text: ''
                    }, {
                      text: 'kelengkapan  sehingga  menyebabkan  atau mungkin  menyebabkan  bahaya  kepada  nyawa  atau  anggota  badan  manusia  atau kerosakan pada mana-mana kelengkapan atau harta lain:', border: [false, false, false, false]
                    }],


                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subseksyen 37(3)*'
              },
              {
                margin: [0, 0, 15, 0],
                text: '- mengikut apa-apa cara dengan curang:-'
              },
              {
                table: {
                  widths: [10, 'auto'],
                  body: [

                    [{
                      border: [true, true, true, true],
                      text: item.subsectionBase3
                    }, {
                      text: '(a)	mengambil tenaga;', border: [false, false, false, false]
                    }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase4
                      },
                      {
                        border: [false, false, false, false],
                        text: '(b)	mengguna habis tenaga;'
                      }
                    ], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase5
                      },
                      {
                        border: [false, false, false, false],
                        text: '(c)	mengguna tenaga;'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase6
                      },
                      {
                        border: [false, false, false, false],
                        text: '(d)  mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan'
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'mana-mana pepasangan berlesen untuk merekodkan keluaran atau penggunahabisan tenaga; atau'
                      }], [
                      {
                        border: [true, true, true, true],
                        text: item.subsectionBase7
                      },
                      {
                        border: [false, false, false, false],
                        text: ' (e)  menghalang apa-apa meter atau alat sedemikian daripada merekodkan dengan sempurnanya keluaran'
                      }], [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'atau penggunahabisan tenaga.'
                      }],

                  ]
                }
              },
              '\n',
              {
                margin: [0, 0, 15, 0],
                text: '•	Subseksyen 37(14)*'
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
                        text: 'mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan mana-mana pepasangan berlesen'
                      }],
                    [
                      {
                        border: [false, false, false, false],
                        text: ''
                      },
                      {
                        border: [false, false, false, false],
                        text: 'bagi merekodkan keluaran atau penggunahabisan tenaga.'
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
                margin: [0, 50, 0, 0],
                text: ['Sila ambil perhatian bahawa di bawah subseksyen 38(1) Akta, tuan adalah diberi notis bahawa bekalan elektrik di premis seperti di atas akan dipotong pada '
                  , { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData'  }
                  , '\n\n Sila ambil perhatian juga bahawa pihak kami akan membuat tuntutan apa-apa kerugian dan perbelanjaan oleh pihak kami berikutan kesalahan yang dilakukan seperti di atas. Pihak kami akan mengemukakan pernyataan tuntutan kepada tuan dalam masa terdekat.']
              },
              '\n\n',
              {
                margin: [0, 0, 15, 0],
                text: ['Nama Pemegang Lesen: TENAGA NASIONAL BERHAD ',
                  '\n\n',
                  'Alamat: ',
                  '\n\n',
                  item.ta4officeaddress,
                  '\n\n',
                  , 'Tarikh: ',
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
              '\n',
              {
                text: ['*  Tandakan / bagi kesalahan yang berkenaan.']
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
            }, defaultStyle: {
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
                      //text: 'Rujukan Kami : TNB (B) DNET/METER/SEAL', //008
                      text: ['Rujukan Kami : TNB (B) DNET/METER/SEAL/', item.ta4accountno ] //008
                    },
                    {
                      witdh: '*',
                      text: ['Tarikh: ', item.ta4indatetime]
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
                  text: 'Pelanggan TNB Yang Dihormati,'
                },

                {
                  margin: [50, 0, 0, 0],
                  table: {
                    headerRows: 1,
                    body: [
                      [{ text: 'PEMAKLUMAN SEMAKAN PEPASANGAN METER ELEKTRIK OLEH TNB', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                      ['', ''],
                    ]
                  },
                  layout: 'lightHorizontalLines'
                },
                {
                  margin: [30, 20, 20, 0],
                  text: ["Dimaklumkan bahawa pemeriksaan dan pengujian telah dibuat ke atas pepasangan meter yang merekodkan penggunaan elektrik ke premis yang beralamat  ",
                    { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    ' dengan No. Akaun  ', { text: item.ta4accountno, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' }, , { text: ' pada ' },
                    { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    ' jam ',
                    { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },'.',
                    '\n\n Hasil pengujian menunjukkan meter berkenaan tidak merekodkan bacaan penggunaan elektrik yang sebenar dan ini telah diterangkan kepada tuan/puan. Ingin dimaklumkan bahawa tuntutan amaun terkurang caj akan dibuat oleh TNB dan akan dimajukan kepada tuan/puan.',
                    '\n\n Untuk makluman tuan/puan, nombor siri beg eviden adalah ', { text: item.ta4serialNum, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    '\n\n Tuan/puan dijemput hadir ke ', { text: 'Kedai Tenaga yang Berdekatan',style: 'custData' }, ', dan sila nyatakan nombor siri beg eviden untuk penerangan lanjut, selepas ', { text: '14 hari', style: 'custData' }, ' dari tarikh kes di atas.',
                    //'\n\n Sekiranya terdapat sebarang pertanyaan, tuan/puan boleh menghubungi ',
                    //'',
                    //item.ta4officeaddress,
                    //',',
                    //'(No Tel :',
                    '\n\n Sekiranya terdapat sebarang pertanyaan, tuan/puan boleh menghubungi ', {text: 'TNB Careline One Stop Enquiry Centre', style: 'custData' } ,', (No. Tel : ',
                    { text: item.ta4officephone, style: 'custData' },
                    //').',
                    ') untuk tindakan selanjutnya.',
                    '\n\n Sekian, terima kasih.'
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
                      text: 'T/T Pemeriksa:',
                    },
                    {
                      text: 'Diterima Oleh (T/T):',

                    },
                  ]
                },
                '\n',
                {
                  margin: [30, 0, 0, 0],
                  width: 200,
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
                      text: ['Nama Pemeriksa: ', item.ta4staffname]
                    },
                    {
                      text: [
                        'Nama: ',
                        item.ta4witnessname
                      ]
                    }
                  ],
                },
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      text: ['No. Pekerja: ', item.ta4staffno]
                    },
                    {
                      text: [
                        'No.Tel: ',
                        item.ta4witnessphone
                      ]

                    }
                  ],
                },
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      //text: 'Jabatan : SEAL UNIT METERING', //008
                      text: 'Jabatan : SEAL, SBU METERING', //008
                    },
                    {
                      text: [
                        'Tarikh/Masa: ',
                        item.datetime
                      ]

                    }
                  ],
                },
                '\n',
                {
                  //margin: [100, 0, 0, 0],//008
                  margin: [30, 0, 0, 0],//008
                  text: [
                    //'Sk: Pengurus Kawasan/Cawangan: ', //008
                    'Sk: Billing Performance & Revenue Assurance (', //008
                    item.ta4department,
                    ')'
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
                  bold : true,
                }
              },
              defaultStyle: {
                fontSize: 9,
              }
            }
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
                      //text: 'Rujukan Kami : TNB (B) DNET/METER/SEAL', //008
                      text: ['Rujukan Kami : TNB (B) DNET/METER/SEAL/', item.ta4accountno ] //008
                    },
                    {
                      width: '*',
                      text: ['Tarikh: ', item.ta4indatetime]
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
                  text: 'Pelanggan TNB Yang Dihormati,'
                },

                {
                  margin: [50, 0, 0, 0],
                  table: {
                    headerRows: 1,
                    body: [
                      [{ text: 'PEMAKLUMAN SEMAKAN PEPASANGAN METER ELEKTRIK OLEH TNB', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                      ['', ''],
                    ]
                  },
                  layout: 'lightHorizontalLines'
                },
                {
                  margin: [30, 20, 20, 0],
                  text: ["Dimaklumkan bahawa pemeriksaan dan pengujian telah dibuat ke atas pepasangan meter yang merekodkan penggunaan elektrik ke premis yang beralamat  ",
                    { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted', style :'custData' },
                    ' dengan No. Akaun  ', { text: item.ta4accountno, decoration: 'underline', decorationStyle: 'dotted', style :'custData' }, , { text: ' pada ' },
                    { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style :'custData' },
                    ' jam ',
                    { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted', style :'custData' },
                    '\n\n Hasil pengujian menunjukkan meter berkenaan tidak merekodkan bacaan penggunaan elektrik yang sebenar dan ini telah diterangkan kepada tuan/puan. Ingin dimaklumkan bahawa tuntutan amaun terkurang caj akan dibuat oleh TNB dan akan dimajukan kepada tuan/puan.',
                    '\n\n Untuk makluman tuan/puan, nombor siri beg eviden adalah ', { text: item.ta4serialNum, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },
                    '\n\n Tuan/puan dijemput hadir ke ', { text: 'Kedai Tenaga yang Berdekatan',style: 'custData' }, ', dan sila nyatakan nombor siri beg eviden untuk penerangan lanjut, selepas ', { text: '14 hari', style: 'custData' }, ' dari tarikh kes di atas.',                    
                    '\n\n Sekiranya terdapat sebarang pertanyaan, tuan/puan boleh menghubungi ', {text: 'TNB Careline One Stop Enquiry Centre', style: 'custData' } ,', (No. Tel : ',
                    { text: item.ta4officephone, style: 'custData' },
                    ') untuk tindakan selanjutnya.',
                    '\n\n Sekian, terima kasih.'
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
                      text: 'T/T Pemeriksa:',
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
                      text: ['Nama Pemeriksa: ', item.ta4staffname]
                    }
                  ],
                },
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      text: ['No. Pekerja: ', item.ta4staffno]
                    }
                  ],
                },
                {
                  margin: [30, 0, 0, 0],
                  columns: [
                    {
                      //text: 'Jabatan : SEAL UNIT METERING', //008
                      text: 'Jabatan : SEAL, SBU METERING', //008
                    }
                  ],
                },
                '\n',
                {
                  //margin: [100, 0, 0, 0],//008
                  margin: [30, 0, 0, 0],//008
                  text: [
                    //'Sk: Pengurus Kawasan/Cawangan: ', //008
                    'Sk: Billing Performance & Revenue Assurance (', //008
                    item.ta4department,
                    ')'
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
              }, defaultStyle: {
                fontSize: 9,
              }
            }
          } break;
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
                    [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: 'SURAT PEMBERITAHUAN PENGAMBILAN BAHAN-BAHAN BUKTI', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', '', '', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['No Akaun:', { text: item.ta4accountno, decoration: 'underline', decorationStyle: 'dotted' }],
                  },
                  {
                    text: ['Kod Stesen: ', { text: item.station, decoration: 'underline', decorationStyle: 'dotted' }]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: [
                  'Nama Pengguna: ', { text: item.ta4custname, decoration: 'underline', decorationStyle: 'dotted' }, '\n\n',
                  'Adalah saya: ', { text: item.ta4staffname, decoration: 'underline', decorationStyle: 'dotted' }, '\n\n',
                  'No Pekerja: ', { text: item.ta4staffno, decoration: 'underline', decorationStyle: 'dotted' }, ' mengaku telah mengambil  perkara-perkara tersebut di bawah ini:-\n',
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
                  'daripada premis yang beralamat ',
                  { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted' }
                ]
              },
              {
                margin: [30, 0, 0, 0],

                columns: [
                  {
                    text: 'T/Tangan Pengambil:\n',
                  },
                  {
                    text: 'T/Tangan Saksi: ',
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
                    text: ['Nama: ', '\n', { text: item.ta4staffname, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Nama: ', '\n', { text: item.ta4witnessname, decoration: 'underline', decorationStyle: 'dotted' }]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['No Pekerja: ', { text: item.ta4staffno, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Alamat:', '\n', { text: item.ta4custaddress, decoration: 'underline', decorationStyle: 'dotted' }]

                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                text: [
                  'No Kad Pengenalan: ', { text: item.ta4staffindenkard, decoration: 'underline', decorationStyle: 'dotted' }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: 'Jawatan: Juruteknik',
                  },
                  {
                    text: ['No Kad Pengenalan: ', { text: item.ta4witnessidenkard, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                ]
              },
              '\n',

              {
                margin: [30, 0, 0, 0],
                text: [
                  ' Stesen: ', { text: item.ta4officezone, decoration: 'underline', decorationStyle: 'dotted' }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Tarikh: ', { text: item.ta4datetime, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Tarikh: ', { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted' }]
                  }
                ]
              },
              '\n',
              {
                margin: [30, 0, 0, 0],
                columns: [
                  {
                    text: ['Masa: ', { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted' }]
                  },
                  {
                    text: ['Masa: ', { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted' }],
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

              {
                margin: [30, 10, 0, 0],
                style: 'normalText',
                text: [
                  "Tarikh ", { text: item.ta4datetime, decoration: 'underline', decorationStyle: 'dashed' },
                  '\n\n',
                  'Kepada: ', item.ta4custname, '\n',
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
                margin: [30, 0, 0, 0],
                text: ['Pelanggan TNB Yang Dihormati,']
              },
              {
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: 'SURAT PEMBERITAHUAN PEMERIKSAAN DAN PENGUJIAN PEPASANGAN METER TNB', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    ['', ''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },
              {
                margin: [30, 0, 0, 0],
                text: [
                  'Ingin dimaklumkan bahawa pihak TNB sedang menjalankan pemeriksaan dan pengujian terhadap pepasangan meter TNB di premis tuan/puan bagi memastikan ia berfungsi dalam keadaan yang baik.\n\nKerjasama tuan/puan adalah sangat diperlukan semasa proses pemeriksaan dan pengujian dilakukan. Sekiranya terdapat sebarang pertanyaan, sila hubungi pihak TNB di talian 1300-88-5454',
                  '\n\nSekian dimaklumkan, terima kasih.'
                ],
              },
              {
                margin: [30, 20, 0, 0],
                alignment: 'center',
                bold: true,
                text: [
                  //'"PENGGERAK KEMAJUAN NEGARA"\n', //008
                  //'\n“BETTER. BRIGHTER”\n' //008
                  '\n“BETTER WORLD. BRIGHTER LIVES”\n' //008
                ]
              },
              {
                alignment: 'justify',
                margin: [30, 0, 0, 0],
                style: 'normalText',
                text: ' Yang Benar,\n\n\n',
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
                  //'\n', //008
                  // item.ta4department,
                  //{ text: 'SEAL Section', fontSize: 8 }, //008
                  '\n',
                  //{ text: 'Metering Unit, Distribution Network Department', fontSize: 8 }, //008
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
              // { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },

              { text: 'Untuk Kegunaan TNB', bold: true, decoration: 'underline', margin: [30, 0, 0, 0], },


              {
                margin: [30, 0, 0, 0],
                text: '\nSila tanda yang berkenaan\n'
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
                      text: 'Pengguna Hadir'
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
                        text: 'Pengguna Tidak Hadir'
                      }
                    ],
                  ]
                }
              }, {
                margin: [30, 15, 0, 0],
                text:
                  'Disahkan oleh :\n\n',
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
                  'Nama Pekerja: ', item.ta4staffname,
                  '\n',
                  'No.Pekerja: ', item.ta4staffno,
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
              header: {
                fontSize: 10,
                bold: true,
                alignment: 'center',
                margin: [30, 50, 60, 80],
                decoration: 'underline',
              },
              normalText: {
                fontSize: 9,
              },
              subheader: {
                fontSize: 14
              },
              tableHeader: {
                fontSize: 10,
                margin: [50, 30, 0, 0],
                bold: true,
                alignment: 'center',
              },
              superMargin: {
                margin: [30, 0, 40, 0],
                fontSize: 15
              }
            }, defaultStyle: {
              fontSize: 9
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
                    text: ['Tarikh: ', item.ta4datetime]
                  },

                ],
              },
              {
                margin: [30, 20, 10, 0],
                text: ['Kepada: ', item.ta4custname]
              },
              {
                margin: [30, 20, 10, 0],
                text: 'Pelanggan TNB Yang Dihormati,\n'
              },

              {
                margin: [30, 20, 0, 0],
                table: {
                  headerRows: 1,
                  body: [
                    [{ text: "NOTIS PEMBERITAHUAN PEMBERHENTIAN/GANGGUAN SEMENTARA BEKALAN ELEKTRIK BAGI TUJUAN PEMERIKSAAN DAN PENGUJIAN PEPASANGAN METER TNB", style: 'tableHeader' }],
                    [''],
                  ]
                },
                layout: 'lightHorizontalLines'
              },

              {
                margin: [30, 10, 0, 0],
                text: ["Ingin dimaklumkan bahawa pihak TNB sedang menjalankan pemeriksaan dan pengujian terhadap pepasangan meter TNB di premis tuan/puan bagi memastikan ia berfungsi dalam keadaan yang baik. ",
                  '\n\n',
                  , "Untuk tujuan tersebut, adalah dimaklumkan bahawa bekalan elektrik di premis tuan/puan akan diberhentikan/diganggu sementara pada ",
                  { text: item.ta4indatetime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },//008
                  ' dari ',
                  { text: item.ta4starttime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },//008
                  ' hingga ',
                  { text: item.ta4endtime, decoration: 'underline', decorationStyle: 'dotted', style: 'custData' },//008
                ]
              },
              {
                margin: [30, 20, 0, 0],
                text: [" Kerjasama tuan/puan adalah sangat diperlukan.",
                  '\nSekian dimaklumkan, terima kasih.\n']
              },

              {
                margin: [30, 10, 0, 0],
                alignment: 'center',
                bold: true,
                text: [
                  //'\n“PENGGERAK KEMAJUAN NEGARA”\n', //008
                  //'\n“BETTER. BRIGHTER”\n' //008
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
                text: ['Nama Pekerja: ', item.ta4staffname, '\n'
                  , 'No. Pekerja. ', item.ta4staffno]
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
                text: [" Adalah dengan ini saya memahami kandungan notis ini dan tidak bersetuju bekalan elektrik diberhentikan/diganggu sementara bagi tujuan seperti dinyatakan di atas."]
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
                  "Nama (Pengguna/Pemilik/Wakil): ",
                  item.ta4witnessname,
                  '\n\n',
                  "No. Kad Pengenalan: ",
                  item.ta4witnessidenkard,
                  '\n\n',
                  "Tarikh/Masa: ",
                  item.date1
                ]
              },
              '\n',
              {
                pageBreak: 'before',
                margin: [100, 0, 0, 0],
                alignment: 'center',
                text: [
                  "PERATURAN-PERATURAN BEKALAN PEMEGANG LESEN\n\n",
                  "Borang B\n\n",
                  "[subperaturan 6A(2)]\n\n",
                  "MALAYSIA\n\n",
                  "STATE OF ",
                  optItem1.ta4statename,
                  '\n',
                  "AKTA BEKALAN ELEKTRIK 1990"
                ]
              },
              {
                margin: [30, 20, 10, 0],
                lineHeight: 2,
                text: ["Kepada: ", item.ta4custname, '\n',
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
                text: ["Tuan/Puan/Cik/Tetuan,"]
              },
              {
                margin: [30, 10, 20, 0],
                style: 'tableHeader',
                text: ["NOTIS PEMBERHENTIAN/GANGGUAN SEMENTARA BEKALAN ELEKTRIK."]
              },

              {
                margin: [30, 10, 20, 0],
                lineHeight: 1,
                text: [
                  "Dimaklumkan bahawa bekalan elektrik di ",
                  optItem1.ta4custaddress,
                  " akan diberhentikan/diganggu sementara pada ",
                  optItem1.ta4datetime,
                  ' dari ',
                  optItem1.ta4starttime,
                  ' hingga ',
                  optItem1.ta4endtime,
                  ' bagi tujuan ',
                  optItem1.ta4purpose
                ]
              },

              {
                margin: [30, 10, 20, 0],
                text: ['\nName of Licensee: TNB\n\n',
                  'Alamat: ',
                  optItem1.ta4officeaddress,
                  '\n\n',
                  'Nomber telefon: ',
                  optItem1.ta4officephone,
                  '\n\n',
                  'Tarikh: ',
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
              },
              tableHeader: {
                fontSize: 10,
                bold: true,
                alignment: 'center'
              },
              custData: {
                bold: true
              }
            },
            defaultStyle: {
              fontSize: 9,
            }

          }// End for Form B 

        }
      }

      resolve(dd);

    })

  }

}
