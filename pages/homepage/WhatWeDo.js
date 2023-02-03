import Link from "next/link";
import { Collapse, Text } from "@nextui-org/react";

export default function WhatWeDo() {
  return (
    <>
      <div id="whatwedo" className="bg-kown-p md:mb-20">
        <div className="container m-auto py-32 px-5 md:px-12 xl:px-40 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 ">
          <div>
            <div className="text-kown-s-600 mb-10 md:mb-0">
              <h1 className="title text-6xl font-extrabol pb-10 text-white">
                What we do?
              </h1>
              <p className="mb-5 text-xl leading-8">
                We instigate and cultivate business prospects and invest in the
                most lucrative. We pursue intelligent investment opportunities
                that ensure solid returns for existing and emerging regional
                businesses.
              </p>
              <p className="mb-10 text-xl">
                Our efforts periscope on optimizing rewards while minimizing
                risks.
              </p>
              <Link
                href={"./About"}
                className="px-3 py-3 border-2 border-solid inline-block border-kown-p-600 text-kown-s-600 leading-none
              pb-4 hover:text-kown-s-800 hover:border-kown-s-800
              transition ease-in-out duration-150"
              >
                Read More
              </Link>
            </div>
          </div>
          <div>
            <div className="">
              <h1 className="title text-4xl font-extrabol pb-5 text-white">
                Investment Process
              </h1>
              <Collapse.Group>
                <Collapse
                  title="Deal Screening"
                  expanded
                  className="text-2xl text-red-500"
                >
                  <Text className="text-kown-s-600 text-xl">
                    Assess whether investment opportunity fits within the
                    company overall strategy.
                  </Text>
                </Collapse>
                <Collapse
                  title="Due Diligence (Detailed Screening)"
                  className="text-2xl"
                >
                  <Text className="text-kown-s-600 text-xl">
                    Assess whether investment opportunity fits within the
                    company overall strategy.
                  </Text>
                </Collapse>
                <Collapse title="Deal Structuring" className="text-2xl">
                  <Text className="text-kown-s-600 text-xl">
                    Assess whether investment opportunity fits within the
                    company overall strategy.
                  </Text>
                </Collapse>
                <Collapse title="Investment Management" className="text-2xl">
                  <Text className="text-kown-s-600 text-xl">
                    Assess whether investment opportunity fits within the
                    company overall strategy.
                  </Text>
                </Collapse>
                <Collapse title="Exit" className="text-2xl">
                  <Text className="text-kown-s-600 text-xl">
                    Assess whether investment opportunity fits within the
                    company overall strategy.
                  </Text>
                </Collapse>
              </Collapse.Group>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
