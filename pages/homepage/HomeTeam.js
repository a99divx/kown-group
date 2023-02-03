import Image from "next/image";
import Link from "next/link";
import ImageLoader from "@/helpers/ImageLoader";
import "swiper/css";
import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { useState } from "react";

export default function Sectors() {
  const { setVisible, bindings } = useModal();
  const [modalData, setModalData] = useState();

  const showDetails = (item) => {
    setModalData(item);
    setVisible(true);
  };

  const list = [
    {
      id: 1,
      name: "Samer Wahbeh",
      title: "Group Chief Executive Officer",
      img: "images/team/1.png",
      desc: "Samer joined Kown Capital in April 2022 as its Group Chief Executive Officer (GCEO), after completing more than 5 years as the GCEO of Estithmar (QPSC).",
      expand:
        "Prior to that, he was a partner in charge of the capital markets at PKF International – Qatar, and the Chief Investment Officer of a large regional conglomerate. During his tenure of 25 years, Samer has managed multibillion-US dollar investment portfolios and advised on large-scale transactions in terms of mergers and acquisitions as well as real estate development projects. His experience includes business valuations, capital markets transactions, IPOs, feasibility studies, structuring of investment funds, strategic, financial, and operational restructuring, financial advisory and managing investments in listed equities, private equities, and real estate in the MENA region. Samer has successfully managed to list the Investment Holding Group on Qatar Stock Exchange as the first family-owned Qatari company to go public through a public offering. Five years later, he managed a merger with a Qatari private company resulting in a combined market capitalization of almost two billion USD. Samer is a CFA Charterholder, he also holds an MBA in Finance, and a Master’s in Real Estate from the University of Cambridge, and an MPA from the London School of Economics and Political Science.",
    },
    {
      id: 2,
      name: "Shadi Qishta",
      title: "Group Chief Financial Officer",
      img: "images/team/2.png",
      desc: "Shadi joined Kown Capital in July 2022 as its Group Chief Financial Officer (GCFO) after being the CEO of Al Alttiyah Group.",
      expand:
        "Prior to that, Shadi managed a multimillion US dollar real estate fund for a large private office in Qatar. Shadi has 20 plus years of experience in auditing, corporate accounting, fiscal management, financial reporting, budgeting, forecasting and management experience. He also possesses a proven track record for developing and implementing financial controls that improve profit and loss reduction, and increasing control environments in different industries including telecom, technology, real estate, hospitality and agriculture. During his tenure Shadi successfully secured $50mm debt financing from Arab Bank, Bahrain, and $200mm equity financing from shareholders. He has also implemented internal audit procedures as part of Aperture Group, Qatar, which resulted in $3mm savings in the annual cost and $4mm in tax return from operations in France, UK, and US. Shadi holds MSc in Finance and a diploma in Risk Management from Manchester, UK.",
    },
    {
      id: 3,
      name: "Rami Halasah",
      title: "Director, Ops. and RE Development",
      img: "images/team/2.png",
      desc: "Rami joined Kown Capital in August 2022 as a Director of Operation and Real Estate Development following his role as the General Manager of Debbas Enterprise Qatar and Electromechanical Engineering Company - Estithmar Holding Group subsidiaries (QPSC).",
      expand:
        "Prior to that he was the General Manager and cofounder of Qmech Electromechanical contracting company Qatar, and Operations Manager of Drake and Scull international Qatar. Rami has 24+ years of experience in engineering and management experience, due diligence, business units' integration and financial exposures, strategic planning, operations, developing and implementing business controls that improve profit and loss as well as increase in operational and commercial controls in different business perspectives. His experience also includes the control of the overall business functions. Rami holds a bachelor’s degree in Engineering from the University of Jordan and is also a member member of Jordan Engineer Association.",
    },
  ];

  return (
    <>
      <Modal
        scroll
        width="600px"
        blur
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        {modalData && (
          <>
            <Modal.Header>
              <Text id="modal-title" className="text-kown-p" size={40}>
                {modalData.name}
                <Text className="text-kown-p" size={14}>
                  {modalData.title}
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Text id="modal-description">
                {modalData.desc} {modalData.expand}
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={() => setVisible(false)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
      <div id="team">
        <div className="container m-auto py-12 pb-0 px-5 md:px-12 xl:px-40 mb-10 md:mb-20 ">
          <h1 className="title text-7xl font-extrabold font-extrabol text-kown-p pb-20">
            The Team
          </h1>
          <div className="md:mb-10 m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
            {list.map((item, index) => (
              <div
                key={index}
                className="hover:cursor-pointer hover:opacity-50 transition ease-in-out duration-150"
                onClick={() => showDetails(item)}
              >
                <div className="w-full h-96 relative xl:h-96 mb-5 ">
                  <Image
                    loader={ImageLoader}
                    alt={item.name}
                    src={item.img}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="text-3xl font-extrabold text-kown-p">
                  {item.name}
                </div>
                <h2 className="text-lg font-extrabold mb-5">{item.title}</h2>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href={"./Team"}
              className="px-10 py-3 border-2 border-solid inline-block 
              border-kown-s-600 text-kown-s-600 leading-none
              pb-4 hover:text-kown-p hover:border-kown-s-800
              transition ease-in-out duration-150"
            >
              All Team
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
