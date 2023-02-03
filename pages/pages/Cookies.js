import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "../../components/Hero";
import BackHome from "@/components/BackHome";
import Layout from "@/Layout";

export default function Cookies() {
  return (
    <>
      <Header />
      <BackHome />
      <Hero first={""} sec={""} img={"bg-hero-image2"} />
      <Layout>
        <div className="md:mb-20">
          <div className="container m-auto pb-0 px-5 md:px-12 xl:px-40">
            <h1 className="title text-7xl font-extrabold font-extrabol text-kown-p py-10">
              Cookies Policy
            </h1>
            <p className="text-xl mb-10">
              {`KOWN Holding (hereinafter referred to as "Company," "we," "us,"
                or "our") is committed to protecting the privacy of its users
                and customers. Our cookies policy outlines the use of cookies on
                our website, kowncapital.com, built using Next.js framework.`}
            </p>
            <p className="text-3xl font-bold mb-5">{`What are cookies?`}</p>
            <p className="text-xl mb-10">{`Cookies are small text files that are placed on your device when you visit a website. They are used to store information about your activities on the website, such as login details, preferences, and other information that makes your visit to the website more convenient and personalized.`}</p>
            <p className="text-3xl font-bold mb-5">
              {`How we use cookies on our website?`}
            </p>
            <p className="text-xl mb-5">{`We use cookies on our website for several reasons, including:`}</p>
            <ul className="mb-10">
              <li>
                - To personalize your experience and remember your preferences,
                such as language, font size, and other settings.
              </li>
              <li>
                - To enhance the website performance and functionality, such as
                loading pages faster, tracking site traffic, and analyzing user
                behavior.
              </li>
              <li>
                - To provide security and prevent fraud by verifying your
                identity and keeping your session secure.
              </li>
            </ul>
            <p className="text-3xl font-bold mb-5">{`What types of cookies do we use?`}</p>
            <p className="text-xl mb-10">{`We use both session cookies, which expire when you close your browser, and persistent cookies, which remain on your device until they expire or you delete them.`}</p>
            <ul className="mb-10">
              <li>
                - Essential cookies: These are necessary for the website to
                function and cannot be switched off in our systems. They are
                usually only set in response to actions made by you, such as
                setting your privacy preferences, logging in, or filling in
                forms.
              </li>
              <li>
                - Analytical/performance cookies: These cookies allow us to
                recognize and count the number of visitors and see how they move
                around the website. This helps us to improve the way the website
                works, for example, by ensuring that users find what they are
                looking for easily.
              </li>
              <li>
                - Functionality cookies: These cookies are used to recognize you
                when you return to the website. They enable us to remember your
                preferences and provide enhanced, more personal features.
              </li>
              <li>
                - Targeting cookies: These cookies may be set through our site
                by our advertising partners. They may be used by those companies
                to build a profile of your interests and show you relevant ads
                on other sites.
              </li>
            </ul>
            <p className="text-3xl font-bold mb-5">{`Can I opt out of cookies?`}</p>
            <p className="text-xl mb-10">{`Yes, you can choose to opt out of cookies at any time. To do so, you can adjust your browser settings to block all cookies or to notify you when a cookie is being set. Please note that if you block cookies, some features of the website may not work as intended.`}</p>
            <p className="text-3xl font-bold mb-5">{`Changes to our Cookies Policy`}</p>
            <p className="text-xl mb-10">{`We may update our cookies policy from time to time to reflect changes in our practices or services. We will notify you of any changes by posting the updated policy on our website.`}</p>
            <p className="text-3xl font-bold mb-5">{`Contact us`}</p>
            <p className="text-xl mb-10">{`If you have any questions or concerns about our cookies policy, please contact us.`}</p>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}
