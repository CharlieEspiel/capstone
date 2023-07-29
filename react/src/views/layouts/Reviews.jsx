import {
    Typography,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Rating
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
            <div className="flex flex-col flex-wrap md:flex-row max-w-7xl mx-auto items-center justify-center h-max gap-5 pb-20">
                <Card className="group mt-6 w-[22rem] h-[28rem] hover:bg-subscribe transition-all ease-in-out duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader color="blue-gray" onBlur={100} className="relative h-full">
                        <img
                            src="./src/assets/customer-1.jpg"
                            alt="card-image"
                            className="object-cover"
                        />
                    </CardHeader>
                    <CardBody className="group-hover:text-white">
                        <Typography variant="h5" color="blue-gray" className="mb-2 group-hover:text-white">
                            Fast Repair Status Tracking
                        </Typography>
                        <Typography>
                            I was impressed with how quickly I could track the status of my electronic device repair. The online tracking system made it easy to know exactly when my device was ready for pickup.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Rating value={5} readonly unratedColor="red" ratedColor="red" />
                    </CardFooter>
                </Card>
                <Card className="group mt-6 w-[22rem] h-[28rem] hover:bg-subscribe transition-all ease-in-out duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader color="blue-gray" onBlur={100} className="relative h-full">
                        <img
                            src="./src/assets/customer-2.jpg"
                            alt="card-image"
                            className="object-cover"
                        />
                    </CardHeader>
                    <CardBody className="group-hover:text-white">
                        <Typography variant="h5" color="blue-gray" className="mb-2 group-hover:text-white">
                            Excellent Customer Service
                        </Typography>
                        <Typography>
                            The customer service team was very helpful throughout the repair process. They provide regular updates and made sure I could easily track the status of my device repair.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Rating value={4} readonly unratedColor="red" ratedColor="red" />
                    </CardFooter>
                </Card>
                <Card className="group mt-6 w-[22rem] h-[28rem] hover:bg-subscribe transition-all ease-in-out duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader color="blue-gray" onBlur={100} className="relative h-full">
                        <img
                            src="./src/assets/customer-3.jpg"
                            alt="card-image"
                            className="object-cover"
                        />
                    </CardHeader>
                    <CardBody className="group-hover:text-white">
                        <Typography variant="h5" color="blue-gray" className="mb-2 group-hover:text-white">
                            Hassle-Free Repair Process
                        </Typography>
                        <Typography>
                            Tracking the status of my electronic device repair was so convenient. I knew exactly when it was ready, and the pickup process was smooth and hassle-free. Glad that I have discovered this online.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Rating value={5} readonly unratedColor="red" ratedColor="red" />
                    </CardFooter>
                </Card>
            </div>
            <div className="flex max-w-7xl mx-auto justify-center h-[480px] overflow-y-scroll bg-primary/20 rounded-xl p-5 z-20">
                {/* <div className="commonninja_component pid-80d69199-625f-438a-b071-02bd954c4502"></div> */}
                <div className="hidden elfsight-app-ef14e633-0f15-4a35-9ad2-1e7aef43bde5"></div>
            </div>
        </section>
    );
}
