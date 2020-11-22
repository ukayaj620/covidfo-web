import React from 'react';
import NavBar from '../components/NavBar';
import load from '../helpers/ImageLoader';
import FadeIn from '../components/FadeIn';
import Separator from '../components/Separator';
import CovidEduCard from '../components/Card/CovidEduCard';

const CovidBanner = () => {
  return (
    <FadeIn direction="left">
      <div className="flex w-full flex-col lg:flex-row px-8 pt-8 justify-between items-center">
        <img 
          className="flex w-4/5 lg:w-1/3" 
          src={load('covid19')} 
          alt="Coronavirus Disease 2019" 
        />
        <div className="flex flex-col w-full items-center lg:items-start lg:w-2/3 ml-8  ">
          <h2 className="dark text-center">Apa itu COVID-19?</h2>
          <h5 className="w-full my-4 text-center lg:text-justify">
            Coronavirus disease 2019 (COVID-19) adalah sebuah penyakit infeksius yang disebabkan oleh 
            salah satu virus yang berjenis coronavirus, secara spesifik adalah severe acute respiratory 
            syndrome coronavirus 2 (SARS-CoV-2). COVID-19 merupakan virus yang menyerang sistem 
            pernapasan yang dapat menyebabkan gangguan ringan, infeksi, hingga kematian.
          </h5>
        </div>
      </div>
    </FadeIn>
  );
};

const CovidSymptom = () => {
  const symptomInfo = [
    {
      title: 'Demam Tinggi',
      image: 'fever',
      description: `Demam adalah gejala utama. 
        Jangan hanya terpaku pada angka, 
        tetapi ketahuilah bahwa itu bukan demam 
        sampai suhu mencapai setidaknya 39°C.`
    },
    {
      title: 'Batuk Kering',
      image: 'cough',
      description: `Sekitar 1 dari setiap 6 orang 
        yang mendapatkan COVID-19 sakit parah dan 
        mengalami kesulitan bernapas atau sesak napas.`
    },
    {
      title: 'Pening',
      image: 'dizzy',
      description: `Sekitar 1 dari setiap 6 orang 
        yang mendapatkan COVID-19 sakit parah dan 
        mengalami kesulitan bernapas atau sesak napas.`
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <h2 className="dark text-center">Gejala-gejala COVID-19</h2>
      <div className="flex flex-wrap justify-center">
        {symptomInfo.map(({ title, image, description }) => (
          <CovidEduCard 
            image={image}
            description={description}
            title={title}
          />
        ))}
      </div>
    </div>
  );
};

const ThreeMStopCovid = () => {
  const threeMInfo = [
    {
      title: 'Memakai Masker',
      image: 'wear_mask',
      description: `Berdasarkan penelitian internasional, 
        memakai masker kain dapat menurunkan risiko penularan 
        COVID-19 sebesar 45 persen. Lebih baik lagi adalah 
        mengenakan masker bedah yang mampu menekan penyebaran 
        virus COVID-19 hingga 70 persen.`
    },
    {
      title: 'Menjaga Jarak',
      image: 'social_distancing',
      description: `Sekitar 1 dari setiap 6 orang 
        yang mendapatkan COVID-19 sakit parah dan 
        mengalami kesulitan bernapas atau sesak napas.`
    },
    {
      title: 'Mencuci Tangan',
      image: 'wash_hand',
      description: `Mencuci tangan merupakan langkah 3M 
        berikutnya untuk menurunkan risiko penularan COVID-19 
        sebesar 35 persen. WHO menyarankan, cucilah tangan 
        menggunakan sabun/antiseptik selama 20-30 detik 
        dan menerapkan langkah-langkah yang benar.`
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <h2 className="dark text-center">Cara Menjaga Diri dengan 3M</h2>
        <div className="flex flex-wrap justify-center">
          {threeMInfo.map(({ title, image, description }) => (
            <CovidEduCard 
              image={image}
              description={description}
              title={title}
            />
          ))}
        </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="bg-accent">
      <NavBar />
      <div className="flex flex-col w-full items-center justify-center">
        <CovidBanner />
        <Separator />
        <CovidSymptom />
        <Separator />
        <ThreeMStopCovid />
      </div>
    </div>
  );
};

export default Education;
