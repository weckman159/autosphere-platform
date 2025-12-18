"use client";

import { useState } from "react";

export function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      const blob = await response.json();
      setUploadedUrl(blob.url);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-cyan-600"
        />
        <button
          type="submit"
          disabled={!file || uploading}
          className="rounded-lg bg-cyan-500 px-6 py-2 text-white hover:bg-cyan-600 disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload Image"}
        </button>
      </form>

      {uploadedUrl && (
        <div className="space-y-2">
          <p className="font-semibold text-green-500">Upload successful!</p>
          <img
            src={uploadedUrl}
            alt="Uploaded"
            className="max-w-md rounded-lg"
          />
          <p className="text-sm break-all text-gray-600">{uploadedUrl}</p>
        </div>
      )}
    </div>
  );
}
