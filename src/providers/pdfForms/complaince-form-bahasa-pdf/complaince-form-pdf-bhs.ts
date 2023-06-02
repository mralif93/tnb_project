import { HttpClient } from '@angular/common/http';
import { Injectable, style } from '@angular/core';
import { Http, Headers } from "@angular/http";

import { DataServiceProvider } from "../../../providers/data-service/data-service";

@Injectable()
export class ComplainceFormPdfBhs {

  public url = null;
  public langErr: boolean = true;

  constructor(
    public dataService: DataServiceProvider,
    public http: Http) {
    console.log('Hello ComplaintFormPdfProvider Provider');
  }

  generateComplainceFormPdfBhs(item, soTypes, formType, langType, optItem1, optItem2, optItem3) {
    return new Promise((resolve, reject) => {
      debugger;
      if ('bhs' == langType) {
        this.url = '../www/assets/data/libBahasa.json';
      } else {
        this.url = '../www/assets/data/libEnglish.json';
      }
      resolve();
    }).catch(() => {
      console.log('Proccess not done');
    }).then(() => {
      return new Promise((resolve, reject) => {
        var dd = null;

        this.http
          .get(this.url)
          .map(res => res.json())
          .subscribe(data => {

            console.log("data of load java LPC : " + data.length);


            var fullItems: any;
            debugger;
            fullItems = data;
            console.log("work order result.. " + data.language[0].complianceFormType1.date);
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
                        data.language[0].complianceFormType1.date, item.ta4datetime,
                        '\n\n',
                        'Kepada :', item.ta4custname, '\n',
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
                      text: [data.language[0].complianceFormType1.salutation,]
                    },
                    {
                      table: {
                        headerRows: 1,
                        body: [
                          [{ text: data.language[0].complianceFormType1.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                          ['', ''],
                        ]
                      },
                      layout: 'lightHorizontalLines'
                    },
                    {
                      margin: [30, 15, 0, 0],
                      text: [
                        data.language[0].complianceFormType1.paragraph1,
                        '\n\nSekian dimaklumkan, terima kasih.'
                      ],
                    },
                    {
                      margin: [30, 20, 0, 0],
                      alignment: 'center',
                      bold: true,
                      text: [
                        '"BETTER. BRIGHTER"\n\n',
                        data.language[0].complianceFormType1.moto

                      ]
                    }, {
                      alignment: 'justify',
                      margin: [30, 20, 0, 0],
                      text: [
                        data.language[0].complianceFormType1.signOfSalutation,
                        '\n\n\n'
                      ]
                    },
                    {
                      margin: [30, 20, 0, 0],
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
                    { text: data.language[0].complianceFormType1.tickTitle, decoration: 'underline', margin: [30, 200, 0, 0] },
                    // {
                    //   margin:[30,5,0,0],
                    //   ul:[
                    //     'Customer attend',
                    //     'Customer not attend',
                    //   ]
                    // },
                    {
                      margin: [30, 0, 80, 10],
                      text: '\nSila tanda yang berkenaan\n'
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
                            'Pengguna Hadir'
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
                            'Pengguna Tidak Hadir'
                          ],
                        ]
                      }
                    }, {
                      margin: [30, 15, 0, 0],
                      text: [
                        data.language[0].complianceFormType1.signOff,
                        '\n\n',
                      ]
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
                        data.language[0].complianceFormType1.staffDetailN, item.ta4staffname,
                        data.language[0].complianceFormType1.staffNo, item.ta4staffno
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
                          [{ text: data.language[1].complianceFormType2.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                          ['', '', '', ''],
                        ]
                      },
                      layout: 'lightHorizontalLines'
                    },
                    {
                      margin: [30, 0, 0, 0],
                      columns: [
                        {
                          text: [data.language[1].complianceFormType2.col1Acc, item.ta4accountno],
                        },
                        {
                          text: [data.language[1].complianceFormType2.col2SttCode, item.station]
                        }
                      ]
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      text: [
                        data.language[1].complianceFormType2.custName, item.ta4custname,
                        '\n\n',
                        data.language[1].complianceFormType2.admit, item.ta4staffname,
                        '\n\n',
                        data.language[1].complianceFormType2.staffNo, item.ta4staffno,
                        data.language[1].complianceFormType2.staffNo2,
                      ]
                    },
                    '\n\n',
                    {
                      margin: [30, 0, 0, 0],
                      table: {
                        widths: [30, '*', '*', 0],
                        headerRows: 2,
                        body:
                          soTypes
                      }
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 10],
                      text: [
                        data.language[1].complianceFormType2.addrss, item.ta4custaddress
                      ]
                    },
                    {
                      margin: [30, 0, 0, 0],

                      columns: [
                        {
                          text: 'T/Tangan Pengambil:\n ',
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
                          text: 'T/Tangan Pengambil: ',
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
                          text: ['Nama Pekerja: ', '\n', item.ta4staffname]
                        },
                        {
                          text: ['Nama Pengguna: ', '\n', item.ta4witnessname]
                        }
                      ]
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      columns: [
                        {
                          text: ['No Pekerja ', item.ta4staffno]
                        },
                        {
                          text: ['Alamat', '\n', item.ta4custaddress]

                        }
                      ]
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      text: [
                        'No Kad Pengenalan: ',
                        item.ta4witnessidenkard
                      ]
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      columns: [
                        {
                          text: [
                            'Jawatan: ',
                            'Juruteknik'
                          ]
                        },
                        {
                          text: [
                            'No Kad Pengenalan: ',
                            item.ta4staffindenkard
                          ],

                        }
                      ]
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      text: [
                        ' Stesen: ', item.ta4officezone
                      ]
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      columns: [
                        {
                          text: ['Tarikh: ', item.ta4datetime]
                        },
                        {
                          text: ['Tarikh: ', item.ta4indatetime]

                        }
                      ]
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      columns: [
                        {
                          text: [
                            'Masa: ',
                            item.ta4starttime
                          ]
                        },
                        {
                          text: ['Masa: ', item.ta4endtime]
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
                    images: {
                      tnbLogo: 'data:image/png;base64,../src/assets/imgs/tnb.png',
                    }
                  }

                } // End case for collection evidence

                break;
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
                          text: 'Rujukan Kami : TNB (B) DNET/METER/SEAL',
                        },
                        {
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
                      text: [data.language[3].complianceFormType4.paragraph1,
                      item.ta4custaddress,
                        'dengan No. Akaun _',
                      item.ta4indatetime,
                        ' pada',
                      item.ta4endtime,
                        '\n\n',
                      data.language[3].complianceFormType4.paragraph2,
                        '\n\n',
                      data.language[3].complianceFormType4.paragraph3,
                        ',',
                      item.ta4officeaddress,
                        ',',
                      item.ta4officephone,
                        '\n\n',
                      data.language[3].complianceFormType4.salutationEnd,
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
                      witdth: 400,
                      columns: [
                        {
                          text: data.language[3].complianceFormType4.closure1,
                        },
                        {
                          image: 'sign1',
                          width: 100,
                          height: 50,
                        },
                      ],
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      width: 400,
                      columns: [
                        {
                          text: data.language[3].complianceFormType4.closure2,
                        },
                        {
                          image: 'sign2',
                          width: 100,
                          height: 50,
                        },
                      ],
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      columns: [
                        {
                          text: [data.language[3].complianceFormType4.closure3, item.ta4staffname]
                        },
                        {
                          text: [
                            data.language[3].complianceFormType4.closure4,
                            item.ta4witnessname]

                        }
                      ],
                    },
                    {
                      margin: [30, 0, 0, 0],
                      columns: [
                        {
                          text: [data.language[3].complianceFormType4.closure5, item.ta4staffno]
                        },
                        {
                          text: [
                            data.language[3].complianceFormType4.closure6,
                            item.ta4witnessphone
                          ]

                        }
                      ],
                    },
                    {
                      margin: [30, 0, 0, 0],
                      columns: [
                        {
                          text: data.language[3].complianceFormType4.closure7,
                        },
                        {
                          text: [
                            data.language[3].complianceFormType4.closure8,
                            item.datetime
                          ]

                        }
                      ],
                    },
                    {
                      margin: [100, 0, 0, 0],
                      text: [
                        data.language[3].complianceFormType4.closure9,
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
                } // End of instalation meter
                break;
              //Customer Copy
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
                      text: ['JADUAL – BORANG A\n\n', '(subperaturan 6A(1))\n\n', 'MALAYSIA', '\n\n(zone)  ', item.ta4statename, '\n\nAKTA BEKALAN ELEKTRIK 1990']
                    },
                    {
                      style: 'textMargin',
                      text: ['Kepada:', '\n\n', item.ta4custname, '\n\n', item.ta4custaddress, '\n\n\n\n Tuan/Puan/Cik/Tetuan, ']
                    },
                    {
                      style: 'title',
                      margin: [30, 0, 50, 0],
                      text: ['NOTIS PEMOTONGAN BEKALAN ELEKTRIK DI BAWAH SUBSEKSYEN 38(1) AKTA BEKALAN ELEKTRIK 1990']
                    },

                    {
                      margin: [30, 10, 0, 0],
                      text: ['Sila ambil perhatian pada', item.ta4starttime, 'satu pemeriksaan telah dilakukan terhadap pepasangan kami di premis tuan. Hasil pemeriksaan, kami mendapati bahawa pepasangan tersebut telah diusik atau diubahsuai dalam keadaan yang dinyatakan berikut di bawah:'
                        , '\n\n',
                        item.ta4anamoly,
                        , '\n\nBerdasarkan keterangan di atas, pihak kami berpendapat bahawa suatu kesalahan telah dilakukan di bawah Akta Bekalan Elektrik 1990 (”Akta”) seperti berikut:']
                    },
                    {
                      margin: [30, 200, 0, 0],
                      text: '\nSila tanda yang berkenaan\n'
                    },
                    {
                      margin: [30, 0, 0, 0],
                      table: {
                        widths: [50, 100, 300],
                        heights: [30, 30, 30],
                        body: [
                          [
                            '', 'Subseksyen 37(1)', 'Huraian'],
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
                            'Subseksyen 37(1)', 'mengganggu  atau  melaraskan  apa-apa  pepasangan  atau bahagiannya atau mengilang atau  mengimport  atau  menjual  apa-apa  kelengkapan  sehingga  menyebabkan  atau mungkin  menyebabkan  bahaya  kepada  nyawa  atau  anggota  badan  manusia  atau kerosakan pada mana-mana kelengkapan atau harta lain:'],
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
                            'Subseksyen 37(3)', '(a)	mengambil tenaga;'],
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
                            'Subseksyen 37(3)', '(b) mengguna habis tenaga;'],
                          [
                            {
                              stack: [
                                {
                                  image: item.subsectionBase5,
                                  width: 70,
                                  height: 20,
                                }
                              ]

                            }, 'Subseksyen 37(3)', '(c)	mengguna tenaga;'],
                          [
                            {
                              stack: [
                                {
                                  image: item.subsectionBase6,
                                  width: 70,
                                  height: 20,
                                }
                              ]

                            }, 'Subseksyen 37(3)', '(d)	mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan mana-mana pepasangan berlesen untuk merekodkan keluaran atau penggunahabisan tenaga; atau '],
                          [
                            {
                              stack: [
                                {
                                  image: item.subsectionBase7,
                                  width: 70,
                                  height: 20,
                                }
                              ]

                            }, 'Subseksyen 37(3)', '(e) menghalang apa-apa meter atau alat sedemikian daripada merekodkan dengan sempurnanya keluaran atau penggunahabisan tenaga. '],
                          [
                            {
                              stack: [
                                {
                                  image: item.subsectionBase8,
                                  width: 70,
                                  height: 20,
                                }
                              ]

                            }, 'Subseksyen 37(14)', 'merosakkan apa-apa meter atau alat lain yang digunakan atas atau berkaitan dengan mana-mana pepasangan berlesen bagi merekodkan keluaran atau penggunahabisan tenaga. '],

                        ]
                      }
                    },
                    {
                      margin: [30, 50, 0, 0],
                      text: ['Sila ambil perhatian bahawa di bawah subseksyen 38(1) Akta, tuan adalah diberi notis bahawa bekalan elektrik di premis seperti di atas akan dipotong pada'
                        , item.datetime,
                        , '\n\n Sila ambil perhatian juga bahawa pihak kami akan membuat tuntutan apa-apa kerugian dan perbelanjaan oleh pihak kami berikutan kesalahan yang dilakukan seperti di atas. Pihak kami akan mengemukakan pernyataan tuntutan kepada tuan dalam masa terdekat.']
                    },
                    '\n\n',

                    {
                      margin: [30, 0, 0, 0],
                      columns: [
                        {
                          text: 'Nama Pemegang Lesen: TENAGA NASIONAL BERHAD',
                        },

                      ],
                    },
                    {
                      margin: [30, 0, 0, 0],
                      text: [
                        '\n\n',
                        'Alamat: ',
                        '\n\n',
                        item.ta4officeaddress,
                        '\n\n',
                        'Tarikh: ',
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

                }// End for customer Electric cut
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
                      margin: [30, 0, 0, 0],
                      alignment: 'center',
                      text: ['JADUAL – BORANG A\n\n', '(subperaturan 6A(1))\n\n', 'MALAYSIA\n\n', item.ta4statename, '\n\nAKTA BEKALAN ELEKTRIK 1990']
                    },
                    {
                      style: 'textMargin',
                      text: ['Kepada:', '\n\n', item.ta4custname, '\n\n', item.ta4custaddress, '\n\n\n Tuan/Puan/Cik/Tetuan, ']
                    },
                    {
                      style: 'title',
                      margin: [30, 0, 0, 0],
                      text: ['NOTIS PEMOTONGAN BEKALAN ELEKTRIK DI BAWAH SUBSEKSYEN 38(1) AKTA BEKALAN ELEKTRIK 1990']
                    },

                    {
                      margin: [30, 10, 0, 0],
                      text: [
                        'Sila ambil perhatian pada',
                        item.ta4starttime,
                        'satu pemeriksaan telah dilakukan terhadap pepasangan kami di premis tuan. Hasil pemeriksaan, kami mendapati bahawa pepasangan tersebut telah diusik atau diubahsuai dalam keadaan yang dinyatakan berikut di bawah:',
                        '\n\n'
                        , item.ta4anamoly,
                        '\n\n'
                        , 'Berdasarkan keterangan di atas, pihak kami berpendapat bahawa suatu kesalahan telah dilakukan di bawah Akta Bekalan Elektrik 1990 (”Akta”) seperti berikut:']
                    },
                    {
                      margin: [30, 200, 0, 0],
                      text: '\nSila tanda yang berkenaan\n'
                    },
                    {
                      margin: [30, 0, 0, 0],
                      table: {
                        widths: [50, 100, 300],
                        heights: [30, 30, 30],
                        body: [
                          [
                            '', 'Subseksyen 37(1)', 'Penerangan'],
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
                            'Subseksyen 37(1)', 'mengganggu  atau  melaraskan  apa-apa  pepasangan  atau bahagiannya atau mengilang atau  mengimport  atau  menjual  apa-apa  kelengkapan  sehingga  menyebabkan  atau mungkin  menyebabkan  bahaya  kepada  nyawa  atau  anggota  badan  manusia  atau kerosakan pada mana-mana kelengkapan atau harta lain: '],
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
                            'Subseksyen 37(3)', ' (a)mengambil tenaga '],
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
                            'Subseksyen 37(3)', '(b) mengguna habis tenaga '],
                          [
                            {
                              stack: [
                                {
                                  image: item.subsectionBase5,
                                  width: 70,
                                  height: 20,
                                }
                              ]

                            }, 'Subseksyen 37(3)', '(c)	mengguna tenaga '],
                          [
                            {
                              stack: [
                                {
                                  image: item.subsectionBase6,
                                  width: 70,
                                  height: 20,
                                }
                              ]

                            }, 'Subseksyen 37(3)', '(d)	mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan mana-mana pepasangan berlesen untuk merekodkan keluaran atau penggunahabisan tenaga; atau'],
                          [
                            {
                              stack: [
                                {
                                  image: item.subsectionBase7,
                                  width: 70,
                                  height: 20,
                                }
                              ]

                            }, 'Subseksyen 37(3)', '(e)	menghalang apa-apa meter atau alat sedemikian daripada merekodkan dengan sempurnanya keluaran atau penggunahabisan tenaga.'],
                          [
                            {
                              stack: [
                                {
                                  image: item.subsectionBase8,
                                  width: 70,
                                  height: 20,
                                }
                              ]

                            }, 'Subseksyen 37(14)', 'merosakkan apa-apa meter atau alat lain yang digunakan atas atau berkaitan dengan mana-mana pepasangan berlesen bagi merekodkan keluaran atau penggunahabisan tenaga.'],

                        ]
                      }
                    },
                    {
                      margin: [30, 50, 0, 0],
                      text: ['Sila ambil perhatian bahawa di bawah subseksyen 38(1) Akta, tuan adalah diberi notis bahawa bekalan elektrik di premis seperti di atas akan dipotong pada'
                        , item.datetime,
                        '\n\n'
                        , ' Sila ambil perhatian juga bahawa pihak kami akan membuat tuntutan apa-apa kerugian dan perbelanjaan oleh pihak kami berikutan kesalahan yang dilakukan seperti di atas. Pihak kami akan mengemukakan pernyataan tuntutan kepada tuan dalam masa terdekat.']
                    },
                    '\n\n',
                    {
                      margin: [30, 0, 0, 0],
                      text: ['Nama Pemegang Lesen: TENAGA NASIONAL BERHAD ',
                        '\n\n',
                        'Address: ',
                        '\n\n',
                        item.ta4officeaddress,
                        '\n\n',
                        , 'Date: ',
                        item.ta4indatetime
                      ]
                    },
                    {
                      pageBreak: 'before',
                      margin: [50, 30, 0, 0],
                      alignment: 'center',
                      bold: true,
                      text: ['Penyerahan Notis Borang A\n\n']
                    },
                    {
                      margin: [30, 0, 0, 0],
                      table: {
                        widths: [150, 300],
                        heights: [30, 30, 30],
                        body: [
                          ['Tarikh ', optItem1.ta4indatetime],
                          ['Mase', optItem1.ta4starttime],
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
                          /*  ['Nama Penyerah Notis', item.ta4staffname],
                           ['T/Tangan Penyerah Notis', {
                             stack: [
                               {
                                 image: 'sign2'
                               }
                             ]
    
                           },
                           ],
                           [
                             'Catatan (jika ada)',
                             item.ta4describe
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
                            'Nama Penyerah Notis',
                            optItem1.ta4staffname
                          ],

                          [
                            'Catatan (jika ada)',
                            optItem1.ta4describe
                          ]
                        ]
                      }
                    },
                    '\n',
                    {
                      margin: [50, 10, 0, 0],
                      alignment: 'center',
                      bold: true,
                      text: ['Pemotongan Bekalan \n\n']
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      table: {
                        widths: [150, 300],
                        heights: [30, 30, 30],
                        body: [
                          ['Tarikh', optItem2.ta4datetime],
                          ['Mase', optItem2.ta4starttime],
                          ['Nama Pemotong Bekalan ', optItem2.ta4staffname],
                          ['T/Tangan Pemotong Bekalan', {
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
                            'Catatan (jika ada) ',
                            optItem2.ta4describe
                          ]
                        ]
                      }
                    },
                    '\n',
                    {
                      pageBreak: 'before',
                      margin: [50, 10, 0, 0],
                      alignment: 'center',
                      bold: true,
                      text: ['Penyambungan Semula Bekalan\n\n']
                    },
                    {
                      margin: [30, 0, 0, 0],
                      table: {
                        widths: [150, 300],
                        heights: [30, 30, 30],
                        body: [
                          ['Tarikh', optItem3.ta4datetime],
                          ['Mase', optItem3.ta4starttime],
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
                          text: ['Tarikh :', item.ta4datetime]
                        },

                      ],
                    },
                    {
                      margin: [30, 20, 10, 0],
                      text: ['Kepada :', item.ta4custname]
                    },
                    {
                      margin: [30, 20, 10, 0],
                      text: 'Pelanggan TNB Yang Dihormati\n'
                    },

                    {
                      margin: [30, 20, 0, 0],
                      table: {
                        headerRows: 1,
                        body: [
                          [{ text: data.language[4].complianceFormType5.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                          ['', '', '', ''],
                        ]
                      },
                      layout: 'lightHorizontalLines'
                    },

                    {
                      margin: [30, 10, 0, 0],
                      text: [data.language[4].complianceFormType5.paragraph1,
                        '\n\n',
                        , data.language[4].complianceFormType5.paragraph2,
                      item.ta4indatetime,
                      data.language[4].complianceFormType5.paragraph5,
                      item.ta4starttime,
                        ' hingga ',
                      item.ta4endtime
                      ]
                    },
                    {
                      margin: [30, 20, 0, 0],
                      text: [data.language[4].complianceFormType5.paragraph3, '\nSekian dimaklumkan, terima kasih.\n']
                    },

                    {
                      margin: [30, 10, 0, 0],
                      alignment: 'center',
                      bold: true,
                      text: ['\n“PENGGERAK KEMAJUAN NEGARA”\n']
                    },
                    {
                      margin: [30, 0, 0, 0],

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
                      margin: [30, 10, 0, 0],
                      text: [data.language[4].complianceFormType5.paragraph4]
                    },
                    {
                      margin: [30, 0, 0, 0],

                      image: 'sign2',
                      width: 100,
                      height: 50,
                    },
                    {
                      margin: [30, 10, 0, 0],
                      text: [data.language[5].complianceFormType6.verifyBy[0].By,
                      item.ta4witnessname,
                        '\n\n',
                        'No. Kad Pengenalan: ',
                      item.ta4witnessidenkard,
                        '\n\n',
                      data.language[5].complianceFormType6.verifyBy[2].DateTime,
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
                        "PERATURAN-PERATURAN BEKALAN PEMEGANG LESEN\n\n",
                        "Borang B\n\n",
                        "subperaturan 6A(2)\n\n",
                        "MALAYSIA\n\n",
                        "STATE OF ",
                        item.ta4statename,
                        "\n",
                        "AKTA BEKALAN ELEKTRIK 1990"
                      ]
                    },
                    {
                      margin: [30, 20, 10, 0],
                      text: ["Kepada: ", item.ta4custname, '\n',
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
                      text: ["Tuan/Puan/Cik/Tetuan,"]
                    },
                    {
                      bold: true,
                      // margin: [50, 10, 20, 0],
                      margin: [30, 10, 20, 0],
                      text: [data.language[5].complianceFormType6.title],
/*                     table: {
                    headerRows: 1,
                    body: [
                      [{ text: data.language[5].complianceFormType6.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                      ['', '', '', ''],
                    ]
                  },
                  layout: 'lightHorizontalLines'
*/                  },

                    {
                      margin: [30, 10, 20, 0],
                      lineHeight: 1,
                      text: [
                        data.language[5].complianceFormType6.paragraph1,
                        item.ta4custaddress,
                        ' akan diberhentikan/diganggu sementara pada ',
                        item.ta4datetime,
                        ' dari ',
                        item.ta4starttime,
                        ' hingga ',
                        item.ta4endtime,
                        ' bagi tujuaan ',
                        item.ta4purpose
                      ]
                    },
                    {
                      margin: [30, 10, 20, 0],
                      text: ['\nName Pemegang Lesen : TNB\n\n',
                        'Alamat: ',
                        item.ta4officeaddress,
                        '\n\n',
                        'Nomber telefon: ',
                        item.ta4officephone,
                        '\n\n',
                        'Tarikh: ',
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

              //Case for prejudice
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
                          text: ['Kepada: ', item.ta4custname]
                        },
                      ],
                    },
                    {
                      margin: [30, 0, 0, 0],
                      table: {
                        widths: ['*'],
                        headerRows: 0,
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
                      table: {
                        headerRows: 1,
                        body: [
                          [{ text: data.language[6].complianceFormType7.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                          ['', ''],
                        ]
                      },
                      layout: 'lightHorizontalLines'
                    },

                    {
                      margin: [30, 10, 0, 0],
                      text: [data.language[6].complianceFormType7.paragraph1,
                        '\n\n',
                      data.language[6].complianceFormType7.paragraph2,
                        '\n\n',
                      data.language[6].complianceFormType7.paragraph3,
                      item.ta4officeaddress,
                      data.language[6].complianceFormType7.paragraph4
                      ]
                    },
                    '\n\n',
                    {
                      margin: [30, 0, 0, 0],
                      text: [
                        data.language[6].complianceFormType7.closure,
                        item.ta4officephone
                      ]
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      text: data.language[6].complianceFormType7.closure2
                    },
                    '\n\n',
                    {
                      margin: [30, 0, 0, 0],
                      bold: true,
                      text: data.language[6].complianceFormType7.addressOffice
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      bold: true,
                      text: data.language[6].complianceFormType7.addressOffice2
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      bold: true,
                      text: data.language[6].complianceFormType7.addressOffice3
                    },
                    '\n',
                    {
                      margin: [30, 0, 0, 0],
                      bold: true,
                      text: data.language[6].complianceFormType7.addressOffice4
                    },
                    '\n\n',
                    {
                      margin: [100, 0, 0, 0],
                      italics: true,
                      fontSize: 10,
                      decoration: 'underline',
                      text: data.language[6].complianceFormType7.noticeReminder
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
            }// End swtich case
            resolve(dd);
            reject('Unable to create PDF');

          });
      });
    })
  }
}