const previewFile = (file: Blob, cb: (arg: any) => void) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = () => {
    cb(reader.result);
  };
};

export default previewFile;
