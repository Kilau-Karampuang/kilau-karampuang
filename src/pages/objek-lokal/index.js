import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";
import { useState } from "react";
import Heading from "@/Components/Heading";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";

const cardData = [
  {
    imageSrc: "/budaya/Gua Mimpi.jpg",
    article: `Di sebuah desa kecil di Karampuang, tersebarlah cerita mengenai seorang penduduk yang mengalami mimpi yang sangat nyata. Pada suatu malam yang sunyi, ia tertidur lelap dan bermimpi menyusuri hutan lebat. Dalam mimpinya, ia menemukan sebuah gua yang tersembunyi di balik rerimbunan pepohonan. Gua itu tampak begitu nyata, hingga ketika terbangun, penduduk tersebut merasa terdorong untuk mencari gua yang ia lihat dalam mimpinya. 
        Keesokan paginya, dengan rasa penasaran yang membara, ia memutuskan untuk menelusuri hutan, berbekal ingatan dari mimpinya. Setelah berjam-jam menyusuri rute yang ia lihat dalam tidur, ia terkejut ketika benar-benar menemukan sebuah gua, sama persis seperti yang muncul dalam mimpinya. Gua tersebut terletak di tengah hutan, dengan pintu masuk berupa lubang kecil yang tersembunyi di bawah akar pohon beringin raksasa.
        Sejak penemuan itu, gua tersebut dikenal dengan nama "Gua Mimpi" oleh penduduk setempat. Mereka percaya bahwa gua ini memiliki kekuatan mistis, yang hanya bisa ditemukan melalui petunjuk dari alam bawah sadar. Gua Mimpi kini menjadi salah satu tempat yang diselimuti misteri dan daya tarik bagi mereka yang ingin merasakan pengalaman unik dalam menjelajahi keindahan alam Karampuang.`,
    heading: "Goa Mimpi",
    title: "Gua Mimpi: Legenda dari Alam Bawah Sadar",
    lokasi: "Batu Bira",
    jenis: "situs"
  },
  {
    imageSrc: "/budaya/Batu Pute.jpg",
    article: `Batu Pute, sebuah destinasi wisata yang berkolaborasi dengan Dinas Pariwisata, memikat hati banyak pengunjung dengan keunikan dan keindahannya. Tempat ini dinamakan Batu Pute karena terdiri dari formasi karang yang seluruhnya berwarna putih, menciptakan pemandangan yang kontras dengan lingkungan sekitarnya. Untuk mencapai Batu Pute, pengunjung harus menempuh perjalanan yang cukup menantang, mendaki tangga bebatuan yang menanjak hingga ke puncak karang tersebut.
        Terletak di atas tebing, Batu Pute menawarkan pemandangan laut yang menakjubkan, sekaligus menyimpan cerita-cerita mistis yang masih hidup di kalangan masyarakat setempat. Bagi mereka yang memiliki kemampuan lebih, diyakini bahwa wilayah ini menyimpan jejak magis yang masih dapat dirasakan. Keberadaan Batu Pute tidak hanya menambah daya tarik wisata Karampuang, tetapi juga menjadi saksi bisu dari kepercayaan dan budaya yang diwariskan dari generasi ke generasi.`,
    heading: "Batu Pute",
    title: "Batu Pute: Jejak Magis di Atas Karang Putih",
    lokasi: "Dusun Bone",
    jenis: "situs"
  },
  {
    imageSrc: "/budaya/Sumur Jodoh.jpg",
    article: `Di tengah-tengah Karampuang, terdapat sebuah sumur yang tak hanya menjadi sumber air bagi masyarakat, tetapi juga sarat akan makna dan kepercayaan lokal. Sumur ini dinamakan Sumur Jodoh karena keunikannya yang menjadi pertemuan antara dua sumber mata air yang berbeda—air laut dan air gunung. Pertemuan ini bahkan menghasilkan mata air baru yang mencerminkan perpaduan dari keduanya.
        Sumur Jodoh terdiri atas tiga kubangan mata air dengan karakteristik yang berbeda: air asin, air payau, dan air tawar. Ketiganya menggambarkan harmoni alam yang langka dan misterius. Masyarakat setempat percaya bahwa sumur ini memiliki kekuatan magis, khususnya bagi mereka yang masih mencari pasangan hidup. Konon, air dari sumur ini diyakini mampu mendatangkan pujaan hati bagi para bujangan yang meminumnya. Sumur Jodoh tidak hanya menjadi tempat untuk mengambil air, tetapi juga menjadi simbol harapan dan cinta yang menyatukan alam dengan kehidupan manusia.`,
    heading: "Sumur Jodoh",
    title: "Sumur Jodoh: Tempat Bertemunya Dua Sumber Kehidupan",
    lokasi: "Dusun Bone",
    jenis: "situs"
  },
  {
    imageSrc: "/budaya/Kuburan Kuno.jpg",
    article: `Di Karampuang, tersembunyi sebuah warisan bersejarah yang menjadi bukti keberadaan leluhur masyarakat lokal yang telah berdiam di pulau ini selama berabad-abad. Kuburan Islam kuno ini menjadi saksi bisu kehidupan masa lalu Karampuang, dengan ciri khas yang mencerminkan tradisi dan kepercayaan masyarakat setempat.
        Kuburan-kuburan ini dihiasi dengan ragam hias yang mirip dengan kuburan Islam di wilayah Sulawesi lainnya. Bentuk nisan yang ada di sini cukup beragam, mulai dari bentuk gada, meru, dan lainnya, menambah kekayaan budaya dan sejarah yang ada. Keunikan lain dari kuburan ini adalah jumlah patok yang berdiri di atasnya, yang menjadi penanda diferensiasi gender. Dua patok menandakan bahwa kuburan tersebut adalah milik seorang perempuan, sedangkan satu patok menandakan laki-laki.
        Kuburan Islam kuno ini tidak hanya menjadi tempat peristirahatan terakhir bagi leluhur Karampuang, tetapi juga menjadi pengingat akan sejarah panjang dan kaya yang telah mewarnai kehidupan di pulau ini. Dengan ragam hias dan bentuk nisan yang khas, tempat ini menjadi salah satu situs bersejarah yang penting bagi masyarakat setempat dan para pengunjung yang ingin memahami lebih dalam tentang budaya dan tradisi Karampuang.`,
    heading: "Kuburan Islam Kuno",
    title: "Kuburan Islam Kuno: Saksi Bisu Sejarah Karampuang",
    lokasi: "Dusun Bajak",
    jenis: "situs"
  },
  {
    imageSrc: "/budaya/Bujung Jampurung .jpg",
    article: `Bujung Jampurung, yang terletak tidak jauh dari sekolah MTS/MA Ainun Syahab Ma'Arif di Desa Karampuang, telah menjadi tempat favorit bagi anak-anak sekolah sebagai lokasi bermain atau sekadar melarikan diri dari rutinitas harian. Nama "Bujung" yang berarti "sumur" mencerminkan keberadaan sumber mata air alami di tempat ini, sementara "Jampurung" menambah nuansa lokal yang khas.
        Dikenal sebagai salah satu sumber mata air yang masih terjaga kebersihannya, Bujung Jampurung memiliki potensi besar untuk dikembangkan menjadi objek wisata alam. Meskipun lokasinya cukup tersembunyi, inilah yang membuatnya menjadi sebuah "hidden gem" yang menunggu untuk dieksplorasi. Dengan suasana alami yang tenang dan air sumur yang jernih, Bujung Jampurung menawarkan pengalaman unik bagi siapa saja yang mencari keindahan alam yang masih asli di Karampuang.
        `,
    heading: "Bujung Jampurung",
    title: "Bujung Jampurung: Hidden Gem di Karampuang",
    lokasi: "Batu Bira",
    jenis: "situs"
  },
  {
    imageSrc: "/budaya/Sumur Kapal.jpg",
    article: `Sebelum kehadiran Perusahaan Daerah Air Minum (PDAM) di Pulau Karampuang, masyarakat lokal mengandalkan Sumur Kapal sebagai sumber utama untuk menimba air. Sumur ini mendapat namanya dari bentuk unik dinding pembatasnya yang menyerupai muka kapal, memberikan kesan yang kuat dan ikonik bagi penduduk setempat.
        Sumur Kapal bukan hanya menjadi sumber kehidupan, tetapi juga simbol persatuan bagi masyarakat Karampuang. Dengan semboyan "Ingkita Massola Suung," yang berarti "Kita Semua Bersaudara," pendirian sumur ini diharapkan dapat mempererat tali persaudaraan dan memperkuat ikatan antarwarga di pulau ini. Sumur Kapal menjadi lebih dari sekadar sumur biasa; ia menjadi penghubung, tidak hanya secara fisik dalam menyediakan air, tetapi juga dalam menghubungkan hati dan jiwa seluruh masyarakat Karampuang.`,
    heading: "Sumur Kapal",
    title: "Sumur Kapal: Penghubung Persaudaraan di Karampuang",
    lokasi: "Dusun Sepang",
    jenis: "situs"
  },
  {
    imageSrc: "/budaya/Goa Lidah.jpg",
    article: `Di kawasan Ujung Bulo yang terkenal dengan wisata baharinya, terdapat sebuah hidden gem yang menanti untuk ditemukan oleh para pengunjung. Goa Lidah, sebuah gua alamiah yang terletak di tebing dekat pesisir pantai, menawarkan pesona yang memikat bagi siapa saja yang mengunjungi tempat ini. Gua ini dinamakan "Goa Lidah" oleh masyarakat lokal karena bentuknya yang menyerupai lidah atau mulut yang terbuka lebar.
        Untuk mencapai Goa Lidah, pengunjung harus menempuh perjalanan sekitar 10 menit dari Plaza Ujung Bulo Wisata menuju tebing karang di pesisir. Meskipun perjalanan ini cukup menantang, pemandangan yang ditawarkan setibanya di gua ini sepadan dengan usaha yang dikeluarkan. Goa Lidah menjadi salah satu destinasi yang menawarkan keindahan alam sekaligus menambah daya tarik wisata di Ujung Bulo, Karampuang.`,
    heading: "Goa Lidah",
    title: "Goa Lidah: Pesona Tersembunyi di Ujung Bulo",
    lokasi: "Ujung Bulo Wisata",
    jenis: "situs"
  },
  {
    imageSrc: "/budaya/keripik.jpeg",
    article: `Di Karampuang, pohon pisang adalah salah satu komoditas yang paling sering dimanfaatkan oleh masyarakat setempat. Salah satu olahan yang populer adalah keripik pisang, yang menjadi camilan favorit banyak orang. Proses pembuatan keripik pisang dimulai dengan mengiris tipis pisang kepok menggunakan alat pemotong khusus. Irisan pisang ini kemudian langsung dimasukkan ke dalam minyak panas dan digoreng hingga berwarna kecoklatan.
        Setelah digoreng, keripik pisang diberi tambahan rasa sesuai selera. Biasanya, masyarakat Karampuang menambahkan gula manis untuk rasa yang lebih klasik atau bumbu balado untuk rasa yang lebih pedas dan gurih. Setelah dibumbui, keripik pisang ini kemudian dikemas rapi dan siap untuk dinikmati. Keripik pisang dari Karampuang bukan hanya menjadi camilan yang lezat, tetapi juga mencerminkan kearifan lokal dalam memanfaatkan hasil bumi secara kreatif dan berkelanjutan.`,
    heading: "Keripik Pisang",
    title: "Keripik Pisang: Camilan Khas dari Karampuang",
    lokasi: "Karampuang",
    jenis: "makanan"
  },
  {
    imageSrc: "/budaya/sayur jp.webp",
    article: `Sayur jantung pisang adalah salah satu hidangan khas Karampuang yang menggugah selera dan memanfaatkan bahan dari pohon pisang. Proses pembuatannya dimulai dengan merebus jantung pisang selama 10 hingga 20 menit, hingga teksturnya menjadi lembut dan siap diolah lebih lanjut. Setelah itu, santan dibuat dari kelapa parut atau menggunakan santan instan sebagai bahan utama untuk kuahnya.
        Rempah-rempah khas Nusantara ditambahkan untuk memberikan rasa yang kaya dan aroma yang menggoda. Kombinasi santan yang gurih dan rempah-rempah yang harum menciptakan cita rasa yang unik dan khas pada sayur jantung pisang. Hidangan ini tidak hanya lezat, tetapi juga mencerminkan kekayaan alam dan kreativitas kuliner masyarakat Karampuang dalam mengolah bahan-bahan lokal menjadi sajian istimewa.`,
    heading: "Sayur Jantung Pisang",
    title: "Sayur Jantung Pisang: Hidangan Khas dari Karampuang",
    lokasi: "Karampuang",
    jenis: "makanan"
  },
  {
    imageSrc: "/budaya/bau peapi.jpg",
    article: `Bau Peapi adalah salah satu kuliner yang sangat populer di Sulawesi Barat, termasuk di pulau Karampuang. Nama "Bau" berarti "ikan," dan "peapi" berarti "rebus," sehingga Bau Peapi dapat diartikan sebagai hidangan ikan yang dimasak atau direbus. Ikan yang biasa digunakan dalam hidangan ini adalah ikan tongkol, cakalang, atau tuna, yang diolah dengan rempah-rempah khas lokal.
        Salah satu ciri khas dari Bau Peapi adalah penambahan mangga atau belimbing sebagai pemberi rasa masam yang menyegarkan pada hidangan ini. Cita rasa otentik Bau Peapi semakin nikmat ketika dimasak dengan minyak kelapa dalam kuali tanah liat, yang memberikan aroma dan rasa yang khas. Hidangan ini tidak hanya mencerminkan kekayaan kuliner Karampuang, tetapi juga menjadi simbol warisan budaya yang diwariskan dari generasi ke generasi.`,
    heading: "Bau Peapi",
    title: "Bau Peapi: Cita Rasa Otentik dari Karampuang",
    lokasi: "Karampuang",
    jenis: "makanan"
  },
  {
    imageSrc: "/budaya/setandan.jpg",
    article: `Di Karampuang, proses pembangunan rumah tidak hanya melibatkan kerja fisik, tetapi juga menyertakan ritual adat yang penting bagi masyarakat yang masih memegang teguh tradisi. Salah satu ritual yang dilakukan adalah "Tradisi Pisang Setandan," yang dilakukan setelah pondasi dan kerangka rumah terbentuk. Ritual ini melibatkan pemberian persembahan berupa setandan pisang hijau yang diikatkan pada kuda-kuda atau kayu penyangga rumah yang baru setengah jadi.
        Pisang hijau yang dipilih untuk persembahan ini memiliki makna simbolis dalam memastikan kelancaran proses pembangunan dan sebagai bentuk tolak bala. Ketika pisang mulai menguning, ritual dilanjutkan dengan menutupnya menggunakan kain. Penutupan ini menandakan bahwa pembangunan rumah dapat dilanjutkan setelah proses ritual selesai. Tradisi ini tidak hanya menjadi bagian dari kehidupan sehari-hari masyarakat Karampuang tetapi juga memiliki kemiripan dengan adat istiadat masyarakat Bugis, Mandar, Bajau, dan wilayah Sulawesi lainnya, mencerminkan kekayaan budaya dan kepercayaan yang melintasi berbagai komunitas di Sulawesi.`,
    heading: "Tradisi Pisang Setandan",
    title: "Tradisi Pisang Setandan: Ritual Pembangunan Rumah di Karampuang",
    lokasi: "Karampuang",
    jenis: "tradisi"
  },
  {
    imageSrc: "/budaya/Jepa.jpg",
    article: `Di Karampuang, pemenuhan karbohidrat tidak hanya bergantung pada nasi. Masyarakat lokal juga sering mengonsumsi Jepa, makanan khas yang menjadi bagian penting dari budaya kuliner setempat. Jepa dibuat dari singkong sebagai bahan dasarnya, yang menjadi alternatif sumber karbohidrat selain nasi.
        Proses pembuatan Jepa dimulai dengan mengupas singkong, lalu diparut hingga halus. Parutan singkong ini kemudian diperas untuk mengeluarkan saripatinya, dan ampas yang tersisa diayak hingga halus. Setelah itu, ampas singkong dibentuk menjadi bundar pipih dan dimasak. Jepa biasanya disajikan bersama lauk-lauk khas lokal, seperti teri, cumi, dan berbagai jenis hidangan laut lainnya. Jepa bukan hanya makanan, tetapi juga representasi dari kearifan lokal dalam memanfaatkan hasil bumi untuk menciptakan hidangan yang lezat dan bergizi.
    `,
    heading: "Jepa",
    title: "Jepa: Alternatif Karbohidrat Khas Karampuang",
    lokasi: "Karampuang",
    jenis: "makanan"
  },
];

