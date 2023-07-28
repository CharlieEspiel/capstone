// @material-tailwind/react components
import { Typography, Button, Input } from "@material-tailwind/react";

export default function Subscribe() {
    return (
        <div
            className="z-90 relative bg-subscribe bg-center bg-cover bg-no-repeat mx-auto md:-mt-40 mb-20 w-4/5 rounded-xl md:w-3/5"
        >
            <div className="flex flex-wrap items-center p-5 md:p-10">
                <div className="w-full px-4 lg:w-6/12">
                    <Typography
                        variant="h2"
                        color="white"
                        className="mb-2 font-black tracking-normal"
                    >
                        Sign up for our newsletter
                    </Typography>
                    <Typography color="white" className="opacity-80">
                        Join our newsletter and get speacial offers in your inbox every week! We hate
                        spam too, so no worries about this.
                    </Typography>
                </div>
                <div className="w-full px-4 lg:w-6/12">
                    <form
                        action="https://material-tailwind.us1.list-manage.com/subscribe/post?u=e97df4875fc1b2fb28f609b88&amp;id=628d9b1722"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        target="_blank"
                        className="mt-4 block md:flex lg:mt-0"
                    >
                        <div className="w-full md:w-8/12">
                            <Input
                                type="email"
                                name="EMAIL"
                                id="mce-EMAIL"
                                label="Enter your email"
                                size="lg"
                                className="text-white/80"
                                labelProps={{
                                    className:
                                        "peer-placeholder-shown:text-white/80 text-white/80",
                                }}
                                required
                            />
                        </div>
                        <Button
                        color="red"
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="bg-[#cf0029] mt-3 w-full md:mt-0 md:ml-3 md:w-auto"
                        >
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
