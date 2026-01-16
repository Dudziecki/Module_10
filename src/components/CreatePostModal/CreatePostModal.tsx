import React, {
  ChangeEvent,
  DragEvent,
  FormEvent,
  useRef,
  useState,
} from "react";
import { Input } from "../common/Input/Input";
import { EmailIcon } from "../../assets/icons/EmailIcon";
import { PencilIcon } from "../../assets/icons/PencilIcon";
import { UploadIcon } from "../../assets/icons/UploadIcon";
import { Button } from "../common/Button/Button";
import { Modal } from "../common/Modal/Modal";
import "./CreatePostModal.css";
import { ALLOWED_TYPES } from "../../lib/constants/constants";

type CreatePostModalPropsType = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: { description: string; image?: string }) => void;
};

export const CreatePostModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreatePostModalPropsType) => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onCreate({
      description,
      image: file ? URL.createObjectURL(file) : undefined,
    });

    setDescription("");
    setFile(null);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files[0];
    if (!droppedFile) return;

    if (!ALLOWED_TYPES.includes(droppedFile.type)) {
      alert("Invalid file format");
      return;
    }

    setFile(droppedFile);
  }

  function handleFileSelect(file: File) {
    if (!ALLOWED_TYPES.includes(file.type)) {
      alert("Invalid file format");
      return;
    }

    setFile(file);
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    handleFileSelect(selectedFile);
  }

  function handleDescriptionChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }

  function handleUploadAreaClick() {
    fileInputRef.current?.click();
  }

  function handleDragOver(e: DragEvent<HTMLElement>) {
    e.preventDefault();
  }

  return (
    <Modal title="Create a new post" isOpen={isOpen} onClose={onClose}>
      <form className="post-form" onSubmit={handleSubmit}>
        <Input
          id="title"
          label="Post Title"
          placeholder="Enter post title"
          icon={<EmailIcon />}
          className="post-form-input"
        />

        <fieldset className="post-form-field">
          <div className="post-form-label">
            <PencilIcon />
            <label htmlFor="description">Description</label>
          </div>

          <textarea
            id="description"
            className="post-form-textarea"
            placeholder="Write description here..."
            value={description}
            onChange={handleDescriptionChange}
          />
        </fieldset>

        <section
          className="post-form-upload"
          onClick={handleUploadAreaClick}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <UploadIcon />

          <div className="post-form-upload-text">
            <p>{file ? file.name : "Select a file or drag and drop here"}</p>
            <small>JPG, PNG or PDF, max 10MB</small>

            <input
              ref={fileInputRef}
              type="file"
              hidden
              onChange={handleFileChange}
            />
          </div>
        </section>

        <div className="post-form-actions">
          <Button className="post-form-submit" type="submit">
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
};
