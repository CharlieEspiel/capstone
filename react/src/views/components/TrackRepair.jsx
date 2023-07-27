import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    Input,
    Textarea,
} from "@material-tailwind/react";

export function TrackRepair() {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <React.Fragment>
            <Button size="md" color="red" className="bg-main w-full text-[16px] p-4 px-8 mt-2 rounded-xl whitespace-nowrap" onClick={openDrawer}>Track Repair</Button>
            <Drawer open={open} onClose={closeDrawer}>
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography className="text-primary" variant="h5">
                        Track Repair
                    </Typography>
                    <IconButton variant="text" color="red" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <form className="flex flex-col gap-6 p-4">
                    <Input type="email" label="Email" color="red" />
                    <Input label="Subject" color="red" />
                    <Textarea rows={6} label="Message" color="red" />
                    <Button color="red" className="bg-main">Send Message</Button>
                </form>
            </Drawer>
        </React.Fragment>
    );
}