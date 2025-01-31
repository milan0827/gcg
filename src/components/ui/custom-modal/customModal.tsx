import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";

const CustomModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-black text-white p-2">Open modal</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="text-white">Edit profile</DialogTitle>
        <DialogHeader>
          <DialogDescription className="text-white">
            Username: Milan Rokaya
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
