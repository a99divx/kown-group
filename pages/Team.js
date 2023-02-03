import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/Layout";
import Image from "next/image";
import ImageLoader from "@/helpers/ImageLoader";
import BackHome from "@/components/BackHome";
import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { useState } from "react";

import "swiper/css";

export default function Team() {
  const { setVisible, bindings } = useModal();
  const [modalData, setModalData] = useState();
  const showDetails = (item) => {
    setModalData(item);
    setVisible(true);
  };

  const list = [
    {
      name: "Samer Wahbeh",
      title: "Group Chief Executive Officer",
      img: "images/team/1.png",
      desc: "Samer joined Kown Capital in April 2022 as its Group Chief Executive Officer (GCEO), after completing more than 5 years as the GCEO of Estithmar (QPSC).",
      expand:
        "Prior to that, he was a partner in charge of the capital markets at PKF International – Qatar, and the Chief Investment Officer of a large regional conglomerate. During his tenure of 25 years, Samer has managed multibillion-US dollar investment portfolios and advised on large-scale transactions in terms of mergers and acquisitions as well as real estate development projects. His experience includes business valuations, capital markets transactions, IPOs, feasibility studies, structuring of investment funds, strategic, financial, and operational restructuring, financial advisory and managing investments in listed equities, private equities, and real estate in the MENA region. Samer has successfully managed to list the Investment Holding Group on Qatar Stock Exchange as the first family-owned Qatari company to go public through a public offering. Five years later, he managed a merger with a Qatari private company resulting in a combined market capitalization of almost two billion USD. Samer is a CFA Charterholder, he also holds an MBA in Finance, and a Master’s in Real Estate from the University of Cambridge, and an MPA from the London School of Economics and Political Science.",
    },
    {
      name: "Shadi Qishta",
      title: "Group Chief Financial Officer",
      img: "images/team/2.png",
      desc: "Shadi joined Kown Capital in July 2022 as its Group Chief Financial Officer (GCFO) after being the CEO of Al Alttiyah Group.",
      expand:
        "Prior to that, Shadi managed a multimillion US dollar real estate fund for a large private office in Qatar. Shadi has 20 plus years of experience in auditing, corporate accounting, fiscal management, financial reporting, budgeting, forecasting and management experience. He also possesses a proven track record for developing and implementing financial controls that improve profit and loss reduction, and increasing control environments in different industries including telecom, technology, real estate, hospitality and agriculture. During his tenure Shadi successfully secured $50mm debt financing from Arab Bank, Bahrain, and $200mm equity financing from shareholders. He has also implemented internal audit procedures as part of Aperture Group, Qatar, which resulted in $3mm savings in the annual cost and $4mm in tax return from operations in France, UK, and US. Shadi holds MSc in Finance and a diploma in Risk Management from Manchester, UK.",
    },
    {
      name: "Rami Halasah",
      title: "Director, Ops. and RE Development",
      img: "images/team/2.png",
      desc: "Rami joined Kown Capital in August 2022 as a Director of Operation and Real Estate Development following his role as the General Manager of Debbas Enterprise Qatar and Electromechanical Engineering Company - Estithmar Holding Group subsidiaries (QPSC).",
      expand:
        "Prior to that he was the General Manager and cofounder of Qmech Electromechanical contracting company Qatar, and Operations Manager of Drake and Scull international Qatar. Rami has 24+ years of experience in engineering and management experience, due diligence, business units' integration and financial exposures, strategic planning, operations, developing and implementing business controls that improve profit and loss as well as increase in operational and commercial controls in different business perspectives. His experience also includes the control of the overall business functions. Rami holds a bachelor’s degree in Engineering from the University of Jordan and is also a member member of Jordan Engineer Association.",
    },
    {
      name: "Ali Obeidat",
      title: "Group Head of Legal and Compliance",
      img: "images/team/2.png",
      desc: "Ali joined Kown Capital in June 2022 as its Group Head of Legal and Compliance, coming from Samsung Electronics Saudi Arabia where he held the position of its General Counsel (Head of Legal, Compliance and Government Relations Department) for more than 3 years.",
      expand:
        "Ali led the establishment of the Samsung Electronics company in Saudi Arabia and the launch of its official commercial operations in KSA. Prior to that, Ali held the position of Senior General Manager (SGM) of the Legal Department for Abdul Latif Jameel Investments (ALJI) for more than 5 years, where he established the Legal department for ALJI and led the development of several startups within the group. Before that he worked for Orange Telecom Group – Jordan as a Legal and Regulatory Expert (Senior Advisor) for almost 6 years and furnished remarkable contributions in launching several telecom related technologies, such as the launch of the 3G and Fiber Optic Internet at that time. With almost 20 years of experience in different organizations; governmental, NGOs, and private sector, Ali’s experience varies between different industries, such as retail and wholesale, automotives, real estate, telecom, technology, transportation, freight delivery, oil and lubricant manufacturing, media & communication, corporate governance, M&As, intellectual property, CSR activities, and others. Ali holds an LLM degree from the University of Technology, Sydney (UTS) in Australia, specializing in intellectual property. He is certified as an Intellectual Property Counsel by Arab Foundation for Protecting Intellectual Property Rights (AFPIPR). He is also certified as an Arbitration and Intellectual Property Counsel by World Arbitration Forum for Intellectual Property (WAFIP). Ali has been a member of the Jordanian Bar Association since February 2002.",
    },
    {
      name: "Mohamad Rizk",
      title: "Group Head of HR and Administration ",
      img: "images/team/2.png",
      desc: "Mohamad Rizk joined Kown Capital Group in June 2022 as its Group Head of HR & Administration to establish and formalize HR & administration functions.",
      expand:
        "Before joining Kown Capital, Mohamad Rizk worked for a diverse range of companies, including Investment Holding Group (IHG), United Development Company (UDC), and Qatar Technical Support. Mohamad Rizk has more than 18 years of experience in Human Resources Management in different business sectors. Mohamad is certified as a Senior Professional in Human Resources (SPHR) as well as a Professional in Human Resources (PHR) from the Human Resource Certification Institute in the USA. He is also certified as a Senior Certified Professional (SHRM-SC) from the Society for Human Resources Management. Mohamad holds a master's degree in Big Data and Business Analytics from IE University in Spain, and a bachelor’s degree in Business Administration from The Lebanese University.",
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
      <Header active={"team"} />
      <BackHome />
      <Layout>
        <div id="team">
          <div className="container m-auto py-12 pb-0 px-5 md:px-12 xl:px-40 mb-10 md:mb-40 ">
            <h1 className="title text-7xl font-extrabold font-extrabol text-kown-p pb-20">
              The Team
            </h1>
            <div className="md:mb-20 m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
              {list.map((item, index) => (
                <div
                  key={index}
                  onClick={() => showDetails(item)}
                  className="hover:cursor-pointer hover:opacity-50 transition ease-in-out duration-150"
                >
                  <div className="w-full h-team relative xl:h-96 mb-5 ">
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
                  <p className="mb-10 md:mb-5 xl:mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}
