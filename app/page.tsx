import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div>
      <div
        className="relative w-full h-[20vh] flex items-center justify-center bg-cover bg-center mb-12"
        style={{ backgroundImage: "url(/assets/images/health_quote.jpg)" }}
      >
        <div className="bg-white bg-opacity-20 p-4 rounded">
          <p className="text-black text-2xl font-bold">
            Good Health is Best Wealth !
          </p>
        </div>
      </div>

      <div className="flex h-screen max-h-screen">
        {isAdmin && <PasskeyModal />}

        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px]">
            <Image
              src="/assets/icons/logo-full.svg"
              height={400}
              width={1500}
              alt="patient"
              className="mb-12 h-10 w-fit"
            />

            <PatientForm />
          </div>
        </section>

        <Image
          src="/assets/images/onboarding-img.png"
          height={1000}
          width={1000}
          alt="patient"
          className="side-img max-w-[45%]"
        />
      </div>

      <div className="text-14-regular mt-20 flex justify-center bg-white bg-opacity-20 p-4 rounded">
        <p className="justify-items-end text-dark-600 xl:text-left">
          © 2024 CareSync
        </p>

        <Link href="/?admin=true" className="text-green-500 font-bold mx-auto">
        👉 <span className="mx-4">ADMIN Panel</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
