import { Button, TextField } from '@mui/material';

export default function SolarPromtionSection(): JSX.Element {
    return (
        <section className="relative max-w-4xl mx-auto">
            <div className="bg-white px-16 py-8 absolute -bottom-32 left-0 right-16">
                <div className="mb-8 text-center">
                    <h2 className="text-5xl	font-normal text-black">Help Change the World</h2>
                    <p className="text-xl text-black w-96 mx-auto mt-1.5 mb-0">
                        Help save the environment and make the switch to solar. Find out which
                        Trina Solar products are perfect for your home, business, or project.
                    </p>
                    <Button variant="contained" color="secondary" className="mt-7">Find Out More</Button>
                </div>
            </div>
        </section>
    );
}