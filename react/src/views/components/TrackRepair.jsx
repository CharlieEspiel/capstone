import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from "@material-tailwind/react";

export function TrackRepair() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button
                size="md"
                color="red"
                className="bg-main text-white w-full text-[16px] p-4 px-8 mt-2 rounded-xl whitespace-nowrap"
                onClick={handleOpen}
            >
                Track Repair
            </Button>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Enter your Repair Ticket No.</DialogHeader>
                <DialogBody divider>
                    <Input label="Enter" />
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="red" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
