import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";

export default function Branches() {
    return (
        // <section className={`relative p-5 md:p-10 mx-5 lg:mx-auto md:pt-10 h-3/4  max-w-5xl rounded-lg shadow-md   shadow-gray-600`}>

        <section id="branch" className={`flex flex-col max-w-7xl h-full pt-16 p-3 backdrop-blur-sm shadow-2xl md:mt-20 pb-10 bg-[#fafafa50] md:pt-24 rounded-lg mx-3 2xl:mx-auto`}>
            <Typography variant="h1" className="text-[40px] text-center pb-10 text-[#fafafa]">BRANCHES</Typography>
            <div className="flex flex-wrap items-center justify-center w-full gap-10">
                <Card className="max-w-[22rem] overflow-hidden bg-[#00000010] shadow backdrop-blur-sm">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 p-4"
                    >
                        <Typography variant="h4" color="blue-gray" className="pb-4">
                            Manila
                        </Typography>
                        <img
                            className="rounded-lg"
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                            alt="ui/ux review check"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="lead" color="gray" className="font-normal">
                            Because it&apos;s about motivating the doers. Because I&apos;m here to
                            follow my dreams and inspire others.
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center -space-x-3">
                            <Tooltip content="Natali Craig">
                                <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="natali craig"
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    className="border-2 border-white hover:z-10"
                                />
                            </Tooltip>
                            <Tooltip content="Tania Andrew">
                                <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="tania andrew"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    className="border-2 border-white hover:z-10"
                                />
                            </Tooltip>
                        </div>
                        <Typography className="font-normal">January 10</Typography>
                    </CardFooter>
                </Card>
                <Card className="max-w-[22rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                            alt="ui/ux review check"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray">
                            Quezon City
                        </Typography>
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            Because it&apos;s about motivating the doers. Because I&apos;m here to
                            follow my dreams and inspire others.
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center -space-x-3">
                            <Tooltip content="Natali Craig">
                                <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="natali craig"
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    className="border-2 border-white hover:z-10"
                                />
                            </Tooltip>
                            <Tooltip content="Tania Andrew">
                                <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="tania andrew"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    className="border-2 border-white hover:z-10"
                                />
                            </Tooltip>
                        </div>
                        <Typography className="font-normal">January 10</Typography>
                    </CardFooter>
                </Card>
                <Card className="max-w-[22rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                            alt="ui/ux review check"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray">
                            Cebu
                        </Typography>
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            Because it&apos;s about motivating the doers. Because I&apos;m here to
                            follow my dreams and inspire others.
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center -space-x-3">
                            <Tooltip content="Natali Craig">
                                <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="natali craig"
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    className="border-2 border-white hover:z-10"
                                />
                            </Tooltip>
                            <Tooltip content="Tania Andrew">
                                <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="tania andrew"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    className="border-2 border-white hover:z-10"
                                />
                            </Tooltip>
                        </div>
                        <Typography className="font-normal">January 10</Typography>
                    </CardFooter>
                </Card>
            </div>
        </section >
    );
}