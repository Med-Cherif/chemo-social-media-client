import { useState } from "react";

const uploadFileMutation = `#graphql
  mutation UploadFile($file: Upload) {
    uploadFile(file: $file)
  }
`;

const Home = () => {
  const [file, setFile] = useState<File | null>(null);

  const sendRequest = async () => {
    if (!file) return;
    const formData = new FormData() as any;
    formData.append("file", file);
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <div>
        <button onClick={sendRequest}>Upload</button>
      </div>
    </div>
  );
};

export default Home;
