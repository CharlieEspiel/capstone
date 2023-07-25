import {
    Rating,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";

export default function Reviews() {
    return (
        <section id="reviews" className={`max-w-7xl flex flex-col pt-20 md:pt-24 h-full py-10 mx-3 bg-[#FAFAFA]`}>
            <Typography variant="h1" className="text-[40px] text-[#262626] text-center mb-10">REVIEWS</Typography>
            <div className="flex flex-wrap items-center justify-center w-full gap-10">
                <Card className="md:w-1/3">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona.<br/><Rating className="mt-2"/>
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <Button value={4} readonly className="bg-[#262626] ">Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="md:w-1/2">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona.<br/><Rating className="mt-2"/>
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <Button value={4} readonly className="bg-[#262626] ">Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="md:w-1/2">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona.<br/><Rating className="mt-2"/>
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <Button value={4} readonly className="bg-[#262626] ">Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="md:w-1/3">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona.<br/><Rating className="mt-2"/>
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <Button value={4} readonly className="bg-[#262626] ">Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="md:w-1/3">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona.<br/><Rating className="mt-2"/>
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <Button value={4} readonly className="bg-[#262626] ">Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="md:w-1/2">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona. <br/><Rating className="mt-2"/>
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <Button value={4} readonly className="bg-[#262626] ">Read More</Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
}