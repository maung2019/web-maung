import React from "react";

import SEO from "../components/seo";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import Layout from "../components/layout";

const CeritaContainer = styled.div`
  ${tw`font-sans flex justify-center items-center`}
  position: relative;
`;
const Cont = tw.div`w-4/5 flex flex-wrap justify-center my-10 lg:p-10`;
const HeaderContainer = tw.div`w-full flex justify-end`;
const MaungText = tw.p`px-10 text-lg my-4 leading-loose`;
const HeaderText = styled.h2`
  ${tw`font-base text-5xl text-right`}
`;

const doc = `Setelah bertahun-tahun menempuh masa sekolah.
Setelah berjuang keras melawan semua rasa lelah, takut, dan malas.
Rasanya masih seperti mimpi, ketika akhirnya masing-masing dari kita menerima kabar yang amat menggembirakan. Sangat membanggakan. Begitu mengharukan. Bahwa kita, kini, diterima sebagai mahasiswa Universitas Indonesia. Lebih dari itu, kita diterima di Fakultas Ilmu Komputer Universitas Indonesia (Fasilkom UI). Sebuah fakultas yang membawa misi besar memperkenalkan kekuatan teknologi informasi. Sebuah fakultas, yang kini makin kita kagumi, karena ternyata fakultas inilah yang menjadi pionir dan salah satu penggerak terdepan perjalanan ilmu komputer di Indonesia.
Setelah menikmati euforia sejenak atas diterimanya kita di Universitas Indonesia, kita mulai diperkenalkan dengan keluarga Fasilkom oleh kakak-kakak Adkesma CSUI. Kita diundang masuk ke suatu grup Line bersama yang menjadi media pertama kita untuk saling berkenalan dan saling memberitahu, apa-apa saja yang harus dipersiapkan sebagai seorang mahasiswa di Fasilkom. Lewat grup Line, antara kita yang tadinya malu-malu, mulai bisa mencairkan suasana dan mulai bisa menemukan teman-temannya yang mungkin “eh, ternyata dulu dia teman SMA gue” atau bahkan “eh, ternyata dulu dia teman main gue waktu kecil.” Antara kita pun mulai tak lagi beku, meski masih sedikit kaku. Ketika pengenalan fakultas di Welmab, rasanya masih susah untuk saling akrab berinteraksi. Maklumlah, masih pertama kali bertemu.
Supaya makin akrab, kita pun akhirnya mulai berkenalan dengan bertatap muka. Muncullah DDP0 yang menjadi wadah kita untuk “pemanasan” sebelum menghadapi akademis Fasilkom yang sebenarnya. Sambil tentunya, berkenalan dengan sesama peserta DDP0 dan mentor yang tak lain dan tak bukan adalah kakak tingkat kita di Fasilkom. Kemudian kita mengikuti KAMABA, yang mengenalkan kita pada karakter dan ciri khas Universitas Indonesia. Di antaranya adalah briefing PSAF, yang mengantarkan kita merasakan suasana gedung baru Fasilkom untuk pertama kali. Yang menjadi panduan kita, untuk mulai mengenal Fasilkom sepenuhnya saat PSAF nanti. Di sanalah kita kita pertama kali dipertemukan sebagai sesama mahasiswa baru Fasilkom, untuk kemudian memilih koordinator angkatan. Di sanalah, kami mendapat sebutan pertama kami sebagai CSUI 2019.
Kemudian di PSAF, dimulailah masa-masa kita mengenal dekan, dosen, pembimbing akademis, staf fakultas, dan kakak-kakak tingkat kita di Fasilkom. Tak lupa kakak-kakak dari Komisi Disiplin (Komdis) yang selalu membantu kita menemukan jati diri kita sebagai satu angkatan lewat agenda evaluasi. Di PSAF kita juga semakin terbiasa untuk berinteraksi dengan teman-teman baru CSUI 2019 sebagai satu angkatan serta elemen Fasilkom yang lainnya, selain melalui tugas-tugas yang diberikan oleh PMB seperti Mengenal Angkatan dan Mengenal Elemen, dan karya-karya angkatan lainnya.
Namun, tidaklah terasa lengkap jika kita tidak menyelenggarakan sendiri agenda temu seangkatan. SYNTAX 2019 hadir untuk memenuhi keinginan kita akan adanya momen-momen yang mungkin saja tidak dapat terjadi kecuali ketika seluruh anggota angkatan CSUI 2019 berkumpul di satu tempat pada waktu yang sama. Mengambil lokasi di Felfest UI, kami menghabiskan Senin malam itu dengan bermain, bernyanyi, makan malam, dan berbagi tawa bersama. SYNTAX 2019 yang memorable juga sekaligus menjadi media lepas jenuh setelah satu minggu pertama perkuliahan.
Fast forward, kita tiba pada suatu hari yang amat bersejarah. Momen yang begitu istimewa dan mengharukan terjadi pada hari itu, momen yang mungkin takkan pernah terulang lagi. Tepat seminggu setelah Newbie Cup. Ya, 21 September 2019. Hari itu, setelah seru-seruan dan makan tumpeng bareng elemen Fasilkom terutama kakak tingkat, akhirnya kita mendapatkan nama angkatan kita. Nama yang akan selalu membawa gelora semangat. MAUNG 2019!
Dengan pemberian nama tersebut, tersematlah harapan besar pada diri angkatan kita. Tersemat seuntai doa yang amat tulus, terhimpun dukungan yang suportif dari para kakak tingkat kita. Dengan nama yang tak lagi hanya CSUI 2019, namun MAUNG 2019, angkatan kita pun semakin bersemangat dan semakin tangguh menghadapi berbagai tantangan di masyarakat sementara tuntutan akademis semakin intens. Kini, dengan telah terpilihnya ketua angkatan MAUNG 2019 yang secara resmi menggantikan posisi koor angkatan, MAUNG 2019 siap memberikan performa yang terbaik demi pengabdian kepada masyarakat melalui ilmu komputer. Sebagaimana tersebut dalam dua larik terakhir lirik Mars Fasilkom,
“Dengan daya dan upaya, untuk ilmu komputer.”
You cannot resist the inevitable, so our choice now is fight or flight. Together, let’s face our fear. Together, let’s cast off our prides and embrace our fates!
Gaungkanlah raunganmu MAUNG!
`;

const Cerita = () => {
  return (
    <Layout>
      <SEO title="Cerita Kami" />
      <CeritaContainer>
        <Cont>
          <HeaderContainer>
            <HeaderText>
              <b>cerita</b> kami
            </HeaderText>
          </HeaderContainer>
        {doc.split("\n").map((line,i) => (<MaungText key={i}>{line}</MaungText>))}
        </Cont>
      </CeritaContainer>
    </Layout>
  );
};

export default Cerita;