export default function ObjekLokal() {
  const [visible, setVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setSelectedCard(null);
  };

  const getSitus = () => cardData.filter((c) => c.jenis == "situs");

  const getKuliner = () => cardData.filter((c) => c.jenis == "makanan");

  const getTradisi = () => cardData.filter((c) => c.jenis == "tradisi");

  return (
    <>
      <Navbar />
      <Hero
        subheading="Inventarisasi Bersama"
        heading="Objek Lokal Karampuang"
        image="/Vector_S.png"
      />

      <Heading
        heading={
          <>
            Situs <b>Alam</b>
          </>
        }
        subheading="Menyelami Legenda berbagai Situs Karampuang"
      />
      <div className="max-w-screen mt-12 mb-40 lg:mx-40 gap-y-8 sm:gap-x-8 flex flex-wrap px-8">
        {getSitus().map((card, index) => (
          <Card
            key={index}
            isFooterBlurred
            className="min-w-60 mx-auto max-w-screen sm:max-w-64 h-96 sm:h-80 col-span-12 sm:col-span-3 hover:scale-105"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-center pt-8">
              <p className="text-white outlined text-center text-2xl font-bold font-montserrat">
                {card.heading}
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt={card.altText}
              className="z-0 w-full h-full object-cover"
              src={card.imageSrc}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">{card.jenis}</p>
                  <p className="text-tiny text-white/60">{card.subtitle}</p>
                </div>
              </div>
              <Button radius="full" size="sm" onClick={() => openModal(card)}>
                Lihat Lebih Lanjut
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Heading
        heading={
          <>
            Makanan <b>Lokal</b>
          </>
        }
        subheading="Nikmati berbagai makanan lokal khas Karampuang"
      />
      <div className="max-w-2xl mt-12 mb-40 mx-auto gap-y-8 sm:gap-x-8 grid grid-cols-6 px-8">
        {getKuliner().map((card, index) => (
          <Card
            key={index}
            isFooterBlurred
            className="w-full mx-auto max-w-80 h-96 sm:h-80 col-span-12 sm:col-span-3 hover:scale-105"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-center pt-8">
              <p className="text-white outlined text-center text-2xl font-bold font-montserrat">
                {card.heading}
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt={card.altText}
              className="z-0 w-full h-full object-cover"
              src={card.imageSrc}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">{card.jenis}</p>
                  <p className="text-tiny text-white/60">{card.subtitle}</p>
                </div>
              </div>
              <Button radius="full" size="sm" onClick={() => openModal(card)}>
                Lihat Lebih Lanjut
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Heading
        heading={
          <>
            Tradisi <b>Lokal</b>
          </>
        }
        subheading="Kenali lebih dekat tradisi unik dari Karampuang "
      />
      <div className="max-w-screen mt-12 mb-40 lg:mx-40 gap-y-8 sm:gap-x-8 flex flex-wrap px-8">
        {getTradisi().map((card, index) => (
          <Card
            key={index}
            isFooterBlurred
            className="w-full mx-auto max-w-screen sm:max-w-64 h-96 sm:h-80 col-span-12 sm:col-span-3 hover:scale-105"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-center pt-8">
              <p className="text-white outlined text-center text-2xl font-bold font-montserrat">
                {card.heading}
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt={card.altText}
              className="z-0 w-full h-full object-cover"
              src={card.imageSrc}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">{card.jenis}</p>
                  <p className="text-tiny text-white/60">{card.subtitle}</p>
                </div>
              </div>
              <Button radius="full" size="sm" onClick={() => openModal(card)}>
                Lihat Lebih Lanjut
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {visible && selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 h-[95vh] overflow-scroll rounded-md shadow-lg max-w-[60%] w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeModal}
            >
              X
            </button>
            <div className="mt-4">
              <h2 className="text-xl font-bold text-center">
                {selectedCard.title}
              </h2>
              <img
                alt={selectedCard.heading}
                className="z-0 w-full h-96 object-cover mt-6 rounded"
                src={selectedCard.imageSrc}
              />
            </div>
            <p>
              {selectedCard.article.split("\n").map((ph) => (
                <p className="mt-4">{ph}</p>
              ))}
            </p>
            <p className="mt-4 font-semibold">Lokasi : {selectedCard.lokasi}</p>
          </div>
        </div>
      )}
    </>
  );
}
