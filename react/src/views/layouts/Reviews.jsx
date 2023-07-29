import {
    Typography,
} from "@material-tailwind/react";

// page components

export default function Reviews() {
    return (
        <section className="py-5 my-5 md:pb-60" id="reviews">
            <div className="mx-auto w-full my-10 text-center h-max md:w-1/2">
                <Typography
                    variant="h2"
                    className="mb-2 font-black tracking-normal text-[#7b000b]"
                >
                    Testimonials <br />
                    <Typography
                        as="span"
                        variant="h2"
                        className="inline-block font-black tracking-normal text-[#cf0029]"
                    >
                        300+ customers and clients
                    </Typography>
                </Typography>
                <Typography className="text-lg text-[#7b000b]/60">
                    Many Fortune companies, startups, universities and governmental
                    institutions love our service.
                </Typography>
            </div>
            <div className="flex max-w-7xl mx-auto justify-center h-[480px] overflow-y-scroll bg-primary/20 rounded-xl p-5 z-20">
            <div className="commonninja_component pid-80d69199-625f-438a-b071-02bd954c4502"></div>
            <div className="hidden elfsight-app-ef14e633-0f15-4a35-9ad2-1e7aef43bde5"></div>
            </div>
        </section>
    );
}
