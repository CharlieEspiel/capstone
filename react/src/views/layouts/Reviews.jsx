import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Rating
} from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
// page components

export default function Reviews() {
    return (
        <section className="py-10 md:pb-60" id="reviews">
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
                        1,457+ customers and clients
                    </Typography>
                </Typography>
                <Typography className="text-lg text-[#7b000b]/60">
                    Many Fortune 500 companies, startups, universities and governmental
                    institutions love Creative Tim&apos;s products.
                </Typography>
            </div>
            <div className="flex flex-col flex-wrap md:flex-row max-w-7xl mx-auto items-center justify-center h-max gap-5">
            <Card className="group mt-6 max-w-[22rem] hover:bg-subscribe transition-all ease-in-out duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader color="blue-gray" onBlur={100} className="relative h-full">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                            className="object-cover"
                        />
                    </CardHeader>
                    <CardBody className="group-hover:text-white">
                        <Typography variant="h5" color="blue-gray" className="mb-2 group-hover:text-white">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Rating value={4} readonly unratedColor="red" ratedColor="red" />
                    </CardFooter>
                </Card>
                <Card className="group mt-6 max-w-[22rem] hover:bg-subscribe transition-all ease-in-out duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader color="blue-gray" onBlur={100} className="relative h-full">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                            className="object-cover"
                        />
                    </CardHeader>
                    <CardBody className="group-hover:text-white">
                        <Typography variant="h5" color="blue-gray" className="mb-2 group-hover:text-white">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Rating value={4} readonly unratedColor="red" ratedColor="red" />
                    </CardFooter>
                </Card>
                <Card className="group mt-6 max-w-[22rem] hover:bg-subscribe transition-all ease-in-out duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader color="blue-gray" onBlur={100} className="relative h-full">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                            className="object-cover"
                        />
                    </CardHeader>
                    <CardBody className="group-hover:text-white">
                        <Typography variant="h5" color="blue-gray" className="mb-2 group-hover:text-white">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Rating value={4} readonly unratedColor="red" ratedColor="red" />
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
}
