import Image from 'next/image';
import { Button } from '@mui/material';

export default function SolarSection(): JSX.Element {
  return (
    <section className="flex justify-center bg-white space-x-8">
      
      <div className='w-1/4'>
        <h2 className="text-gray-700 text-2xl">
        Energy Freedom with Solar and Storage
        </h2>
      </div>

      <div className="w-[6px] bg-orange-500 h-auto"></div>

      <div className="flex flex-col w-1/3 space-x-8">
        <p className="text-gray-700 text-lg mb-6">
        Vulputate dignissim suspendisse in est ante in nibh mauris. Neque aliquam vestibulum morbi blandit cursus risus. Nisi est sit amet facilisis. Volutpat commodo sed egestas egestas. Id leo in vitae turpis massa sed elementum tempus. Non curabitur gravida arcu ac tortor dignissim convallis aenean.
        </p>
        <p className="text-gray-700">Image by
            <a href="https://www.freepik.com/photos/eco" className="text-gray-700" target="_blank">Freepik</a>
         </p>
        <Button variant="contained" color="primary">Learn More</Button>
      </div>

      <div className="w-1/4">
        <Image
          src="/solar-house.png"
          alt="Solar powered house"
          width={500}
          height={400}
        />
      </div>
      
    </section>
  );
}