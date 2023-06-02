import { Component } from '@angular/core';

/**
 * Generated class for the SiteAddressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'site-address',
  templateUrl: 'site-address.html'
})
export class SiteAddressComponent {

  text: string;
  address: string;

  constructor() {
    console.log('Hello SiteAddressComponent Component');
  }

  SiteIdAddress(siteId) {
    debugger;
    switch (siteId) {

      //Selangor
      case "TNB Petaling Jaya": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }
      case "TNB Shah Alam": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }
      case "TNB Subang Jaya": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }
      case "TNB Klang": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }
      case "TNB Kuala Selangor": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }
      case "TNB Banting": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }
      case "TNB Pelabuhan Klang": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }
      case "TNB Sungai Besar": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }
      case "TNB Sepang": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }
      case "TNB Rawang": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }
      case "TNB Bangi": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }
      case "TNB Cheras": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }
      case "TNB Putrajaya & Cyberjaya": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }
      case "TNB Puchong": {
        this.address = 'Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor Darul Ehsan';
        break;
      }

      //Selatan
      case "TNB Batu Pahat": {
        this.address = 'Jalan Bakau Chondong, 83000 Batu Pahat, Johor';
        break;
      }
      case "TNB Pontian": {
        this.address = 'Jalan Parit Masjid, 82000 Pontian,Johor';
        break;
      }
      case "TNB Johor Bahru": {
        this.address = 'Aras 1, Wisma TNB, Jalan Yahya Awal, 80100 Johor Bahru, Johor';
        break;
      }
      case "TNB Kota Tinggi": {
        this.address = 'Jalan Tun Habab, 81900 Kota Tinggi, Johor';
        break;
      }
      case "TNB Kulai Jaya": {
        this.address = 'Lot 6610, Batu 18 1/4, Jalan Senai-Kuali 81000 Kulai Jaya, Johor';
        break;
      }
      case "TNB Pasir Gudang": {
        this.address = 'No. 77-83, Jalan Masai Utama 1, Taman Masai Utama, 81750 Masai, Johor';
        break;
      }
      case "TNB Johor Jaya": {
        this.address = 'No. 79-81 Jalan Molek 3/10, Taman Molek, 81100 Johor Jaya, Johor';
        break;
      }
      case "TNB Muar": {
        this.address = 'Jalan Sulaiman, 84000 Muar, Johor';
        break;
      }
      case "TNB Segamat": {
        this.address = 'Jalan Hassan, 85000 Segamat, Johor';
        break;
      }
      case "TNB Tangkak": {
        this.address = 'Jalan Payamas, 84900 Tangkak, Johor';
        break;
      }
      case "TNB Kluang": {
        this.address = 'Jalan Mengkibol, 86000 Kluang, Johor';
        break;
      }
      case "TNB Mersing": {
        this.address = 'No. 48 Jalan Ismail. 86800 Mersing, Johor';
        break;
      }
      case "TNB Melaka Barat": {
        this.address = 'Jalan Banda Kaba, 75990 Melaka, Melaka';
        break;
      }
      case "TNB Alor Gajah": {
        this.address = 'No. 3055, Lot 11 Bgn. Prima 78000 Alor Gajah, Melaka';
        break;
      }
      case "TNB Melaka Timur": {
        this.address = 'JB 3636, Jalan Melaka, 77000 Jasin, Melaka';
        break;
      }
      case "TNB Masjid Tanah": {
        this.address = 'Jalan Besar, 78300 Masjid Tanah, Melaka';
        break;
      }
      case "TNB Merlimau": {
        this.address = 'Jalan Jasin, 77300 Merlimau, Melaka';
        break;
      }
      case "TNB Tampin": {
        this.address = 'Lot 176, Jalan Besar, 73000 Tampin, Negeri Sembilan';
        break;
      }
      case "TNB Seremban": {
        this.address = 'Aras Bawah, Wisma TNB , Jalan Dato Bandar Tunggal, 70990 Seremban, Negeri Sembilan';
        break;
      }
      case "TNB Kuala Klawang": {
        this.address = 'PT 54 Jalan Dato Menteri, 71600 Kuala Klawang, Negeri Sembilan';
        break;
      }
      case "TNB Port Dickson": {
        this.address = 'KM 3, Jalan Pantai, 71009 Port Dickson, Negeri Sembilan';
        break;
      }
      case "TNB Rembau": {
        this.address = 'No. 30, Jalan Terentang, 71300 Rembau, Negeri Sembilan';
        break;
      }
      case "TNB Nilai": {
        this.address = 'PT 7444, Jalan BBN 1/2H Putra Point, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan';
        break;
      }
      case "TNB Gemas": {
        this.address = 'No. 21 Jalan Pasar, 73400 Gemas, Negeri Sembilan';
        break;
      }
      case "TNB Kuala Pilah": {
        this.address = 'Jalan Bahau, 72009 Kuala Pilah, Negeri Sembilan.';
        break;
      }
      case "TNB Bahau": {
        this.address = 'No 37, Jalan Margosa Maju Utama Taman Margosa Maju, Jalan Mahsan 72100 Bahau, Negeri Sembilan';
        break;
      }
      case "TNB Alor Setar": {
        this.address = 'Aras 1, Wisma TNB, No. 887, Jalan Sultan Badlishah, 05990 Alor Setar, Kedah';
        break;
      }
      case "TNB Jitra": {
        this.address = 'Bt. 13 Jalan Changloon, 06000 Jitra, Kedah';
        break;
      }
      case "TNB Langkawi": {
        this.address = 'No. 1, Lebuh Raya Langkawi 07000 Kuah, Langkawi, Kedah';
        break;
      }
      case "TNB Guar Chempedak": {
        this.address = 'No.40-43A,Kompleks Perniagaan Guar Utama, Jalan Guar Utama 5, 08800 Guar Chempedak, Kedah';
        break;
      }

      //Utara
      case "TNB Kuala Nerang": {
        this.address = 'No. 1A-1B Pekan Kuala Nerang, 06300 Kuala Nerang, Kedah';
        break;
      }
      case "TNB Pendang": {
        this.address = 'No. 119-121 Rumah Kedai 2 Tkt, Jalan Sukmari, 06700 Pendang, Kedah';
        break;
      }
      case "TNB Sungai Petani": {
        this.address = 'No. 23 Jalan Petri 08009 Sg. Petani, Kedah';
        break;
      }
      case "TNB Baling": {
        this.address = 'Bangunan Umno/Wakaf, Jalan Sultan Abdul Halim, 09100 Baling, Kedah';
        break;
      }
      case "TNB Sik": {
        this.address = 'No. 8-9 Bangunan Inai Pekan Sik, 08000 Sik, Kedah';
        break;
      }
      case "TNB Kulim": {
        this.address = 'Jalan Pondok Labu, 09000 Kulim, Kedah';
        break;
      }
      case "TNB Bandar Baharu": {
        this.address = 'No.1 Kompleks Perniagaan Melur Jaya, Tmn Melur Jaya,Jln Raya, 09800 Serdang, Kedah';
        break;
      }
      case "TNB Bertam": {
        this.address = 'Tgkt. Bwh Bgn.Umno, Bhg. Kepala Batas, 13200 Kepala Batas, Pulau Pinang.';
        break;
      }
      case "TNB Seberang Jaya": {
        this.address = 'No. 3031 Jalan Tenaga Seberang Jaya 13700 Prai, Pulau Pinang';
        break;
      }
      case "TNB Nibong Tebal": {
        this.address = 'TNB, No. 51-57, Jalan Cenderawasih 3, Taman Cenderawasih Indah, 14300 Nibong Tebal';
        break;
      }
      case "TNB Pulau Pinang": {
        this.address = 'No. 30 Jalan Anson, 10400 Pulau Pinang';
        break;
      }
      case "TNB Bayan Baru": {
        this.address = 'No. 64 Off Jalan Mahsuri 11950 Bandar Bayan Baru, Pulau Pinang.';
        break;
      }
      case "TNB Ipoh": {
        this.address = 'Wisma TNB Jalan Lahat 30200 Ipoh, Perak';
        break;
      }
      case "TNB Taiping": {
        this.address = 'No. 20, Jalan Istana Larut, 34000 Taiping, Perak';
        break;
      }
      case "TNB Bagan Serai": {
        this.address = 'TNB, Lot 7364, Jalan Taiping, 34300 Bagan Serai, Perak';
        break;
      }
      case "TNB Teluk Intan": {
        this.address = 'Jalan Changkat Jong, 36009 Teluk Intan, Perak';
        break;
      }
      case "TNB Hutan Melintang": {
        this.address = 'TNB, 4, Lorong Anggerik 1, Taman Desa Bersatu 36400 Hutan Melintang';
        break;
      }
      case "TNB Kampar": {
        this.address = 'TNB, Lot 2209-2211, Jalan Timah, Taman Bandar Baru, 31900 Kampar .';
        break;
      }
      case "TNB Bidor": {
        this.address = 'TNB, Lot 6121, Jalan Tapah, 35500 Bidor, Perak';
        break;
      }
      case "TNB Tanjong Malim": {
        this.address = 'TNB, 43, Jalan Permai 1, Taman Ketoyong Permai 35900 Tanjung Malim';
        break;
      }
      case "TNB Seri Iskandar": {
        this.address = 'Lot 23 & 24, Taman Iskandar Bistari, Bandar Seri Iskandar, 32610 Seri Iskandar, Perak';
        break;
      }
      case "TNB Ulu Kinta": {
        this.address = 'TNB, Jalan Besar, Ulu Kinta, 31860 Tanjung Rambutan, Perak';
        break;
      }
      case "TNB Batu Gajah": {
        this.address = 'No. 29 Jalan Dewangsa, 31009 Batu Gajah, Perak';
        break;
      }
      case "TNB Kuala Kangsar": {
        this.address = 'Lot 1535, Jalan Sultan Iskandar Shah, Perak';
        break;
      }
      case "TNB Gerik": {
        this.address = 'TNB, 24 & 25, Taman Semarak, 33300 Gerik';
        break;
      }
      case "TNB Sg. Siput": {
        this.address = 'TNB, 13-13A, Persiaran Komersial 2, Komersial Waterfront, 31100 Sungai Siput (U)';
        break;
      }
      case "TNB Sri Manjung": {
        this.address = 'Lot 1754, Jalan Dato Sri Kamaruddin, 32040 Seri Manjung, Perak.';
        break;
      }
      case "TNB Kangar": {
        this.address = 'Bulatan Jubli Emas, 01000 Kangar, Perlis';
        break;
      }

      // Kuala Lumpur
      case "TNB Kuala Lumpur - Barat": {
        this.address = 'Tingkat Bawah, Wisma TNB Jalan Kepong, 50990 Kuala Lumpur';
        break;
      }
      case "TNB Kuala Lumpur - Timur": {
        this.address = 'Tingkat Bawah, Wisma TNB Jalan Kepong, 50990 Kuala Lumpur';
        break;
      }
      case "TNB Kuala Lumpur - Pusat": {
        this.address = 'Tingkat Bawah, Wisma TNB Jalan Kepong, 50990 Kuala Lumpur';
        break;
      }
      case "TNB Kuala Lumpur - Selatan": {
        this.address = 'Tingkat Bawah, Wisma TNB Jalan Kepong, 50990 Kuala Lumpur';
        break;
      }

      //Timur
      case "TNB Kota Bharu": {
        this.address = 'Aras 1, Wisma TNB, Jalan Tok Hakim, 15000 Kota Bharu, Kelantan';
        break;
      }
      case "TNB Kuala Krai": {
        this.address = 'Jalan Tengku Zainal Abidin, 18000 Kuala Krai, Kelantan';
        break;
      }
      case "TNB Pasir Mas": {
        this.address = 'Jalan Masjid Lama, 17000 Pasir Mas, Kelantan';
        break;
      }
      case "TNB Pasir Puteh": {
        this.address = 'Jalan Machang, 16800 Pasir Puteh, Kelantan';
        break;
      }
      case "TNB Gua Musang": {
        this.address = 'Lot 336, Bandar Baru, 18300 Gua Musang, Kelantan';
        break;
      }
      case "TNB Tumpat": {
        this.address = '1, Jalan Kasturi 1, Wakaf Delima, 16250 Wakaf Bharu, Tumpat, Kelantan';
        break;
      }
      case "TNB Bachok": {
        this.address = 'PT 147, Jalan Kg. Telok, 16300 Bachok, Kelantan';
        break;
      }
      case "TNB Tanah Merah": {
        this.address = 'Lot 531, Jalan Pasir Mas, 17500 Tanah Merah, Kelantan';
        break;
      }
      case "TNB Machang": {
        this.address = 'Lot 779 & 780, Jalan Bakti, 18500 Machang, Kelantan';
        break;
      }
      case "TNB Jeli": {
        this.address = 'Jalan Jeli/Dabong, 17600 Jeli, Kelantan';
        break;
      }
      case "TNB Cameron Highlands": {
        this.address = 'B-G-3 – B-G-11, Jalan Royal Lily 1, 39000 Tanah Rata, Cameron Highlands, Pahang';
        break;
      }
      case "TNB Kuantan": {
        this.address = 'Wisma TNB Lot 14, Seksyen 19, Jalan Gambut, 25150 Kuantan, Pahang';
        break;
      }
      case "TNB Gebeng": {
        this.address = 'A5 Jalan Gebeng 2/8, Kaw. Perindustrian Gebeng, 26080 Kuantan, Pahang.';
        break;
      }
      case "TNB Pekan": {
        this.address = 'Lot 27, Seksyen 8, Jalan Sultan Ahmad, 26600 Pekan, Pahang';
        break;
      }
      case "TNB Rompin": {
        this.address = 'No. 49&51, Jalan Syed Othman, Taman Sentosa, 26800 Kuala Rompin, Pahang';
        break;
      }
      case "TNB Muadzam Shah": {
        this.address = 'MM209 & 210, Medan Mewah, 26700 Muadzam Shah, Pahang';
        break;
      }
      case "TNB Tioman": {
        this.address = 'No. 49&51, Jalan Syed Othman, Taman Sentosa, 26800 Kuala Rompin, Pahang';
        break;
      }
      case "TNB Raub": {
        this.address = 'Jalan Pekeliling, 27600 Raub, Pahang';
        break;
      }
      case "TNB Bentong": {
        this.address = 'Jalan Sri Jaafar, 28709 Bentong, Pahang';
        break;
      }
      case "TNB Kuala Lipis": {
        this.address = 'Jalan Lipis Benta, 27200 Kuala Lipis, Pahang.';
        break;
      }
      case "TNB Temerloh": {
        this.address = 'No.40, Jalan Tengku Ismail, 28000 Temerloh, Pahang';
        break;
      }
      case "TNB Maran": {
        this.address = 'Bandar Baru Maran, 26500 Maran, Pahang';
        break;
      }
      case "TNB Jengka": {
        this.address = 'Jalan Besar, 26400 Pusat Bandar Jengka, Pahang';
        break;
      }
      case "TNB Jerantut": {
        this.address = 'Jalan Dulang, Bandar Baru, 27000 Jerantut, Pahang';
        break;
      }
      case "TNB Triang": {
        this.address = 'No. 28 Jalan Sri Kerayong 2, Bandar Baru Bera, 28200 Triang, Bera, Pahang.';
        break;
      }
      case "TNB Kuala Terengganu": {
        this.address = 'Jalan Banggol, 20100 Kuala Terengganu, Terengganu';
        break;
      }
      case "TNB Kemaman": {
        this.address = 'Jalan Sulaiman, 24000 Kemaman, Terengganu';
        break;
      }
      case "TNB Dungun": {
        this.address = 'Lot 7933, Jalan Baru Pak Sabah, 23000 Dungun, Terengganu';
        break;
      }
      case "TNB Besut": {
        this.address = 'Karung Berkunci No.1, Jalan Tembila, Kampung Raja, 22200 Besut, Terengganu';
        break;
      }
      case "TNB Setiu": {
        this.address = 'Jalan Permaisuri 2 Bandar Pemaisuri 22100 Setiu, Terengganu';
        break;
      }
      case "TNB Kerteh": {
        this.address = 'Lot 72 & 73 Bandar Sri Kerteh 24300 Kerteh, Kemaman, Terengganu.';
        break;
      }
      case "TNB Kuala Berang": {
        this.address = 'No. 7 Taman Tiras, 21700 Kuala Berang, Terengganu';
        break;
      }
      case "TNB AMBS": {
        this.address = 'Bangunan Koperasi 3K, Jalan Sultan Zainal Abidin 1, Bandar Al-Muktafi Billah Shah, 23400 Dungun, Terengganu';
        break;
      }
      case "TNB Marang": {
        this.address = 'Sungai Kerak, 21600 Marang, Terengganu';
        break;
      }
    }

    console.log("SiteIdAddress >>> this.address : "+this.address);
    return this.address;
  }

  pejabatNegeri(siteId: string) {
    let region;
    switch (siteId) {
      case '6160': {
        region = "TNB Shah Alam"
        break;
      }
      case '6103': {
        region = "TNB Shah Alam"
        break;
      }
      case '6153': {
        region = "TNB Shah Alam"
        break;
      }
      case '6180': {
        region = "TNB Shah Alam"
        break;
      }
      case '6103': {
        region = "TNB Shah Alam"
        break;
      }
      case '6150': {
        region = "TNB Shah Alam"
        break;
      }
      case '6147': {
        region = "TNB Shah Alam"
        break;
      }
      case '6144': {
        region = "TNB Shah Alam"
        break;
      }
      case '6143': {
        region = "TNB Shah Alam"
        break;
      }
      case '6142': {
        region = "TNB Shah Alam"
        break;
      }
      case '6141': {
        region = "TNB Shah Alam"
        break;
      }
      case '6140': {
        region = "TNB Shah Alam"
        break;
      }
      case '6131': {
        region = "TNB Shah Alam"
        break;
      }
      case '6130': {
        region = "TNB Shah Alam"
        break;
      }
    }
    return region;
  }
}
