import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

export default function SolarSection(): JSX.Element {
  return (
    <section className="container max-w-4xl mx-auto pt-12 pb-72">
      <div className="flex gap-5">
        <h2 className="w-[220px] text-gray-700 text-4xl">
          Energy Freedom with Solar and Storage
        </h2>
        <div className="w-[10px] bg-orange-500 h-[26rem]" />
        <div className=" space-y-5">
          <p className="text-gray-500 text-sm w-60">
            Vulputate dignissim suspendisse in est ante in nibh mauris. Neque
            aliquam vestibulum morbi blandit cursus risus. Nisi est sit amet
            facilisis. Volutpat commodo sed egestas egestas. Id leo in vitae
            turpis massa sed elementum tempus. Non curabitur gravida arcu ac
            tortor dignissim convallis aenean.
          </p>
          <p className="text-gray-500 text-sm">
            {"Image by" + " "}
            <Link
              href="https://www.freepik.com/photos/eco"
              className="text-gray-700 underline"
              target="_blank"
            >
              Freepik
            </Link>
          </p>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </div>
        <Image
          src="/solar-house.png"
          alt="Solar powered house"
          width={300}
          height={900}
        />
      </div>
    </section>
  );
}
