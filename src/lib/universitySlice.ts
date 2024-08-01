import { createSlice } from '@reduxjs/toolkit'

import Egelogo from "../../public/assets/ege_university_logo.png";
import Deulogo from "../../public/assets/deu_logo.png";
import İytelogo from "../../public/assets/iyte_logo.png";
import İkclogo from "../../public/assets/ikc_logo.png";
import Bulogo from "../../public/assets/bu_logo.png";
import İdulogo from "../../public/assets/idu_logo.png";
import Havyologo from "../../public/assets/havyo_logo.png";
import Sbulogo from "../../public/assets/sbu_logo.png";
import İeulogo from "../../public/assets/ieu_logo.png";
import İkyologo from "../../public/assets/ikmyo_logo.png";
import Yasarlogo from "../../public/assets/yu_logo.png";
import Thklogo from "../../public/assets/thku_logo.png";
import İtulogo from "../../public/assets/tu_logo.png";


const initialState = {
  list: [
    {
      id: 1,
      name: "Ege Üniversitesi",
      description:
        "Türkiye'nin köklü ve saygın eğitim kurumlarından biri olan Ege Üniversitesi, İzmir'de bulunan bir devlet üniversitesidir. 1955 yılında kurulmuş olup, güçlü akademik kadrosu ve geniş eğitim programlarıyla tanınır. Modern kampüsü ve çeşitli sosyal tesisleri ile öğrencilere zengin bir öğrenim deneyimi sunar. Ege Üniversitesi, bilim, teknoloji, sanat ve kültür alanındaki katkılarıyla ulusal ve uluslararası alanda önemli bir konuma sahiptir.",
      date_of_establishment: "1955",
      image: Egelogo,
    },
    {
      id: 2,
      name: "Dokuz Eylül Üniversitesi",
      description:
        "Dokuz Eylül Üniversitesi, Türkiye'nin İzmir şehrinde önde gelen bir devlet üniversitesidir. 1982 yılında kurulmuş olup geniş bir program yelpazesi sunar ve akademik mükemmeliyet ile araştırma konusundaki ünüyle bilinir. Üniversite, modern kampüsü, aktif öğrenci yaşamı ve çeşitli çalışma alanlarına önemli katkılarıyla tanınır.",
      date_of_establishment: "1982",
      image: Deulogo,
    },
    {
      id: 3,
      name: "İzmir Yüksek Teknoloji Enstitüsü",
      description:
        "1992 yılında kurulan İzmir Yüksek Teknoloji Enstitüsü, İzmir'de bulunan bir devlet üniversitesidir ve mühendislik ile doğa bilimlerine odaklanır. Yenilikçi araştırmaları ve yüksek akademik standartları ile tanınan enstitü, teknoloji ve gelişim alanında dinamik bir öğrenim ortamı sağlar.",
      date_of_establishment: "1992",
      image: İytelogo,
    },
    {
      id: 9,
      name: "İzmir Ekonomi Üniversitesi",
      description:
        "2001 yılında kurulan İzmir Ekonomi Üniversitesi, iş dünyası, ekonomi ve sosyal bilimler konularına odaklanan önde gelen bir özel üniversitedir. Öğrencileri çeşitli alanlarda başarılı kariyerlere hazırlayan geniş bir program yelpazesi sunar.",
      date_of_establishment: "2001",
      image: İeulogo,
    },
    {
      id: 11,
      name: "Yaşar Üniversitesi",
      description:
        "2001 yılında kurulan Yaşar Üniversitesi, İzmir'de bulunan özel bir kurumdur ve uluslararası eğitime vurgu yapar. Lisans ve yüksek lisans programları sunar ve akademik mükemmeliyet ile yenilikçilik konusunda kararlıdır.",
      date_of_establishment: "2001",
      image: Yasarlogo,
    },
    {
      id: 4,
      name: "İzmir Katip Çelebi Üniversitesi",
      description:
        "2010 yılında kurulan İzmir Katip Çelebi Üniversitesi, İzmir'de büyüyen bir devlet üniversitesidir. Çeşitli disiplinlerde geniş bir program yelpazesi sunar ve destekleyici bir akademik ortamda kaliteli eğitim ve araştırma fırsatları sağlamayı hedefler.",
      date_of_establishment: "2010",
      image: İkclogo,
    },
    {
      id: 13,
      name: "İzmir Tınaztepe Üniversitesi",
      description:
        "2018 yılında kurulan İzmir Tınaztepe Üniversitesi, pratik ve yenilikçi eğitime odaklanan modern bir kurumdur. Üniversite, öğrencilerinin akademik ve profesyonel gelişimlerine katkıda bulunmayı hedefler.",
      date_of_establishment: "2018",
      image: İtulogo,
    },
    {
      id: 5,
      name: "Bakırçay Üniversitesi",
      description:
        "2016 yılında kurulan Bakırçay Üniversitesi, İzmir'de bulunan bir devlet kurumudur ve uygulamalı bilimler ile pratik eğitime vurgu yapar. Modern bir öğrenim ortamı sunar ve öğrencilerinin akademik ve profesyonel gelişimlerini teşvik etmeye adanmıştır.",
      date_of_establishment: "2016",
      image: Bulogo,
    },
    {
      id: 10,
      name: "İzmir Kavram Meslek Yüksekokulu",
      description:
        "2008 yılında kurulan İzmir Kavram Meslek Yüksekokulu, çeşitli teknik ve mesleki alanlarda uzmanlaşmış eğitim sunar. Kurum, öğrencilerini seçtikleri kariyerler için pratik beceriler ve bilgiyle donatmaya odaklanır.",
      date_of_establishment: "2008",
      image: İkyologo,
    },
    {
      id: 6,
      name: "İzmir Demokrasi Üniversitesi",
      description:
        "2016 yılında kurulan İzmir Demokrasi Üniversitesi, demokratik değerleri teşvik etmeye ve geniş kapsamlı bir eğitim sunmaya odaklanır. Üniversite, akademik mükemmeliyete ve öğrencilerinin canlı bir kampüs yaşamına sahip olmalarına önem verir.",
      date_of_establishment: "2016",
      image: İdulogo,
    },
    {
      id: 7,
      name: "Kara Harp Okulu Hava Teknik Astsubay Meslek Yüksekokulu",
      description:
        "2016 yılında kurulan bu uzmanlaşmış kurum, Türkiye'de hava teknik astsubayları için eğitim ve öğretim sunar. Savunma kariyerleri için gerekli teknik ve liderlik becerilerini geliştirmeye odaklanır.",
      date_of_establishment: "2016",
      image: Havyologo,
    },
    {
      id: 8,
      name: "Sağlık Bilimleri Üniversitesi İzmir Tıp Fakültesi",
      description:
        "2020 yılında kurulan Sağlık Bilimleri Üniversitesi İzmir Tıp Fakültesi, tıp eğitimi ve araştırmalarını ilerletmeye adanmıştır. Yüksek nitelikli sağlık profesyonelleri yetiştirmeyi ve tıp alanında yenilikçi araştırmalara katkıda bulunmayı hedefler.",
      date_of_establishment: "2020",
      image: Sbulogo,
    },
    {
      id: 12,
      name: "Türk Hava Kurumu Üniversitesi",
      description:
        "2011 yılında kurulan Türk Hava Kurumu Üniversitesi, havacılık mühendisliği ve ilgili alanlara odaklanır. Havacılık ve uzay teknolojilerinde yüksek kaliteli eğitim ve araştırma fırsatları sağlamaya adanmıştır.",
      date_of_establishment: "2011",
      image: Thklogo,
    },
  ]
  
}

export const counterSlice = createSlice({
  name: 'university',
  initialState,
  reducers: {
   //
  },
})

export const {  } = counterSlice.actions


export default counterSlice.reducer